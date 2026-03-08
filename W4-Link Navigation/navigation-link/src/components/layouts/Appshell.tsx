import { ReactNode } from "react";
import Navbar from "./navbar";

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}