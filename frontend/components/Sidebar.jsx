import React from "react";

export function Sidebar({ current, onNavigate }) {
  return (
    <aside className="sidebar">
      <div className="brand">Empresas • CNPJ</div>
      <nav className="nav">
        <button className={"nav-btn " + (current==="consult"?"active":"")} onClick={() => onNavigate("consult")}>Consultar CNPJ</button>
        <button className={"nav-btn " + (current==="create"?"active":"")} onClick={() => onNavigate("create")}>Cadastrar Empresa</button>
        <button className={"nav-btn " + (current==="list"?"active":"")} onClick={() => onNavigate("list")}>Empresas Cadastradas</button>
      </nav>
      <div className="small">Dica: pressione <span className="kbd">1</span>, <span className="kbd">2</span> ou <span className="kbd">3</span> para navegar.</div>
    </aside>
  );
}

