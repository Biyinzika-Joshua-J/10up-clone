"use client";
import React, { useRef, useState } from "react";
import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faClose } from "@fortawesome/free-solid-svg-icons";

interface Props {
  heading?: string;
  backgroundVideoUrl: string;
  content: string;
  showPauseButton: boolean;
  popUpVideoUrl: string;
}

const VideoHeader = ({
  heading,
  content,
  showPauseButton,
  backgroundVideoUrl,
  popUpVideoUrl,
}: Props) => {
  const [isPaused, setIsPaused] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    if (videoRef.current!) {
      if (isPaused) {
        videoRef.current!.play();
      } else {
        videoRef.current!.pause();
      }
      setIsPaused(!isPaused);
    }
  };

  return (
    <div className="background-video_header">
      <div className="background-video_container relative">
        <video
          id="background__video"
          poster="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/home-hero-large-fallback.jpg"
          playsInline
          muted
          autoPlay
          loop
          ref={videoRef}
        >
          <source
            data-src={backgroundVideoUrl}
            type="video/mp4"
            src={backgroundVideoUrl}
          />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-full z-50">
          <div className="flex flex-row justify-start lg:justify-end items-center h-full w-[80%] mx-auto">
            <div className="md:w-[50%] w-[90%]">
              {heading && (
                <h2 className="font-[800] text-white tracking-[0.15rem] mb-2 md:mb-4">
                  {heading}
                </h2>
              )}

              <p className="w-[70%] text-[18px] lg:text-[26px] text-white leading-[1.25] mb-[10px] md:mb-[20px] mt-0">
                {content}
              </p>
              <div className="flex">
                <Button
                  className="mr-4 rounded-none hover:bg-neutral border-2 border-neutral bg-transparent"
                  onClick={() => setShowVideoModal(true)}
                >
                  <span>
                    <FontAwesomeIcon icon={faPlay} className="mr-4" />
                    <span>Watch Video</span>
                  </span>
                </Button>

                {showPauseButton && (
                  <Button
                    className="ml-4 rounded-none hover:bg-neutral bg-transparent"
                    onClick={togglePlayPause}
                  >
                    {isPaused ? (
                      <span>
                        <FontAwesomeIcon icon={faPlay} className="mr-4" />
                        <span>Resume background</span>
                      </span>
                    ) : (
                      <span>
                        <FontAwesomeIcon icon={faPause} className="mr-4" />
                        <span>Pause background</span>
                      </span>
                    )}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
        {showVideoModal && (
          <div className="z-[100] h-full w-full absolute top-0 left-0 bg-black">
            <div className="mx-auto w-[70%] h-[85%] bg-black my-3 md:my-10 relative">
              <div className="w-full h-full">
                <iframe
                  className="w-full h-full"
                  src={popUpVideoUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="absolute md:top-8 md:-right-20 -right-10 top-1">
                <Button
                  className="bg-transparent hover:bg-transparent"
                  onClick={() => setShowVideoModal(false)}
                >
                  <FontAwesomeIcon
                    icon={faClose}
                    className="text-[#6e6c6c] lg:text-4xl text-2xl"
                  />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoHeader;
