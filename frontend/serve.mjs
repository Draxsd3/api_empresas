import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const publicDir = __dirname;
const port = process.env.PORT || 5173;

const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".jsx": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".map": "application/json; charset=utf-8"
};

const server = http.createServer(async (req, res) => {
  try {
    const reqPath = decodeURI(new URL(req.url, `http://${req.headers.host}`).pathname);
    let filePath = path.join(publicDir, reqPath);
    let fileStat;
    try { fileStat = await stat(filePath); } catch {}
    if (!fileStat || fileStat.isDirectory()) filePath = path.join(publicDir, "index.html");

    const ext = path.extname(filePath).toLowerCase();
    res.setHeader("Content-Type", mime[ext] || "application/octet-stream");
    const data = await readFile(filePath);
    res.writeHead(200);
    res.end(data);
  } catch (err) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
  }
});

server.listen(port, () => {
  console.log(`Frontend running at http://localhost:${port}`);
});