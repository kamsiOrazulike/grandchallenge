import "./globals.css";
import { Inter, Roboto, Alfa_Slab_One, Noto_Serif } from "next/font/google";
// import Footer from "./components/Footer";

export const notoserif = Noto_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-noto-serif",
});

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const alfa = Alfa_Slab_One({ weight: "400", subsets: ["latin"] });

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
        {children}
      </body>
    </html>
  );
}
