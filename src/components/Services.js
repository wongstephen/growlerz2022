import React from "react";

export const Services = () => {
  return (
    <section
      id="services"
      class="relative py-24 md:pb-32 bg-trasnparent overflow-hidden max-w-5xl mx-auto"
    >
      <div class="relative container px-4 mx-auto">
        <div class="mb-18 md:mb-16 mx-auto text-left">
          <span class="inline-block mb-4 text-base text-teal-500 uppercase font-semibold tracking-[.2rem]">
            Services
          </span>
          <h1 class="mb-6 text-3xl md:text-5xl lg:text-7xl text-gray-900 font-bold tracking-tight leading-snug md:leading-snug lg:leading-snug">
            The best place in Seattle for you and your dog.
          </h1>
          {/* Play Park */}
          <div class="my-16">
            <p class="inline-block mb-4 text-xl text-gray-800 uppercase font-semibold tracking-[.2rem]">
              Play Park
            </p>
            <div class="mb-8">
              <span className="font-semibold">Mon - Fri</span> 6pm - 9pm
              <br />
              <span className="font-semibold">Sat </span>12pm - 8pm,{" "}
              <span className="font-semibold">Sun</span> 12pm - 6pm
            </div>
            <p class="mb-8 text-lg md:text-xl text-gray-500 font-medium leading-loose md:leading-loose">
              Looking for a fun and convenient way to exercise your dog? Our
              dog-friendly park is the perfect place to bring your furry friend
              for a good run around. Ask about our new dog self-wash station!
            </p>
            <a
              class="inline-flex items-center justify-center w-full py-3 text-lg font-medium leading-7 bg-teal-500 border border-transparent rounded-full shadow-lg px-7 h-14 md:w-auto text-teal-50 hover:bg-teal-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              href="#"
            >
              Learn More
            </a>
          </div>
          {/* Play Park */}
          <div class="my-16">
            <p class="inline-block mb-4 text-xl text-gray-800 uppercase font-semibold tracking-[.2rem]">
              Day Care
            </p>
            <div class="mb-8">
              <span className="font-semibold">Mon - Fri</span> 7am - 6pm
            </div>
            <p class="mb-8 text-lg md:text-xl text-gray-500 font-medium leading-loose md:leading-loose">
              The perfect solution for busy pet parents! We offer a safe, fun,
              and stimulating environment for your dog to enjoy while you are
              away at work or running errands. Our experienced and loving staff
              will take great care of your furry family member, providing plenty
              of exercise, socialization, and TLC.
            </p>
            <a
              class="inline-flex items-center justify-center px-7 py-3 h-14 w-full md:w-auto text-lg leading-7 text-teal-50 bg-teal-500 hover:bg-teal-600 font-medium focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-transparent rounded-full shadow-lg"
              href="#"
            >
              Learn More
            </a>
          </div>
          {/* Taproom */}
          <div class="my-16">
            <p class="inline-block mb-4 text-xl text-gray-800 uppercase font-semibold tracking-[.2rem]">
              Taproom
            </p>
            <p class="mb-8 text-lg md:text-xl text-gray-500 font-medium leading-loose md:leading-loose">
              Growlerz Taproom is a cheerful, social spot for people to come and
              have a drink. The space is open to the patrons with or without
              accomanying a dog. It includes 8 craft beers on tap and plenty of
              seating. You can stay for hours or just stop by for one drink.
              Open during Play Park hours.
            </p>
            {/* <a
              class="inline-flex items-center justify-center px-7 py-3 h-14 w-full md:w-auto text-lg leading-7 text-teal-50 bg-teal-500 hover:bg-teal-600 font-medium focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-transparent rounded-full shadow-lg"
              href="#"
            >
              Get Started
            </a> */}
          </div>
        </div>
        <div class="relative mt-4 max-w-4xl mx-auto">
          <img
            class="relative rounded-xl border-4 border-teal-500 mx-auto"
            src={require("../assets/welcome.png")}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
