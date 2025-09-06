import React from "react";
import Image from "next/image";
interface CardProp {
  ImageSrc: string;
  title: string;
  content: string;
  borderBottom?: boolean;
}
function MenuList({
  ImageSrc,
  title,
  content,
  borderBottom = false,
}: CardProp) {
  return (
    <div
      className={`grid grid-col-1 md:grid-cols-3 md:text-left text-center items-center py-8 gap-7 ${
        borderBottom ? "border-b border-secondary3" : ""
      } `}
    >
      <div className="md:w-32 md:h-24 md:col-span-1">
        <Image
          src={ImageSrc}
          alt="dishes"
          width={50}
          height={50}
          className="w-full"
        />
      </div>
      <div className="md:col-span-2">
        <h1 className="text-[20px] font-bold">{title}</h1>
        <p className="text-16px">{content}</p>
      </div>
    </div>
  );
}

export default MenuList;
