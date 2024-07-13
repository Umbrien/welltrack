import "../Main.css";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3 min-h-dvh">
      <nav className="bg-primary p-4">
        <img src="/logo.svg" alt="logo" className="h-8" />
      </nav>
      {children}
    </div>
  );
}
