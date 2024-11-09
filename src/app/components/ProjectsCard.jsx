import React from "react";


const techStackIcons = {
  Python: "/python-5.svg",
  Java: "/java-4.svg",
  Nextjs:"/next-js.svg",
  React:"/react.svg",
  Tailwind:"/tailwind-css-2.svg",

};

const ProjectsCard = ({ imgURL, title, desc, techStack, tab }) => {
  return (
    <div>
      {(
        <div className="w-[85%]  md:w-[250px] lg:w-[300px] max-w-[full] rounded-lg overflow-hidden mx-auto shadow-lg mt-6 border-2 border-solid border-gray-800">
          <div
            className="h-40 bg-cover bg-center"
            style={{ backgroundImage: `url(${imgURL})` }}
          />
          <div className="bg-white pt-2 pb-4 pl-4 pr-4 text-black flex flex-col justify-start h-[200px]">
            <div className="flex flex-row justify-start items-start overflow-hidden">
              <h3 className="text-lg font-semibold leading-tight md:leading-normal">{title}</h3>
            </div>
            <p className="text-sm text-justify overflow-hidden mb-2">{desc}</p>
            {techStack && techStack.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto mb-8">
                  {techStack.map((tech, index) => (
                    <img
                      key={index}
                      src={techStackIcons[tech] || "/public/default-icon.png"} 
                      alt={tech}
                      className="h-6 w-6 ml-2 object-contain" 
                    />
                  ))}
                </div>
              )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsCard;
{/* {tab === "Experience" && (
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
      )} */}