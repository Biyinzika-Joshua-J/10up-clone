import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import BlogCard from "./BlogCard";


const posts = [
    {
        title:"10up Made 904 WordPress Core Contributions in 2023",
        content:"In 2023, 10up made 904 contributions to the WordPress Core — the third highest amount out of the 286 companies that contributed. Twenty-five 10uppers made those contributions, including 3 active Core Committers.",
        link:"https://10up.com/blog/2024/10up-made-904-wordpress-core-contributions-in-2023/",
    },
    {
        title:"Live webinar: California, WordPress, and a Modern Government CMS Strategy",
        content:"Join us Thursday, January 11th, for a live webinar with WordPress VIP and the State of California’s Department of Health Care Access and Information (HCAI): California, WordPress, and a Modern Government CMS Strategy. You can register here.",
        link:"https://10up.com/blog/2024/live-webinar-california-wordpress-and-a-modern-government-cms-strategy/",
    },
]

const BlogPostsFeed = () => {
  return (
    <div className="bg-[#fefefe]">
      <div>
        <Button asChild className="italic bg-neutral hover:bg-[#d23226] text-[#fefefe] py-8 lg:ml-10 lg:w-[auto] w-[100%] px-4 rounded-none text-[1.5rem] font-[100]">
          <Link href={"https://10up.com/blog"} target="_blank">
                Blog
          </Link>
        </Button>
      </div>
      <div className="w-[80%] mx-auto grid lg:grid-cols-2 grid-cols-1 gap-20">
        {
            posts.map(({title, content, link}) => (
                <BlogCard title={title} content={content} link={link}/>
            ) )
        }
      </div>
    </div>
  );
};

export default BlogPostsFeed;
