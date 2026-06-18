import { Poppins } from "next/font/google";
import localFont from "next/font/local";
export const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const aglatia = localFont({
  src: "../public/fonts/aglatia/Aglatia.ttf",
  weight: "600",
});
