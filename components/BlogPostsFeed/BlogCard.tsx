import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
  title: string;
  content: string;
  link: string;
}

const BlogCard = ({ title, content, link }: Props) => {
  return (
    <div className="bg-[#fff] shadow-lg flex flex-col justify-between">
      <div className="px-4 pt-8 ">
        <Link className="mb-8" href={"/"} target="_blank ">
          <h2 className="text-[2rem] font-[300] cursor-pointer hover-underline">{title}</h2>
        </Link>
        <p className="py-6">{content}</p>
      </div>
      <div>
        <Button
          asChild
          className=" bg-[#545353] hover:bg-[#d23226] text-[#fefefe] py-8 w-full px-2 rounded-none text-[1.1rem] font-[300]"
        >
          <Link href={link} target="_blank">
            READ MORE
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default BlogCard;
