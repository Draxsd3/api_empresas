import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
function Sidebar({ current, onNavigate }) {
  return /* @__PURE__ */ jsxDEV("aside", { className: "sidebar", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "brand", children: "Empresas \u2022 CNPJ" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("nav", { className: "nav", children: [
      /* @__PURE__ */ jsxDEV("button", { className: current === "consult" ? "active" : "", onClick: () => onNavigate("consult"), children: "Consultar CNPJ" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 8,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("button", { className: current === "create" ? "active" : "", onClick: () => onNavigate("create"), children: "Cadastrar Empresa" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("button", { className: current === "list" ? "active" : "", onClick: () => onNavigate("list"), children: "Empresas Cadastradas" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 14,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "small", children: [
      "Dica: pressione ",
      /* @__PURE__ */ jsxDEV("span", { className: "kbd", children: "1" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 19,
        columnNumber: 25
      }, this),
      ", ",
      /* @__PURE__ */ jsxDEV("span", { className: "kbd", children: "2" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 19,
        columnNumber: 57
      }, this),
      " ou ",
      /* @__PURE__ */ jsxDEV("span", { className: "kbd", children: "3" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 19,
        columnNumber: 91
      }, this),
      " para navegar."
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
export {
  Sidebar as default
};
