import React from "react";

const MobileApp = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-bg-img bg-primary-brand-color rounded text-white">
      <div className="flex flex-col gap-y-3 p-10">
        <h3 className="text-2xl font-bold tracking-tight">Download Getir!</h3>
        <p className="font-semibold ">
          Let us deliver your order to your door in minutes.
        </p>
        <article className="mt-4 flex gap-x-4">
          <a href="#" className="transition-all transform hover:scale-105">
            <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
          </a>
          <a href="#" className="transition-all transform hover:scale-105">
            <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
          </a>
          <a href="#" className="transition-all transform hover:scale-105">
            <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" />
          </a>
        </article>
      </div>
      <picture className="pt-5 hidden md:block">
        <img src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png" />
      </picture>
    </div>
  );
};

export default MobileApp;
