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
					id="resume"
					className=" bg-gray-200 dark:bg-gray-900 px-10 md:px-20 lg:px-60 py-4"
				>
					<div className="relative bg-white ring-2 ring-zinc-100 dark:bg-gray-800 dark:ring-slate-500 pt-10 p-5 md:p-10 rounded-xl drop-shadow my-10">
						<h3 className="text-3xl py-1 md:px-10 dark:text-white mb-10">
							<span className="border-b-4 border-teal-600 dark:border-teal-300">
								Resume
							</span>
						</h3>
						<Resume />
					</div>
				</section>
				<Footer />
			</main>
		</div>
	);
}
