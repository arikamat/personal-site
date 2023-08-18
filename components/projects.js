"use client";
import React from "react";
import { projectsData } from "../data/projects";
import Card from "../components/card";
import { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
export default function Projects(props) {
	const [showMore, setShowMore] = useState(false);
	const visibleProjects = showMore ? projectsData : projectsData.slice(0, 6);

	const handleShowMore = () => {
		setShowMore(!showMore);
		handleMouseLeave();
	};
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	return (
		<div className="relative bg-white ring-2 ring-zinc-100 dark:bg-gray-800 dark:ring-slate-500 pt-10 p-5 md:p-10 rounded-xl drop-shadow my-10">
			<h3 className="text-3xl py-1 md:px-10 dark:text-white mb-10">
				<span className="border-b-4 border-teal-600 dark:border-teal-300">
					Projects
				</span>
			</h3>

			<div className="grid grid-cols-1 2xl:grid-cols-3 gap-5">
				{visibleProjects.map((project) => (
					<Card project={project} key={project.id} />
				))}
			</div>
			<div className="flex justify-center">
				{projectsData.length > 6 && (
					<button
						onClick={handleShowMore}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						className={`relative w-10 h-10 rounded-full mt-5 transition-colors duration-500 ease-in-out ${
							isHovered
								? "bg-teal-700"
								: "bg-teal-500 hover:bg-teal-700 animate-pulse"
						}`}
						style={isHovered ? {} : { animationDuration: "1.5s" }}
					>
						{showMore ? (
							<div>
								<AiOutlineArrowUp className="inline-block my-auto text-xl" />
							</div>
						) : (
							<div>
								<AiOutlineArrowDown className="inline-block my-auto text-xl" />
							</div>
						)}
					</button>
				)}
			</div>
		</div>
	);
}
