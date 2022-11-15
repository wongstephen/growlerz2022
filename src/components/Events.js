import React from "react";

export const Events = () => {
  return (
    <>
      {/* Events */}
      <section
        id="events"
        class="py-24 md:pt-32 bg-trasnparent max-w-5xl mx-auto"
      >
        <div class="container px-4 mx-auto">
          <div class="text-left">
            <span class="inline-block mb-4 text-base text-teal-500 uppercase font-semibold tracking-[.2rem]">
              Annoucements
            </span>
            <h3 class="mb-6 text-3xl md:text-5xl lg:text-7xl text-gray-900 font-bold tracking-tight leading-snug md:leading-snug lg:leading-snug">
              News and Events
            </h3>
          </div>
          <div class="flex flex-col -mx-4 pt-12 max-w-4xl">
            <div class="w-full md:w-full px-4 mb-4">
              <div class="group h-full">
                <div class="group relative h-full px-8 pt-16 pb-8 bg-white group-hover:bg-trasnparent rounded-md shadow-md hover:shadow-xl transition duration-200">
                  <h3 class="mb-4 text-xl leading-7 text-gray-900 font-bold">
                    Join us for Pawtraits Happy Hour on Saturday, July 23 from
                    1-3pm
                  </h3>
                  <p class="text-gray-500 group-hover:text-gray-600 font-medium transition duration-200">
                    We're partnering with Warner Brothers’ DC League of Super
                    Pets to host a Pawtraits Happy Hour. We'll be giving away
                    dog treats, toys, and movie promo items including tickets to
                    an advance screening. Best of all we will have a pet
                    photographer to take a professional “pawtrait” of your dog.
                    **Please note: All activities are based on a first come
                    first serve basis. Photographs will be uploaded to a general
                    shared gallery 2 weeks later and shared via email.
                  </p>
                  <img
                    className="mx-auto my-8 max-w-[60%]"
                    src={require("../assets/9f859b_449e1caffab34864af4a46b6a57011b9_mv2.webp")}
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col -mx-4 pt-12 max-w-4xl">
            <div class="w-full md:w-full px-4 mb-4">
              <div class="group h-full">
                <div class="group relative h-full px-8 pt-16 pb-8 bg-white group-hover:bg-trasnparent rounded-md shadow-md hover:shadow-xl transition duration-200">
                  <h3 class="mb-4 text-xl leading-7 text-gray-900 font-bold">
                    Santa Photos on Sat 11/19 from 3-6 PM
                  </h3>
                  <p class="text-gray-500 group-hover:text-gray-600 font-medium transition duration-200">
                    Join us for Free Santa Photos this Saturday.
                  </p>
                  <img
                    className="mx-auto my-8 max-w-[60%]"
                    src={require("../assets/santa-photo-placeholder.jpeg")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
