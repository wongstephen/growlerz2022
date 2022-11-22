import React, { useState } from "react";

const parkRules = {
  parkrules: [
    {
      id: 1,
      title: "HEALTH FIRST",
      desc: "All dogs must be vaccinated for bordetella, rabies, and DHPP (distemper, hepatitis, parainfluenza and parvovirus) Dog parents must provide proof of vaccinations in advance by emailing it to us at or registering their dog with us here. \n\nAll dogs over 7 months of age must be neutered or spayed",
    },
    {
      id: 2,
      title: "PLAY NICE",
      desc: "All dogs who enter our play park must be properly socialized and get along well with other dogs. Dogs showing aggressive behavior, excessive barking, or destructive actions may have to be removed from the play park. \n\nPsst - does your dog have trouble playing well with others? Check out our short-term, private rental option to exercise your dog in a safe space.",
    },
    {
      id: 3,
      title: "SCOOP THE POOP",
      desc: "You know the drill. If/when your dog poops in the play park it is your responsibility to pick it up and properly dispose of it in one of our provided trash cans. We have poop bags available so you have no excuse!",
    },
    {
      id: 4,
      title: "LEAVE MR. SQUEEKY @ HOME",
      desc: "Dogs can get very protective over their toys, so we ask that you don’t bring dog toys into the park. We provide tennis balls for fetch play, please leave the balls in the park when it’s time for you to go.",
    },
    {
      id: 5,
      title: "PAY ATTENTION",
      desc: "Your dog is your responsibility. Make sure to keep an eye on him or her at all times to ensure the safety of all the dogs in the park.",
    },
    {
      id: 6,
      title: "HUMAN CHILDREN",
      desc: "Sorry, but human children (and anyone else under the age of 21) are not allowed inside Growlerz. \n\n Have questions about our play park or day care? Check out our Frequently Asked Questions page for answers!",
    },
    {
      id: 7,
      title: "EXCESSIVE BARKING",
      desc: "We get it - dogs bark! It can't be helped. If your dog is excessively barking, however, we will ask you to leash your dog until he calms down. \n\n If the behavior persists we will have to ask you to leave the park. Excessive barking agitates other dogs and creates a stressful environment for the rest of our guests.",
    },
    {
      id: 8,
      title: "MANAGE PLAY",
      desc: "Manage how your dog plays with other dogs. Do not allow your dog to mount another dog, 'go after' another dog, or let multiple dogs gang up on another dog.",
    },
  ],
};

export const PlayPark = () => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <section id="play-park">
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
          Patrons using the play park will be responsible for monitoring their
          dog’s behavior and for cleaning up after their dog(s). Any aggressive
          behavior or fighting will not be tolerated. First offense: all
          involved dogs will be asked to be put on a leash. Second offense: dogs
          will be asked to leave that day. Third offense, dogs will no longer be
          allowed to access services. Payments for services will be forfeited
          (at a pro-rated rate as applicable).
          <p className="my-8 text-2xl font-medium text-center">Park Rules</p>
          <div>
            <ul>
              {parkRules.parkrules.map((rule) => (
                <li className="mb-4">
                  <span className="font-bold leading-loose upper">
                    {rule.title}
                  </span>{" "}
                  <span className="font-normal">{rule.desc}</span>
                </li>
              ))}
            </ul>
            <a
              className="mb-8 text-lg font-medium leading-loose text-teal-500 cursor-pointer r md:text-xl md:leading-loose"
              onClick={() => {
                setShowDetails(!showDetails);
              }}
              href="#services"
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
            </a>
          </div>
        </div>
      )}
    </section>
  );
};
