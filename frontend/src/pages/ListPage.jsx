import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useEffect } from "react";
import { API } from "../api";
import { useAsync } from "../utils/useAsync";
function ListPage() {
  const [state, runList] = useAsync(API.listCompanies, []);
  useEffect(() => {
    runList();
  }, [runList]);
  return /* @__PURE__ */ jsxDEV("section", { className: "main", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "header", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "h1", children: "Empresas Cadastradas" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("button", { className: "btn secondary", onClick: () => runList(), disabled: state.loading, children: state.loading ? "Atualizando..." : "Atualizar" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 13,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "card", children: [
      state.loading && /* @__PURE__ */ jsxDEV("div", { style: { padding: "32px", textAlign: "center", color: "var(--text-secondary)" }, children: "Carregando empresas..." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 18,
        columnNumber: 27
      }, this),
      state.error && /* @__PURE__ */ jsxDEV("div", { style: { padding: "16px", background: "var(--error-light)", color: "var(--error)", borderRadius: "var(--radius-md)", fontWeight: "500" }, children: state.error }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 19,
        columnNumber: 25
      }, this),
      state.data && state.data.length === 0 && /* @__PURE__ */ jsxDEV("div", { style: { padding: "48px", textAlign: "center", color: "var(--text-muted)", fontSize: "15px" }, children: "Nenhuma empresa cadastrada ainda." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 20,
        columnNumber: 51
      }, this),
      state.data && state.data.length > 0 && /* @__PURE__ */ jsxDEV("div", { style: { overflow: "auto" }, children: /* @__PURE__ */ jsxDEV("table", { className: "table", children: [
        /* @__PURE__ */ jsxDEV("thead", { children: /* @__PURE__ */ jsxDEV("tr", { children: [
          /* @__PURE__ */ jsxDEV("th", { children: "CNPJ" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 26,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("th", { children: "Nome" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 26,
            columnNumber: 32
          }, this),
          /* @__PURE__ */ jsxDEV("th", { children: "Fantasia" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 26,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ jsxDEV("th", { children: "Email" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 26,
            columnNumber: 62
          }, this),
          /* @__PURE__ */ jsxDEV("th", { children: "Telefone" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 26,
            columnNumber: 76
          }, this),
          /* @__PURE__ */ jsxDEV("th", { children: "Cidade/UF" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 26,
            columnNumber: 93
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 25,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 24,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("tbody", { children: state.data.map((e) => /* @__PURE__ */ jsxDEV("tr", { children: [
          /* @__PURE__ */ jsxDEV("td", { children: /* @__PURE__ */ jsxDEV("span", { className: "badge", children: e.cnpj }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 32,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 32,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("td", { style: { fontWeight: "500" }, children: e.nome || "-" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 33,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("td", { children: e.fantasia || "-" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 34,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("td", { children: e.email || "-" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 35,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("td", { children: e.telefone || "-" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 36,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("td", { children: [e.municipio, e.uf].filter(Boolean).join("/") || "-" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 37,
            columnNumber: 21
          }, this)
        ] }, e.cnpj, true, {
          fileName: "<stdin>",
          lineNumber: 31,
          columnNumber: 19
        }, this)) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 29,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 23,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 22,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
export {
  ListPage as default
};
