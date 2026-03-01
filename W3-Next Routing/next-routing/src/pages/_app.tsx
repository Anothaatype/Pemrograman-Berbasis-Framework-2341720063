import type { AppProps } from "next/app";
import AppShell from "@/components/layouts/Appshell";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppShell>
      <Component {...pageProps} />
    </AppShell>
  );
}