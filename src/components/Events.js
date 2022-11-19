import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { wpPosts } from "../api/wp";

export const Events = () => {
  const [postData, setPostData] = useState();
  useEffect(() => {
    const getData = async () => {
      const res = await wpPosts();
      setPostData(res);
      console.log(res);
    };
    getData();
  }, []);

  return (
    <>
      <section
        id="events"
        class="py-24 md:pt-32 bg-trasnparent max-w-5xl mx-auto"
      >
        {" "}
        <div class="container px-4 mx-auto">
          <div class="text-left">
            <span class="inline-block mb-4 text-base text-teal-500 uppercase font-semibold tracking-[.2rem]">
              Annoucements
            </span>
            <h3 class="mb-6 text-3xl md:text-5xl lg:text-7xl text-gray-900 font-bold tracking-tight leading-snug md:leading-snug lg:leading-snug">
              News and Events
            </h3>
          </div>
          {postData ? (
            postData.map((obj, idx) => (
              <div class="flex flex-col -mx-4 pt-12 max-w-4xl" key={idx}>
                <div class="w-full md:w-full px-4 mb-4">
                  <div class="group h-full">
                    <div class="group relative h-full px-8 pt-16 pb-8 bg-white group-hover:bg-trasnparent rounded-md shadow-md hover:shadow-xl transition duration-200">
                      <h3 class="mb-4 text-xl leading-7 text-gray-900 font-bold">
                        {obj.title.rendered}
                      </h3>
                      <p
                        class="text-gray-500 group-hover:text-gray-600 font-medium transition duration-200"
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
