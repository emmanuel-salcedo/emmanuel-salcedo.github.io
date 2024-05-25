import Header from "@/components/header";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { relative } from "path";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";



const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emmanuel Salcedo | Personal Portfolio",
  description: "Welcome to my portfolio! I'm a passionate Computer Science graduate with expertise in SQL, Python, and data analysis.Here, you'll find projects showcasing my skills in data visualization, software development, and more. Let's connect and create together!",


};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${mont.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>


        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
        </ActiveSectionContextProvider>

      </body>
    </html>
  );
}
