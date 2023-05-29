"use client";
import NavBar from "@/components/navbar";
import { useState } from "react";
import React from "react";

export default function Home(props) {
	const [darkMode, setDarkMode] = useState(true);
	return (
		<div className={darkMode ? "dark" : "light"}>
			<main className="bg-white dark:bg-gray-900 text-black">
				<section className="	px-10 md:px-20 lg:px-40">
					<NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
				</section>
				<div className="relative  p-10  my-10">
					<div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2 items-center">
						<div>
							<h3 className="text-3xl py-1 px-10 dark:text-white ">
								<span className="border-b-4 border-teal-600 dark:border-teal-300">
									About Me
								</span>
							</h3>
							<p className="text-gray-800 dark:text-white py-10 px-10 text-justify mt-5">
								Hello there! I&apos;m Ari, an undergraduate studying
								Computer Science and Applied Mathematics at the
								Honors College of New Jersey Institute of
								Technology. I&apos;m passionate about all things
								technology and love building software,
								especially when it has a real impact on people&apos;s
								lives.
								<br />
								<br />
								When I&apos;m not &ldquo;Playing Visual Studio Code&rdquo;, you
								can find me taking pictures of sunsets with my
								sister, watching KDramas, drinking coffee,
								enjoying a Bollywood movie with my family, or
								playing Valorant with my friends.
							</p>
						</div>
						<div>
							Hello
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
