import "./globals.css";
import "./styles/index.min.css";
import { Urbanist } from "next/font/google";
const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// contexts
import Contexts from "./contexts";

export const metadata = {
  title: "Kalami",
  description: "LLM's extension",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={urbanist.className}>
      <body>
        <div className="notif"></div>
        <Contexts>{children}</Contexts>
      </body>
    </html>
  );
}
