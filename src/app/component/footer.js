'use client'
import React from 'react';
import Image from 'next/image';
import { aboutSectionLinks, addonsSectionLinks, developerSectionLinks, popularSectionLinks, solutionSectionLinks, supportSectionLinks } from '../component/footerLinks';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mx-10  sm:pl-20 py-4 mt-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-4  font-questrial gap-4">
          <div className='row-span-3 '>
            <h1 className='font-extrabold text-3xl sm:text-4xl'>Easy</h1>
            <span className='font-extrabold text-3xl sm:text-4xl text-blue-700'>ahead</span>
            <p className='py-5'>We take the work out of connecting with others so you can accomplish more.</p>
            <div className=' flex-wrap flex  items-center'>
          <Image
            className=""
            src="/google.png"
            alt="tag"
            width={150}
            height={100}
          />
          <Image
            className="sm:mt-0 -mt-5"
            src="/apple.png"
            alt="tag"
            width={150}
            height={100}
          />
          </div>
          <div className='flex-col flex sm:flex-row item centre justify-center  gap-5 '>
            <FaTwitter/>
            <FaFacebookF/>
            <IoLogoInstagram/>
            <FaLinkedinIn/>
            <FaYoutube/>
          </div>
          </div>

          <div className=''>
            <h2 className='font-extrabold text-xl pb-3'>About</h2>
            <ul className='text-gray-500 pb-3'>
              {aboutSectionLinks && aboutSectionLinks.map((link, index) => (
                <li key={index} className='pb-3'>
                  <a href={link.path} className="hover:text-blue-500">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='font-extrabold text-xl pb-3'>Solutions</h2>
            <ul className='text-gray-500'>
              {solutionSectionLinks && solutionSectionLinks.map((link, index) => (
                <li   key={index} className='pb-3'  >
                  <a href={link.path} className="hover:text-blue-500 ">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='font-extrabold text-xl pb-3'>Popular Feature</h2>
            <ul className='text-gray-500'>
              {popularSectionLinks && popularSectionLinks.map((link, index) => (
                <li   key={index} className='pb-3'  >
                  <a href={link.path} className="hover:text-blue-500">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='font-extrabold text-xl pb-3'>Support</h2>
            <ul className='text-gray-500'>
              {supportSectionLinks && supportSectionLinks.map((link, index) => (
                <li   key={index} className='pb-3'  >
                  <a href={link.path} className="hover:text-blue-500">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='font-extrabold text-xl pb-3'>Add-Ons</h2>
            <ul className='text-gray-500'>
              {addonsSectionLinks && addonsSectionLinks.map((link, index) => (
               <li   key={index} className='pb-3'  >
                  <a href={link.path} className="hover:text-blue-500">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='font-extrabold text-xl pb-3'>Developers</h2>
            <ul className='text-gray-500'>
              {developerSectionLinks && developerSectionLinks.map((link, index) => (
              <li   key={index} className='pb-3'  >
                  <a href={link.path} className="hover:text-blue-500">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
