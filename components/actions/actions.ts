"use server";

export async function createFeeStructure(formData: FormData) {
  // read basic fields
  const name = String(formData.get("name") || "");
  const session = String(formData.get("session") || "");
  const term = String(formData.get("term") || "");
  const level = String(formData.get("level") || "");

  // line items arrays (name[], amount[])
  const itemNames = formData.getAll("itemName").map(String);
  const itemAmounts = formData.getAll("itemAmount").map((v) => Number(v) || 0);

  // TODO: validate + write to DB
  // await prisma.feeStructure.create(...)

  return { ok: true };
}

export async function assignFeeToClass(formData: FormData) {
  const feeStructureId = String(formData.get("feeStructureId") || "");
  const classId = String(formData.get("classId") || "");
  const dueDate = String(formData.get("dueDate") || "");

  // TODO: validate + write to DB
  return { ok: true };
}
