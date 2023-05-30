"use client";

import Image from "next/image";

import { useContext} from "react";
import NavBar from "../components/navbar";
import MainLanding from "../components/main_landing";
import About from "../components/about";
import Featured from "../components/featured";
import Projects from "../components/projects";
import { DarkModeContext } from "../context/DarkModeProvider";
import Footer from "@/components/footer";
export default function Home() {
	const { darkMode, setDarkMode } = useContext(DarkModeContext);
	return (
		<div className={darkMode ? "dark" : "light"}>
			<main className="bg-white dark:bg-gray-900 text-black">
				<section className="min-h-screen  px-10 md:px-20 lg:px-40">
					<NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
					<MainLanding />
				</section>
				<section id="about" className=" bg-gray-200 dark:bg-gray-900 px-10 md:px-20 lg:px-60 py-4 mt-25">
					<About />
				</section>
				{/* <section className=" bg-gray-200 dark:bg-gray-900 px-10 md:px-20 lg:px-60 py-4">
					<Featured />
				</section> */}
				<section id="projects" className=" bg-gray-200 dark:bg-gray-900 px-10 md:px-20 lg:px-60 py-4">
					<Projects />
				</section>
				<Footer />
			</main>
		</div>
	);
}
