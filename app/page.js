"use client";

import Image from "next/image";

import { useState } from "react";
import NavBar from "../components/navbar";
import MainLanding from "../components/main_landing";
import About from "../components/about";
import Featured from "../components/featured";
import Projects from "../components/projects";

export default function Home() {
	const [darkMode, setDarkMode] = useState(true);
	return (
		<div className={darkMode ? "dark" : "light"}>
			<main className="bg-white dark:bg-gray-900 text-black">
				<section className="min-h-screen  px-10 md:px-20 lg:px-40">
					<NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
					<MainLanding />
				</section>
				<section className=" bg-gray-200 dark:bg-gray-900 px-10 md:px-20 lg:px-60 py-4 mt-25">
					<About />
				</section>
				<section className=" bg-gray-200 dark:bg-gray-900 px-10 md:px-20 lg:px-60 py-4">
					<Featured />
				</section>

				{/* <section className="px-10 md:px-20 lg:px-40">
					<div>
						<h3 className="text-3xl py-1 dark:text-white">
							Portfolio
						</h3>
						<p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
							Since the beginning of time, the dark:text-teal-400{" "}
							<span className="text-teal-500 dark:text-teal-400">
								stars
							</span>{" "}
							have whispered secrets across the vast expanse of
							the{" "}
							<span className="text-teal-500 dark:text-teal-400">
								universe
							</span>
							, while the{" "}
							<span className="text-teal-500 dark:text-teal-400">
								Earth
							</span>{" "}
							has spun tirelessly, carrying the weight of
							countless stories etched within its ancient layers.
						</p>
					</div>
					<div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
						<div className="basis-1/3 flex-1">
							<Image
								src={web1}
								alt="web1"
								className="rounded-lg object-cover"
								width={"100%"}
								height={"100%"}
								layout="responsive"
							/>
						</div>
						<div className="basis-1/3 flex-1">
							<Image
								src={web2}
								alt="web2"
								className="rounded-lg object-cover"
								width={"100%"}
								height={"100%"}
								layout="responsive"
							/>
						</div>
						<div className="basis-1/3 flex-1">
							<Image
								src={web3}
								alt="web3"
								className="rounded-lg object-cover"
								width={"100%"}
								height={"100%"}
								layout="responsive"
							/>
						</div>
						<div className="basis-1/3 flex-1">
							<Image
								src={web4}
								alt="web4"
								className="rounded-lg object-cover"
								width={"100%"}
								height={"100%"}
								layout="responsive"
							/>
						</div>
						<div className="basis-1/3 flex-1">
							<Image
								src={web5}
								alt="web5"
								className="rounded-lg object-cover"
								width={"100%"}
								height={"100%"}
								layout="responsive"
							/>
						</div>
						<div className="basis-1/3 flex-1">
							<Image
								src={web6}
								alt="web6"
								className="rounded-lg object-cover"
								width={"100%"}
								height={"100%"}
								layout="responsive"
							/>
						</div>
					</div>
				</section> */}
				
			</main>
		</div>
	);
}
