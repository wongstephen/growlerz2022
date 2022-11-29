import React, { useState } from "react";

export const DayCare = ({ dayCareRef }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <section id="day-care">
      <div
        className="mb-8 text-lg font-medium leading-loose text-teal-500 cursor-pointer md:text-xl md:leading-loose"
        onClick={() => {
          setShowDetails(!showDetails);
        }}
      >
        <div className="inline-flex items-center justify-center w-full py-3 text-lg font-medium leading-7 bg-teal-500 border border-transparent rounded-full shadow-lg px-7 h-14 md:w-auto text-teal-50 hover:bg-teal-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
          {showDetails ? (
            <>
              <p className="inline-block">Close</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="inline-block w-6 h-6 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </>
          ) : (
            <span>Learn More</span>
          )}
        </div>
      </div>
      {showDetails && (
        <div className="w-11/12 mx-auto mb-8 text-lg font-normal font-medium leading-loose text-gray-500 md:text-xl md:leading-loose">
          <p className="mb-8">
            Growlerz, we make sure your furchild is taken care of properly. All
            of We all live busy lives and can't always be there for our dogs. At
            our staff is thoroughly trained in Pet CPR/First Aid and excited to
            spend the day with your pup while you go to work or run errands.
            Your dog will be thoroughly exercised, played with, and feeling
            great when you come to pick them up!
          </p>

          <p className="mb-8">
            Dog daycare candidates will undergo temperament testing by our
            staff. We will schedule a morning for you to bring the dog in for
            this testing. Cost is $15. This usually takes 1-2 hours and, if
            successful, your dog can stay the day and the $15 will be applied to
            your stay that day. If, for some reason, your pooch is not a good
            match for our daycare, the $15 will be forfeited.
          </p>

          <div>
            <div
              className="mb-8 text-lg font-medium leading-loose text-teal-500 cursor-pointer r md:text-xl md:leading-loose"
              onClick={() => {
                setShowDetails(!showDetails);
                dayCareRef.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-12 h-12 mx-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
