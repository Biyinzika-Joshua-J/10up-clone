import Image from "next/image";
import VideoHeader from "@/components/VideoHeader/VideoHeader";
import Brands from "@/components/Brands/Brands";
import Testimonial from "@/components/Testimonial/Testimonial";
import Map from "@/components/Map/Map";
import CTA from "@/components/CTA/CTA";
import BlogPostsFeed from "@/components/BlogPostsFeed/BlogPostsFeed";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <main>
      <div className="mb-0">
        <VideoHeader
          backgroundVideoUrl="https://10up.com/wp-content/themes/10up-sept2016/assets/img/home-bg-video.mp4"
          content="We make the web better by finely crafting websites & tools for content creators."
          showPauseButton={true}
          popUpVideoUrl="https://www.youtube.com/embed/L6647BJMfPE?si=Kt-Hazvx-mQPjYVi"
        />
      </div>

      <div className="mb-2">
        <Projects/>
      </div>

      <div className="my-2">
        <Brands/>
      </div>

      <div className="mt-2">
        <Testimonial/>
      </div>


      <div className="my-0">
        <Map/>
      </div>

      <div className="mb-10">
        <BlogPostsFeed/>
      </div>

      

      <div className="mt-10">
        <CTA text="Let's build something great"/>
      </div>


      
    </main>
  );
}
