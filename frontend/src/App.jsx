import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import ConsultPage from "./pages/ConsultPage";
import CreatePage from "./pages/CreatePage";
import ListPage from "./pages/ListPage";
const API_BASE = import.meta.env.VITE_API_BASE || (window.location.hostname === "localhost" ? "http://localhost:3000" : "https://your-backend-url.vercel.app");
window.__API_BASE__ = API_BASE;
function App() {
  const [route, setRoute] = useState("consult");
  useEffect(() => {
    const onKey = (e) => {
      if (e.target.tagName === "INPUT") return;
      if (e.key === "1") setRoute("consult");
      if (e.key === "2") setRoute("create");
      if (e.key === "3") setRoute("list");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return /* @__PURE__ */ jsxDEV("div", { className: "app", children: [
    /* @__PURE__ */ jsxDEV(Sidebar, { current: route, onNavigate: setRoute }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    route === "consult" && /* @__PURE__ */ jsxDEV(ConsultPage, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 32,
      columnNumber: 31
    }, this),
    route === "create" && /* @__PURE__ */ jsxDEV(CreatePage, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 33,
      columnNumber: 30
    }, this),
    route === "list" && /* @__PURE__ */ jsxDEV(ListPage, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 34,
      columnNumber: 28
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}
export {
  App as default
};
