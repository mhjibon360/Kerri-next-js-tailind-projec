import { Nunito, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const nunito = Nunito({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
});
const montserrat = Montserrat({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
});



export const metadata = {
  title: "Kerri | next js tailwind portfolio template",
  description: "Kerri next js tailwind portfolio template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  suppressHydrationWarning>
      <body
        className={`${nunito.className} ${montserrat.className} antialiased`}
        suppressHydrationWarning >
        {children}
      </body>
    </html>
  );
}
