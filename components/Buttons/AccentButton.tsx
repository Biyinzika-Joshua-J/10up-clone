"use client"
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
  text: string;
  link?: string;
  onClick?: () => void;
  active?: boolean;
}

const AccentButton = ({ text, link, onClick, active }: Props) => {
  return (
    <>
      <Button
        asChild
        className={`cursor-pointer md:py-6 py-4 font-[300] md:px-6 px-4 ${active?'bg-[#36b8b8]':'bg-tertially'} hover:bg-[#36b8b8] text-[#fefefe] rounded-none text-[1.3rem]`}
        onClick={onClick ? onClick : () => {}}
      >
        {link ? (
          <Link href={link} target="_blank">
            {text}
          </Link>
        ) : (
          <span>{text}</span>
        )}
      </Button>
    </>
  );
};

export default AccentButton;
