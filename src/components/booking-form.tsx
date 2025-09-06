"use client";
import { useState } from "react";
import React from "react";
import Button from "./ui/button";
function BookingForm() {
  const [people, setPeople] = useState(4);

  return (
    <div className=" bg-white text-gray-900 p-8 md:w-[450px] md:h-[500px] -mb-20 md:-mb-32">
      <form className="space-y-6 ">
        <input
          type="text"
          placeholder="Name"
          className="w-full border-b border-gray-300 text-[20px]  py-2"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border-b border-gray-300 text-[20px] py-2"
        />

        <div>
          <label className="text-[20px] mb-1">Pick a date</label>
          <input
            type="date"
            className="w-full border-b border-gray-300  py-2"
          />
        </div>

        <div>
          <label className=" text-[20px] mb-1">Pick a time</label>
          <input type="time" className="w-full border-b border-gray-300 py-2" />
        </div>
        <div className="flex justify-between items-center  border-b border-gray-300">
          <button
            type="button"
            onClick={() => setPeople((prev) => (prev > 1 ? prev - 1 : 1))}
            className="px-3 py-1"
          >
            -
          </button>
          <span className="font-semibold">{people} people</span>

          <button
            type="button"
            onClick={() => setPeople(people + 1)}
            className="px-3 py-1"
          >
            +
          </button>
        </div>
        <div className="flex justify-around">
          <button
            onClick={() => alert("Thanks for applying")}
            className="px-10 py-3.5 cursor-pointer bg-black text-white border hover:border-black hover:bg-white hover:text-black text-[17px] font-semibold"
          >
            MAKE RESERVATION{" "}
          </button>
        </div>
      </form>
    </div>
  );
}
export default BookingForm;
