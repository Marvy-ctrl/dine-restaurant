import React from "react";
import Image from "next/image";

function EnjoyablePlaces() {
  return (
    <section className="bg-white font-spartan pb-10 md:pb-0">
      <div className="container mx-auto px-4 md:px-8 gap-14 items-center space-y-12">
        <div className="w-full grid grid-cols-1 items-center gap-10 md:gap-20 md:grid-cols-2">
          <div className="h-[400px] w-full md:w-[540px] md:h-[700px] -mt-15">
            <Image
              src="/enjoyable-place-desktop.jpg"
              alt="places"
              width={500}
              height={700}
              className="h-full w-full shadow-md object-cover"
            />
          </div>

          <div className="space-y-4 max-w-[400px]">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
              Enjoyable place for all the family
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our relaxed surroundings make dining with us a great experience
              for everyone. We can even arrange a tour of the farm before your
              meal.
            </p>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 items-center gap-25 md:gap-20 md:grid-cols-2">
          <div className="h-[400px] order-1 md:order-2 w-full md:w-[540px] md:h-[700px] -mb-15">
            <Image
              src="/locally-sourced-desktop.jpg"
              alt="places"
              width={500}
              height={700}
              className="h-full w-full shadow-md object-cover"
            />
          </div>

          <div className="space-y-4 max-w-[400px] order-2 md:order-1">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
              The most locally sourced food
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              All our ingredients come directly from our farm or local fishery.
              So you can be sure that you’re eating the freshest, most
              sustainable food.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EnjoyablePlaces;
