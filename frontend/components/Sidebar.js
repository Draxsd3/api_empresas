import React from "react";
import htm from "htm";
const html = htm.bind(React.createElement);

export function Sidebar({ current, onNavigate }) {
  return html`
    <aside class="sidebar">
      <div class="brand">Empresas • CNPJ</div>
      <nav class="nav">
        <button class=${"nav-btn " + (current==="consult"?"active":"")} onClick=${() => onNavigate("consult")}>Consultar CNPJ</button>
        <button class=${"nav-btn " + (current==="create"?"active":"")} onClick=${() => onNavigate("create")}>Cadastrar Empresa</button>
        <button class=${"nav-btn " + (current==="list"?"active":"")} onClick=${() => onNavigate("list")}>Empresas Cadastradas</button>
      </nav>
      <div class="small">Dica: pressione <span class="kbd">1</span>, <span class="kbd">2</span> ou <span class="kbd">3</span> para navegar.</div>
    </aside>
  `;
}

