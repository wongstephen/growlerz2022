import React from "react";
import { PriceCard } from "./PriceCard";
import { PriceCardLoading } from "./PriceCardLoading";

export const Pricing = ({ data }) => {
  return (
    <section
      id="pricing"
      className="max-w-5xl py-20 mx-auto xl:py-24 bg-trasnparent"
    >
      <div className="container px-4 mx-auto mb-16">
        <div className="text-left">
          <span className="inline-block mb-4 text-base text-teal-500 uppercase font-semibold tracking-[.2rem]">
            Pricing
          </span>
          <h3 className="mb-6 text-3xl font-bold leading-snug tracking-tight text-gray-900 md:text-5xl lg:text-7xl md:leading-snug lg:leading-snug">
            Play Park
          </h3>
        </div>

        <div className="flex flex-wrap justify-center -mx-4">
          {data ? (
            <>
              <PriceCard
                title="Single Entry"
                mainPrice={data.park_1_entry}
                description={`One entry for one dog. Add additional dogs from the same
                household for $${data.park_1_entry_addl} more per entry.`}
                subdescription={"Puchase online or at the door"}
                link="#"
              />
              <PriceCard
                title="Punch Card"
                mainPrice={data.park_punch_card}
                popular={true}
                description={`11 entries for one dog. Add additional dogs from the same
                household for $${data.park_punch_card_addl} more.`}
                subdescription={`Get 11 entries for the price of 10`}
                link="#"
              />
              <PriceCard
                title="Membership"
                mainPrice={data.park_membership_monthly}
                mainPriceDesc="per month"
                popular={false}
                description={`Unlimited entries for one dog. Add additional dogs from
                the same household for $${data.park_membership_monthly_addl} more per month.`}
                subdescription={`Purchase a yearly membership for $${data.park_membership_yearly}. Each additional dog from the
                same household is $${data.park_membership_yearly_addl} 
                yearly.`}
                link="#"
              />
              <PriceCard
                title="Self-Wash Station"
                mainPrice={data.dog_self_wash}
                popular={false}
                description={`Bring your dirty dog to Growlerz. The Self wash station is now open!.`}
                subdescription="Bring and wash your dog during park hours except for
                Wednesdays."
                link=""
              />
            </>
          ) : (
            <>
              <PriceCardLoading />
              <PriceCardLoading />
              <PriceCardLoading />
              <PriceCardLoading />
            </>
          )}
        </div>
      </div>

      {/* Day Care */}
      <div className="container px-4 mx-auto">
        <div className="text-left">
          <h3 className="mb-6 text-3xl font-bold leading-snug tracking-tight text-gray-900 md:text-5xl lg:text-7xl md:leading-snug lg:leading-snug">
            Day Care
          </h3>
          <p className="mb-8 text-lg font-medium leading-loose text-gray-500 md:text-xl md:leading-loose">
            Multi-day passes can can be redeemed on non-consecutive days. Day
            Care bundles never expire. 5% Discount on Dog Daycare with any Play
            Park membership. Online reservations are highly encouraged, very
            limited availability for drop-ins.
          </p>
        </div>
        <div className="flex flex-wrap justify-center -mx-4">
          {data ? (
            <>
              <PriceCard
                title="Half Day"
                mainPrice={`22`}
                // mainPriceDesc="one dog"
                description={`5 hours day care for one dog. Add additional dogs from the same household for $16 more.`}
                subdescription={``}
                link="#"
              />
              <PriceCard
                title="Single Day"
                mainPrice={`38`}
                // mainPriceDesc="one dog"
                description={`Full day care for one dog. Add additional dogs from the same
                household for $22 more.`}
                subdescription={``}
                link="#"
              />
              <PriceCard
                title="5 Days"
                mainPrice={`180`}
                popular={true}
                // mainPriceDesc="one dog"
                description={`Five entries for one dog. Add additional dogs from the same household for $85 more.`}
                subdescription={`Save $10 over single day admissions`}
                link="#"
              />
              <PriceCard
                title="10 Days"
                mainPrice={`350`}
                popular={false}
                // mainPriceDesc="one dog"
                description={`Ten entries for one dog. Add additional dogs from the same household for $172.50 more.`}
                subdescription={`Save $30 over single day admissions`}
                link="#"
              />
            </>
          ) : (
            <>
              <PriceCardLoading />
              <PriceCardLoading />
              <PriceCardLoading />
              <PriceCardLoading />
            </>
          )}
        </div>
      </div>
    </section>
  );
};
