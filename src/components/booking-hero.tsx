import React from "react";
import BookingForm from "./booking-form";
function BookingHero() {
  return (
    <section className="bg-[url(/ready-bg-mobile.jpg)] md:bg-[url(/ready-bg-desktop.jpg)] bg-no-repeat bg-cover md:py-20 font-spartan text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className=" py-16 md:py-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-center">
            <h1 className="text-[32px] md:text-4xl font-bold md:text-left md:mb-16 mb-8">
              dine
            </h1>
            <h1 className="md:text-left text-[32px] md:text-[80px] font-light mb-4 md:mb-0">
              Reservations
            </h1>
            <p className="text-[16px] md:[20px] md:text-left md:max-w-[473px]">
              We can&apos;t wait to host you. If you have any special
              requirements please feel free to call on the phone number below.
              We&apos;ll be happy to accommodate you.
            </p>
          </div>
          <div className="flex justify-end">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingHero;
