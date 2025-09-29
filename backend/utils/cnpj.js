export function normalizeCNPJ(raw) {
  return String(raw || "").replace(/\D/g, "");
}

