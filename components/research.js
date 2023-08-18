import React from "react";
import Card from "./card";
import { researchData } from "@/data/research";
export default function Research() {
	return (
		<div className="relative bg-white ring-2 ring-zinc-100 dark:bg-gray-800 dark:ring-slate-500 pt-10 p-5 md:p-10 rounded-xl drop-shadow my-10">
			<h3 className="text-3xl py-1 md:px-10 dark:text-white mb-10">
				<span className="border-b-4 border-teal-600 dark:border-teal-300">
					Research
				</span>
				<div className="grid grid-cols-1 2xl:grid-cols-1 gap-5">
				{researchData.map((project) => (
					<Card project={project} key={project.id} />
				))}
			</div>
			</h3>
		</div>
	);
}
