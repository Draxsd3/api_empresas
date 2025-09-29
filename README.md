# Plataforma de Consulta e Cadastro de Empresas (Node + React + MongoDB)

> **Visão**: uma base confiável e escalável para operacionalizar consultas de CNPJ via **Receitaws** e cadastrar empresas na sua plataforma, com foco em performance, observabilidade e conformidade (LGPD-by-design).

---

## Sumário

* [Arquitetura](#arquitetura)
* [Pré-requisitos](#pré-requisitos)
* [Configuração](#configuração)

  * [Variáveis de ambiente](#variáveis-de-ambiente)
  * [Docker (opcional)](#docker-opcional)
* [Execução](#execução)

  * [Rodando localmente (sem Docker)](#rodando-localmente-sem-docker)
  * [Rodando com Docker Compose](#rodando-com-docker-compose)
* [Modelagem de Dados](#modelagem-de-dados)
* [API HTTP (Backend Node/Express)](#api-http-backend-nodeexpress)
* [Aplicação Web (Frontend React)](#aplicação-web-frontend-react)
* [Autenticação & Segurança](#autenticação--segurança)
* [Observabilidade](#observabilidade)
* [Testes](#testes)
* [Boas Práticas de Produção](#boas-práticas-de-produção)
* [Roadmap](#roadmap)
* [Licença](#licença)

---

## Arquitetura

Monorepo simples com **API** (Node/Express) e **Web** (React) consumindo a API. Banco **MongoDB** com índices para busca por CNPJ e cache de respostas da Receitaws.

```
.
├── api/                  # Backend Node/Express (TypeScript opcional)
│   ├── src/
│   │   ├── index.ts      # bootstrap do servidor
│   │   ├── routes/
│   │   │   └── empresas.ts
│   │   ├── controllers/
│   │   │   └── empresas.controller.ts
│   │   ├── services/
│   │   │   └── receitaws.service.ts
│   │   ├── models/
│   │   │   └── Empresa.ts
│   │   ├── middlewares/
│   │   │   ├── auth.ts
│   │   │   └── rate-limit.ts
│   │   └── utils/
│   │       ├── logger.ts
│   │       └── http.ts
│   └── package.json
├── web/                  # Frontend React (Vite)
│   ├── src/
│   │   ├── pages/
│   │   │   ├── BuscarCNPJ.tsx
│   │   │   └── EmpresaDetalhe.tsx
│   │   ├── components/
│   │   │   ├── EmpresaCard.tsx
│   │   │   └── Loading.tsx
│   │   └── lib/api.ts
│   └── package.json
├── docker-compose.yml    # Dev/Prod simplificado
├── .env.example
└── README.md
```

**Fluxo principal**:

1. Usuário informa um CNPJ no frontend.
2. Backend verifica cache local (Mongo). Se existir e estiver válido, retorna.
3. Caso contrário, consulta **Receitaws** (CNPJ) respeitando limites de taxa e timeout.
4. Normaliza e **cadastra/atualiza** a empresa no MongoDB.
5. Retorna os dados ao frontend.

---

## Pré-requisitos

* **Node.js** LTS (>= 18)
* **MongoDB** (locaI, Atlas ou via Docker)
* **pnpm** ou **npm**
* (Opcional) **Docker** e **Docker Compose**

---

## Configuração

### Variáveis de ambiente

Crie um arquivo `.env` na raiz **do backend** (`api/.env`) e outro **do frontend** (`web/.env`). Use o exemplo abaixo.

**`api/.env`**

```env
# Porta do servidor HTTP
PORT=4000

# Conexão com o MongoDB (local, Atlas, etc.)
MONGO_URI=mongodb://mongo:27017/empresas
MONGO_DB=empresas

# JWT (se usar autenticação)
JWT_SECRET=troque-esta-string
JWT_EXPIRES_IN=1d

# Config Receitaws (ajuste conforme o provedor)
RECEITAWS_BASE_URL=https://www.receitaws.com.br/v1/cnpj
RECEITAWS_TIMEOUT_MS=12000
RECEITAWS_RETRY_MAX=3
RECEITAWS_CACHE_TTL_MINUTES=1440
# Se usar um gateway/proxy com API key:
# RECEITAWS_API_KEY=seu-token

# Observabilidade
LOG_LEVEL=info
REQUEST_LOG=true
```

**`web/.env`**

```env
# URL do backend acessível pelo navegador
VITE_API_URL=http://localhost:4000
```

> **Nota sobre limites de taxa**: a API de CNPJ via Receitaws (ou provedores compatíveis) costuma aplicar **rate limits por IP/Token**. Use o middleware de rate limit local e retries com backoff exponencial para robustez.

### Docker (opcional)

**`docker-compose.yml` (exemplo)**

```yaml
version: "3.9"
services:
  mongo:
    image: mongo:6
    restart: unless-stopped
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db

  api:
    build: ./api
    env_file: ./api/.env
    depends_on:
      - mongo
    ports:
      - "4000:4000"

  web:
    build: ./web
    env_file: ./web/.env
    depends_on:
      - api
    ports:
      - "5173:5173"

volumes:
  mongo_data:
```

> **Produção**: Prefira imagens mínimas (Alpine, distroless), variáveis injetadas via secrets, e um MongoDB gerenciado (Atlas) com backup/alertas.

---

## Execução

### Rodando localmente (sem Docker)

**Backend**

```bash
cd api
pnpm install # ou npm install\pnpm dev      # nodemon/ts-node
# ou pnpm start para build/execução em prod
```

**Frontend**

```bash
cd web
pnpm install # ou npm install
pnpm dev     # Vite em http://localhost:5173
```

### Rodando com Docker Compose

```bash
docker compose up --build
# web: http://localhost:5173  |  api: http://localhost:4000
```

---

## Modelagem de Dados

**Coleção: `empresas`** (exemplo simplificado)

```ts
{
  _id: ObjectId,
  cnpj: string,             // somente dígitos (14)
  razaoSocial: string,
  nomeFantasia?: string,
  naturezaJuridica?: string,
  cnaePrincipal?: { codigo: string, descricao: string },
  cnaesSecundarios?: Array<{ codigo: string, descricao: string }>,
  situacaoCadastral?: string, // ATIVA / INAPTA / etc.
  dataAbertura?: Date,
  endereco?: {
    logradouro?: string,
    numero?: string,
    complemento?: string,
    bairro?: string,
    municipio?: string,
    uf?: string,
    cep?: string
  },
  telefone?: string,
  email?: string,
  capitalSocial?: number,
  fonte: {
    provedor: 'receitaws' | 'proxy',
    atualizadoEm: Date
  },
  createdAt: Date,
  updatedAt: Date,
  cacheExpiraEm?: Date      // para controle TTL de cache
}
```

**Índices sugeridos**

* `cnpj` **único**
* `cacheExpiraEm` com **TTL** (para invalidar cache automaticamente)

---

## API HTTP (Backend Node/Express)

Base URL: `http://localhost:4000`

### Autenticação

* **Opcional** via **JWT** (header `Authorization: Bearer <token>`). Configure `JWT_*` no `.env`.

### Endpoints

#### `GET /api/health`

Verifica status da API e conexão com o banco.

**200 OK**

```json
{ "status": "ok", "mongo": "connected", "version": "1.0.0" }
```

---

#### `GET /api/empresas?query=&cnpj=&page=&limit=`

Lista empresas com paginação e filtros simples.

* `query`: busca por razão social/nome fantasia
* `cnpj`: busca exata

**200 OK**

```json
{ "items": [ {"cnpj": "00000000000000", "razaoSocial": "..."} ], "page": 1, "total": 1 }
```

---

#### `GET /api/empresas/:cnpj`

Busca **uma** empresa pelo CNPJ (somente dígitos). Usa cache local.

**200 OK**

```json
{ "cnpj": "00000000000000", "razaoSocial": "...", "fonte": {"provedor":"receitaws"} }
```

**404** se não encontrada.

---

#### `POST /api/empresas/sincronizar`

Consulta a **Receitaws** e cadastra/atualiza na base.

**Body JSON**

```json
{ "cnpj": "00000000000000", "forcarAtualizacao": false }
```

**201 Created**

```json
{ "message": "Sincronizado com sucesso", "cnpj": "00000000000000" }
```

**Observações**

* Respeita TTL de cache (`RECEITAWS_CACHE_TTL_MINUTES`).
* Implementa retries com backoff (HTTP 429/5xx).
* Normaliza CNPJ removendo máscara.

---

#### `PUT /api/empresas/:cnpj`

Atualiza campos editáveis pelo usuário (ex.: tags internas).

#### `DELETE /api/empresas/:cnpj`

Remove um registro (requer permissão elevada).

---

### Exemplo de uso (cURL)

```bash
# Sincronizar um CNPJ
curl -X POST http://localhost:4000/api/empresas/sincronizar \
  -H 'Content-Type: application/json' \
  -d '{"cnpj":"00000000000000"}'

# Buscar empresa
curl http://localhost:4000/api/empresas/00000000000000
```

---

## Aplicação Web (Frontend React)

* **Vite + React** com pages simples:

  * **BuscarCNPJ**: campo de CNPJ, botão "Consultar" → chama `POST /sincronizar` e abre detalhe.
  * **EmpresaDetalhe**: exibe dados normalizados, badges de situação, ações (forçar atualização, copiar dados, exportar JSON/PDF).
* **Estado**: React Query ou Zustand (cache + revalidação).
* **UI/UX**: máscaras de CNPJ, feedback de loading, erros amigáveis, acessibilidade.

### Fluxo básico

1. Usuário digita CNPJ → `POST /sincronizar`.
2. API responde e persiste no Mongo.
3. Front chama `GET /empresas/:cnpj` para renderizar.

---

## Autenticação & Segurança

* **JWT** para proteger endpoints de escrita.
* **CORS** restrito por ambiente.
* **Rate limiting** no backend (por IP/rota) para proteger a API e colaborar com limites do provedor.
* **LGPD-by-design**:

  * **Minimização**: apenas dados necessários para análise.
  * **Base legal**: defina o fundamento (ex.: legítimo interesse para prevenção a fraude/credenciamento; ou consentimento quando aplicável).
  * **Transparência**: registre fonte dos dados e marca temporal.
  * **Retenção**: expire/anonimize conforme política interna.
  * **Segurança**: criptografe secrets, use HTTPS/TLS, backups e controle de acesso.

---

## Observabilidade

* **Logs estruturados** (JSON) com `requestId`, nível, duração e códigos de status.
* **Métricas** (Prometheus/OpenTelemetry): latência, taxa de erro, acertos de cache, chamadas à Receitaws.
* **Tracing distribuído** (OTel) para mapear tempo gasto na consulta externa.

---

## Testes

* **Backend**: Jest + supertest (rotas), nock (mock da Receitaws).
* **Frontend**: Vitest + Testing Library.
* **Contrato**: Schemas Zod/TypeBox para validar payloads.

**Exemplos**

```bash
# Backend\pnpm test
# Frontend
pnpm test
```

---

## Boas Práticas de Produção

* Deploy do **backend** atrás de um **API Gateway** com WAF.
* **Retry** com backoff exponencial e circuit breaker para a Receitaws.
* **Cache TTL** e invalidação com botão "Forçar atualização" no front.
* **Banco gerenciado** (Atlas), com backups, índices e alertas.
* **CI/CD** com lint, testes, SAST, build e deploy canário.

---

## Roadmap

* [ ] Webhook para revalidação periódica de CNPJs críticos.
* [ ] Enriquecimento com outras fontes públicas (CNAE, Simples, etc.).
* [ ] Exportação CSV/PDF nativa.
* [ ] RBAC avançado (admin, analista, auditoria).
* [ ] Painel de métricas (Grafana) e alertas de SLA.

---

## Licença

Defina a licença conforme a política da sua organização. Para uso interno, mantenha **privado**.

---

### Anexo: Esboços de Código (resumos)

**`api/src/services/receitaws.service.ts`** (pseudo)

```ts
export async function consultarCNPJ(cnpj: string) {
  const url = `${process.env.RECEITAWS_BASE_URL}/${cnpj}`;
  // axios com timeout, retries, headers condicionais (ex.: API key)
  // normalizar e retornar
}
```

**`api/src/models/Empresa.ts`** (pseudo)

```ts
const EmpresaSchema = new Schema({
  cnpj: { type: String, unique: true, index: true },
  razaoSocial: String,
  // ...demais campos
  cacheExpiraEm: { type: Date, index: { expires: 0 } }, // TTL
}, { timestamps: true });
```

**`api/src/routes/empresas.ts`** (pseudo)

```ts
router.post('/sincronizar', authOpt, rateLimit, empresasCtrl.sincronizar);
router.get('/', authOpt, empresasCtrl.listar);
router.get('/:cnpj', authOpt, empresasCtrl.obter);
router.put('/:cnpj', auth, empresasCtrl.atualizar);
router.delete('/:cnpj', authAdmin, empresasCtrl.remover);
```

> **Mensagem final (perspectiva)**: Esta base sustenta uma **plataforma de análise e cadastro** pronta para escalar e integrar novos provedores. A consulta de CNPJ vira um **serviço resiliente**, com cache inteligente, métricas e governança de dados — pilares essenciais para produtos financeiros que exigem precisão, auditoria e tempo de resposta consistente.
