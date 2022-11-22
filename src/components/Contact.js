import React from "react";

export const Contact = () => {
  return (
    <section className="max-w-5xl py-24 mx-auto bg-trasnparent" id="contact">
      <div className="container px-4 mx-auto">
        <div className="relative mx-auto mb-12 text-left">
          <div className="relative">
            <span className="inline-block mb-4 text-base text-teal-500 uppercase font-semibold tracking-[.2rem]">
              Contact, Hours, Location
            </span>
            <h2 className="mb-6 text-3xl font-bold leading-snug tracking-tight text-gray-900 md:text-5xl lg:text-7xl md:leading-snug lg:leading-snug">
              How to find us
            </h2>

            <p className="text-lg font-medium leading-loose text-gray-500 md:text-xl md:leading-loose">
              Contact us by Email or Phone <br />
              growlerzseattle@gmail.com <br />
              (206) 459-2726
            </p>
            <div className="flex justify-start mt-2 text-center text-gray-500">
              <a href="#">
                <svg
                  className="w-10 h-auto mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#">
                <svg
                  className="w-10 h-auto mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              {/* <a href="#">
                    <svg
                      className="w-10 h-auto mr-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewbox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </a> */}
              <a href="#">
                <svg
                  className="w-10 h-auto mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
            <div className="text-left">
              <p className="text-lg font-medium leading-loose text-gray-500 md:text-xl md:leading-loose ">
                5269 Rainier Ave. S Seattle WA, 98118
              </p>
              <img
                className="w-11/12 max-w-2xl mx-auto my-4 border-4 border-teal-100 rounded-md mx-right md:mx-0"
                src={require("../assets/full-map.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
