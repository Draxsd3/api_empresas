// Minimal Node.js API server (Express + MongoDB + proxy for ReceitaWS)
import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

dotenv.config();

import app from "./app.js";

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API running on http://localhost:${port}`));