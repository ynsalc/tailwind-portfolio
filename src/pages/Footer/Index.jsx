import React from "react";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";

const Index = () => {
  return (
    <div class="w-full bg-gray-800">
      <div className="container mx-auto py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img className="w-8" src="./img/logo.png" alt="" />
          <span className="text-2xl font-bold text-white">{"<Ynsalc />"}</span>
        </div>
        <span className="hidden md:block font-medium text-white">
          © 2022 {"<Ynsalc />"}. Design with ♥️ by Yunus ALICI.
        </span>
        <div className="flex gap-2">
          <img className="w-4 cursor-pointer" src={facebook} alt="" />
          <img className="w-4 cursor-pointer" src={instagram} alt="" />
          <img className="w-4 cursor-pointer" src={twitter} alt="" />
          <img className="w-4 cursor-pointer" src={linkedin} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Index;
