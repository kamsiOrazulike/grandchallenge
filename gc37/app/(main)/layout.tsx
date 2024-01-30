import "../globals.css";
import "../../public/static/css/all.css";
import { Inter, Poppins } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["100", "200", "400", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Grand Challenge | Home",
  description: "Grand challenge group 37",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
