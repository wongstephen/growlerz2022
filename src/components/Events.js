import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { wpPosts } from "../api/wp";

export const Events = () => {
  // Backend request for wp-json/wp/v2/posts
  const [postData, setPostData] = useState();
  useEffect(() => {
    const getData = async () => {
      const res = await wpPosts();
      setPostData(res);
    };
    getData();
  }, []);

  return (
    <>
      <section
        id="events"
        className="max-w-5xl py-24 mx-auto md:pt-32 bg-trasnparent"
      >
        {" "}
        <div className="container px-4 mx-auto">
          <div className="text-left">
            <span className="inline-block mb-4 text-base text-teal-500 uppercase font-semibold tracking-[.2rem]">
              Annoucements
            </span>
            <h3 className="mb-6 text-3xl font-bold leading-snug tracking-tight text-gray-900 md:text-5xl lg:text-7xl md:leading-snug lg:leading-snug">
              News and Events
            </h3>
          </div>
          {postData ? (
            postData.map((obj, idx) => (
              <div className="flex flex-col max-w-4xl pt-12 -mx-4" key={idx}>
                <div className="w-full px-4 mb-4 md:w-full">
                  <div className="h-full group">
                    <div className="relative h-full px-8 pt-16 pb-8 transition duration-200 bg-white rounded-md shadow-md group group-hover:bg-trasnparent hover:shadow-xl">
                      <h3 className="mb-4 text-xl font-bold leading-7 text-gray-900">
                        {obj.title.rendered}
                      </h3>
                      <p
                        className="font-medium text-gray-500 transition duration-200 group-hover:text-gray-600"
                        dangerouslySetInnerHTML={{
                          __html: obj.content.rendered,
                        }}
                      ></p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
        {/*  */}
      </section>
    </>
  );
};
