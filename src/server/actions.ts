"use server";

import { db } from "@/db/drizzle";
import { clients, customers } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Customers
export async function addCustomer(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const city = formData.get("city") as string;
  const country = formData.get("country") as string;
  const company = formData.get("company") as string;
  const email = formData.get("email") as string;
  const phoneNumber = formData.get("phoneNumber") as string;
  const message = formData.get("message") as string;
  const privacyPolicyAgreed = formData.get("privacyPolicyAgreed") as string;

  await db.insert(customers).values({
    firstName,
    lastName,
    city,
    country,
    company,
    email,
    phoneNumber,
    message,
    privacyPolicyAgreed: privacyPolicyAgreed === "on" ? true : false,
  });

  revalidatePath("/admin/potential-lead");
}

export async function getAllCustomers() {
  const allCustomers = await db
    .select()
    .from(customers)
    .orderBy(desc(customers.createdAt));
  return allCustomers;
}

export async function getCustomerById(id: string) {
  const customer = await db
    .select()
    .from(customers)
    .where(eq(customers.id, id));
  return customer;
}

export async function updateCustomerNotes(formData: FormData) {
  const id = formData.get("id") as string;
  const discoveryNotes = formData.get("discoveryNotes") as string;

  await db
    .update(customers)
    .set({ discoveryNotes })
    .where(eq(customers.id, id));

  revalidatePath(`/admin/potential-lead/${id}`);
}

// Clients
export async function addClient(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const city = formData.get("city") as string;
  const country = formData.get("country") as string;
  const company = formData.get("company") as string;
  const email = formData.get("email") as string;
  const phoneNumber = formData.get("phoneNumber") as string;
  const status = formData.get("status") as string;

  // Optional: ID of the old customer to delete
  const oldCustomerId = formData.get("id") as string | null;

  // Insert into clients (UUID generated automatically)
  await db
    .insert(clients)
    .values({
      firstName,
      lastName,
      city,
      country,
      company,
      email,
      phoneNumber,
      status: status || "Pending",
    })
    .returning({ id: clients.id }); // returns the generated UUID

  // Delete from customers if oldCustomerId exists
  if (oldCustomerId) {
    await db.delete(customers).where(eq(customers.id, oldCustomerId));
  }

  redirect("/admin/client");
}

export async function getAllClients() {
  const allClients = await db
    .select()
    .from(clients)
    .where(eq(clients.status, "Pending"))
    .orderBy(desc(clients.createdAt));
  return allClients;
}

export async function getAllClientsOnDesign() {
  const allClientsOnDesign = await db
    .select()
    .from(clients)
    .where(eq(clients.status, "Design"))
    .orderBy(desc(clients.createdAt));
  return allClientsOnDesign;
}

export async function getAllClientsOnDevelopment() {
  const allClientsOnDevelopment = await db
    .select()
    .from(clients)
    .where(eq(clients.status, "Development"))
    .orderBy(desc(clients.createdAt));
  return allClientsOnDevelopment;
}

export async function getAllClientsOnRevisions() {
  const allClientsOnRevisions = await db
    .select()
    .from(clients)
    .where(eq(clients.status, "Revisions"))
    .orderBy(desc(clients.createdAt));
  return allClientsOnRevisions;
}

export async function getAllClientsOnDone() {
  const allClientsOnDone = await db
    .select()
    .from(clients)
    .where(eq(clients.status, "Done"))
    .orderBy(desc(clients.createdAt));
  return allClientsOnDone;
}

export async function getClientById(id: string) {
  const client = await db.select().from(clients).where(eq(clients.id, id));
  return client;
}

export async function updateClientStatus(id: string, status: string) {
  await db.update(clients).set({ status }).where(eq(clients.id, id));
  if (status === "Pending") {
    redirect("/admin/client");
  }
  if (status === "Design") {
    redirect("/admin/client/design");
  }
  if (status === "Development") {
    redirect("/admin/client/development");
  }
  if (status === "Revisions") {
    redirect("/admin/client/revisions");
  }
  if (status === "Done") {
    redirect("/admin/client/done");
  }
}
