import React from "react";
import { useContext, useState,useRef } from "react";
import { BsFillMoonStarsFill, BsFillBrightnessHighFill } from "react-icons/bs";
import { DarkModeContext } from "../context/DarkModeProvider";
import Link from "next/link";

const NavBar = () => {
	const scrollRef = useRef(null);

	const { darkMode, setDarkMode } = useContext(DarkModeContext);
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};
	return (
		<nav className="py-10 mb-5 flex justify-between ">
			<Link href="/" className="my-auto">
				<h1
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					className={`text-xl font-burtons ${
						isHovered ? "text-teal-300 transition duration-500" : "dark:text-white text-black"
					}`}	
				>
					Ari Kamat
				</h1>
			</Link>
			<ul className="flex items-center">
				<li className="hidden lg:block">
					<a
						className={
							"dark:text-white text-black px-4 py-2 border-none mr-8 rounded-lg flex-1 hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-300"
						}
						href="/#about"
						scroll={false}
					>
						01. About
					</a>
				</li>
				<li className="hidden lg:block">
					<a
						className="dark:text-white text-black px-4 py-2 border-none mr-8 rounded-lg flex-1 hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-300"
						href="/#about"
					>
						02. Experience
					</a>
				</li>
				<li className="hidden lg:block">
					<a
						className="dark:text-white text-black px-4 py-2 border-none mr-8 rounded-lg flex-1 hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-300"
						href="/#projects"
					>
						03. Projects
					</a>
				</li>
				<li className="hidden lg:block">
					<a
						className="dark:text-white text-black px-4 py-2 border-none mr-8 rounded-lg flex-1 hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-300"
						href="/#research"
					>
						04. Research
					</a>
				</li>
				<li>
					<a
						className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none mr-8 rounded-lg flex-1"
						href="/resume"
					>
						Resume
					</a>
				</li>
				<li>
					<div
						className="rounded-full border border-gray-500 p-3 hover:opacity-50 transition duration-300"
						onClick={() => setDarkMode(!darkMode)}
					>
						{darkMode ? (
							<BsFillBrightnessHighFill
								className="cursor-pointer text-2xl text-white"
								size={18}
							/>
						) : (
							<BsFillMoonStarsFill
								className="cursor-pointer text-2xl text-black"
								size={18}
							/>
						)}
					</div>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
