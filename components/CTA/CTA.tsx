import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props{
    text: string;
}

const CTA = ({text} :Props) => {
  return (
    <div className="cta relative w-full h-[270px] bg-black">
      <div className="flex justify-center items-center h-full flex-col">
        <h2 className="lg:text-[2rem] text-[1.3rem] font-[100] italic text-[#fefefe]">
          {text}
        </h2>
        <div className="flex justify-center items-center pt-4">
          <Button
            asChild
            className="md:px-8 px-4 md:py-6 py-4 rounded-none text-[1.1rem] uppercase border-[1px] border-[#fefefe] text-[#fefefe] bg-transparent hover:bg-[#fefefe] hover:bg-opacity-50 font-[100]"
          >
            <Link href={"https://10up.com/contact"} target="_blank">
              HIRE US
            </Link>
          </Button>

          <Button
            asChild
            className="ml-8 md:px-8 px-4 md:py-6 py-4 rounded-none text-[1.1rem] uppercase border-[1px] border-[#fefefe] text-[#fefefe] bg-transparent hover:bg-[#fefefe] hover:bg-opacity-50 font-[100]"
          >
            <Link href={"https://10up.com/careers"} target="_blank">
              APPLY
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
