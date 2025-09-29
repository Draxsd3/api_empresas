import { Router } from "express";
import { createOrUpdateCompany, listCompanies, getCompanyByCNPJ } from "../controllers/companyController.js";

const router = Router();

router.post("/", createOrUpdateCompany);
router.get("/", listCompanies);
router.get("/:cnpj", getCompanyByCNPJ);

export default router;