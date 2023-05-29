import React from "react";

export default function Tool(props) {
	const name = props.name;
	return (
		<div className="rounded-full bg-white dark:bg-gray-700 px-3 py-0.5">
			<p className="dark:text-white text-black text-sm">{name}</p>
		</div>
	);
}