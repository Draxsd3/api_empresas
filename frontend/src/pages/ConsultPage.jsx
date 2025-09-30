import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useState, useEffect } from "react";
import { API } from "../api";
import { useAsync } from "../utils/useAsync";
import ConfirmModal from "../components/ConfirmModal";
import ViewModal from "../components/ViewModal";
import EditModal from "../components/EditModal";
import DeleteModal from "../components/DeleteModal";
function ConsultPage() {
  const [cnpj, setCnpj] = useState("");
  const [result, runConsult] = useAsync(API.consultCNPJ, []);
  const [showConfirm, setShowConfirm] = useState(false);
  const [createState, runCreate] = useAsync(API.createCompany, []);
  const [listState, runList] = useAsync(API.listCompanies, []);
  const [viewCompany, setViewCompany] = useState(null);
  const [editCompany, setEditCompany] = useState(null);
  const [deleteCompany, setDeleteCompany] = useState(null);
  const [deleteState, runDelete] = useAsync(API.deleteCompany, []);
  const [updateState, runUpdate] = useAsync(API.updateCompany, []);
  useEffect(() => {
    runList();
  }, [runList]);
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await runConsult(cnpj);
      setShowConfirm(true);
    } catch {
    }
  };
  const handleConfirmSave = async () => {
    try {
      const payload = {
        cnpj: (result.data.cnpj || "").replace(/\D/g, ""),
        nome: result.data.nome,
        fantasia: result.data.fantasia,
        email: result.data.email,
        telefone: result.data.telefone,
        logradouro: result.data.logradouro,
        numero: result.data.numero,
        complemento: result.data.complemento,
        bairro: result.data.bairro,
        municipio: result.data.municipio,
        uf: result.data.uf,
        cep: result.data.cep,
        situacao: result.data.situacao,
        abertura: result.data.abertura,
        tipo: result.data.tipo,
        porte: result.data.porte,
        natureza_juridica: result.data.natureza_juridica?.[0]?.text || "",
        atividade_principal: result.data.atividade_principal?.[0]?.text || ""
      };
      await runCreate(payload);
      setShowConfirm(false);
      setCnpj("");
      result.data = null;
      await runList();
    } catch {
    }
  };
  const formatCNPJ = (cnpj2) => {
    if (!cnpj2) return "";
    return cnpj2.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");
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
  return /* @__PURE__ */ jsxDEV("section", { className: "main-single", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "page-header-single", children: [
      /* @__PURE__ */ jsxDEV("h1", { className: "page-title-single", children: "Consulta Empresarial" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 87,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "page-subtitle-single", children: "Consulte dados oficiais de empresas brasileiras pela Receita Federal" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 88,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 86,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "consult-card-single", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "consult-header-single", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "consult-icon-single", children: "\u{1F4C4}" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 93,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { children: "Consultar Empresa" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 94,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { children: "Digite o CNPJ da empresa para consultar os dados na Receita Federal" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 95,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("form", { onSubmit, children: /* @__PURE__ */ jsxDEV("div", { className: "consult-form-single", children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { children: "CNPJ" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 101,
            columnNumber: 15
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
              lineNumber: 102,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 100,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("button", { className: "btn-consult", type: "submit", disabled: result.loading, children: result.loading ? "Consultando..." : "Consultar" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 110,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 99,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 98,
        columnNumber: 9
      }, this),
      result.error && /* @__PURE__ */ jsxDEV("div", { className: "alert error", children: result.error }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 117,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 91,
      columnNumber: 7
    }, this),
    createState.data && /* @__PURE__ */ jsxDEV("div", { className: "alert success", children: "\u2713 Empresa cadastrada com sucesso!" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 126,
      columnNumber: 9
    }, this),
    createState.error && /* @__PURE__ */ jsxDEV("div", { className: "alert error", children: createState.error }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 132,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "companies-section", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "companies-header", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "companies-icon", children: "\u{1F4CB}" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 139,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { children: [
          "Empresas Cadastradas (",
          listState.data?.length || 0,
          ")"
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 140,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 138,
        columnNumber: 9
      }, this),
      listState.loading && /* @__PURE__ */ jsxDEV("div", { className: "loading-message", children: "Carregando empresas..." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 144,
        columnNumber: 11
      }, this),
      listState.error && /* @__PURE__ */ jsxDEV("div", { className: "alert error", children: listState.error }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 150,
        columnNumber: 11
      }, this),
      listState.data && listState.data.length === 0 && /* @__PURE__ */ jsxDEV("div", { className: "empty-message", children: "Nenhuma empresa cadastrada ainda." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 156,
        columnNumber: 11
      }, this),
      listState.data && listState.data.length > 0 && /* @__PURE__ */ jsxDEV("div", { className: "companies-list", children: listState.data.map((company) => /* @__PURE__ */ jsxDEV("div", { className: "company-card", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "company-card-header", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { className: "company-name", children: company.nome || "-" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 167,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "company-trade-name", children: company.fantasia || "-" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 168,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 166,
            columnNumber: 19
          }, this),
          company.situacao && /* @__PURE__ */ jsxDEV("span", { className: `status-badge ${company.situacao === "ATIVA" ? "active" : ""}`, children: company.situacao }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 171,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 165,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "company-card-body", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "company-info", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "company-label", children: "CNPJ:" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 179,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "company-cnpj", children: formatCNPJ(company.cnpj) }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 180,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 178,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "company-info", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "company-label", children: "\u{1F4CD}" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 183,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("span", { children: company.municipio && company.uf ? `${company.municipio} - ${company.uf}` : "-" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 184,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 182,
            columnNumber: 19
          }, this),
          company.createdAt && /* @__PURE__ */ jsxDEV("div", { className: "company-info", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "company-label", children: "Cadastrado em:" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 188,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV("span", { children: new Date(company.createdAt).toLocaleDateString("pt-BR") }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 189,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 187,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 177,
          columnNumber: 17
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
              lineNumber: 195,
              columnNumber: 19
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
              lineNumber: 202,
              columnNumber: 19
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
              lineNumber: 209,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 194,
          columnNumber: 17
        }, this)
      ] }, company.cnpj, true, {
        fileName: "<stdin>",
        lineNumber: 164,
        columnNumber: 15
      }, this)) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 162,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 137,
      columnNumber: 7
    }, this),
    showConfirm && result.data && /* @__PURE__ */ jsxDEV(
      ConfirmModal,
      {
        data: result.data,
        onClose: () => {
          setShowConfirm(false);
        },
        onConfirm: handleConfirmSave,
        loading: createState.loading
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 224,
        columnNumber: 9
      },
      this
    ),
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
        lineNumber: 236,
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
        lineNumber: 243,
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
        lineNumber: 251,
        columnNumber: 9
      },
      this
    ),
    updateState.error && /* @__PURE__ */ jsxDEV("div", { className: "alert error", style: { position: "fixed", bottom: "24px", right: "24px", maxWidth: "400px" }, children: updateState.error }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 260,
      columnNumber: 9
    }, this),
    deleteState.error && /* @__PURE__ */ jsxDEV("div", { className: "alert error", style: { position: "fixed", bottom: "24px", right: "24px", maxWidth: "400px" }, children: deleteState.error }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 266,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 85,
    columnNumber: 5
  }, this);
}
export {
  ConsultPage as default
};
