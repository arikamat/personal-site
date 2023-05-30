"use client";
import NavBar from "@/components/navbar";
import { useContext } from "react";
import React from "react";
import { DarkModeContext } from "../../context/DarkModeProvider";
import Footer from "@/components/footer";
import Resume from "@/components/resume";

export default function Home(props) {
	const { darkMode, setDarkMode } = useContext(DarkModeContext);
	return (
		<div className={darkMode ? "dark" : "light"}>
			<main className="min-h-screen bg-white dark:bg-gray-900 text-black">
				<section className="px-10 md:px-20 lg:px-40">
					<NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
				</section>
				<Resume/>
				<Footer/>
			</main>
		</div>
	);
}
