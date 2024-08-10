
import Image from "next/image";
import TabsComponent from "./TabsComponent";
import ProjectsCard from "./ProjectsCard";
import React, { useState, useRef } from "react";

const ProjectsData = [
  {
    id: 1,
    title: "O.W.C.A Game",
    description: "A Pokemon-like turned-base fighting Game",
    image: "/images/O.W.C.A.png",
    tab: ["Projects"],
    techStack: ["Python"],
  },
  {
    id: 2,
    title: "Coming Soon",
    description: ".......",
    image: "/images/comingsoon.jpeg",
    tab: ["Projects"],
  },
  {
    id: 3,
    title: "Participant in KSN Chemistry at City/Regency Level ",
    description: "I am among the select five students from my school who participated in the City/Regency Level KSN Chemistry competition.",
    image: "/images/KSN_Kimia.png",
    tab: ["Experience"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Coming Soon",
    description: ".......",
    image: "/images/comingsoon.jpeg",
    tab: ["Experience"],
    gitUrl: "/",
    previewUrl: "/",
  },

];
const More = () => {
  const [tab, setTab] = useState("Projects");
  const ref = useRef(null);

  const UpdatedTab = (newTab) => {
    setTab(newTab);
  };

  const filteredProjects = ProjectsData.filter((project) =>
    project.tab.includes(tab) // Check if tab is included in the project's tab array
  );

  const tabItems = [
    {
      title: "Projects",
    },
    {
      title: "Experience",
    },
  ];
  return (
    <section id="More" className="h-[120vh] py-10">
      <h2 className="text-center text-4xl font-bold text-black mt-4 mb-4 py-6">
      More Informations</h2>
      <div>
        <TabsComponent 
          tabItems={tabItems}
          activeTab={tab}
          onTabChange={UpdatedTab}
        />

      </div>
      <div className="grid grid-cols-3 gap-4">
        {filteredProjects.map((project) => (
          <ProjectsCard
            key={project.id}
            imgURL={project.image}
            title={project.title}
            desc={project.description}
            tab={tab}
            techStack={project.techStack}
          />
        ))}

      </div>
  

    </section>
  )
}

export default More