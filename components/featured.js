"use client";
import React from "react";
import Image from "next/image";
import { projectsData } from "../data/projects";
import Card from "../components/card";
export default function Featured(props) {
	const feat = [projectsData[0], projectsData[1], projectsData[2]]

	return (
		<div className="relative bg-white ring-2 ring-zinc-100 dark:bg-gray-800 dark:ring-slate-500 p-10 rounded-xl drop-shadow my-10">
			<h3 className="text-3xl py-1 px-10 dark:text-white">
				<span className="border-b-4 border-teal-600 dark:border-teal-300">
					Featured Projects
				</span>
			</h3>
			<div className="lg:flex gap-10">
				{feat.map((project) => (
					<Card title={project.title} description={project.description} tools={project.tools} link={project.link} key={project.id}/>
				))}
			</div>
		</div>
	);
}
