import React, { useState } from "react";

export const PlayPark = () => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <section id="play-park">
      <p
        className="mb-8 text-lg font-medium leading-loose text-teal-500 cursor-pointer md:text-xl md:leading-loose"
        onClick={() => {
          setShowDetails(!showDetails);
        }}
      >
        Click here for more details{" "}
        {!showDetails ? (
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
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
            />
          </svg>
        ) : (
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
        )}
      </p>
      {showDetails && (
        <div className="pl-8 mb-8 text-lg font-medium leading-loose text-gray-500 md:text-xl md:leading-loose">
          Patrons using the play park will be responsible for monitoring their
          dog’s behavior and for cleaning up after their dog(s). Any aggressive
          behavior or fighting will not be tolerated. First offense: all
          involved dogs will be asked to be put on a leash. Second offense: dogs
          will be asked to leave that day. Third offense, dogs will no longer be
          allowed to access services. Payments for services will be forfeited
          (at a pro-rated rate as applicable).
          <p className="my-8">Park Rules</p>
          <div>
            <ul>
              <li className="mb-4">
                <span>HEALTH FIRST </span>All dogs must be vaccinated for
                bordetella, rabies, and DHPP (distemper, hepatitis,
                parainfluenza and parvovirus). Dog parents must provide proof of
                vaccinations in advance by emailing it to us at
                growlerzseattle@gmail.com or registering their dog with us here.
                All dogs over 7 months of age must be neutered or spayed.
              </li>
              <li>
                <span>HEALTH FIRST </span>All dogs must be vaccinated for
                bordetella, rabies, and DHPP (distemper, hepatitis,
                parainfluenza and parvovirus). Dog parents must provide proof of
                vaccinations in advance by emailing it to us at
                growlerzseattle@gmail.com or registering their dog with us here.
                All dogs over 7 months of age must be neutered or spayed.
              </li>
              <li>
                <span>HEALTH FIRST </span>All dogs must be vaccinated for
                bordetella, rabies, and DHPP (distemper, hepatitis,
                parainfluenza and parvovirus). Dog parents must provide proof of
                vaccinations in advance by emailing it to us at
                growlerzseattle@gmail.com or registering their dog with us here.
                All dogs over 7 months of age must be neutered or spayed.
              </li>
              <li>
                <span>HEALTH FIRST </span>All dogs must be vaccinated for
                bordetella, rabies, and DHPP (distemper, hepatitis,
                parainfluenza and parvovirus). Dog parents must provide proof of
                vaccinations in advance by emailing it to us at
                growlerzseattle@gmail.com or registering their dog with us here.
                All dogs over 7 months of age must be neutered or spayed.
              </li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};
