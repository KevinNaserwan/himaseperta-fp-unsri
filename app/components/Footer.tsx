import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "../constants";
import { link } from "fs";

function Footer() {
  return (
    <footer className=" flex flex-col text-black-100 border-t border-gray-100">
      <div className=" flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className=" flex  justify-start items-center gap-6">
          <Image
            src="/Logo.png"
            alt="logo"
            width={80}
            height={80}
            className=" object-contain"
          />
          <p className=" text-base text-gray-700">
            HIMASEPERTA 2024 <br /> All rights reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className=" font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className=" text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className=" flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>Build By Meets.indonesia</p>
      </div>
    </footer>
  );
}

export default Footer;
