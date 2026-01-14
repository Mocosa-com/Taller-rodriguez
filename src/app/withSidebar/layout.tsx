import SideBar from "../components/SideBar/SideBar";

export default function WithSidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <SideBar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}