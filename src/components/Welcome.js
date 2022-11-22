import React from "react";

export const Welcome = () => {
  return (
    <div className="relative pt-16 pb-12 md:pt-24 md:pb-14 lg:pb-24">
      <div className="container px-6 mx-auto">
        <div className="relative z-10 flex flex-col-reverse flex-wrap -mx-4 md:flex-row">
          <div className="w-full px-4 mb-12 md:w-1/2 md:mb-0">
            <span className="inline-block py-px mb-4 text-base text-teal-500 uppercase font-semibold tracking-[.2rem]">
              Welcome!
            </span>
            <h1 className="mb-6 text-3xl font-bold leading-snug tracking-widest text-gray-900 md:text-5xl lg:text-7xl md:leading-snug lg:leading-snug">
              DOGS. BEER. COMMUNITY.
            </h1>
            <p className="mb-8 text-lg font-medium leading-loose text-gray-500 md:text-xl md:leading-loose">
              The owners and staff here at Growlerz are dog lovers first and
              foremost. We believe that time spent with a dog can brighten your
              day, improve your mood, and reduce your stress.
            </p>

            <p className="mb-8 text-lg font-normal leading-loose text-gray-500 md:text-xl md:leading-loose">
              We're conveniently located in the heart of the Columbia City
              Neighborhood at{" "}
              <span className="text-teal-500">
                5269 Rainier Ave. S, Seattle, WA
              </span>
            </p>
            <img
              src={require("../assets/welcome-map.webp")}
              alt="Map of growlerz"
            />
          </div>
          <div className="w-full px-4 mb-12 md:w-1/2 md:mb-0">
            <div className="relative mx-auto max-w-max md:ml-auto md:mr-0 ">
              <img
                className="m-auto rounded-tl-3xl rounded-br-3xl w-80 h-80 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[32rem] xl:h-[32rem] border-2 border-teal-100 my-0"
                src={require("../assets/welcome.webp")}
                alt="Two dogs"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
