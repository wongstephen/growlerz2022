import React from "react";

export const Pricing = () => {
  return (
    <section
      id="pricing"
      class="py-20 xl:py-24 bg-trasnparent max-w-5xl mx-auto"
    >
      <div class="container px-4 mx-auto">
        <div class="text-left">
          <span class="inline-block mb-4 text-base text-teal-500 uppercase font-semibold tracking-[.2rem]">
            Pricing
          </span>
          <h3 class="mb-6 text-3xl md:text-5xl lg:text-7xl text-gray-900 font-bold tracking-tight leading-snug md:leading-snug lg:leading-snug">
            Play Park
          </h3>
          {/* <p class="mb-8 text-lg md:text-xl text-gray-500 font-medium leading-loose md:leading-loose">
            Maecenas vehicula elit quis rutrum maximus. Sed finibus neque quis
            tellus mattis, placerat mattis mi varius. Proin pharetra egetdiam et
            sollicitudin.
          </p> */}
        </div>
        <div class="flex flex-wrap justify-center -mx-4">
          <div class="w-full md:w-1/2 p-4">
            <div class="flex flex-col pt-8 pb-8 bg-white rounded-md shadow-md hover:scale-105 transition duration-500">
              <div class="px-8 pb-8">
                <h3 class="mb-6 text-lg md:text-xl text-gray-800 font-medium">
                  Single Entry
                </h3>
                <div class="mb-6">
                  <span class="relative -top-10 right-1 text-3xl text-gray-900 font-bold">
                    $
                  </span>
                  <span class="text-6xl md:text-7xl text-gray-900 font-semibold">
                    12
                  </span>
                  {/* <span class="inline-block ml-1 text-gray-500 font-semibold">
                    per month
                  </span> */}
                </div>
                <p class="mb-6 text-gray-400 font-medium">
                  One entry for one dog. Add additional dogs from the same
                  family for $6 more per entry.
                </p>
                <a
                  class="inline-block py-4 px-7 mb-4 w-full text-base md:text-lg leading-6 text-teal-50 font-medium text-center bg-teal-500 hover:bg-teal-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-full shadow-lg"
                  href="#"
                >
                  Get Started
                </a>
              </div>
              <div class="border-b border-gray-100"></div>
              <ul class="self-start px-8 pt-8">
                <li class="flex items-center mb-3 text-gray-500 font-medium">
                  <span>Puchase online or at the door</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Punch Card */}
          <div class="w-full md:w-1/2 p-4">
            <div class="flex flex-col pt-8 pb-8 bg-white rounded-md shadow-md hover:scale-105 transition duration-500">
              <div class="px-8 pb-8">
                <div class="flex flex-wrap items-center justify-between mb-6">
                  <h3 class="mr-3 text-lg md:text-xl text-gray-800 font-medium">
                    Punch Card
                  </h3>
                  <span class="inline-block py-px px-2 text-xs leading-5 text-white bg-yellow-500 font-medium uppercase rounded-full">
                    Popular
                  </span>
                </div>
                <div class="mb-6">
                  <span class="relative -top-10 right-1 text-3xl text-gray-900 font-bold">
                    $
                  </span>
                  <span class="text-6xl md:text-7xl text-gray-900 font-semibold">
                    100
                  </span>
                  {/* <span class="inline-block ml-1 text-gray-500 font-semibold">
                    per month
                  </span> */}
                </div>
                <p class="mb-6 text-gray-400 font-medium">
                  11 entries for one dog. Add additional dogs from the same
                  family for $70 more.
                </p>
                <a
                  class="inline-block py-4 px-7 mb-4 w-full text-base md:text-lg leading-6 text-teal-50 font-medium text-center bg-teal-500 hover:bg-teal-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-full shadow-lg"
                  href="#"
                >
                  Get Started
                </a>
              </div>
              <div class="border-b border-gray-100"></div>
              <ul class="self-start px-8 pt-8">
                <li class="flex items-center mb-3 text-gray-500 font-medium">
                  <span>Get 11 entries for the price of 10</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Membership Card */}
          <div class="w-full md:w-1/2 p-4">
            <div class="flex flex-col pt-8 pb-8 bg-white rounded-md shadow-md hover:scale-105 transition duration-500">
              <div class="px-8 pb-8">
                <div class="flex flex-wrap items-center justify-between mb-6">
                  <h3 class="mr-3 text-lg md:text-xl text-gray-800 font-medium">
                    Membership
                  </h3>
                  {/* <span class="inline-block py-px px-2 text-xs leading-5 text-white bg-yellow-500 font-medium uppercase rounded-full">
                    Popular
                  </span> */}
                </div>
                <div class="mb-6">
                  <span class="relative -top-10 right-1 text-3xl text-gray-900 font-bold">
                    $
                  </span>
                  <span class="text-6xl md:text-7xl text-gray-900 font-semibold">
                    49
                  </span>
                  <span class="inline-block ml-1 text-gray-500 font-semibold">
                    per month
                  </span>
                </div>
                <p class="mb-6 text-gray-400 font-medium">
                  Unlimited entries for one dog. Add additional dogs from the
                  same family for $20 more per month.
                </p>
                <a
                  class="inline-block py-4 px-7 mb-4 w-full text-base md:text-lg leading-6 text-teal-50 font-medium text-center bg-teal-500 hover:bg-teal-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-full shadow-lg"
                  href="#"
                >
                  Get Started
                </a>
              </div>
              <div class="border-b border-gray-100"></div>
              <ul class="self-start px-8 pt-8">
                <li class="flex items-center mb-3 text-gray-500 font-medium">
                  <span>
                    Save by purchasing a yearly membership for $539. Each
                    additional dog of the same family is $220 yearly.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Membership Card */}
          <div class="w-full md:w-1/2 p-4">
            <div class="flex flex-col pt-8 pb-8 bg-white rounded-md shadow-md hover:scale-105 transition duration-500">
              <div class="px-8 pb-8">
                <div class="flex flex-wrap items-center justify-between mb-6">
                  <h3 class="mr-3 text-lg md:text-xl text-gray-800 font-medium">
                    Self-Wash Station
                  </h3>
                  {/* <span class="inline-block py-px px-2 text-xs leading-5 text-white bg-yellow-500 font-medium uppercase rounded-full">
                    Popular
                  </span> */}
                </div>
                <div class="mb-6">
                  <span class="relative -top-10 right-1 text-3xl text-gray-900 font-bold">
                    $
                  </span>
                  <span class="text-6xl md:text-7xl text-gray-900 font-semibold">
                    25
                  </span>
                  <span class="inline-block ml-1 text-gray-500 font-semibold">
                    per use
                  </span>
                </div>
                <p class="mb-6 text-gray-400 font-medium">
                  Bring your dity dog to Growlerz. The Self wash station is now
                  open!
                </p>
                <a
                  class="inline-block py-4 px-7 mb-4 w-full text-base md:text-lg leading-6 text-teal-50 font-medium text-center bg-teal-500 hover:bg-teal-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-full shadow-lg"
                  href="#"
                >
                  Get Started
                </a>
              </div>
              <div class="border-b border-gray-100"></div>
              <ul class="self-start px-8 pt-8">
                <li class="flex items-center mb-3 text-gray-500 font-medium">
                  <span>
                    Bring and wash your dog during park hours, excluding
                    Wednesdays. First come first serve.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Day Care */}
      <div class="container px-4 mx-auto">
        {/* Start 1 Day */}
        <div class="text-left">
          <h3 class="mb-6 text-3xl md:text-5xl lg:text-7xl text-gray-900 font-bold tracking-tight leading-snug md:leading-snug lg:leading-snug">
            Day Care
          </h3>
          <p class="mb-8 text-lg md:text-xl text-gray-500 font-medium leading-loose md:leading-loose">
            Multi-day passes can can be redeemed on non-consecutive days. Day
            Care bundles never expire. 5% Discount on Dog Daycare with any Play
            Park membership. Online reservations are highly encouraged, drop-ins
            have very limited availability.
          </p>
        </div>
        <div class="flex flex-wrap justify-center -mx-4">
          <div class="w-full md:w-1/2 p-4">
            <div class="flex flex-col pt-8 pb-8 bg-white rounded-md shadow-md hover:scale-105 transition duration-500">
              <div class="px-8 pb-8">
                <h3 class="mb-6 text-lg md:text-xl text-gray-800 font-medium">
                  Single Day
                </h3>
                <div class="mb-6">
                  <span class="relative -top-10 right-1 text-3xl text-gray-900 font-bold">
                    $
                  </span>
                  <span class="text-6xl md:text-7xl text-gray-900 font-semibold">
                    38
                  </span>
                  <span class="inline-block ml-1 text-gray-500 font-semibold">
                    one dog
                  </span>
                </div>
                <p class="mb-6 text-gray-400 font-medium">
                  One entry for one dog. Add additional dogs from the same
                  family for $20 more.
                </p>
                <a
                  class="inline-block py-4 px-7 mb-4 w-full text-base md:text-lg leading-6 text-teal-50 font-medium text-center bg-teal-500 hover:bg-teal-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-full shadow-lg"
                  href="#"
                >
                  Get Started
                </a>
              </div>
              <div class="border-b border-gray-100"></div>
              <ul class="self-start px-8 pt-8">
                <li class="flex items-center mb-3 text-gray-500 font-medium">
                  <span>
                    1/2 day is $22 for the first dog, and $16 additional dogs.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* End 1 day */}

          {/* 5 days */}
          <div class="w-full md:w-1/2 p-4">
            <div class="flex flex-col pt-8 pb-8 bg-white rounded-md shadow-md hover:scale-105 transition duration-500">
              <div class="px-8 pb-8">
                <div class="flex flex-wrap items-center justify-between mb-6">
                  <h3 class="mr-3 text-lg md:text-xl text-gray-800 font-medium">
                    5 Days
                  </h3>
                  <span class="inline-block py-px px-2 text-xs leading-5 text-white bg-yellow-500 font-medium uppercase rounded-full">
                    Popular
                  </span>
                </div>
                <div class="mb-6">
                  <span class="relative -top-10 right-1 text-3xl text-gray-900 font-bold">
                    $
                  </span>
                  <span class="text-6xl md:text-7xl text-gray-900 font-semibold">
                    180
                  </span>
                  {/* <span class="inline-block ml-1 text-gray-500 font-semibold">
                    per month
                  </span> */}
                </div>
                <p class="mb-6 text-gray-400 font-medium">
                  Five entries for one dog. Add additional dogs from the same
                  family for $85 more.
                </p>
                <a
                  class="inline-block py-4 px-7 mb-4 w-full text-base md:text-lg leading-6 text-teal-50 font-medium text-center bg-teal-500 hover:bg-teal-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-full shadow-lg"
                  href="#"
                >
                  Get Started
                </a>
              </div>
              <div class="border-b border-gray-100"></div>
              <ul class="self-start px-8 pt-8">
                <li class="flex items-center mb-3 text-gray-500 font-medium">
                  <span>Save $10 over single day admissions</span>
                </li>
              </ul>
            </div>
          </div>
          {/* End 5 Days */}

          {/* 10 days */}
          <div class="w-full md:w-1/2 p-4">
            <div class="flex flex-col pt-8 pb-8 bg-white rounded-md shadow-md hover:scale-105 transition duration-500">
              <div class="px-8 pb-8">
                <div class="flex flex-wrap items-center justify-between mb-6">
                  <h3 class="mr-3 text-lg md:text-xl text-gray-800 font-medium">
                    10 Days
                  </h3>
                  {/* <span class="inline-block py-px px-2 text-xs leading-5 text-white bg-yellow-500 font-medium uppercase rounded-full">
                    Popular
                  </span> */}
                </div>
                <div class="mb-6">
                  <span class="relative -top-10 right-1 text-3xl text-gray-900 font-bold">
                    $
                  </span>
                  <span class="text-6xl md:text-7xl text-gray-900 font-semibold">
                    350
                  </span>
                  {/* <span class="inline-block ml-1 text-gray-500 font-semibold">
                    per month
                  </span> */}
                </div>
                <p class="mb-6 text-gray-400 font-medium">
                  Ten entries for one dog. Add additional dogs from the same
                  family for $172.50 more.
                </p>
                <a
                  class="inline-block py-4 px-7 mb-4 w-full text-base md:text-lg leading-6 text-teal-50 font-medium text-center bg-teal-500 hover:bg-teal-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-full shadow-lg"
                  href="#"
                >
                  Get Started
                </a>
              </div>
              <div class="border-b border-gray-100"></div>
              <ul class="self-start px-8 pt-8">
                <li class="flex items-center mb-3 text-gray-500 font-medium">
                  <span>Save $30 over single day admissions</span>
                </li>
              </ul>
            </div>
          </div>
          {/* End 10 Days */}
        </div>
      </div>
    </section>
  );
};
