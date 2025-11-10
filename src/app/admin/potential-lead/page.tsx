import { auth } from "@/lib/auth";
import { getAllCustomers } from "@/server/actions";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import PotentialLeadsTable from "@/components/PotentialLeadsTable";

export default async function PotentialLeadPage() {
  const customers = await getAllCustomers();
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect("/admin/signin");
  }
  return (
    <div>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <PotentialLeadsTable initialCustomers={customers} />
        </div>
      </div>
    </div>
  );
}
