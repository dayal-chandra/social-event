import React from "react";

const FrequentAsked = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 space-y-5">
      <h1 className="text-3xl  font-bold text-center pb-8">
        Frequently Asked Question
      </h1>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="checkbox" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">What is Neighborly?</div>
        <div className="collapse-content text-sm">
          Neighborly is an online platform, where you can find and join local
          social event.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="checkbox" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          How to join a social event?
        </div>
        <div className="collapse-content text-sm">
          First create an account, the browse upcoming events section, see
          details and join.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="checkbox" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Can i post about my local event?
        </div>
        <div className="collapse-content text-sm">
          Absolutely, You can post about your local event so that everyone can
          join the event.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="checkbox" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Is there any subscription needed for joining event?
        </div>
        <div className="collapse-content text-sm">
          No, not in our Web App, but this may differ in the event type.
        </div>
      </div>
    </div>
  );
};

export default FrequentAsked;
