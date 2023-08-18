"use client";
import React, { useState } from "react";
import WorkEducation from "../components/workeducation";
import { BsFileText } from "react-icons/bs";
import Link from "next/link";
export default function About(props) {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};
	return (
		<div className="relative bg-white ring-2 ring-zinc-100 dark:bg-gray-800 dark:ring-slate-500 pt-10 p-5 md:p-10 rounded-xl drop-shadow my-10">
			<div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 xl:max-w-none xl:grid-cols-2 items-center">
				<div>
					<h3 className="text-3xl py-1 md:px-10 dark:text-white ">
						<span className="border-b-4 border-teal-600 dark:border-teal-300">
							About Me
						</span>
					</h3>
					<p className="text-gray-800 dark:text-white py-10 md:px-10 md:text-justify mt-5">
						Hello there! I&apos;m Ari, an undergraduate studying
						Computer Science and Applied Mathematics at the Honors
						College of New Jersey Institute of Technology. I&apos;m
						passionate about all things technology, math, and
						robotics and love building software, especially when it
						has a real impact on people&apos;s lives.
						<br />
						<br />
						When I&apos;m not &ldquo;Playing Visual Studio
						Code&rdquo;, you can find me taking pictures of sunsets, watching KDramas and Bollywood, or playing
						Valorant.
						<br />
						<br />
						{/* <span>
							<Link href="/gallery">
								<span className="text-blue-500 underline hover:text-blue-700 cursor-pointer">
									Click here to see some of the things I work
									on.
								</span>
							</Link>
						</span> */}
					</p>

					
				</div>
				<WorkEducation />
			</div>
		</div>
	);
}
