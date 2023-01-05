import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-24 flex justify-center gap-16" id="about">
      <div className="max-w-[40%]">
        <Image
          src="/photo1.jpg"
          alt="my photo"
          width={500}
          height={200}
          className="rounded-xl"
        />
      </div>
      <div className="max-w-[40%] pt-8">
        <h3 className="heading before:headingBefore mb-16">ABOUT ME</h3>
        <p className="mb-8 font-light text-2xl">
          I am <span className="text-yellow">Cecilia </span> . I have mixed background {" "}
          <span className="text-yellow">in Finance and
          Information Technology </span> with{" "}
          <span className="text-yellow">good communication skills</span> to
          collaborate effectively with other team members.
        </p>
        <p className="text-2xl font-light tracking-wide mb-6">
          I am enthusiastic about{" "}
          <span className="text-yellow">learning new technologies</span> and
          writing{" "}
          <span className="text-yellow">
            readable, maintainable and reusable
          </span>{" "}
          code. •Strong problem-solving skills and data analysis skills.
        </p>
        <p className="text-2xl font-light tracking-wide"> 
          I fully understand <span className="text-yellow">Data-Driven principal</span>, <span className="text-yellow">Test-Driven Development</span>
          (TDD) and <span className="text-yellow">SOLID principle</span> .
        </p>
      </div>
    </section>
  );
};

export default About;
