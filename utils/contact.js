
export async function submitContact(form) {
  const response = await $fetch("/api/contact", { method: "POST", body: form });
  return response;
}
