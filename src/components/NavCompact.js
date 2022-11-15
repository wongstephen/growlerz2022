import React from "react";

export const NavCompact = (props) => {
  const close = (event) => {
    props.setOpen(false);
    console.log(event);
  };
  return (
    <div
      className="fixed top-0 left-0 z-50 w-full h-full transition-transform bg-gray-900 bg-opacity-50"
      onClick={close}
      name="eventClose"
    >
      <div
        className="fixed top-0 bottom-0 left-0 w-4/6 max-w-xs bg-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <nav className="relative h-full p-6 overflow-y-auto bg-white">
          <div className="flex flex-col justify-between h-full">
            <a
              className="inline-flex items-center text-xl font-bold tracking-widest text-gray-900 uppercase max-w-max md:text-3xl"
              href="#"
            >
              <img
                className="h-16 md:h-32"
                src={require("../assets/logo.png")}
                alt=""
              />
              {/* <span className="ml-2">Growlerz</span> */}
            </a>
            <ul className="py-6">
              <li>
                <a
                  className="block px-4 py-3 font-medium text-gray-500 rounded-md hover:text-gray-900 hover:bg-gray-50"
                  href="#services"
                  onClick={close}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-3 font-medium text-gray-500 rounded-md hover:text-gray-900 hover:bg-gray-50"
                  href="#pricing"
                  onClick={close}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-3 font-medium text-gray-500 rounded-md hover:text-gray-900 hover:bg-gray-50"
                  href="#"
                  onClick={close}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-3 font-medium text-gray-500 rounded-md hover:text-gray-900 hover:bg-gray-50"
                  href="#events"
                  onClick={close}
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-3 font-medium text-gray-500 rounded-md hover:text-gray-900 hover:bg-gray-50"
                  href="#faq"
                  onClick={close}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-3 font-medium text-gray-500 rounded-md hover:text-gray-900 hover:bg-gray-50"
                  href="#contact"
                  onClick={close}
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="flex flex-col flex-wrap">
              <div className="mb-2">
                <a
                  className="inline-block w-full px-4 py-2 text-sm font-medium leading-5 text-center text-gray-500 bg-transparent rounded-full shadow-lg hover:text-gray-900"
                  href="#"
                >
                  Log In
                </a>
              </div>
              <div className="">
                <a
                  className="inline-block w-full px-4 py-2 text-sm font-medium leading-5 text-center text-white bg-teal-500 rounded-full shadow-lg hover:bg-teal-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  href="#"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </nav>
        {/* Close Button */}
        <a
          className="absolute p-4 top-5 right-3"
          href="#"
          onClick={close}
          name="closeAction"
        >
          <svg
            width="12"
            height="12"
            viewbox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.94004 6L11.14 1.80667C11.2656 1.68113 11.3361 1.51087 11.3361 1.33333C11.3361 1.1558 11.2656 0.985537 11.14 0.860002C11.0145 0.734466 10.8442 0.66394 10.6667 0.66394C10.4892 0.66394 10.3189 0.734466 10.1934 0.860002L6.00004 5.06L1.80671 0.860002C1.68117 0.734466 1.51091 0.663941 1.33337 0.663941C1.15584 0.663941 0.985576 0.734466 0.860041 0.860002C0.734505 0.985537 0.66398 1.1558 0.66398 1.33333C0.66398 1.51087 0.734505 1.68113 0.860041 1.80667L5.06004 6L0.860041 10.1933C0.797555 10.2553 0.747959 10.329 0.714113 10.4103C0.680267 10.4915 0.662842 10.5787 0.662842 10.6667C0.662842 10.7547 0.680267 10.8418 0.714113 10.9231C0.747959 11.0043 0.797555 11.078 0.860041 11.14C0.922016 11.2025 0.99575 11.2521 1.07699 11.2859C1.15823 11.3198 1.24537 11.3372 1.33337 11.3372C1.42138 11.3372 1.50852 11.3198 1.58976 11.2859C1.671 11.2521 1.74473 11.2025 1.80671 11.14L6.00004 6.94L10.1934 11.14C10.2554 11.2025 10.3291 11.2521 10.4103 11.2859C10.4916 11.3198 10.5787 11.3372 10.6667 11.3372C10.7547 11.3372 10.8419 11.3198 10.9231 11.2859C11.0043 11.2521 11.0781 11.2025 11.14 11.14C11.2025 11.078 11.2521 11.0043 11.286 10.9231C11.3198 10.8418 11.3372 10.7547 11.3372 10.6667C11.3372 10.5787 11.3198 10.4915 11.286 10.4103C11.2521 10.329 11.2025 10.2553 11.14 10.1933L6.94004 6Z"
              fill="#556987"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};
