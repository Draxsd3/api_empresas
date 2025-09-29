import React from "react";
import htm from "htm";
import { API } from "../api.js";
import { useAsync } from "../utils/useAsync.js";
const html = htm.bind(React.createElement);
function ListPage() {
  const [state, runList] = useAsync(API.listCompanies, []);
  React.useEffect(() => {
    runList();
  }, [runList]);
  return html`
    <section class="main">
      <div class="header">
        <div class="h1">Empresas Cadastradas</div>
        <button class="btn secondary" onClick=${() => runList()} disabled=${state.loading}>Atualizar</button>
      </div>
      <div class="card">
        ${state.loading && html`<div class="meta">Carregando...</div>`}
        ${state.error && html`<div class="meta" style="color:#c00;">${state.error}</div>`}
        ${state.data && state.data.length === 0 && html`<div class="meta">Nenhuma empresa cadastrada.</div>`}
        ${state.data && state.data.length > 0 && html`
          <div style="overflow:auto">
            <table class="table">
              <thead>
                <tr>
                  <th>CNPJ</th><th>Nome</th><th>Fantasia</th><th>Email</th><th>Telefone</th><th>Cidade/UF</th>
                </tr>
              </thead>
              <tbody>
                ${state.data.map((e) => html`
                  <tr>
                    <td><span class="badge">${e.cnpj}</span></td>
                    <td>${e.nome || "-"}</td>
                    <td>${e.fantasia || "-"}</td>
                    <td>${e.email || "-"}</td>
                    <td>${e.telefone || "-"}</td>
                    <td>${[e.municipio, e.uf].filter(Boolean).join("/") || "-"}</td>
                  </tr>
                `)}
              </tbody>
            </table>
          </div>
        `}
      </div>
    </section>
  `;
}
export {
  ListPage
};
