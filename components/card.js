"use client";
import React from "react";
import { useState } from "react";
import WorkEducation from "../components/workeducation";
import Tool from "../components/tool";
export default function Card(props) {
	const title = props.title;
	const description = props.description;
	const tools = props.tools;
	const link = props.link;
	return (
		<div className="text-center shadow-lg p-10 rounded-xl my-10 bg-gray-200 dark:bg-gray-900 cursor-pointer lg:w-1/3">
			<a href={link}>
				<div className="pb-2">
					<h3 className="text-lg font-medium dark:text-white ">
						{title}
					</h3>
				</div>

				<p className="py-2 dark:text-white h-40">{description}</p>
				<div className="flex justify-center gap-4">
					{tools.map((tool) => (
						<Tool name={tool} />
					))}
				</div>
			</a>
		</div>
	);
}
