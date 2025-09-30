import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
function ViewModal({ company, onClose }) {
  if (!company) return null;
  const formatCNPJ = (cnpj) => {
    if (!cnpj) return "";
    return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "modal-overlay", onClick: onClose, children: /* @__PURE__ */ jsxDEV("div", { className: "modal", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsxDEV("div", { className: "modal-header", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("div", { className: "modal-icon", children: "\u{1F4C4}" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 16,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { children: "Visualizar Empresa" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 17,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "modal-subtitle", children: company.fantasia || company.nome }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 18,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 15,
        columnNumber: 11
      }, this),
      company.situacao && /* @__PURE__ */ jsxDEV("span", { className: `status-badge ${company.situacao === "ATIVA" ? "active" : ""}`, children: company.situacao }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 21,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "modal-body", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "modal-grid", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "modal-field", children: [
          /* @__PURE__ */ jsxDEV("label", { children: "CNPJ" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 29,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: formatCNPJ(company.cnpj) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 30,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 28,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "modal-field", children: [
          /* @__PURE__ */ jsxDEV("label", { children: "Data de Abertura" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 33,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: company.abertura || "-" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 34,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 32,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "modal-field", children: [
          /* @__PURE__ */ jsxDEV("label", { children: "Tipo" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 37,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: company.tipo || "-" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 38,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 36,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "modal-field", children: [
          /* @__PURE__ */ jsxDEV("label", { children: "Porte" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 41,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: company.porte || "-" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 42,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 40,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 27,
        columnNumber: 11
      }, this),
      company.natureza_juridica && /* @__PURE__ */ jsxDEV("div", { className: "modal-field full", children: [
        /* @__PURE__ */ jsxDEV("label", { children: "\u{1F3E2} Natureza Jur\xEDdica" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 48,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: company.natureza_juridica }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 49,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 47,
        columnNumber: 13
      }, this),
      company.atividade_principal && /* @__PURE__ */ jsxDEV("div", { className: "modal-field full", children: [
        /* @__PURE__ */ jsxDEV("label", { children: "Atividade Principal" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 55,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: company.atividade_principal }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 56,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 54,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "modal-field full", children: [
        /* @__PURE__ */ jsxDEV("label", { children: "\u{1F4CD} Endere\xE7o" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 61,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          [company.logradouro, company.numero, company.complemento].filter(Boolean).join(", "),
          /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 63,
            columnNumber: 101
          }, this),
          [company.bairro, company.municipio, company.uf].filter(Boolean).join(" - "),
          /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 64,
            columnNumber: 92
          }, this),
          "CEP: ",
          company.cep || "-"
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 62,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "modal-grid", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "modal-field", children: [
          /* @__PURE__ */ jsxDEV("label", { children: "Email" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 71,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: company.email || "-" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 72,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 70,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "modal-field", children: [
          /* @__PURE__ */ jsxDEV("label", { children: "Telefone" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 75,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: company.telefone || "-" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 76,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 74,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 69,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "modal-footer", children: /* @__PURE__ */ jsxDEV("button", { className: "btn secondary", onClick: onClose, children: "Fechar" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 81,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 80,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 13,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
export {
  ViewModal as default
};
