import Header from "@/components/header"; // Import the Header component
import type { Metadata } from "next"; // Import the Metadata type from next
import { Montserrat } from "next/font/google"; // Import the Montserrat font from Google Fonts
import "./globals.css"; // Import global CSS styles
import Footer from "@/components/footer"; // Import the Footer component

// Initialize the Montserrat font with latin subset
const mont = Montserrat({ subsets: ["latin"] });

// Define metadata for the website
export const metadata: Metadata = {
  title: "Emmanuel Salcedo | Personal Portfolio", // Title of the website
  description: `Welcome to my portfolio! I'm a passionate Computer Science graduate 
                with expertise in SQL, Python, and data analysis. Here, you'll find projects 
                showcasing my skills in data visualization, software development, and more. 
                Let's connect and create together!`, // Description of the website
};

// Define the RootLayout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode; // Define the children prop type
}) {
  return (
    <html lang="en" className="!scroll-smooth"> {/* Set the language attribute for the HTML element and enable smooth scrolling */}
      <body
        className={`${mont.className} bg-gray-50 text-gray-950 relative pt-10 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      > {/* Apply font, background, text colors, and padding */}
        <div className="relative overflow-hidden"> {/* Container for decorative background elements */}
          <div className="bg-green-300 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-green-700"></div> {/* Decorative background element */}
          <div className="bg-green-200 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-green-600"></div> {/* Decorative background element */}
        </div>
        <Header /> {/* Render the Header component */}
        <main className="container mx-auto px-4 mt-10 mb-20"> {/* Main content container with padding and margin */}
          {children} {/* Render the children elements */}
        </main>
        <Footer /> {/* Render the Footer component */}
      </body>
    </html>
  );
}
