import { Router } from "express";
import { createOrUpdateCompany, listCompanies, getCompanyByCNPJ, updateCompany, deleteCompany } from "../controllers/companyController.js";

const router = Router();

router.post("/", createOrUpdateCompany);
router.get("/", listCompanies);
router.get("/:cnpj", getCompanyByCNPJ);
router.put("/:cnpj", updateCompany);
router.delete("/:cnpj", deleteCompany);

export default router;

