import React from "react";

const Background = ({ children }) => {
  return <body className=" dark:bg-black transition-all">{children}</body>;
};

export default Background;
