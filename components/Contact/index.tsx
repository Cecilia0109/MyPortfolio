import React from "react";
import Link from "next/link";
import Social from "./Social";

const Contact = () => {
  return (
    <section className="pt-24">
      <h3 className="heading before:headingBefore mb-4">GET IN TOUCH</h3>
      <p className="text-6xl font-serif">
        I love to hear from you. Whether you have a question or just want to
        chat about software engineering and tech — shoot me a message.
      </p>
      <div className="mt-24 pb-24 flex">
        <div className="w-[30%]">
          <h3 className="mb-2">REACH ME AT</h3>
          <p>
            <Link href="mailto:qinger.lei0109@gmail.com" className="hover:text-yellow hover:cursor-pointer">
              qinger.lei0109@gmail.com
            </Link>
          </p>
        </div>
        <div className="w-[30%]">
          <h3>Social</h3>
          <Social />
        </div>
        <Link href="mailto:qinger.lei0109@gmail.com" className="btn">
          SEND ME A MESSAGE
        </Link>
      </div>
    </section>
  );
};

export default Contact;
