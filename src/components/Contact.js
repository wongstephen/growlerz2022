import React from 'react'

export const Contact = () => {
  return (
    <section class="py-24 bg-trasnparent max-w-5xl mx-auto">
            <div class="container px-4 mx-auto">
                <div class="relative mb-12 mx-auto text-left">
                    <div class="relative">
                        <span class="inline-block mb-4 text-base text-teal-500 uppercase font-semibold tracking-[.2rem]">
                            Contact, Hours, Location
                        </span>
                        <h2 class="mb-6 text-3xl md:text-5xl lg:text-7xl text-gray-900 font-bold tracking-tight leading-snug md:leading-snug lg:leading-snug">
                            Testimonial
                        </h2>
                        <p class="text-lg md:text-xl text-gray-500 font-medium leading-loose md:leading-loose">
                            Sed volutpat tincidunt ante, id suscipit velit condimentum at. Nam aliquet auctor imperdiet. In volutpat dui sed porta posuere.
                        </p>
                    </div>
                </div>
                <div class="text-left mb-12">
                    <img class="w-48 h-48 mx-right mb-6 rounded-full border-8 border-teal-100"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                        alt="">
                    <h3 class="mb-2 text-xl md:text-2xl font-semibold">Jerry Seinfeld</h3>
                    <span class="text-lg text-gray-500 font-medium">CEO &amp; Founder at Bigmouth.co</span>
                </div>
                <div class="text-left">
                    <button class="inline-block h-3 w-3 mr-3 rounded-full bg-gray-100"></button>
                    <button class="inline-block h-3 w-3 mr-3 rounded-full bg-teal-500"></button>
                    <button class="inline-block h-3 w-3 rounded-full bg-gray-100"></button>
                </div>
            </div>
        </section>
  )
}
