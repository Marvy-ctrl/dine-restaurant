"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "./ui/button";
import { eventLists } from "@/data/event-lists";
import Link from "next/link";

function Events() {
  const [events, setEvents] = useState({
    family: true,
    special: false,
    social: false,
  });

  return (
    <section className="bg-white font-spartan text-black py-20 md:py-[170px]">
      <div className="container mx-auto px-4 md:px-8 ">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-12">
          <div>
            <Image
              src={
                events.family
                  ? eventLists[0].imageSrc
                  : events.special
                  ? eventLists[1].imageSrc
                  : eventLists[2].imageSrc
              }
              alt="events"
              width={540}
              height={600}
            />
          </div>

          <div className="text-center grid md:text-start">
            <h1 className="order-2 md:order-1 md:text-[48px] text-[32px] md:font-bold">
              {events.family
                ? eventLists[0].title
                : events.special
                ? eventLists[1].title
                : eventLists[2].title}
            </h1>
            <p className=" order-3 md:order-2 md:text-xl">
              {events.family
                ? eventLists[0].content
                : events.special
                ? eventLists[1].content
                : eventLists[2].content}
            </p>
            <div className="order-4 md:order-3 mt-8 md:mt-12">
              <Link href={"/booking"}>
                {" "}
                <Button className="bg-black border hover:border-black hover:bg-white hover:text-black text-[18px] font-semibold text-white">
                  Book A Table
                </Button>
              </Link>
            </div>
            <div className="order-1 mb-8 md:order-4 md:mt-12 leading-6 text-[17px] flex flex-col gap-3  md:items-start">
              <button
                className={`cursor-pointer uppercase ${
                  events.family ? "" : "opacity-50"
                } hover:opacity-100`}
                onClick={() =>
                  setEvents({ family: true, special: false, social: false })
                }
              >
                family gathering
              </button>
              <button
                className={`cursor-pointer uppercase ${
                  events.special ? "" : "opacity-50"
                } hover:opacity-100`}
                onClick={() =>
                  setEvents({ family: false, special: true, social: false })
                }
              >
                special events
              </button>
              <button
                className={`cursor-pointer uppercase ${
                  events.social ? "" : "opacity-50"
                } hover:opacity-100`}
                onClick={() =>
                  setEvents({ family: false, special: false, social: true })
                }
              >
                social events
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
