import fetch from "node-fetch";

export async function consultCNPJ(cnpj) {
  const token = process.env.RECEITAWS_TOKEN;
  const base = "https://www.receitaws.com.br/v1/cnpj";
  const url = token ? `${base}/${cnpj}?token=${token}&plugin=RF` : `${base}/${cnpj}`;
  const r = await fetch(url, { headers: { "Accept": "application/json" } });
  if (!r.ok) throw new Error("Erro na ReceitaWS");
  const data = await r.json();
  if (data.status === "ERROR") throw new Error(data.message || "Erro na consulta");
  return data;
}

