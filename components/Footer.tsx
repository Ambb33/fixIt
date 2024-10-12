"use client";
import styles from "@/styles/style";
import { logo } from "@/public/assets";
import { footerLinks, socialMedia } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <Image
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          A smarter way to get fast, reliable, and secure tech solutions.
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.id}
            className="flex flex-col ss:my-0 my-4 mix-w-[150px]"
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerLink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                >
                  <Link href={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        2024&nbsp; Andreea Mocan.&nbsp;  All Rights Reserved.
      </p>
      <div className='flex items-center lg:py-2 text-white'>
        Built with <span className='text-secondary text-2xl px-1'>&#9825;</span>
        by &nbsp;
        <Link href="https://www.linkedin.com/in/andreea-mocan-9936b5b5" className='underline underline-offset-2' target="_blank">
          Andreea Mocan
        </Link>
      </div>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <a 
            href={social.link} 
            key={social.id} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Image
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain hover:bg-secondary hover:bg-opacity-70 hover:rounded cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`}
            />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
