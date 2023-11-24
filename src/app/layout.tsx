import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { headers } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import AuthProvider from "./_components/providers/authProvider";
import { SidebarProvider } from "./_components/providers/sideBarProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Color Unit",
  description: "Production Sofware Manager",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans  ${inter.variable}`}>
        <TRPCReactProvider headers={headers()}>
          <AuthProvider>
            <SidebarProvider>{children}</SidebarProvider>
          </AuthProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
