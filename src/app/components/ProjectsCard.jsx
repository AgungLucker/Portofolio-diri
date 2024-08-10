

import React from "react";


const techStackIcons = {
  Python: "/python-5.svg",
};

const ProjectsCard = ({ imgURL, title, desc, techStack, tab }) => {
  return (
    <div>
      {tab === "Projects" && (
        <div className="rounded-md overflow-hidden shadow-lg mt-6 border-2 border-gray-800">
          <div
            className="h-40 bg-cover bg-center"
            style={{ backgroundImage: `url(${imgURL})` }}
          />
          <div className="bg-white p-4 text-black">
            <div className="flex flex-row justify-between items-center">
              <h3 className="text-lg font-semibold">{title}</h3>
              {/* Display tech stack icons */}
              {techStack && techStack.length > 0 && (
                <div className="flex ml-4 items-end">
                  {techStack.map((tech, index) => (
                    <img
                      key={index}
                      src={techStackIcons[tech] || "/public/default-icon.png"} // Fallback icon
                      alt={tech}
                      className="h-6 w-6 ml-2" // Adjust size as needed
                    />
                  ))}
                </div>
              )}
            </div>
            <p>{desc}</p>
          </div>
        </div>
      )}
      {tab === "Experience" && (
        <div className="rounded-md overflow-hidden shadow-lg mt-6 border-2 border-gray-800">
          <div
            className="h-40 bg-cover bg-center"
            style={{ backgroundImage: `url(${imgURL})` }}
          />
          <div className="bg-white p-4 text-black">
            <h3 className="text-lg font-semibold leading-tight">{title}</h3>
            <p>{desc}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsCard;