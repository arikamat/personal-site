"use client";
import React from "react";
import ari from "../public/bitmoji.png";
import {
	AiOutlineGithub,
	AiOutlineInstagram,
	AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function MainLanding(props) {
	return (
		<div className="mb-5">
			<div className="text-center p-10">
				<h2 className=" text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-300">
					Ari Kamat
				</h2>
				<h3 className=" text-2xl mt-5 py-2 md:text-3xl dark:text-white">
					<TypeAnimation
						sequence={[
							"Student.", 
							1500, // Waits 1s
							"Developer.",
							1500, // Waits 1s
							"Roboticist.", 
							750,
							"Engineer.", 
							750,
						]}
						wrapper="span"
						cursor={true}
						repeat={Infinity}
						style={{ display: "inline-block" }}
					/>
				</h3>
			</div>

			<div className="text-5xl flex justify-center gap-16 py-3 text-gray-500 dark:text-white">
				<a
					href="https://www.linkedin.com/in/arikamat/"
					target="_blank"
					className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
				>
					<FaLinkedinIn size={42} />
				</a>
				<a
					href="https://www.instagram.com/arikamat314/"
					target="_blank"
					className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
				>
					<AiOutlineInstagram size={42} />
				</a>
				<a
					href="https://github.com/arikamat"
					target="_blank"
					className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
				>
					<AiOutlineGithub size={42} />
				</a>
				<a
					href="mailto:arijkamat@gmail.com"
					target="_blank"
					className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
				>
					<AiOutlineMail size={42} />
				</a>
			</div>

			<div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-20 mb-20 md:h-96 md:w-96">
				<Image
					src={ari}
					alt="dev-ed"
					fill={true}
					layout="fill"
					objectFit="cover"
				/>
			</div>
		</div>
	);
}
