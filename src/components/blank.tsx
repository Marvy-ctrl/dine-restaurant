import React from "react";
import Image from "next/image";
function Blank() {
  return (
    <section>
      <div className="bg-[#f7f7f7] h-50 md:h-68">
        <div className="flex justify-center items-center">
          <Image
            src={"/pattern-lines.svg"}
            alt="lines"
            width={170}
            height={170}
            className="hidden md:block mt-26"
          />
        </div>
      </div>
    </section>
  );
}

export default Blank;
