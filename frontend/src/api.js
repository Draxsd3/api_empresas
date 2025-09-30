export const API = {
  async consultCNPJ(raw) {
    const API_BASE = window.__API_BASE__ || (location.hostname === "localhost" ? "http://localhost:3000" : "");
    const cnpj = (raw || "").replace(/\D/g, "");
    const r = await fetch(`${API_BASE}/api/cnpj/${cnpj}`);
    if (!r.ok) throw new Error((await r.json()).message || "Falha ao consultar CNPJ");
    return r.json();
  },
  async listCompanies() {
    const API_BASE = window.__API_BASE__ || (location.hostname === "localhost" ? "http://localhost:3000" : "");
    const r = await fetch(`${API_BASE}/api/companies`);
    if (!r.ok) throw new Error("Falha ao listar empresas");
    return r.json();
  },
  async createCompany(payload) {
    const API_BASE = window.__API_BASE__ || (location.hostname === "localhost" ? "http://localhost:3000" : "");
    const r = await fetch(`${API_BASE}/api/companies`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!r.ok) throw new Error((await r.json()).message || "Falha ao cadastrar");
    return r.json();
  },
};

