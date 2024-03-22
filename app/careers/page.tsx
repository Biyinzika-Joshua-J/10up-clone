import CTA from "@/components/CTA/CTA";
import VideoHeader from "@/components/VideoHeader/VideoHeader";
import React from "react";

const page = () => {
  return (
    <main>
      <div className="mb-10">
        <VideoHeader
          heading="CAREERS"
          backgroundVideoUrl="https://10up.com/wp-content/themes/10up-sept2016/assets/img/careers-bg-video.mp4"
          content="What makes 10up a great place to work? Challenging projects, great clients, and a team that is truly better together."
          showPauseButton={true}
          popUpVideoUrl="https://www.youtube.com/embed/YHvfrDhWIq0?si=BEhuRgB2bQPbXKhb"
        />
      </div>

      <div className="mt-10">
        <CTA text="Let's build something great" />
      </div>
    </main>
  );
};

export default page;
