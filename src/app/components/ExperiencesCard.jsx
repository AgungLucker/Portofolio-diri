import React from "react";

const ExperiencesCard = ({ job, role, duration }) => {
    return (
      <div className="bg-white p-2 ">
        <h3 className="text-lg font-semibold text-zinc-900">{job}</h3>
        <p className="text-sm text-gray-600">{role}</p>
        <p className="text-sm text-gray-500">{duration}</p>
      </div>
    );
  };
  
  export default ExperiencesCard;