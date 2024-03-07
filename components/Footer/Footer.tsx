import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

interface FooterLinks {
  text: string;
  path: string;
}

interface FooterSocialIcons {
  icon: any;
  path: string;
}

const footerLinksLeft: FooterLinks[] = [
  { text: "privacy", path: "/privacy" },
  { text: "careers", path: "/career" },
  { text: "contact", path: "/contact" },
];
const footerSocialIcons: FooterSocialIcons[] = [
  { icon: faTwitter, path: "http://twitter.com/10up" },
  { icon: faFacebook, path: "http://facebook.com/10up.agency" },
  { icon: faLinkedin, path: "https://www.linkedin.com/company/1959734" },
  { icon: faGithub, path: "http://github.com/10up" },
];

const Footer = () => {
  return (
    <footer className="bg-main py-4">
      <div className="flex justify-center items-center">
        <ul className="flex relative -ml-[165px]">
          {footerLinksLeft.map(({ text, path }) => (
            <li className="mx-6" key={text}>
              <Link
                href={path}
                className="uppercase nav-link text-[#fefefe] font-[600] text-[14px]"
              >
                {text}
              </Link>
            </li>
          ))}

          <li className="mx-6 bg-main">
            <Link href={"/"} className="bg-main">
              <div className="bg-main -ml-[40px] h-[60px] w-[60px] -mb-12 rounded-full -top-[40px] absolute flex justify-center p-4">
                <Image
                  src={
                    "https://10up.com/wp-content/themes/10up-sept2016/dist/img/10up-icon-reversed.svg"
                  }
                  width={80}
                  height={80}
                  alt="10up logo"
                />
              </div>
            </Link>
          </li>

          {footerSocialIcons.map(({ icon, path }) => (
            <li className="mx-4" key={path}>
              <Link
                href={path}
                className="uppercase text-[#fefefe] font-[600] text-[14px]"
                target="_blamk"
              >
                <FontAwesomeIcon
                  icon={icon}
                  size="lg"
                  className="hover:text-[#fefefe] transition-all duration-100 text-[#6e6c6c]"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
