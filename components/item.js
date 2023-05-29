"use client";
import React from "react";
import Image from "next/image";
const Item = (props) => {
	const company = props.company;
	const title = props.title;
	const icon = props.icon;
	const date = props.date;

	return (
		<div className="flex items-center my-3">
			<div className="w-10 h-10 rounded-full overflow-hidden">
				<Image src={icon} />
			</div>
			<div className="flex flex-col mx-5 flex-grow">
				<h3 className=" font-semibold text-sm dark:text-white">{company}</h3>
				{props.gpa && (
					<h3 className="text-sm dark:text-white">{`GPA: ${props.gpa}`}</h3>
				)}
				<div className="flex justify-between">
					<h4 className="text-sm dark:text-gray-400 pr-2 mr-auto">
						{title}
					</h4>
					<h4 className="text-sm dark:text-gray-400 pl-2 ml-auto">
						{date}
					</h4>
				</div>
			</div>
		</div>
	);
};

export default Item;
