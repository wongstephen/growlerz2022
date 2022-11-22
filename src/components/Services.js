import React from "react";
import { DayCare } from "./DayCare";
import { PlayPark } from "./PlayPark";

export const Services = ({ data }) => {
  return (
    <section
      id="services"
      className="relative max-w-5xl py-24 mx-auto overflow-hidden md:pb-32 bg-trasnparent"
    >
      <div className="container relative px-4 mx-auto">
        <div className="mx-auto text-left mb-18 md:mb-16">
          <span className="inline-block mb-4 text-base text-teal-500 uppercase font-semibold tracking-[.2rem]">
            Services
          </span>
          <h1 className="mb-6 text-3xl font-bold leading-snug tracking-tight text-gray-900 md:text-5xl lg:text-7xl md:leading-snug lg:leading-snug">
            The best place in Seattle for you and your dog.
          </h1>
          {/* Play Park */}
          <div className="my-16">
            <p className="inline-block mb-4 text-xl text-gray-800 uppercase font-semibold tracking-[.2rem]">
              Play Park
            </p>
            {data && (
              <div className="mb-8 text-sm font-medium leading-tight text-gray-800 whitespace-pre-line md:text-base md:leading-normal ">
                {data.park_hours}
              </div>
            )}
            <p className="mb-8 text-lg font-medium leading-loose text-gray-500 md:text-xl md:leading-loose">
              Looking for a fun and convenient way to exercise your dog? Our
              dog-friendly park is the perfect place to bring your furry friend
              for a good run around. Ask about our new dog self-wash station!
            </p>
            <PlayPark />
          </div>
          {/* Play Park */}
          <div className="my-16">
            <p className="inline-block mb-4 text-xl text-gray-800 uppercase font-semibold tracking-[.2rem]">
              Day Care
            </p>
            {data && (
              <div className="mb-8 text-sm font-medium leading-tight text-gray-800 whitespace-pre-line md:text-base md:leading-normal ">
                {data.daycare_hours}
              </div>
            )}
            <p className="mb-8 text-lg font-medium leading-loose text-gray-500 md:text-xl md:leading-loose">
              The perfect solution for busy pet parents! We offer a safe, fun,
              and stimulating environment for your dog to enjoy while you are
              away at work or running errands. Our experienced and loving staff
              will take great care of your furry family member, providing plenty
              of exercise, socialization, and TLC.
            </p>
            <DayCare />
          </div>
          {/* Taproom */}
          <div className="my-16">
            <p className="inline-block mb-4 text-xl text-gray-800 uppercase font-semibold tracking-[.2rem]">
              Taproom
            </p>
            <p className="mb-8 text-lg font-medium leading-loose text-gray-500 md:text-xl md:leading-loose">
              Growlerz Taproom is a cheerful, social spot for people to come and
              have a drink. The space is open to the patrons with or without
              accomanying a dog. It includes 8 craft beers on tap and plenty of
              seating. You can stay for hours or just stop by for one drink.
              Open during Play Park hours.
            </p>
          </div>
        </div>
        <div className="relative max-w-full mx-auto mt-4">
          <img
            className="relative mx-auto border-2 border-teal-100 rounded-tl-3xl rounded-br-3xl"
            src={require("../assets/welcome.png")}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
