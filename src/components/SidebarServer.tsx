import {
  getAllClients,
  getAllClientsOnDesign,
  getAllClientsOnDevelopment,
  getAllClientsOnDone,
  getAllClientsOnRevisions,
  getAllCustomers,
} from "@/server/actions";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Sidebar from "./Sidebar";

export default async function SidebarServer() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) return null;

  const customers = (await getAllCustomers()) || [];
  const clients = (await getAllClients()) || [];
  const designClients = (await getAllClientsOnDesign()) || [];
  const developmentClients = (await getAllClientsOnDevelopment()) || [];
  const revisionsClients = (await getAllClientsOnRevisions()) || [];
  const doneClients = (await getAllClientsOnDone()) || [];

  return (
    <Sidebar
      customers={customers}
      clients={clients}
      designClients={designClients}
      developmentClients={developmentClients}
      revisionsClients={revisionsClients}
      doneClients={doneClients}
    />
  );
}
