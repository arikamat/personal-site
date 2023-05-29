"use client"
import React from "react";
import { BsFillMoonStarsFill, BsFillBrightnessHighFill } from "react-icons/bs";
const NavBar = (props) => {
	
	return (
	<nav className="py-10 mb-12 flex justify-between">
		{/* <div>
							<Typewriter
								onInit={(typewriter) => {
									typewriter
										.typeString(">>> who am i")
										.pauseFor(1000)
										.pasteString("<br/>arikamat")
										.start();
								}}
							/>
						</div> */}
		<a href="/">
			<h1 className="text-xl font-burtons dark:text-white">Ari Kamat</h1>
		</a>
		<ul className="flex items-center">
			<li>
				<a
					className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none mr-8 rounded"
					href="#"
				>
					Resume
				</a>
			</li>
			<li>
				<div className="rounded-full border border-gray-500 p-3">
					{props.darkMode ? (
						<BsFillBrightnessHighFill
							onClick={() => props.setDarkMode(!props.darkMode)}
							className=" cursor-pointer text-2xl dark:text-white"
						/>
					) : (
						<BsFillMoonStarsFill
							onClick={() => props.setDarkMode(!props.darkMode)}
							className=" cursor-pointer text-2xl dark:text-white"
						/>
					)}
				</div>
			</li>
		</ul>
	</nav>);
};

export default NavBar;
