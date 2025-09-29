import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import cnpjRoutes from "./routes/cnpjRoutes.js";
import companyRoutes from "./routes/companyRoutes.js";

await connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/cnpj", cnpjRoutes);
app.use("/api/companies", companyRoutes);

export default app;