import React from "react";

export default function Tool(props) {
	const name = props.name;
	return (
		// <div className="rounded-full  bg-whitedark:bg-gray-700 px-3 py-0.5">
		// 	<p className="dark:text-white text-black text-sm">{name}</p>
		// </div>\
		<li className="inline-block">
			<span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-0.5 text-xs  text-black dark:bg-gray-800 dark:text-white">
				{name}
			</span>
		</li>
	);
}
