import React from "react";
import { ReactNode } from "react";
import "../styles/index.css"; 
import { Navbar } from "../components/layout/navbar";
import { Toaster } from "../components/ui/toaster";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "Emmanuel Agboola",
  description:
    "Software Engineer with a difference",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
  },
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* <QueryClientProvider client={queryClient}> */}
          <Navbar />
          <main>{children}</main>
          <Toaster />
        {/* </QueryClientProvider> */}
      </body>
    </html>
  );
}
