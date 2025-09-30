import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { API } from "../api.js";
import { useAsync } from "../utils/useAsync.js";
function ConsultPage() {
  const [cnpj, setCnpj] = React.useState("");
  const [result, runConsult] = useAsync(API.consultCNPJ, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await runConsult(cnpj);
    } catch {
    }
  };
  const c = result.data || {};
  return /* @__PURE__ */ jsxDEV("section", { className: "main", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "header", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "h1", children: "Consultar CNPJ" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "status", children: result.loading ? "Consultando..." : "" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 19,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "card", children: [
      /* @__PURE__ */ jsxDEV("form", { className: "row", onSubmit, children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { children: "CNPJ" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 23,
            columnNumber: 16
          }, this),
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              className: "input",
              placeholder: "00.000.000/0000-00",
              value: cnpj,
              onInput: (e) => setCnpj(e.target.value),
              required: true
            },
            void 0,
            false,
            {
              fileName: "<stdin>",
              lineNumber: 24,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 23,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("button", { className: "btn", type: "submit", disabled: result.loading, children: "Consultar" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 29,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      result.error && /* @__PURE__ */ jsxDEV("p", { className: "meta", style: { marginTop: "10px", color: "#c00" }, children: result.error }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 31,
        columnNumber: 26
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    result.data && /* @__PURE__ */ jsxDEV(Fragment, { children: [
      /* @__PURE__ */ jsxDEV("div", { style: { height: "12px" } }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 36,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "card", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "grid", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { className: "meta", children: "Nome" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 39,
              columnNumber: 20
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: c.nome || "-" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 39,
              columnNumber: 52
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 39,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { className: "meta", children: "Fantasia" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 40,
              columnNumber: 20
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: c.fantasia || "-" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 40,
              columnNumber: 56
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 40,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { className: "meta", children: "Situa\xE7\xE3o" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 41,
              columnNumber: 20
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: /* @__PURE__ */ jsxDEV("span", { className: "badge", children: c.situacao || "-" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 41,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 41,
              columnNumber: 56
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 41,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { className: "meta", children: "Abertura" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 42,
              columnNumber: 20
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: c.abertura || "-" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 42,
              columnNumber: 56
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 42,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { className: "meta", children: "Telefone" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 43,
              columnNumber: 20
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: c.telefone || "-" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 43,
              columnNumber: 56
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 43,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { className: "meta", children: "Email" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 44,
              columnNumber: 20
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: c.email || "-" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 44,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 44,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 38,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("hr", { className: "sep" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 46,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("div", { className: "meta", children: "Endere\xE7o" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 48,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [c.logradouro, c.numero, c.complemento, c.bairro, c.municipio, c.uf, c.cep].filter(Boolean).join(", ") || "-" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 49,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 47,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 37,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 35,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
export {
  ConsultPage
};
