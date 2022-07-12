import React from "react";
import FotterLinks from "./FotterLinks";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";

const Footer = () => {
  const menus = [
    {
      title: "Discover Getir",
      items: [
        {
          title: "About us",
        },
        {
          title: "Careers",
        },
        {
          title: "Technology Careers",
        },
        {
          title: "COVID-19 Announcement",
        },
        {
          title: "COVID-19 Announcement",
        },
      ],
    },
    {
      title: "Need help?",
      items: [
        {
          title: "FAQ",
        },
        {
          title: "Protection of Personal Data",
        },
        {
          title: "Privacy Policy",
        },
        {
          title: "Terms & Conditions",
        },
        {
          title: "Cookie Policy",
        },
      ],
    },
    {
      title: "Become Our Business Partner",
      items: [
        {
          title: "Become a Franchisee",
        },
        {
          title: "Rent Your Warehouse",
        },
        {
          title: "Become a GetirFood Restaurant",
        },
        {
          title: "Become a GetirLocals Business",
        },
        {
          title: "Contact us",
        },
      ],
    },
  ];

  return (
    <footer className="bg-white mt-10">
      <div className="container mx-auto">
        <div className="grid pl-4 md:pl-0 gap-y-5 md:grid-cols-2 lg:grid-cols-4 pt-5 md:pt-8">
          <section>
            <div className="grid gap-y-3">
              <h6 className="text-lg text-primary-brand-color">
                Download Getir!
              </h6>
              <a href="#" className="transition-all transform hover:scale-105">
                <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
              </a>
              <a href="#" className="transition-all transform hover:scale-105">
                <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
              </a>
              <a href="#" className="transition-all transform hover:scale-105">
                <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" />
              </a>
            </div>
          </section>
          {menus.map((menu, index) => (
            <FotterLinks key={index} {...menu} />
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-y-3 justify-between items-center border-t border-gray-200 mt-6 py-6">
          <div className="text-xs text-gray-700 flex gap-x-8">
            © 2022 Getir
            <a href="#" className="text-primary-brand-color hover:underline">
              Information Society Services
            </a>
          </div>
          <div className="flex gap-x-3">
            <a
              className="w-8 h-8 rounded-lg text-gray-600 transition-colors hover:bg-primary-brand-color hover:bg-opacity-20 flex items-center justify-center hover:text-primary-brand-color"
              href="#"
            >
              <FaFacebook size={20} />
            </a>
            <a
              className="w-8 h-8 rounded-lg text-gray-600 hover:bg-primary-brand-color hover:bg-opacity-20 flex items-center justify-center hover:text-primary-brand-color"
              href="#"
            >
              <FaTwitter size={20} />
            </a>
            <a
              className="w-8 h-8 rounded-lg text-gray-600 hover:bg-primary-brand-color hover:bg-opacity-20 flex items-center justify-center hover:text-primary-brand-color"
              href="#"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="h-8 flex items-center p-2 text-sm gap-x-2 rounded border-gray-100 border text-gray-600 transition-colors
               hover:text-primary-brand-color hover:bg-gray-200 hover:border-transparent"
            >
              <BiGlobe size={18} /> English (EN)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
