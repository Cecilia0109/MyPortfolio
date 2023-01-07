import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-24 flex flex-col md:flex-row w-full items-center gap-16" id="about">
      <div className="max-w-full md:max-w-[60%] lg:max-w-[40%]">
        <Image
          src="/photo1.jpg"
          alt="my photo"
          width={500}
          height={200}
          className="rounded-xl"
        />
      </div>
      <div className="max-w-[90%] md:max-w-[60%] lg:max-w-[40%] pt-8">
        <h3 className="heading before:headingBefore mb-16">ABOUT ME</h3>
        <p className=" mb-4 lg:mb-8 font-light text-xl lg:text-2xl">
          I am <span className="text-yellow">Cecilia </span> . I have mixed background {" "}
          <span className="text-yellow">in Finance and
          Information Technology </span> with{" "}
          <span className="text-yellow">good communication skills</span> to
          collaborate effectively with other team members.
        </p>
        <p className="font-light tracking-wide mb-6 text-xl lg:text-2xl">
          I am enthusiastic about{" "}
          <span className="text-yellow">learning new technologies</span> and
          writing{" "}
          <span className="text-yellow">
            readable, maintainable and reusable
          </span>{" "}
          code.
        </p>
      </div>
    </section>
  );
};

export default About;
