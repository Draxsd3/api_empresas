import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
function ConfirmModal({ data, onClose, onConfirm, loading }) {
  if (!data) return null;
  const formatCNPJ = (cnpj) => {
    if (!cnpj) return "";
    return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");
  };
  const naturezaText = data.natureza_juridica ? Array.isArray(data.natureza_juridica) ? data.natureza_juridica[0]?.text : data.natureza_juridica : "-";
  const atividadeText = data.atividade_principal ? Array.isArray(data.atividade_principal) ? data.atividade_principal[0]?.text : data.atividade_principal : "-";
  return /* @__PURE__ */ jsxDEV("div", { className: "modal-overlay", onClick: onClose, children: /* @__PURE__ */ jsxDEV("div", { className: "modal", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsxDEV("div", { className: "modal-header", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("div", { className: "modal-icon", children: "\u{1F4C4}" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 26,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { children: "Confirmar Cadastro" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 27,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "modal-subtitle", children: data.fantasia || data.nome }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 28,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      data.situacao && /* @__PURE__ */ jsxDEV("span", { className: `status-badge ${data.situacao === "ATIVA" ? "active" : ""}`, children: data.situacao }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 31,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "modal-body", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "modal-grid", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "modal-field", children: [
          /* @__PURE__ */ jsxDEV("label", { children: "CNPJ" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 39,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: formatCNPJ(data.cnpj) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 40,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 38,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "modal-field", children: [
          /* @__PURE__ */ jsxDEV("label", { children: "\u{1F4C5} Data de Abertura" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 43,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: data.abertura || "-" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 44,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 42,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "modal-field", children: [
          /* @__PURE__ */ jsxDEV("label", { children: "Tipo" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 47,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: data.tipo || "-" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 48,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 46,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "modal-field", children: [
          /* @__PURE__ */ jsxDEV("label", { children: "Porte" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 51,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: data.porte || "-" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 52,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 50,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "modal-field full", children: [
        /* @__PURE__ */ jsxDEV("label", { children: "\u{1F3E2} Natureza Jur\xEDdica" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 57,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: naturezaText }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 58,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 56,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "modal-field full", children: [
        /* @__PURE__ */ jsxDEV("label", { children: "Atividade Principal" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 62,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: atividadeText }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 63,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "modal-field full", children: [
        /* @__PURE__ */ jsxDEV("label", { children: "\u{1F4CD} Endere\xE7o" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 67,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          [data.logradouro, data.numero, data.complemento].filter(Boolean).join(", "),
          /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 69,
            columnNumber: 92
          }, this),
          [data.bairro, data.municipio, data.uf].filter(Boolean).join(" - "),
          /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 70,
            columnNumber: 83
          }, this),
          "CEP: ",
          data.cep || "-"
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 68,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 66,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "modal-grid", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "modal-field", children: [
          /* @__PURE__ */ jsxDEV("label", { children: "Email" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 77,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: data.email || "-" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 78,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 76,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "modal-field", children: [
          /* @__PURE__ */ jsxDEV("label", { children: "Telefone" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 81,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: data.telefone || "-" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 82,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 80,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 75,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 36,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "modal-footer", children: [
      /* @__PURE__ */ jsxDEV("button", { className: "btn secondary", onClick: onClose, disabled: loading, children: "Cancelar" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 87,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("button", { className: "btn primary", onClick: onConfirm, disabled: loading, children: loading ? "Cadastrando..." : "Cadastrar Empresa" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 90,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 86,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
export {
  ConfirmModal as default
};
