import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useEffect, useState } from "react";
import { API } from "../api";
import { useAsync } from "../utils/useAsync";
import ViewModal from "../components/ViewModal";
import EditModal from "../components/EditModal";
import DeleteModal from "../components/DeleteModal";
function ListPage() {
  const [state, runList] = useAsync(API.listCompanies, []);
  const [viewCompany, setViewCompany] = useState(null);
  const [editCompany, setEditCompany] = useState(null);
  const [deleteCompany, setDeleteCompany] = useState(null);
  const [deleteState, runDelete] = useAsync(API.deleteCompany, []);
  const [updateState, runUpdate] = useAsync(API.updateCompany, []);
  useEffect(() => {
    runList();
  }, [runList]);
  const formatCNPJ = (cnpj) => {
    if (!cnpj) return "";
    return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");
  };
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [day, month, year] = dateStr.split("/");
    if (day && month && year) {
      return `${day}/${month}/${year}`;
    }
    return dateStr;
  };
  const handleEdit = async (formData) => {
    try {
      await runUpdate(editCompany.cnpj, formData);
      setEditCompany(null);
      await runList();
    } catch {
    }
  };
  const handleDelete = async () => {
    try {
      await runDelete(deleteCompany.cnpj);
      setDeleteCompany(null);
      await runList();
    } catch {
    }
  };
  return /* @__PURE__ */ jsxDEV("section", { className: "main", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "page-header", children: /* @__PURE__ */ jsxDEV("h1", { className: "page-title", children: [
      "Empresas Cadastradas (",
      state.data?.length || 0,
      ")"
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 51,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    state.loading && /* @__PURE__ */ jsxDEV("div", { className: "loading-message", children: "Carregando empresas..." }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 55,
      columnNumber: 9
    }, this),
    state.error && /* @__PURE__ */ jsxDEV("div", { className: "alert error", children: state.error }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 61,
      columnNumber: 9
    }, this),
    state.data && state.data.length === 0 && /* @__PURE__ */ jsxDEV("div", { className: "empty-message", children: "Nenhuma empresa cadastrada ainda." }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 67,
      columnNumber: 9
    }, this),
    state.data && state.data.length > 0 && /* @__PURE__ */ jsxDEV("div", { className: "companies-list", children: state.data.map((company) => /* @__PURE__ */ jsxDEV("div", { className: "company-card", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "company-card-header", children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("div", { className: "company-name", children: company.nome || "-" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 78,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "company-trade-name", children: company.fantasia || "-" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 79,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 77,
          columnNumber: 17
        }, this),
        company.situacao && /* @__PURE__ */ jsxDEV("span", { className: `status-badge ${company.situacao === "ATIVA" ? "active" : ""}`, children: company.situacao }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 82,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 76,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "company-card-body", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "company-info", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "company-label", children: "CNPJ:" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 90,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "company-cnpj", children: formatCNPJ(company.cnpj) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 91,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 89,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "company-info", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "company-label", children: "\u{1F4CD}" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 94,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("span", { children: company.municipio && company.uf ? `${company.municipio} - ${company.uf}` : "-" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 95,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 93,
          columnNumber: 17
        }, this),
        company.createdAt && /* @__PURE__ */ jsxDEV("div", { className: "company-info", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "company-label", children: "Cadastrado em:" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 99,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("span", { children: new Date(company.createdAt).toLocaleDateString("pt-BR") }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 100,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 98,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 88,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "company-card-actions", children: [
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            className: "btn-action view",
            onClick: () => setViewCompany(company),
            title: "Visualizar",
            children: "\u{1F441}\uFE0F Visualizar"
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 106,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            className: "btn-action edit",
            onClick: () => setEditCompany(company),
            title: "Editar",
            children: "\u270F\uFE0F Editar"
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 113,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            className: "btn-action delete",
            onClick: () => setDeleteCompany(company),
            title: "Excluir",
            children: "\u{1F5D1}\uFE0F"
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 120,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 105,
        columnNumber: 15
      }, this)
    ] }, company.cnpj, true, {
      fileName: "<stdin>",
      lineNumber: 75,
      columnNumber: 13
    }, this)) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 73,
      columnNumber: 9
    }, this),
    viewCompany && /* @__PURE__ */ jsxDEV(
      ViewModal,
      {
        company: viewCompany,
        onClose: () => setViewCompany(null)
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 134,
        columnNumber: 9
      },
      this
    ),
    editCompany && /* @__PURE__ */ jsxDEV(
      EditModal,
      {
        company: editCompany,
        onClose: () => setEditCompany(null),
        onSave: handleEdit
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 141,
        columnNumber: 9
      },
      this
    ),
    deleteCompany && /* @__PURE__ */ jsxDEV(
      DeleteModal,
      {
        company: deleteCompany,
        onClose: () => setDeleteCompany(null),
        onConfirm: handleDelete,
        loading: deleteState.loading
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 149,
        columnNumber: 9
      },
      this
    ),
    updateState.error && /* @__PURE__ */ jsxDEV("div", { className: "alert error", style: { position: "fixed", bottom: "24px", right: "24px", maxWidth: "400px" }, children: updateState.error }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 158,
      columnNumber: 9
    }, this),
    deleteState.error && /* @__PURE__ */ jsxDEV("div", { className: "alert error", style: { position: "fixed", bottom: "24px", right: "24px", maxWidth: "400px" }, children: deleteState.error }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 164,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}
export {
  ListPage as default
};
