"use client";
import NavBar from "@/components/navbar";
import { useContext } from "react";
import React from "react";
import { DarkModeContext } from "../../context/DarkModeProvider";

export default function Home(props) {
	const { darkMode, setDarkMode } = useContext(DarkModeContext);
	return (
		<div className={darkMode ? "dark" : "light"}>
			<main className="min-h-screen bg-white dark:bg-gray-900 text-black">
				<section className="px-10 md:px-20 lg:px-40">
					<NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
				</section>
				{/* <div className="w-full h-full"> */}
				<object
					data="/assets/Ari_Kamat_Resume.pdf#view=FitV"
					type="application/pdf"
					className="w-full h-full"
					style={{ height: "100vh" }}
				/>
				{/* </div> */}
				{/* <object
					data="/Ari_Kamat_Resume.pdf#view=FitV"
					type="application/pdf"
					width="100%"
					height="100%"
				>
				<embed
					src="https://drive.google.com/file/d/1dejaFt3ovkErPFNGLrImvbg4xir3bF3i/preview?usp=sharing"
					width="100%"
					height="100%"
				/>
				</object> */}
			</main>
		</div>
	);
}
