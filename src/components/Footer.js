import React from "react";

export const Footer = () => {
  return (
    <section id="footer" className="mx-auto bg-trasnparent max-w-7xl">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap pt-24 pb-12 -mx-4">
          <div className="w-full px-4 mb-16 md:w-1/2 lg:w-4/12 lg:mb-0">
            <a
              className="inline-flex items-center mb-4 text-2xl font-bold tracking-wider uppercase text-gray-9"
              href="#"
            >
              <img
                className="h-8"
                src={require("../assets/paw@100x.png")}
                alt=""
              />
              <span className="ml-2">Growlerz</span>
            </a>
            <p className="text-base font-medium text-gray-500 md:text-lg lg:w-64">
              5269 Rainier Ave. S<br /> Seattle WA, 98118
            </p>
          </div>
          <div className="w-full px-4 md:w-1/4 lg:w-2/12 md:mb-16 lg:mb-0">
            <h3 className="mb-5 text-lg font-bold text-gray-900">Links</h3>
            <ul>
              <li className="mb-4">
                <a
                  className="inline-block font-medium text-gray-500 hover:text-gray-600"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="inline-block font-medium text-gray-500 hover:text-gray-600"
                  href="#pricing"
                >
                  Pricing
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="inline-block font-medium text-gray-500 hover:text-gray-600"
                  href="#events"
                >
                  Events
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full px-4 mb-16 md:w-1/4 lg:w-2/12 lg:mb-0">
            <ul className="md:mt-12">
              <li className="mb-4">
                <a
                  className="inline-block font-medium text-gray-500 hover:text-gray-600"
                  href="#faq"
                >
                  FAQ
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="inline-block font-medium text-gray-500 hover:text-gray-600"
                  href="#footer"
                >
                  Newsletter
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="inline-block font-medium text-gray-500 hover:text-gray-600"
                  href="#footer"
                >
                  Social Media Icon Placeholder
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full px-4 md:w-1/3 lg:w-4/12">
            <h3 className="mb-5 text-lg font-bold text-gray-900">Newsletter</h3>
            <div className="flex flex-wrap">
              <div className="w-full py-1 lg:flex-1 lg:py-0 lg:mr-3">
                <input
                  className="w-full h-12 px-3 text-gray-900 placeholder-gray-500 border border-gray-200 rounded-full outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  placeholder="Your email"
                />
              </div>
              <div className="w-full py-1 lg:w-auto lg:py-0">
                <a
                  className="inline-block w-full px-5 py-4 font-medium leading-4 text-center bg-teal-500 rounded-full shadow-lg text-teal-50 hover:bg-teal-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  href="#"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-100"></div>
      <p className="py-10 text-sm font-medium text-center text-gray-400 md:pb-16">
        © 2022 Growlerz Seattle. All rights reserved.
      </p>
    </section>
  );
};
