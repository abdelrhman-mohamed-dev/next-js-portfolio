import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000/"),

  title: "Abdelrman Mohamed",
  authors: {
    name: "Abdelrman Mohamed",
  },

  description:
    "Based in Egypt, I'm a Fullstack developer passionate about building modern web applications that users love.",
  openGraph: {
    title: "Daily Vote",
    description:
      "Based in Egypt, I'm a Fullstack developer passionate about building modern web applications that users love.",
    url: "http://localhost:3000/",
    siteName: "Abdelrman Mohamed",
    images: "/og.png",
    type: "website",
  },
  keywords: [
    "triks web coding",
    "Abdelrman Mohamed",
    "Abdelrman Mohamed web devolper",
    "web devolper",
    "UI/UX design",
    "AI coding",
    "مطور ويب",
    "عمل متجر الالكتروني",
    "عبدالرحمن محمد",
    "برمجه موفع الالكتروني",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
