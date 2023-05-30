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
		<div className="my-5">
			<div className="text-center ">
				<h2 className=" text-5xl py-2 mx-auto mt-20 text-teal-600 font-medium md:text-6xl dark:text-teal-300">
					Ari Kamat
				</h2>
				<h3 className=" text-2xl mt- py-2 md:text-3xl dark:text-white">
					<TypeAnimation
						sequence={[
							"Student.", 
							1500,
							"Developer.",
							1500, 
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

			<div className="text-3xl md:text-5xl flex justify-center gap-10 my-10 text-gray-500 dark:text-white">
				<a
					href="https://www.linkedin.com/in/arikamat/"
					target="_blank"
					className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
				>
					
					<FaLinkedinIn />
				</a>
				<a
					href="https://www.instagram.com/arikamat314/"
					target="_blank"
					className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
				>
					<AiOutlineInstagram  />
				</a>
				<a
					href="https://github.com/arikamat"
					target="_blank"
					className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
				>
					<AiOutlineGithub  />
				</a>
				<a
					href="mailto:arijkamat@gmail.com"
					target="_blank"
					className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
				>
					<AiOutlineMail />
				</a>
			</div>

			<div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-20 mb-20 md:h-96 md:w-96">
				<Image
					src={ari}
					alt="ari"
					fill={true}
					layout="fill"
					objectFit="cover"
				/>
			</div>
		</div>
	);
}
