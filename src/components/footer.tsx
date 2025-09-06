import React from "react";

function Footer() {
  return (
    <footer className="bg-primary2 font-spartan text-white">
      <div className="container mx-auto px-4 md:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-3 py-7 text-center md:text-left md:py-14 gap-12">
          <div>
            <h1 className="md:text-left text-[40px] font-bold">dine</h1>
          </div>
          <div className="">
            <ul className="space-y-1">
              <li>Marthwaite, Sedbergh</li>
              <li>Cumbria</li>
              <li>+00 44 123 4567</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-1">
              <li>OPEN TIMES</li>
              <li>MON - FRI: 09:00 AM - 10:00 PM</li>
              <li>SAT - SUN: 09:00 AM - 11:30 PM</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
