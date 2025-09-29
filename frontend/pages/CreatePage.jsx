import React from "react";
import htm from "htm";
import { API } from "../api.js";
import { useAsync } from "../utils/useAsync.js";
import { Field } from "../components/Field.js";
const html = htm.bind(React.createElement);
function CreatePage() {
  const [form, setForm] = React.useState({
    cnpj: "",
    nome: "",
    fantasia: "",
    email: "",
    telefone: "",
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    municipio: "",
    uf: "",
    cep: ""
  });
  const [state, runCreate] = useAsync(API.createCompany, []);
  const [autoState, runAuto] = useAsync(API.consultCNPJ, []);
  const fillFromConsulta = async () => {
    try {
      const data = await runAuto(form.cnpj);
      setForm((f) => ({
        ...f,
        nome: data.nome || f.nome,
        fantasia: data.fantasia || f.fantasia,
        email: data.email || f.email,
        telefone: data.telefone || f.telefone,
        logradouro: data.logradouro || f.logradouro,
        numero: data.numero || f.numero,
        complemento: data.complemento || f.complemento,
        bairro: data.bairro || f.bairro,
        municipio: data.municipio || f.municipio,
        uf: data.uf || f.uf,
        cep: data.cep || f.cep
      }));
    } catch {
    }
  };
  const onChange = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await runCreate({ ...form, cnpj: (form.cnpj || "").replace(/\\D/g, "") });
      setForm({
        cnpj: "",
        nome: "",
        fantasia: "",
        email: "",
        telefone: "",
        logradouro: "",
        numero: "",
        complemento: "",
        bairro: "",
        municipio: "",
        uf: "",
        cep: ""
      });
    } catch {
    }
  };
  return html`
    <section class="main">
      <div class="header">
        <div class="h1">Cadastrar Empresa</div>
        <div class="status">${state.loading ? "Salvando..." : ""}</div>
      </div>
      <div class="card">
        <form onSubmit=${onSubmit}>
          <div class="grid">
            ${html`<${Field} label="CNPJ">
              <input class="input" value=${form.cnpj} onInput=${onChange("cnpj")} placeholder="00.000.000/0000-00" required />
            </${Field}>`}
            ${html`<${Field} label="Nome">
              <input class="input" value=${form.nome} onInput=${onChange("nome")} />
            </${Field}>`}
            ${html`<${Field} label="Fantasia">
              <input class="input" value=${form.fantasia} onInput=${onChange("fantasia")} />
            </${Field}>`}
            ${html`<${Field} label="Email">
              <input type="email" class="input" value=${form.email} onInput=${onChange("email")} />
            </${Field}>`}
            ${html`<${Field} label="Telefone">
              <input class="input" value=${form.telefone} onInput=${onChange("telefone")} />
            </${Field}>`}
            ${html`<${Field} label="CEP">
              <input class="input" value=${form.cep} onInput=${onChange("cep")} />
            </${Field}>`}
            ${html`<${Field} label="Logradouro">
              <input class="input" value=${form.logradouro} onInput=${onChange("logradouro")} />
            </${Field}>`}
            ${html`<${Field} label="Número">
              <input class="input" value=${form.numero} onInput=${onChange("numero")} />
            </${Field}>`}
            ${html`<${Field} label="Complemento">
              <input class="input" value=${form.complemento} onInput=${onChange("complemento")} />
            </${Field}>`}
            ${html`<${Field} label="Bairro">
              <input class="input" value=${form.bairro} onInput=${onChange("bairro")} />
            </${Field}>`}
            ${html`<${Field} label="Município">
              <input class="input" value=${form.municipio} onInput=${onChange("municipio")} />
            </${Field}>`}
            ${html`<${Field} label="UF">
              <input class="input" value=${form.uf} onInput=${onChange("uf")} />
            </${Field}>`}
          </div>
          <div style="height:14px"></div>
          <div class="row">
            <button class="btn secondary" type="button" onClick=${fillFromConsulta} disabled=${autoState.loading}>
              ${autoState.loading ? "Buscando..." : "Preencher via ReceitaWS"}
            </button>
            <button class="btn" type="submit" disabled=${state.loading}>Salvar</button>
          </div>
          ${state.error && html`<p class="meta" style="margin-top:10px;color:#c00;">${state.error}</p>`}
          ${state.data && html`<p class="meta" style="margin-top:10px;color:#0a0;">Empresa salva!</p>`}
        </form>
      </div>
    </section>
  `;
}
export {
  CreatePage
};
