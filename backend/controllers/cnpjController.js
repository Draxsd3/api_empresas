import { consultCNPJ } from "../services/cnpjService.js";
import { normalizeCNPJ } from "../utils/cnpj.js";

export async function consult(req, res) {
  try {
    const cnpj = normalizeCNPJ(req.params.cnpj);
    if (!cnpj || cnpj.length !== 14) return res.status(400).json({ message: "CNPJ inválido" });
    const data = await consultCNPJ(cnpj);
    res.json(data);
  } catch (e) {
    const msg = e.message || "Falha na consulta";
    const status = msg.includes("ReceitaWS") ? 502 : 500;
    res.status(status).json({ message: msg });
  }
}

