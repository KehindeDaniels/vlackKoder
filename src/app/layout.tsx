import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";
import Navbar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Adeleke Joseph – Senior Software Engineer | React Native & Web Developer",
  description:
    "I'm Adeleke Joseph, a senior software engineer with 6+ years of experience building scalable mobile and web products for startups and tech companies across Africa.",
  keywords: [
    "Adeleke Joseph",
    "Software Engineer Portfolio",
    "React Native Developer",
    "Web Developer Nigeria",
    "Senior Mobile Developer",
    "Scalable Systems",
    "Full Stack Developer",
    "MTN MyMoMo",
    "SmartPay Africa",
  ],
  authors: [{ name: "Adeleke Joseph", url: "https://vlack-koder.vercel.app/" }],
  creator: "Adeleke Joseph",
  metadataBase: new URL("https://vlack-koder.vercel.app/"),
  openGraph: {
    title: "Adeleke Joseph – Senior Software Engineer",
    description:
      "A multidisciplinary developer shaping mobile-first, full-stack solutions trusted by startups and global tech teams.",
    url: "https://vlack-koder.vercel.app/",
    siteName: "Adeleke Joseph Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dk47zom8d/image/upload/v1748348717/oj8snknkyszuxh7qhylq.jpg", // Custom image
        width: 1200,
        height: 630,
        alt: "Adeleke Joseph Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="mx-auto max-w-[1600px]">
            <Navbar />
          </div>
          <main className="container mx-auto max-w-[1600px] min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
