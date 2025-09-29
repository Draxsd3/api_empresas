import React from "react";
import { createRoot } from "react-dom/client";
import htm from "htm";
import { Sidebar } from "./components/Sidebar.js";
import { ConsultPage } from "./pages/ConsultPage.jsx";
import { CreatePage } from "./pages/CreatePage.jsx";
import { ListPage } from "./pages/ListPage.jsx";

const html = htm.bind(React.createElement);

const API = {
  async consultCNPJ(raw) {
    const cnpj = (raw || "").replace(/\\D/g, "");
    const r = await fetch(`/api/cnpj/${cnpj}`);
    if (!r.ok) throw new Error("Falha ao consultar CNPJ");
    return r.json();
  },
  async listCompanies() {
    const r = await fetch("/api/companies");
    if (!r.ok) throw new Error("Falha ao listar empresas");
    return r.json();
  },
  async createCompany(payload) {
    const r = await fetch("/api/companies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!r.ok) throw new Error((await r.json()).message || "Falha ao cadastrar");
    return r.json();
  },
};

function useAsync(asyncFn, deps = []) {
  const [state, set] = React.useState({ loading: false, error: null, data: null });
  const run = React.useCallback(async (...args) => {
    set(s => ({ ...s, loading: true, error: null }));
    try {
      const data = await asyncFn(...args);
      set({ loading: false, error: null, data });
      return data;
    } catch (e) {
      set({ loading: false, error: e.message || String(e), data: null });
      throw e;
    }
  }, deps);
  return [state, run, set];
}

function App() {
  const [route, setRoute] = React.useState("consult");

  React.useEffect(() => {
    const onKey = (e) => {
      if (e.target.tagName === "INPUT") return;
      if (e.key === "1") setRoute("consult");
      if (e.key === "2") setRoute("create");
      if (e.key === "3") setRoute("list");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return html`
    <div class="app">
      <${Sidebar} current=${route} onNavigate=${setRoute} />
      ${route === "consult" && html`<${ConsultPage} />`}
      ${route === "create" && html`<${CreatePage} />`}
      ${route === "list" && html`<${ListPage} />`}
    </div>
  `;
}

createRoot(document.getElementById("root")).render(html`<${App} />`);