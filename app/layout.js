import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KB",
  description: "Contest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex justify-between items-center bg-gray-800 text-[#fecb00] p-4 !bg-gray-800">
          <div className="text-lg font-bold">Future Finance A.I. Challenge</div>
          <nav className="space-x-4">
            <Link href="/mainpage" className="text-white hover:text-[#fecb00]">
              <strong>메인 페이지</strong>
            </Link>

            <Link href="/danger" className="text-white hover:text-[#fecb00]">
              <strong>변동률 순위</strong>
            </Link>
            <Link href="/info" className="text-white hover:text-[#fecb00]">
              <strong>팀 소개</strong>
            </Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
