import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { API } from "../api.js";
import { useAsync } from "../utils/useAsync.js";
import { Field } from "../components/Field.jsx";
function CreatePage() {
  const [form, setForm] = React.useState({
    cnpj: "",
    nome: "",
    fantasia: "",
    email: "",
    telefone: "",
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    municipio: "",
    uf: "",
    cep: ""
  });
  const [state, runCreate] = useAsync(API.createCompany, []);
  const [autoState, runAuto] = useAsync(API.consultCNPJ, []);
  const fillFromConsulta = async () => {
    try {
      const data = await runAuto(form.cnpj);
      setForm((f) => ({
        ...f,
        nome: data.nome || f.nome,
        fantasia: data.fantasia || f.fantasia,
        email: data.email || f.email,
        telefone: data.telefone || f.telefone,
        logradouro: data.logradouro || f.logradouro,
        numero: data.numero || f.numero,
        complemento: data.complemento || f.complemento,
        bairro: data.bairro || f.bairro,
        municipio: data.municipio || f.municipio,
        uf: data.uf || f.uf,
        cep: data.cep || f.cep
      }));
    } catch {
    }
  };
  const onChange = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await runCreate({ ...form, cnpj: (form.cnpj || "").replace(/\D/g, "") });
      setForm({
        cnpj: "",
        nome: "",
        fantasia: "",
        email: "",
        telefone: "",
        logradouro: "",
        numero: "",
        complemento: "",
        bairro: "",
        municipio: "",
        uf: "",
        cep: ""
      });
    } catch {
    }
  };
  return /* @__PURE__ */ jsxDEV("section", { className: "main", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "header", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "h1", children: "Cadastrar Empresa" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "status", children: state.loading ? "Salvando..." : "" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 70,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "card", children: /* @__PURE__ */ jsxDEV("form", { onSubmit, children: [
      /* @__PURE__ */ jsxDEV("div", { className: "grid", children: [
        /* @__PURE__ */ jsxDEV(Field, { label: "CNPJ", children: /* @__PURE__ */ jsxDEV("input", { className: "input", value: form.cnpj, onInput: onChange("cnpj"), placeholder: "00.000.000/0000-00", required: true }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 76,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 75,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Field, { label: "Nome", children: /* @__PURE__ */ jsxDEV("input", { className: "input", value: form.nome, onInput: onChange("nome") }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 79,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 78,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Field, { label: "Fantasia", children: /* @__PURE__ */ jsxDEV("input", { className: "input", value: form.fantasia, onInput: onChange("fantasia") }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 82,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 81,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Field, { label: "Email", children: /* @__PURE__ */ jsxDEV("input", { type: "email", className: "input", value: form.email, onInput: onChange("email") }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 85,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 84,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Field, { label: "Telefone", children: /* @__PURE__ */ jsxDEV("input", { className: "input", value: form.telefone, onInput: onChange("telefone") }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 88,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 87,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Field, { label: "CEP", children: /* @__PURE__ */ jsxDEV("input", { className: "input", value: form.cep, onInput: onChange("cep") }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 91,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 90,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Field, { label: "Logradouro", children: /* @__PURE__ */ jsxDEV("input", { className: "input", value: form.logradouro, onInput: onChange("logradouro") }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 94,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 93,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Field, { label: "N\xFAmero", children: /* @__PURE__ */ jsxDEV("input", { className: "input", value: form.numero, onInput: onChange("numero") }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 97,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 96,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Field, { label: "Complemento", children: /* @__PURE__ */ jsxDEV("input", { className: "input", value: form.complemento, onInput: onChange("complemento") }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 100,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 99,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Field, { label: "Bairro", children: /* @__PURE__ */ jsxDEV("input", { className: "input", value: form.bairro, onInput: onChange("bairro") }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 103,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 102,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Field, { label: "Munic\xEDpio", children: /* @__PURE__ */ jsxDEV("input", { className: "input", value: form.municipio, onInput: onChange("municipio") }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 106,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 105,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Field, { label: "UF", children: /* @__PURE__ */ jsxDEV("input", { className: "input", value: form.uf, onInput: onChange("uf") }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 109,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 108,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 74,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { height: "14px" } }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 112,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "row", children: [
        /* @__PURE__ */ jsxDEV("button", { className: "btn secondary", type: "button", onClick: fillFromConsulta, disabled: autoState.loading, children: autoState.loading ? "Buscando..." : "Preencher via ReceitaWS" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 114,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("button", { className: "btn", type: "submit", disabled: state.loading, children: "Salvar" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 117,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 113,
        columnNumber: 11
      }, this),
      state.error && /* @__PURE__ */ jsxDEV("p", { className: "meta", style: { marginTop: "10px", color: "#c00" }, children: state.error }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 119,
        columnNumber: 27
      }, this),
      state.data && /* @__PURE__ */ jsxDEV("p", { className: "meta", style: { marginTop: "10px", color: "#0a0" }, children: "Empresa salva!" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 120,
        columnNumber: 26
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 73,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 72,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 67,
    columnNumber: 5
  }, this);
}
export {
  CreatePage
};
