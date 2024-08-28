import { Inter } from "next/font/google";
import "./globals.css";
var inter = Inter({ subsets: ["latin"] });
export var metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};
export default function RootLayout(_a) {
    var children = _a.children;
    return (<html lang="en">
      <body className={inter.className}>{children}</body>
    </html>);
}
