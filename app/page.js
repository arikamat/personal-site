"use client";

import Image from "next/image";

import { useContext } from "react";
import NavBar from "../components/navbar";
import MainLanding from "../components/main_landing";
import About from "../components/about";
import Featured from "../components/featured";
import Projects from "../components/projects";
import { DarkModeContext } from "../context/DarkModeProvider";
import Footer from "@/components/footer";
import Resume from "@/components/resume";
import Research from "@/components/research";
export default function Home() {
	const { darkMode, setDarkMode } = useContext(DarkModeContext);
	return (
		<div className={darkMode ? "dark" : "light"}>
			{/* <main className=" scroll-smooth dark:text-white  bg-gradient-to-br  from-blue-200 to-cyan-300 dark:from-cyan-700  dark:to-gray-900  text-black animate-gradient-x"> */}
			<main className=" scroll-smooth dark:text-white from-blue-200 to-cyan-300   dark:bg-gray-900  text-black ">
				<section className="min-h-screen  px-10 md:px-20 lg:px-40">
					<NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
					<MainLanding />
				</section>
				<section
					id="about"
					className=" bg-gray-200 dark:bg-gray-900 px-10 md:px-20 lg:px-60 py-4 mt-25"
				>
					<About />
				</section>
				{/* <section className=" bg-gray-200 dark:bg-gray-900 px-10 md:px-20 lg:px-60 py-4">
					<Featured />
				</section> */}
				<section
					id="projects"
					className=" bg-gray-200 dark:bg-gray-900 px-10 md:px-20 lg:px-60 py-4"
				>
					<Projects />
				</section>
			
				<section
					id="research"
					className=" bg-gray-200 dark:bg-gray-900 px-10 md:px-20 lg:px-60 py-4"
				>
					<Research/>
				</section>
				<Footer />
			</main>
		</div>
	);
}
