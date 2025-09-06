import React from "react";
import Button from "./ui/button";
function Ready() {
  return (
    <section className="bg-[url(/ready-bg-mobile.jpg)] md:bg-[url(/ready-bg-desktop.jpg)] bg-no-repeat bg-cover py-20 font-spartan text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 text-center items-center gap-6 l">
          <div className="md:col-span-3">
            <h1 className="md:text-left text-[32px] md:text-[48px] font-bold ">
              Ready to make a reservation?
            </h1>
          </div>
          <div className=" md:text-right">
            <Button className=" border hover:border-black hover:bg-white hover:text-black text-[18px] font-semibold">
              Book A Table
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ready;
