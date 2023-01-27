import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MySkillsCard from "./MySkillsCard";

const MySkills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("Skill.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
  return (
    <div className="flex flex-col items-center justify-center" id="skills">
      <div className="mb-6">
        <h2 className="text-center text-3xl font-semibold">
          My <span className="text-light-blue-600">Skills</span>
        </h2>
        <hr className="mt-2 border-1 w-24 mx-auto border-blue-gray-300" />
      </div>
      <div className="grid items-center grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {skills.map((skill) => (
          <MySkillsCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default MySkills;
