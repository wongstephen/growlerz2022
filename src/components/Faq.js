import React from "react";

export const Faq = () => {
  return (
    <>
      {/* FAQ */}
      <section
        id="faq"
        className="max-w-5xl py-24 mx-auto md:pt-32 bg-trasnparent"
      >
        <div className="container px-4 mx-auto">
          <div className="text-left">
            <span className="inline-block mb-4 text-base text-teal-500 uppercase font-semibold tracking-[.2rem]">
              FAQ
            </span>
            <h3 className="mb-6 text-3xl font-bold leading-snug tracking-tight text-gray-900 md:text-5xl lg:text-7xl md:leading-snug lg:leading-snug">
              Frequently Asked Questions
            </h3>
          </div>
          <div className="flex flex-wrap max-w-4xl pt-12 -mx-4">
            <div className="w-full px-4 mb-4 md:w-1/2">
              <div className="h-full group">
                <div className="relative h-full px-8 pt-16 pb-8 transition duration-200 bg-white rounded-md shadow-md group group-hover:bg-trasnparent hover:shadow-xl">
                  <div className="absolute top-0 inline-flex items-center justify-center w-16 h-16 transition duration-200 transform -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 bg-trasnparent"></div>
                  <h3 className="max-w-xs mb-4 text-xl font-bold leading-7 text-gray-900">
                    Are Dog Vaccinations Required?
                  </h3>
                  <p className="font-medium text-gray-500 transition duration-200 group-hover:text-gray-600">
                    Proof of current DHPP, Rabies, and Bordetella vaccinations
                    is required prior to admission. While Bordetella vaccination
                    does not fully eliminate the chance of getting kennel cough,
                    it does help bolster their immunity to it. Please note there
                    are waiting times required with Bordatella vaccinations: For
                    first time Bordatella vaccination we require a 14 day
                    waiting period before allowing entry to the facility. If
                    your dog has received a re-vaccination for Bordatella, we
                    require a 24 hour wait before entry. Growlerz also requires
                    all dogs to be on flea prevention. All guests are
                    responsible for ensuring that their records are up to date.
                    For your convenience please create a profile{" "}
                    <span className="text-red-500">TODO LINK: here</span> and
                    upload your vaccination records.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 mb-16 md:w-1/2">
              <div className="h-full group">
                <div className="relative h-full px-8 pt-16 pb-8 transition duration-200 bg-white rounded-md shadow-md group group-hover:bg-trasnparent hover:shadow-xl">
                  <div className="absolute top-0 inline-flex items-center justify-center w-16 h-16 transition duration-200 transform -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 bg-trasnparent"></div>
                  <h3 className="max-w-xs mb-4 text-xl font-bold leading-7 text-gray-900">
                    How can I submit vaccination records?
                  </h3>
                  <p className="font-medium text-gray-500 transition duration-200 group-hover:text-gray-600">
                    For your convenience, you can email them before you come to
                    Growlerz! We will review them and send you a confirmation
                    that your dog is approved for entry. This saves us form
                    having to turn you away at the door if something isn’t
                    correct or the vaccinations are incomplete. For the health
                    of everyone’s dogs, we are very strict on the vaccination
                    records.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 mb-16 md:w-1/2">
              <div className="h-full group">
                <div className="relative h-full px-8 pt-16 pb-8 transition duration-200 bg-white rounded-md shadow-md group group-hover:bg-trasnparent hover:shadow-xl">
                  <div className="absolute top-0 inline-flex items-center justify-center w-16 h-16 transition duration-200 transform -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 bg-trasnparent"></div>
                  <h3 className="max-w-xs mb-4 text-xl font-bold leading-7 text-gray-900">
                    What about spaying and neutering?
                  </h3>
                  <p className="font-medium text-gray-500 transition duration-200 group-hover:text-gray-600">
                    ALL dogs over 7 months of age must be spayed/neutered. at.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 mb-16 md:w-1/2">
              <div className="h-full group">
                <div className="relative h-full px-8 pt-16 pb-8 transition duration-200 bg-white rounded-md shadow-md group group-hover:bg-trasnparent hover:shadow-xl">
                  <div className="absolute top-0 inline-flex items-center justify-center w-16 h-16 transition duration-200 transform -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 bg-trasnparent"></div>
                  <h3 className="max-w-xs mb-4 text-xl font-bold leading-7 text-gray-900">
                    Do you serve food?
                  </h3>
                  <p className="font-medium text-gray-500 transition duration-200 group-hover:text-gray-600">
                    Growlerz does not serve food. BUT, you are welcome to bring
                    in food. There are some great eats in the neighborhood and
                    we occasionally have a food truck come to serve.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full px-4 mb-16 md:w-1/2">
              <div className="h-full group">
                <div className="relative h-full px-8 pt-16 pb-8 transition duration-200 bg-white rounded-md shadow-md group group-hover:bg-trasnparent hover:shadow-xl">
                  <div className="absolute top-0 inline-flex items-center justify-center w-16 h-16 transition duration-200 transform -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 bg-trasnparent"></div>
                  <h3 className="max-w-xs mb-4 text-xl font-bold leading-7 text-gray-900">
                    Who watches my dog in the play park?
                  </h3>
                  <p className="font-medium text-gray-500 transition duration-200 group-hover:text-gray-600">
                    While using the play park, you are responsible for your dogs
                    behavior and clean-up. There will be staff on duty and will
                    help some in certain situations (it takes a village!) but
                    they are not responsible for your dog. Dogs showing signs of
                    aggression or escalating behavior may be asked to take a
                    time out or leave.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 mb-16 md:w-1/2">
              <div className="h-full group">
                <div className="relative h-full px-8 pt-16 pb-8 transition duration-200 bg-white rounded-md shadow-md group group-hover:bg-trasnparent hover:shadow-xl">
                  <div className="absolute top-0 inline-flex items-center justify-center w-16 h-16 transition duration-200 transform -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 bg-trasnparent"></div>
                  <h3 className="max-w-xs mb-4 text-xl font-bold leading-7 text-gray-900">
                    Do you allow puppies?
                  </h3>
                  <p className="font-medium text-gray-500 transition duration-200 group-hover:text-gray-600">
                    YES! As long as they are at least 4 months and have the
                    required vaccinations submitted.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full px-4 mb-16 md:w-1/2">
              <div className="h-full group">
                <div className="relative h-full px-8 pt-16 pb-8 transition duration-200 bg-white rounded-md shadow-md group group-hover:bg-trasnparent hover:shadow-xl">
                  <div className="absolute top-0 inline-flex items-center justify-center w-16 h-16 transition duration-200 transform -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 bg-trasnparent"></div>
                  <h3 className="max-w-xs mb-4 text-xl font-bold leading-7 text-gray-900">
                    Do you allow kids?
                  </h3>
                  <p className="font-medium text-gray-500 transition duration-200 group-hover:text-gray-600">
                    Unfortunately, no. We are a 21 and older business. Sorry, no
                    one under 21 is allowed, including babies. It is the law.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 mb-16 md:w-1/2">
              <div className="h-full group">
                <div className="relative h-full px-8 pt-16 pb-8 transition duration-200 bg-white rounded-md shadow-md group group-hover:bg-trasnparent hover:shadow-xl">
                  <div className="absolute top-0 inline-flex items-center justify-center w-16 h-16 transition duration-200 transform -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 bg-trasnparent"></div>
                  <h3 className="max-w-xs mb-4 text-xl font-bold leading-7 text-gray-900">
                    Do I need a dog for entry?
                  </h3>
                  <p className="font-medium text-gray-500 transition duration-200 group-hover:text-gray-600">
                    The facility is primarily for guests to exercise their dogs,
                    but you are more than welcome to come in, grab a beer, and
                    get your dog fix watching the pups play. Or, stop in for a
                    growler fill to go!
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full px-4 mb-16 md:w-1/2">
              <div className="h-full group">
                <div className="relative h-full px-8 pt-16 pb-8 transition duration-200 bg-white rounded-md shadow-md group group-hover:bg-trasnparent hover:shadow-xl">
                  <div className="absolute top-0 inline-flex items-center justify-center w-16 h-16 transition duration-200 transform -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 bg-trasnparent"></div>
                  <h3 className="max-w-xs mb-4 text-xl font-bold leading-7 text-gray-900">
                    Do you offer private rentals?
                  </h3>
                  <p className="font-medium text-gray-500 transition duration-200 group-hover:text-gray-600">
                    We do! We offer full facility rentals or designated sections
                    for your special event. Send us an email found on our
                    contact page and ask for details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
