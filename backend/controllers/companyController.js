import Company from "../models/Company.js";
import { normalizeCNPJ } from "../utils/cnpj.js";

export async function createOrUpdateCompany(req, res) {
  try {
    const body = req.body || {};
    body.cnpj = normalizeCNPJ(body.cnpj);
    if (!body.cnpj || body.cnpj.length !== 14) return res.status(400).json({ message: "CNPJ inválido" });

    const doc = await Company.findOneAndUpdate(
      { cnpj: body.cnpj },
      { $set: body },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    res.status(201).json(doc);
  } catch (e) {
    if (e.code === 11000) return res.status(409).json({ message: "CNPJ já cadastrado" });
    res.status(500).json({ message: "Falha ao salvar", error: String(e) });
  }
}

export async function listCompanies(_req, res) {
  try {
    const docs = await Company.find({}).sort({ createdAt: -1 }).lean();
    res.json(docs);
  } catch (e) {
    res.status(500).json({ message: "Falha ao listar", error: String(e) });
  }
}

export async function getCompanyByCNPJ(req, res) {
  try {
    const cnpj = normalizeCNPJ(req.params.cnpj);
    const doc = await Company.findOne({ cnpj }).lean();
    if (!doc) return res.status(404).json({ message: "Não encontrado" });
    res.json(doc);
  } catch (e) {
    res.status(500).json({ message: "Falha", error: String(e) });
  }
}

