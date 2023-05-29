"use client";
import React from "react";
import WorkEducation from "../components/workeducation";
import {projectsData} from '../data/projects';

export default function Projects() {
	return (
	  <div>
		{projectsData.map((project) => (
		  <div key={project.id}>
			<h2>{project.title}</h2>
			<p>{project.description}</p>
		  </div>
		))}
	  </div>
	);
  }
