import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { Fraunces } from "next/font/google";

const inter = Inter({ preload: true, subsets: ["latin"] });

const fraunces = Fraunces({
  preload: true,
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${fraunces.variable} ${inter.className} bg-black text-btGray`}
    >
      <Component {...pageProps} />
    </main>
  );
}
