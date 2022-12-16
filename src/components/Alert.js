import React from "react";

export const Alert = ({ data }) => {
  return (
    <section
      id="events"
      className="max-w-5xl py-6 mx-auto bg-transparent"
      data-testid="alert-section"
    >
      <div className="flex gap-4 px-6 py-6 mx-auto transition-all bg-teal-100 shadow-sm hover:shadow-md md:rounded-lg md:max-w-prose">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mt-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
        </div>
        <div>
          <p
            className="mb-6 text-xl font-bold tracking-wider"
            data-testid="alert-title"
          >
            {data && data.Title}
          </p>
          <p className="leading-loose tracking-wide" data-testid="alert-body">
            {data && data.Body}
          </p>
        </div>
      </div>
    </section>
  );
};
