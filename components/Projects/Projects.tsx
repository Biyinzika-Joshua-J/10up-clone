import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div className="relative">
      <div className="grid lg:grid-cols-3 grid-cols-1 overflow-hidden ">
        <div className="col-span-2 lg:h-[75%] h-[100%] ">
          <Link href={"/"} target="_blank" >
            <div className="project relative w-full h-full overflow-hidden ">
              <div>
                <Image
                  src={
                    "https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_1152,h_648/prod/uploads/2013/12/DMV-feature-1-1152x648.jpg"
                  }
                  alt="at&t"
                  width={500}
                  height={500}
                  className="w-full h-full transition-all duration-100"
                />
              </div>

              <div className="overlay absolute top-0 left-0 bg-main opacity-0 w-full h-full"></div>
              <div className="absolute top-0 left-0 details hidden hover:flex justify-center items-center">
                <div className="text-white">
                  <h2 className="project-heading lg:text-[2rem] text-[1.3rem] text-center">
                    California DMV Website Redesign
                  </h2>
                  <p className="italic text-center w-full text-[.9rem] mt-4">
                    Learn more
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col h-full">
          <Link href={"/"} target="_blank" className="">
            <div className="project relative w-full h-full overflow-hidden">
              <div>
                <Image
                  src={
                    "https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_768,h_324/prod/uploads/2017/02/motortrend_hero_v2-768x324.png"
                  }
                  alt="at&t"
                  width={500}
                  height={500}
                  className="w-full h-full transition-all duration-100"
                />
              </div>

              <div className="overlay absolute top-0 left-0 bg-main opacity-0 w-full h-full"></div>
              <div className="absolute top-0 left-0 details hidden hover:flex justify-center items-center">
                <div className="text-white">
                  <h2 className="project-heading lg:text-[2rem] text-[1.3rem] text-center">
                    Motor Trend
                  </h2>
                  <p className="italic text-center w-full text-[.9rem] mt-4">
                    Learn more
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link href={"/"} target="_blank">
            <div className="project relative w-full h-full overflow-hidden">
              <div>
                <Image
                  src={
                    "https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_768,h_324/prod/uploads/2013/12/classifai-feature-1-768x324.jpg"
                  }
                  alt="at&t"
                  width={500}
                  height={500}
                  className="w-full h-full transition-all duration-100"
                />
              </div>

              <div className="overlay absolute top-0 left-0 bg-main opacity-0 w-full h-full"></div>
              <div className="absolute top-0 left-0 details hidden hover:flex justify-center items-center">
                <div className="text-white">
                  <h2 className="project-heading lg:text-[2rem] text-[1.3rem] text-center">
                    ClassifAI
                  </h2>
                  <p className="italic text-center w-full text-[.9rem] mt-4">
                    Learn more
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 overflow-hidden projects-lower-grid  ">
        <div className="flex flex-col h-full">
          <Link href={"/"} target="_blank" className="">
            <div className="project relative w-full h-full overflow-hidden">
              <div>
                <Image
                  src={
                    "https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_576,h_324/prod/uploads/2013/12/fivethirtyeight-feature-576x324.jpg"
                  }
                  alt="at&t"
                  width={500}
                  height={500}
                  className="w-full h-full transition-all duration-100"
                />
              </div>

              <div className="overlay absolute top-0 left-0 bg-main opacity-0 w-full h-full"></div>
              <div className="absolute top-0 left-0 details hidden hover:flex justify-center items-center">
                <div className="text-white">
                  <h2 className="project-heading lg:text-[2rem] text-[1.3rem] text-center">
                    FiveThirtyEight
                  </h2>
                  <p className="italic text-center w-full text-[.9rem] mt-4">
                    Learn more
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link href={"/"} target="_blank">
            <div className="project relative w-full h-full overflow-hidden">
              <div>
                <Image
                  src={
                    "https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_576,h_324/prod/uploads/2013/12/politico-feature-576x324.jpg"
                  }
                  alt="at&t"
                  width={500}
                  height={500}
                  className="w-full h-full transition-all duration-100"
                />
              </div>

              <div className="overlay absolute top-0 left-0 bg-main opacity-0 w-full h-full"></div>
              <div className="absolute top-0 left-0 details hidden hover:flex justify-center items-center">
                <div className="text-white">
                  <h2 className="project-heading lg:text-[2rem] text-[1.3rem] text-center">
                    Politico EU
                  </h2>
                  <p className="italic text-center w-full text-[.9rem] mt-4">
                    Learn more
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="lg:h-[100%] h-[100%]">
          <Link href={"/"} target="_blank">
            <div className="project relative w-full h-full overflow-hidden">
              <div>
                <Image
                  src={
                    "https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_576,h_648/prod/uploads/2013/12/fansided-feature-1-576x648.jpg"
                  }
                  alt="at&t"
                  width={500}
                  height={500}
                  className="w-full h-full transition-all duration-100"
                />
              </div>

              <div className="overlay absolute top-0 left-0 bg-main opacity-0 w-full h-full"></div>
              <div className="absolute top-0 left-0 details hidden hover:flex justify-center items-center">
                <div className="text-white">
                  <h2 className="project-heading lg:text-[2rem] text-[1.3rem] text-center">
                    Fansided 250
                  </h2>
                  <p className="italic text-center w-full text-[.9rem] mt-4">
                    Learn more
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="lg:h-[100%] h-[100%] ">
          <Link href={"/"} target="_blank">
            <div className="project relative w-full h-full overflow-hidden">
           
                <Image
                  src={
                    "https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_768,h_648/prod/uploads/2013/12/white-house-feature-768x648.jpg"
                  }
                  alt="at&t"
                  width={1000}
                  height={1000}
                  className="w-full  h-full transition-all duration-100 overflow-hidden"
                />
              

              <div className="overlay absolute top-0 left-0 bg-main opacity-0 w-full h-full"></div>
              <div className="absolute top-0 left-0 details hidden hover:flex justify-center items-center">
                <div className="text-white">
                  <h2 className="project-heading lg:text-[2rem] text-[1.3rem] text-center">
                    10up helps lauch a new WhiteHouse.gov
                  </h2>
                  <p className="italic text-center w-full text-[.9rem] mt-4">
                    Learn more
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
