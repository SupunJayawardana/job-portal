import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
<main style={{ minHeight: "calc(100vh - 300px)", padding: "20px" }}>
          {children}
        </main>
        <Footer />  
      </body>
    </html>
  );
}