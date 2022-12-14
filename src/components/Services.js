import React, { useRef } from "react";
import { DayCare } from "./DayCare";
import { PlayPark } from "./PlayPark";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export const Services = ({ data, hours, servicesRef }) => {
  const playParkRef = useRef();
  const dayCareRef = useRef();

  return (
    <section
      id="services"
      className="relative max-w-5xl py-24 mx-auto overflow-hidden md:pb-32 bg-trasnparent"
      ref={servicesRef}
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
          <div className="my-16" ref={playParkRef}>
            <p className="inline-block mb-4 text-xl text-gray-800 uppercase font-semibold tracking-[.2rem]">
              Play Park
            </p>
            {hours && (
              <ReactMarkdown
                className="mb-8 text-sm font-medium leading-tight text-gray-800 whitespace-pre-line md:text-base md:leading-normal"
                rehypePlugins={[rehypeRaw]}
                children={hours.Park}
              />
            )}
            <p className="mb-8 text-lg font-medium leading-loose text-gray-500 md:text-xl md:leading-loose">
              Our dog-friendly park is the perfect place to bring your furry
              friend for a good run around. And now, we're excited to announce
              the opening of our new dog self-wash station! So after a fun day
              at the park, your dog can get cleaned up and ready for the ride
              home.
            </p>
            <PlayPark playParkRef={playParkRef} />
          </div>
          {/* Day Care */}
          <div className="my-16" ref={dayCareRef}>
            <p className="inline-block mb-4 text-xl text-gray-800 uppercase font-semibold tracking-[.2rem]">
              Day Care
            </p>
            {hours && (
              <ReactMarkdown
                className="mb-8 text-sm font-medium leading-tight text-gray-800 whitespace-pre-line md:text-base md:leading-normal"
                rehypePlugins={[rehypeRaw]}
                children={hours.Daycare}
              />
            )}
            <p className="mb-8 text-lg font-medium leading-loose text-gray-500 md:text-xl md:leading-loose">
              Looking for a safe and fun place for your dog to play while you're
              busy? Growlerz Seattle dog park is the perfect solution for busy
              pet parents! Our experienced and loving staff will provide your
              furry family member with plenty of exercise, socialization, and
              TLC in a stimulating environment. Your dog will have a great time
              and you can have peace of mind knowing they're in good hands.
            </p>
            <DayCare dayCareRef={dayCareRef} />
          </div>
          {/* Taproom */}
          <div className="my-16">
            <p className="inline-block mb-4 text-xl text-gray-800 uppercase font-semibold tracking-[.2rem]">
              Taproom
            </p>
            <p className="mb-8 text-lg font-medium leading-loose text-gray-500 md:text-xl md:leading-loose">
              Growlerz Taproom is a social place where you can enjoy a drink
              with or without your dog. Our taproom features 8 craft beers on
              tap and plenty of seating, so you can stay for hours or just stop
              by for a quick drink. And because our taproom is open during Play
              Park hours, you can easily combine a visit to the park with a trip
              to the taproom.
            </p>
          </div>
        </div>
        <div className="relative max-w-full mx-auto mt-4">
          <img
            className="relative mx-auto border-2 border-teal-100 rounded-tl-3xl rounded-br-3xl"
            src={require("../assets/park.webp")}
            alt="Growlerz Park"
          />
        </div>
      </div>
    </section>
  );
};
