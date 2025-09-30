import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
function DeleteModal({ company, onClose, onConfirm, loading }) {
  const formatCNPJ = (cnpj) => {
    if (!cnpj) return "";
    return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "modal-overlay", onClick: onClose, children: /* @__PURE__ */ jsxDEV("div", { className: "modal small", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsxDEV("div", { className: "modal-header", children: /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("div", { className: "modal-icon", children: "\u{1F5D1}\uFE0F" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 14,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("h2", { children: "Excluir Empresa" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 15,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 13,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "modal-body", children: [
      /* @__PURE__ */ jsxDEV("p", { children: "Tem certeza que deseja excluir a empresa:" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 19,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { marginTop: "16px", padding: "16px", background: "var(--error-light)", borderRadius: "var(--radius-md)" }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { fontWeight: "600", color: "var(--text)" }, children: company.nome || company.fantasia }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 21,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: "14px", color: "var(--text-secondary)", marginTop: "4px" }, children: [
          "CNPJ: ",
          formatCNPJ(company.cnpj)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 22,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 20,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { style: { marginTop: "16px", fontSize: "14px", color: "var(--text-secondary)" }, children: "Esta a\xE7\xE3o n\xE3o pode ser desfeita." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 26,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 18,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "modal-footer", children: [
      /* @__PURE__ */ jsxDEV("button", { className: "btn secondary", onClick: onClose, disabled: loading, children: "Cancelar" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 31,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("button", { className: "btn danger", onClick: onConfirm, disabled: loading, children: loading ? "Excluindo..." : "Excluir Empresa" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 34,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 30,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
export {
  DeleteModal as default
};
