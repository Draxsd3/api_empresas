import { Router } from "express";
import { consult } from "../controllers/cnpjController.js";

const router = Router();

router.get("/:cnpj", consult);

export default router;