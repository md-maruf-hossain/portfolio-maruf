import { Progress } from "@material-tailwind/react";
import React from "react";

const MySkillsCard = ({ skill }) => {
  const { name, image, value } = skill;
  console.log(skill);
  return (
    <div className="flex px-10 gap-10">
      <img
        src={image}
        className="w-20 h-auto rounded-lg shadow-lg p-6 hover:scale-110 ease-in duration-300"
        alt="img-blur-shadow"
      />
      <div className="flex flex-col justify-center gap-2">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <Progress value={value} label=" " className="w-52 lg:w-72" />
      </div>
    </div>
  );
};

export default MySkillsCard;
