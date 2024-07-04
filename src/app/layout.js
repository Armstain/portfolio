import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio App",
  description: "Portfolio App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <TransitionProvider> {children}</TransitionProvider>
        
        
        </body>
    </html>
  );
}
