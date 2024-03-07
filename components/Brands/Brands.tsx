import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { brands } from "@/constants/constants";
import Image from "next/image";
import AccentButton from "../Buttons/AccentButton";

const Brands = () => {
  return (
    <div className="my-20">
      <h1 className="text-center text-[2rem] font-[100]">We keep excellent company.</h1>
      <div className="w-[80%] mx-auto max-w-[990px] grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10 py-20">
        {brands.map((logo, idx) => (
          <div>
            <Image
              src={logo}
              height={150}
              width={300}
              alt="brand logo"
              className="w-[70%]"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center">
            <AccentButton
              text="SEE OUR WORK"
              link="https://10up.com/our-work"
            />
      </div>
    </div>
  );
};

export default Brands;
