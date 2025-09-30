import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import ConsultPage from "./pages/ConsultPage";
import CreatePage from "./pages/CreatePage";
import ListPage from "./pages/ListPage";
window.__API_BASE__ = "http://localhost:3000";
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
      lineNumber: 25,
      columnNumber: 7
    }, this),
    route === "consult" && /* @__PURE__ */ jsxDEV(ConsultPage, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 26,
      columnNumber: 31
    }, this),
    route === "create" && /* @__PURE__ */ jsxDEV(CreatePage, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 27,
      columnNumber: 30
    }, this),
    route === "list" && /* @__PURE__ */ jsxDEV(ListPage, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 28,
      columnNumber: 28
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
export {
  App as default
};
