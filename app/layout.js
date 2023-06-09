import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { DarkModeProvider } from "@/context/DarkModeProvider";

export const metadata = {
	title: "Ari Kamat Portfolio",
	// description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
	return (
		<DarkModeProvider>
			<html lang="en">
				<body className={inter.className}>{children}</body>
			</html>
		</DarkModeProvider>
	);
}
