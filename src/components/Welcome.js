import React from "react";

export const Welcome = () => {
  return (
    <div class="relative pt-16 md:pt-24 pb-12 md:pb-14 lg:pb-24">
      <div class="container px-6 mx-auto">
        <div class="relative z-10 flex flex-wrap flex-col-reverse md:flex-row -mx-4">
          <div class="w-full md:w-1/2 px-4 mb-12 md:mb-0">
            <span class="inline-block py-px mb-4 text-base text-teal-500 uppercase font-semibold tracking-[.2rem]">
              Welcome!
            </span>
            <h1 class="mb-6 text-3xl md:text-5xl lg:text-7xl text-gray-900 font-bold tracking-widest leading-snug md:leading-snug lg:leading-snug">
              DOGS. BEER. COMMUNITY.
            </h1>
            <p class="mb-8 text-lg md:text-xl text-gray-500 font-medium leading-loose md:leading-loose">
              The owners and staff here at Growlerz are dog lovers first and
              foremost. We believe that time spent with a dog can brighten your
              day, improve your mood, and reduce your stress.
            </p>

            <p class="mb-8 text-lg md:text-xl text-gray-500 font-normal leading-loose md:leading-loose">
              We're conveniently located in the heart of the Columbia City
              Neighborhood at{" "}
              <span className="text-teal-500">
                5269 Rainier Ave. S, Seattle, WA
              </span>
            </p>
            <img src={require("../assets/summary-map.png")} />
            {/* <div class="flex flex-wrap mb-8 md:mb-16">
              <div class="w-auto py-1 mr-4">
                <a
                  class="inline-block py-5 px-7 text-base md:text-lg leading-4 text-teal-50 font-medium text-center bg-teal-500 hover:bg-teal-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-full shadow-lg"
                  href="#"
                >
                  Get Started
                </a>
              </div>
              <div class="w-auto py-1">
                <a
                  class="inline-block py-5 px-7 text-base md:text-lg leading-4 text-gray-800 font-medium text-center bg-trasnparent hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 rounded-full shadow-lg"
                  href="#"
                >
                  Sign Up
                </a>
              </div>
            </div> */}
          </div>
          <div class="w-full md:w-1/2 px-4 mb-12 md:mb-0">
            <div class="relative max-w-max mx-auto md:ml-auto md:mr-0 ">
              <img
                class="m-auto rounded-tl-3xl rounded-br-3xl w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[32rem] xl:h-[32rem] border-4 border-teal-100 my-0"
                src={require("../assets/jeyakumaran-mayooresan-LMNRdfa3QNk-unsplash.jpeg")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
