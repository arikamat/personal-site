"use client";
import React from "react";
import WorkEducation from "../components/workeducation";

export default function About(props) {
	return (
		<div className="relative bg-white ring-2 ring-zinc-100 dark:bg-gray-800 dark:ring-slate-500 p-10 rounded-xl drop-shadow my-10">
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
					<a
						href="/about"
						className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 ml-10 py-2 border-none mr-8 rounded"
					>
						{" "}
						Learn more about me{" "}
					</a>
				</div>
				<WorkEducation />
			</div>
		</div>
	);
}
