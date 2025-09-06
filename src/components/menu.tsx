import React from "react";
import MenuList from "./ui/menu-list";
import { title } from "process";
const menus = [
  {
    ImageSrc: "/salmon-desktop.jpg",
    title: "Seared Salmon Fillet",
    content:
      "Our locally sourced salmon served with a refreshing buckwheat summer salad.",
    borderBottom: true,
  },
  {
    ImageSrc: "/beef-desktop.jpg",
    title: "Rosemary Filet Mignon",
    content:
      "Our prime beef served to your taste with a delicious choice of seasonal sides.",
    borderBottom: true,
  },
  {
    ImageSrc: "/chocolate-desktop.jpg",
    title: "Summer Fruit Chocolate Mousse",
    content:
      "Creamy mousse combined with summer fruits and dark chocolate shavings.",
  },
];
function Menu() {
  return (
    <section className="bg-primary2 text-white font-spartan py-20 md:py-[170px]">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center items-center md:items-start">
          <div className="flex mb-10 gap-2 items-center">
            <div className="border border-primary1 w-[10px] h-[10px] rounded-full"></div>

            <div className="border border-t-primary1 w-16"></div>
          </div>
          <h1 className="text-[32px] md:text-[48px] md:leading-12 leading-9 max-w-[400px] md:max-w-[470px] font-bold text-center md:text-start">
            A few highlights from our menu
          </h1>
          <p className="text-[16px] md:text-[20px] text-center md:text-start mt-6">
            We cater for all dietary requirements, but here's a glimpse at some
            of our diner's favourites. Our menu is revamped every season.
          </p>
        </div>
        <div className="flex flex-col">
          {menus.map((menu) => (
            <MenuList
              key={menu.title}
              ImageSrc={menu.ImageSrc}
              title={menu.title}
              content={menu.content}
              borderBottom={menu.borderBottom}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
