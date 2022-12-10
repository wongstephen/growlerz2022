import React from "react";
import { PriceCard } from "./PriceCard";
import { PriceCardLoading } from "./PriceCardLoading";

export const Pricing = ({ price }) => {
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
          {price ? (
            <>
              <PriceCard
                title="Single Entry"
                mainPrice={price.data.attributes.park_single}
                description={`One entry for one dog. Add additional dogs from the same
                household for $${price.data.attributes.park_single_add} more per entry.`}
                subdescription={["Puchase at the door"]}
                // link="#"
              />
              <PriceCard
                title="Punch Card"
                mainPrice={price.data.attributes.park_punch}
                popular={true}
                description={`Get 11 entries for the price of 10, for one dog. Add additional dogs from the same
                household for $${price.data.attributes.park_punch_add} more.`}
                subdescription={[`Purchase online or at the door.`]}
                // link=""
              />
              <PriceCard
                title="Membership"
                mainPrice={price.data.attributes.park_monthly}
                mainPriceDesc="per month"
                popular={false}
                description={`Unlimited entries for one dog. Add additional dogs from
                the same household for $${price.data.attributes.park_monthly_add} more per month. `}
                subdescription={[
                  `Purchase a yearly membership for $${price.data.attributes.park_yearly}. Additional dog from the
                same household is $${price.data.attributes.park_yearly_add}
                yearly.`,
                ]}
                link="https://growlerz.portal.gingrapp.com/#/secure/shop/package-retail/false/package"
              />
              <PriceCard
                title="Self-Wash Station"
                mainPrice={price.data.attributes.park_self_wash}
                popular={false}
                description={`Bring your dirty dog to Growlerz. The Self wash station is now open!`}
                subdescription={[
                  "Bring and wash your dog during park hours except for Wednesdays.",
                  "Members get 12% off regular price",
                ]}
                // link=""
              />
            </>
          ) : (
            <>
              {Array(4)
                .fill("")
                .map((obj, idx) => {
                  return <PriceCardLoading key={idx} />;
                })}
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
            Multi-day passes may be redeemed on non-consecutive days. Day Care
            bundles never expire. 5% discount on Dog Daycare with any Play Park
            membership. Online reservations are highly encouraged as drop-ins
            have very limited availability. Dog daycare discount valid on full
            day and full day packages only. Ask about discounted pricing
            available for additional dogs from the same household.
          </p>
        </div>
        <div className="flex flex-wrap justify-center -mx-4">
          {price ? (
            <>
              <PriceCard
                title="Half Day"
                mainPrice={price.data.attributes.daycare_halfDay}
                description={`5 hours day care for one dog.`}
                subdescription={[]}
                link="https://growlerz.portal.gingrapp.com/#/secure/shop/package-retail/false/package"
              />
              <PriceCard
                title="Single Day"
                mainPrice={price.data.attributes.daycare_day}
                description={`Full day care for one dog. `}
                subdescription={[]}
                link="https://growlerz.portal.gingrapp.com/#/secure/shop/package-retail/false/package"
              />
              <PriceCard
                title="5 Days"
                mainPrice={price.data.attributes.daycare_fiveDays}
                popular={true}
                description={`Five entries for one dog. `}
                subdescription={[`Save $10 over single day admissions.`]}
                link="https://growlerz.portal.gingrapp.com/#/secure/shop/package-retail/false/package"
              />
              <PriceCard
                title="10 Days"
                mainPrice={price.data.attributes.daycare_tenDays}
                popular={false}
                description={`Ten entries for one dog.`}
                subdescription={[`Save $30 over single day admissions.`]}
                link="https://growlerz.portal.gingrapp.com/#/secure/shop/package-retail/false/package"
              />
            </>
          ) : (
            <>
              {Array(4)
                .fill("")
                .map((obj, idx) => {
                  return <PriceCardLoading key={idx} />;
                })}
            </>
          )}
        </div>
      </div>
    </section>
  );
};
