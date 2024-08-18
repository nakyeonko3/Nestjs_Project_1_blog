import React from "react";
import Pizza from "@/app/markdown/pizza.mdx";
import Doshirak from "@/app/markdown/doshirak.mdx";
const Posts = () => {
  return (
    <div>
      <h1>posts</h1>

      <div className="container px-2 py-2">
        {" "}
        <Pizza />
      </div>

      <div className="container px-2 py-2">
        <Doshirak />
      </div>
    </div>
  );
};

export default Posts;
