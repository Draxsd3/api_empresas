import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
  cnpj: { type: String, required: true, unique: true },
  nome: String,
  fantasia: String,
  email: String,
  telefone: String,
  logradouro: String,
  numero: String,
  complemento: String,
  bairro: String,
  municipio: String,
  uf: String,
  cep: String,
  situacao: String,
  abertura: String,
  tipo: String,
  porte: String,
  natureza_juridica: String,
  atividade_principal: String,
}, { timestamps: true });

export default mongoose.model("Company", CompanySchema);

