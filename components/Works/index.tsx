import React from "react";
import ProjectItem from "./ProjectItem";

const Works = () => {
  return (
    <div className="py-16" id="works">
      <h3 className="heading before:headingBefore mb-8 pl-32">RELEVANT WORKS</h3>
      <p className="headingSecondary pb-8 md:pb-24 ">
        Here are some of the projects I&apos;ve built. Feel free to check them out.
      </p>
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </div>
  );
};

export default Works;
