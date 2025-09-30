import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useState } from "react";
import Field from "./Field";
function EditModal({ company, onClose, onSave }) {
  const [form, setForm] = useState({
    nome: company.nome || "",
    fantasia: company.fantasia || "",
    email: company.email || "",
    telefone: company.telefone || "",
    logradouro: company.logradouro || "",
    numero: company.numero || "",
    complemento: company.complemento || "",
    bairro: company.bairro || "",
    municipio: company.municipio || "",
    uf: company.uf || "",
    cep: company.cep || "",
    situacao: company.situacao || "",
    abertura: company.abertura || "",
    tipo: company.tipo || "",
    porte: company.porte || "",
    natureza_juridica: company.natureza_juridica || "",
    atividade_principal: company.atividade_principal || ""
  });
  const [loading, setLoading] = useState(false);
  const formatCNPJ = (cnpj) => {
    if (!cnpj) return "";
    return cnpj.replace(/^(\\d{2})(\\d{3})(\\d{3})(\\d{4})(\\d{2})$/, "$1.$2.$3/$4-$5");
  };
  const onChange = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSave(form);
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "modal-overlay", onClick: onClose, children: /* @__PURE__ */ jsxDEV("div", { className: "modal large", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsxDEV("div", { className: "modal-header", children: /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("div", { className: "modal-icon", children: "\u270F\uFE0F" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 48,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("h2", { children: "Editar Empresa" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 49,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "modal-subtitle", children: [
        "CNPJ: ",
        formatCNPJ(company.cnpj)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 50,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 47,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 46,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("form", { onSubmit, children: [
      /* @__PURE__ */ jsxDEV("div", { className: "modal-body", children: /* @__PURE__ */ jsxDEV("div", { className: "modal-grid", children: [
        /* @__PURE__ */ jsxDEV(Field, { label: "Nome", children: /* @__PURE__ */ jsxDEV("input", { className: "input", value: form.nome, onInput: onChange("nome") }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 57,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 56,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(Field, { label: "Fantasia", children: /* @__PURE__ */ jsxDEV("input", { className: "input", value: form.fantasia, onInput: onChange("fantasia") }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 60,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 59,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(Field, { label: "Email", children: /* @__PURE__ */ jsxDEV("input", { type: "email", className: "input", value: form.email, onInput: onChange("email") }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 63,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 62,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(Field, { label: "Telefone", children: /* @__PURE__ */ jsxDEV("input", { className: "input", value: form.telefone, onInput: onChange("telefone") }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 66,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 65,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(Field, { label: "CEP", children: /* @__PURE__ */ jsxDEV("input", { className: "input", value: form.cep, onInput: onChange("cep") }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 69,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 68,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(Field, { label: "Logradouro", children: /* @__PURE__ */ jsxDEV("input", { className: "input", value: form.logradouro, onInput: onChange("logradouro") }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 72,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 71,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(Field, { label: "N\xFAmero", children: /* @__PURE__ */ jsxDEV("input", { className: "input", value: form.numero, onInput: onChange("numero") }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 75,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 74,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(Field, { label: "Complemento", children: /* @__PURE__ */ jsxDEV("input", { className: "input", value: form.complemento, onInput: onChange("complemento") }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 78,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 77,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(Field, { label: "Bairro", children: /* @__PURE__ */ jsxDEV("input", { className: "input", value: form.bairro, onInput: onChange("bairro") }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 81,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 80,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(Field, { label: "Munic\xEDpio", children: /* @__PURE__ */ jsxDEV("input", { className: "input", value: form.municipio, onInput: onChange("municipio") }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 84,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 83,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(Field, { label: "UF", children: /* @__PURE__ */ jsxDEV("input", { className: "input", value: form.uf, onInput: onChange("uf"), maxLength: "2" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 87,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 86,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(Field, { label: "Situa\xE7\xE3o", children: /* @__PURE__ */ jsxDEV("input", { className: "input", value: form.situacao, onInput: onChange("situacao") }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 90,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 89,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(Field, { label: "Data de Abertura", children: /* @__PURE__ */ jsxDEV("input", { className: "input", value: form.abertura, onInput: onChange("abertura") }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 93,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 92,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(Field, { label: "Tipo", children: /* @__PURE__ */ jsxDEV("input", { className: "input", value: form.tipo, onInput: onChange("tipo") }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 96,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 95,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(Field, { label: "Porte", children: /* @__PURE__ */ jsxDEV("input", { className: "input", value: form.porte, onInput: onChange("porte") }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 99,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 98,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(Field, { label: "Natureza Jur\xEDdica", children: /* @__PURE__ */ jsxDEV("input", { className: "input", value: form.natureza_juridica, onInput: onChange("natureza_juridica") }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 102,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 101,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(Field, { label: "Atividade Principal", children: /* @__PURE__ */ jsxDEV("input", { className: "input", value: form.atividade_principal, onInput: onChange("atividade_principal") }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 105,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 104,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 55,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "modal-footer", children: [
        /* @__PURE__ */ jsxDEV("button", { type: "button", className: "btn secondary", onClick: onClose, disabled: loading, children: "Cancelar" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 110,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("button", { type: "submit", className: "btn primary", disabled: loading, children: loading ? "Salvando..." : "Salvar Altera\xE7\xF5es" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 113,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 109,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 53,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 45,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}
export {
  EditModal as default
};
