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



export default function MainLanding(props) {
	return (
		<div className="mb-5">
			<div className="text-center p-10">
				<h2 className=" text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-300">
					Ari Kamat
				</h2>
				<h3 className=" text-2xl py-2 md:text-3xl dark:text-white">
					Student and Developer.
				</h3>
				<p className=" text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
					Student interested in Softwar
				</p>
			</div>

			<div className="text-5xl flex justify-center gap-16 py-3 text-gray-500 dark:text-white">
				<a href="https://www.linkedin.com/in/arikamat/" target="_blank">
					<FaLinkedinIn size={42} />
				</a>
				<a
					href="https://www.instagram.com/arikamat314/"
					target="_blank"
				>
					<AiOutlineInstagram size={42} />
				</a>
				<a href="https://github.com/arikamat" target="_blank">
					<AiOutlineGithub size={42} />
				</a>
				<a href="mailto:arijkamat@gmail.com" target="_blank">
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
