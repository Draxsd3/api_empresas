# Documentação do Projeto API Empresas

## 1. Visão Geral

Este projeto consiste em uma aplicação que permite a consulta e o gerenciamento de dados de empresas. Ele é dividido em duas partes principais: um frontend desenvolvido em React e um backend construído com Node.js (Express.js).

## 2. Tecnologias Utilizadas

### Frontend

*   **Framework:** React
*   **Build Tool:** Vite
*   **Hospedagem:** Vercel

### Backend

*   **Linguagem/Runtime:** Node.js
*   **Framework:** Express.js
*   **Banco de Dados:** MongoDB Atlas
*   **Hospedagem:** VPS Ubuntu

## 3. Estrutura do Projeto

O repositório está organizado da seguinte forma:

*   `frontend/`: Contém todo o código-fonte da aplicação frontend.
*   `backend/`: Contém todo o código-fonte da aplicação backend.

## 4. Configuração e Execução Local

### 4.1. Backend

1.  Navegue até o diretório `backend`:

    ```bash
    cd backend
    ```

2.  Instale as dependências:

    ```bash
    npm install
    ```

3.  Crie um arquivo `.env` na raiz do diretório `backend` com as seguintes variáveis de ambiente:

    ```
    PORT=3000
    MONGODB_URI=sua_string_de_conexao_mongodb_atlas
    ```

    *Substitua `sua_string_de_conexao_mongodb_atlas` pela sua string de conexão do MongoDB Atlas.*

4.  Inicie o servidor:

    ```bash
    npm start
    ```

    *Para desenvolvimento, você pode usar `npm run dev` para iniciar com `nodemon`.*

### 4.2. Frontend

1.  Navegue até o diretório `frontend`:

    ```bash
    cd frontend
    ```

2.  Instale as dependências:

    ```bash
    npm install
    ```

3.  Crie um arquivo `.env` na raiz do diretório `frontend` com as seguintes variáveis de ambiente:

    ```
    VITE_API_URL=http://localhost:3000
    ```

    *Substitua `http://localhost:3000` pela URL do seu backend, se for diferente.*

4.  Inicie a aplicação:

    ```bash
    npm run dev
    ```

    A aplicação estará disponível em `http://localhost:5173` (ou outra porta, conforme configurado pelo Vite).

## 5. Implantação (Deployment)

### 5.1. Frontend (Vercel)

O frontend é projetado para ser implantado na Vercel. Certifique-se de que seu projeto React esteja configurado corretamente para a Vercel e que as variáveis de ambiente necessárias (como `VITE_API_URL`) estejam definidas na plataforma Vercel.

### 5.2. Backend (VPS Ubuntu)

O backend é implantado em um VPS Ubuntu. Os passos gerais para implantação incluem:

1.  **Configuração do Servidor:** Instale Node.js, npm e um servidor web como Nginx (para proxy reverso).
2.  **Clonar Repositório:** Clone o repositório do backend para o seu VPS.
3.  **Instalar Dependências:** Execute `npm install` no diretório do backend.
4.  **Variáveis de Ambiente:** Configure as variáveis de ambiente (`PORT`, `MONGODB_URI`) no servidor (e.g., usando `pm2` ou variáveis de ambiente do sistema).
5.  **Gerenciamento de Processos:** Use um gerenciador de processos como `pm2` para manter a aplicação Node.js rodando continuamente.
6.  **Proxy Reverso:** Configure Nginx para atuar como um proxy reverso, direcionando o tráfego da porta 80/443 para a porta da sua aplicação Node.js.

## 6. Banco de Dados (MongoDB Atlas)

O projeto utiliza MongoDB Atlas para o banco de dados. Certifique-se de ter uma conta no MongoDB Atlas, um cluster configurado e uma string de conexão válida. Esta string de conexão deve ser fornecida como a variável de ambiente `MONGODB_URI` no backend.
