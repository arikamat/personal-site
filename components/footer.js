import React from "react";
import {
	AiOutlineGithub,
	AiOutlineInstagram,
	AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
export default function Footer() {
	return (
		<footer className="bg-gray-200 dark:bg-gray-900 py-4 px-10 md:px-20 lg:px-60">
			<div className="container mx-auto text-center">
				<p className="text-gray-500 dark:text-gray-400">
					&copy; {new Date().getFullYear()} Ari Kamat. All rights
					reserved. Made with ❤️
				</p>
				<div className="flex justify-center mt-4">
					<a
						href="https://www.linkedin.com/in/arikamat/"
						target="_blank"
						className="mr-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
					>
						<FaLinkedinIn size={24} />
					</a>
					<a
						href="https://github.com/arikamat"
						target="_blank"
						className="mr-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
					>
						<AiOutlineGithub size={24} />
					</a>
					<a
						href="mailto:arijkamat@gmail.com"
						target="_blank"
						className="mr-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
					>
						<AiOutlineMail size={24} />
					</a>
					<a
						href="https://www.instagram.com/arikamat314/"
						target="_blank"
						className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
					>
						<AiOutlineInstagram size={24} />
					</a>
				</div>
			</div>
		</footer>
	);
}
