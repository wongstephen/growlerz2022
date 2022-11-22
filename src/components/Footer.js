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
                <div className="flex justify-start mt-6 text-center text-gray-500">
                  {/* Instagram */}
                  <a href="#">
                    <svg
                      className="w-6 h-auto mr-4 hover:text-teal-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  {/* Twitter */}
                  <a href="#">
                    <svg
                      className="w-6 h-auto mr-4 hover:text-teal-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                  {/* Tic Toc */}
                  <a href="#">
                    <svg
                      className="w-6 h-auto mr-4 hover:text-teal-500"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 7.50414C18.5333 7.56942 15.52 6.75998 15.2 3H12.4V13.9666C12.4 17.0999 9.93253 18.4412 8.289 17.2507C6.20169 15.7389 7.60003 12.5958 10.2 12.9874V9.6583C8.20003 9.6583 4 10.4416 4 15.3374C4 21.6041 10.8146 21.4083 12.4 20.5824C14.9798 19.2385 15.6 17.7827 15.6 14.5541C15.6 11.6166 15.6 9.85413 15.6 9.0708C16.2667 9.39719 18.08 10.0891 20 10.2458" />
                    </svg>
                  </a>
                  {/* Facebook */}
                  <a href="#">
                    <svg
                      className="w-6 h-auto mr-4 hover:text-teal-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                </div>
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
        © {new Date().getFullYear()} Growlerz Seattle. All rights reserved.
      </p>
    </section>
  );
};
