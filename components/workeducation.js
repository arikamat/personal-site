"use client";
import React from "react";
import { BiBriefcase } from "react-icons/bi";
import { SlGraduation } from "react-icons/sl";

import ms from "../public/ms.jpg";
import merck from "../public/merck.png";
import njit from "../public/njit.png";
import bca from "../public/bca.png";

import Item from "./item";
const WorkEducation = () => {
	// const { darkMode } = props;
	return (
		<div className="flex flex-col bg-gray-100 dark:bg-gray-900 p-8 rounded-xl my-auto lg:ml-5">
			<div className="flex items-center dark:text-white mb-3">
				<BiBriefcase className="text-xl  mr-2 my-auto" />
				<h2 className="my-auto">Relevant Experience</h2>
			</div>

			<Item
				title="Technology Intern"
				company="Merck"
				icon={merck}
				date="6/2023 - Present"
			/>

			<Item
				title="CS113 Course Assistant"
				company="NJIT"
				icon={njit}
				date="1/2023 - Present"
			/>
			<Item
				title="Technology Analyst Intern"
				company="Morgan Stanley"
				icon={ms}
				date="7/2021 - 6/2022"
			/>

			<div className="flex items-center dark:text-white my-3">
				<SlGraduation className="text-xl  mr-2 my-auto" />
				<h2 className="my-auto">Education</h2>
			</div>

			<Item
				title="B.S. Computer Science and Applied Mathematics"
				company="NJIT | Honors College"
				icon={njit}
				gpa={"4.0/4.0"}
				date="9/2022 - 5/2026"
			/>
			<Item
				title="High School | Engineering Concentration"
				company="Bergen County Academies"
				icon={bca}
				gpa={"3.97/4.0"}
				date="9/2018 - 6/2022"
			/>
		</div>
	);
};

export default WorkEducation;
