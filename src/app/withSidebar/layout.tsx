import SideBar from "../components/SideBar/SideBar";

export default function WithSidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
    </div>
  );
}

