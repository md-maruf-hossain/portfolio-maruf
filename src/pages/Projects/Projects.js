import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProjectCards from "./ProjectCards";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(()=>{
    fetch('Projects.json')
    .then(res=> res.json())
    .then(data => setProjects(data))
  }, [])
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-6">
        <h2 className="text-center text-3xl font-semibold">
          My <span className="text-light-blue-600">Projects</span>
        </h2>
        <hr className="mt-2 border-1 w-32 mx-auto border-blue-gray-300" />
      </div>
      <div className="grid items-center grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {projects.map(project => <ProjectCards key={project.id} project={project}/>)}
      </div>
    </div>
  );
};

export default Projects;
