import SidebarServer from "@/components/SidebarServer";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SidebarServer />
      {children}
    </>
  );
}
