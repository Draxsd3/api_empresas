import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
function Sidebar({ current, onNavigate }) {
  return /* @__PURE__ */ jsxDEV("aside", { className: "sidebar", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "brand", children: "\u{1F4CA} Sistema CNPJ" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("nav", { className: "nav", children: [
      /* @__PURE__ */ jsxDEV("button", { className: current === "consult" ? "active" : "", onClick: () => onNavigate("consult"), children: "\u{1F50D} Consultar CNPJ" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 8,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("button", { className: current === "list" ? "active" : "", onClick: () => onNavigate("list"), children: "\u{1F4CB} Empresas Cadastradas" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 11,
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
        lineNumber: 16,
        columnNumber: 25
      }, this),
      " ou ",
      /* @__PURE__ */ jsxDEV("span", { className: "kbd", children: "2" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 16,
        columnNumber: 59
      }, this),
      " para navegar."
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 15,
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
