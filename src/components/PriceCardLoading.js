import React from "react";

export const PriceCardLoading = () => {
  return (
    <div
      className="w-full p-4 md:w-1/2 animate-pulse"
      data-testid="price-loading"
    >
      <div className="flex flex-col pt-8 pb-8 bg-white rounded-md shadow-md ">
        <div className="px-8 pb-8">
          <div className="flex flex-wrap items-center justify-between w-20 mb-6invisible">
            <h3 className="invisible mr-3 text-lg font-medium text-gray-800 md:text-xl">
              title
            </h3>
          </div>
          <div className="mb-6 bg-slate-200">
            <span className="relative invisible text-3xl font-bold text-gray-900 -top-10 right-1">
              $
            </span>
            <span className="invisible text-6xl font-semibold text-gray-900 md:text-7xl">
              mainPrice
            </span>
            <span className="invisible inline-block ml-1 font-semibold text-gray-500">
              mainPriceDesc
            </span>
          </div>
          <p className="mb-6 font-medium text-gray-400 bg-slate-200">
            <span className="invisible">
              text
              <br />
              text
            </span>
          </p>

          <div className="inline-block w-full py-4 mb-4 text-base font-medium leading-6 text-center rounded-full shadow-lg bg-slate-200 px-7 md:text-lg">
            <span className="invisible">Get Started</span>
          </div>
        </div>

        <>
          <div className="border-b border-gray-100"></div>
          <ul className="self-start px-8 pt-8">
            <li className="flex items-center mb-3 font-medium text-gray-500 bg-slate-200">
              <span className="invisible">
                text text text text text text text text text
              </span>
            </li>
          </ul>
        </>
      </div>
    </div>
  );
};
