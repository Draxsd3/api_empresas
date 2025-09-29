import React from "react";
import htm from "htm";
import { API } from "../api.js";
import { useAsync } from "../utils/useAsync.js";
const html = htm.bind(React.createElement);
function ConsultPage() {
  const [cnpj, setCnpj] = React.useState("");
  const [result, runConsult] = useAsync(API.consultCNPJ, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await runConsult(cnpj);
    } catch {
    }
  };
  const c = result.data || {};
  return html`
    <section class="main">
      <div class="header">
        <div class="h1">Consultar CNPJ</div>
        <div class="status">${result.loading ? "Consultando..." : ""}</div>
      </div>
      <div class="card">
        <form class="row" onSubmit=${onSubmit}>
          <div><label>CNPJ</label>
            <input class="input" placeholder="00.000.000/0000-00"
              value=${cnpj}
              onInput=${(e) => setCnpj(e.target.value)}
              required />
          </div>
          <button class="btn" type="submit" disabled=${result.loading}>Consultar</button>
        </form>
        ${result.error && html`<p class="meta" style="margin-top:10px;color:#c00;">${result.error}</p>`}
      </div>

      ${result.data && html`
        <div style="height:12px"></div>
        <div class="card">
          <div class="grid">
            <div><div class="meta">Nome</div><div>${c.nome || "-"}</div></div>
            <div><div class="meta">Fantasia</div><div>${c.fantasia || "-"}</div></div>
            <div><div class="meta">Situação</div><div><span class="badge">${c.situacao || "-"}</span></div></div>
            <div><div class="meta">Abertura</div><div>${c.abertura || "-"}</div></div>
            <div><div class="meta">Telefone</div><div>${c.telefone || "-"}</div></div>
            <div><div class="meta">Email</div><div>${c.email || "-"}</div></div>
          </div>
          <hr class="sep"/>
          <div>
            <div class="meta">Endereço</div>
            <div>${[c.logradouro, c.numero, c.complemento, c.bairro, c.municipio, c.uf, c.cep].filter(Boolean).join(", ") || "-"}</div>
          </div>
        </div>
      `}
    </section>
  `;
}
export {
  ConsultPage
};
