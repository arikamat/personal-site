"use client";
import React from "react";
import { useContext } from "react";
import { BsFillMoonStarsFill, BsFillBrightnessHighFill } from "react-icons/bs";
import { DarkModeContext } from "../context/DarkModeProvider";
import Link from "next/link";
const NavBar = () => {
	const { darkMode, setDarkMode } = useContext(DarkModeContext);
	return (
		<nav className="py-10 mb-5 flex justify-between">
			
			<Link href="/" className="my-auto">
				<h1 className="text-xl font-burtons dark:text-white">
					Ari Kamat
				</h1>
			</Link>
			<ul className="flex items-center">
				<li>
					<Link
						className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none mr-8 rounded"
						href="/resume"
					>
						Resume
					</Link>
				</li>
				<li>
					<div className="rounded-full border border-gray-500 p-3">
						{darkMode ? (
							<BsFillBrightnessHighFill
								onClick={() =>
									setDarkMode(!darkMode)
								}
								className=" cursor-pointer text-2xl dark:text-white"
							/>
						) : (
							<BsFillMoonStarsFill
								onClick={() =>
									setDarkMode(!darkMode)
								}
								className=" cursor-pointer text-2xl dark:text-white"
							/>
						)}
					</div>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
