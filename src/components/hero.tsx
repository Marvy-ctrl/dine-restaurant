import React from "react";
import Image from "next/image";
import Button from "./ui/button";
function Hero() {
  return (
    <section className="bg-[url(/hero-mobile.jpg)] font-spartan bg-no-repeat bg-cover md:bg-[url(/hero-bg-desktop.jpg)] w-full min-h-screen ">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-white text-center md:text-left max-w-[500px] md:max-w-[500px] pt-60 md:pt-14">
          <h1 className="text-4xl font-extrabold mt-12 md:mt-5">dine</h1>
          <h1 className="mt-6 md:mt-30 text-4xl md:text-7xl font-light">
            Exclusive dining since 1989
          </h1>
          <p className="break-normal md:break-keep md:text-lg my-6">
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.{" "}
          </p>
          <Button className="bg-black border border-white hover:bg-white hover:text-black text-[18px]">
            Book A Table
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
