// Minimal Node.js API server (Express + MongoDB + proxy for ReceitaWS)
import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import app from "./app.js";

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API running on http://localhost:${port}`));