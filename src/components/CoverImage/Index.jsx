import React, { memo } from "react";
import man from "../../assets/man.png";
import Typical from "react-typical";

const TypicalText = memo(
  () => {
    return (
      <Typical
        loop={3}
        wrapper="p"
        steps={[
          "Frontend Developer 👑",
          2000,
        ]}
      />
    );
  },
  (props, prevProps) => true
);

const Index = ({ mode }) => {
  return (
    <div>
      <img
        className="absolute bottom-0 right-0 lg:left-0 mx-auto h-5/6 object-cover"
        src={man}
        alt=""
      />
      <div className="hidden lg:block absolute -bottom-1/4 right-0 left-0 mx-auto w-big h-big bg-indigo-900 rounded-full -z-10"></div>
      <div className="absolute top-1/2 left-5 text-lg sm:left-10 sm:text-xl md:left-1/4 md:text-2xl lg:left-5 xl:left-48 xl:text-4xl font-bold">
        <span class={mode === "dark" ? "text-white" : "text-indigo-900"}>
          <TypicalText />
        </span>
      </div>
      <div className="hidden lg:flex flex-col gap-5 rounded-md shadow-lg absolute top-0 bottom-0 m-auto right-10 bg-white dark:bg-slate-900 dark:shadow-slate-800 p-6 h-fit w-1/3">
        <h1 className="text-4xl font-bold text-indigo-900">Hi, I'm Yunus</h1>
        <p className="text-gray-400">
          An innocent software developer who has been dealing with software
          since 2011 and has been playing an active role in the software
          industry professionally in 2017 and beyond.
        </p>
        <a
          className="bg-indigo-600 text-white text-xl px-3 py-2 rounded-md font-semibold w-fit"
          href="#contact"
        >
          Hire Me
        </a>
      </div>
    </div>
  );
};

export default Index;
