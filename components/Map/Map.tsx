"use client";
import React, { useState, useEffect } from "react";
import AccentButton from "../Buttons/AccentButton";
import { mapInfo } from "@/constants/constants";
import Image from "next/image";
import USA from "./Maps/USA";
import Canada from "./Maps/Canada";
import Europe from "./Maps/Europe";
import India from "./Maps/India";
import { Button } from "../ui/button";
import Link from "next/link";

const Map = () => {
  const [mapName, setMapName] = useState("usa");
  const [mapUrl, setMapUrl] = useState(mapInfo[0].url);

  useEffect(() => {}, [mapName]);

  return (
    <div className="map-bg">
      <h1 className="text-center pt-10 font-[100] md:text-[4rem] text-[2rem]  text-[#fefefe]">
        Where is 10up?
      </h1>
      <div className="mt-10 ">
        <div className="flex justify-center items-center">
          {mapInfo.map(({ name }) => (
            <div className="mx-2 my-2">
              <AccentButton
                text={name.toUpperCase()}
                key={name}
                active={mapName === name}
                onClick={() => setMapName(name)}
              />
            </div>
          ))}
        </div>
        <div className="lg:w-[60%] w-[75%]  mx-auto flex justify-center mt-20">
          {mapName === "usa" && <USA />}
          {mapName === "canada" && <Canada />}
          {mapName === "europe" && <Europe />}
          {mapName === "india" && <India />}
        </div>
        <div className="mt-20 flex justify-center items-center flex-wrap md:w-[60%] w-[80%] mx-auto pb-10">
          {mapName === "usa" &&
            mapInfo[0].info.map((item) => (
              <span
                className="text-[#fefefe] mx-2 uppercase font-[700] text-[1.2rem]"
                key={item}
              >
                {item}
              </span>
            ))}

          {mapName === "europe" && (
            <Button
              asChild
              className="md:px-8 px-4 md:py-6 py-4 rounded-none text-[1.1rem] uppercase border-[1px] border-[#fefefe] text-[#fefefe] bg-transparent hover:bg-[#fefefe] hover:bg-opacity-50"
            >
              <Link href={mapInfo[2].buttons[0].link} target="_blank">
                {mapInfo[2].buttons[0].text}
              </Link>
            </Button>
          )}
        </div>

        <div className="text-center pb-20 italic text-[1.8rem] sm:w-[80%] w-[90%] mx-auto text-[#fefefe] font-[200]">
          <p className="">
            We're wherever you are, with 10uppers in most major cities—and
            everywhere in between.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Map;
