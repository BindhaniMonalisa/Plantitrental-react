import React from "react";

const Footer = () => {
  return (
   

<footer className="bg-primary container flex flex-col justify-center items-center pt-7 pb-5">
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div className="p-5 pr-10 text-center">
                  <h2 className="mb-8 text-xl font-semibold uppercase tracking-[0.15rem]">Our Store</h2>
                  <ul className="text-secondary font-semibold">
                      <li>
                          <a href="">896 S Auto Mall Dr</a>
                      </li>
                      <li>
                          <a href="" >American Fork, UT 84003</a>
                      </li>
                      <li>
                          <a href="">801-319-5524</a>
                      </li>
                      <li>
                          <a href="" className="underline">info@planitrentals.com</a>
                      </li>
                  </ul>
              </div>
              <div className="p-5 pr-10 text-center">
                  <h2 className="mb-8 text-xl font-semibold uppercase tracking-[0.15rem] text-green-600">HOURS</h2>
                  <ul className="text-green-600 font-semibold">
                      <li className="">
                          <a href="">Mon - Fri: 9am - 5pm</a>
                      </li>
                      <li>
                          <a href="">​​Saturday: 8am - Noon</a>
                      </li>
                      <li>
                          <a href="">​​​Sunday: Closed</a>
                      </li>
                  </ul>
              </div>
              <div className="p-5 pr-10 text-center">
                  <h2 className="mb-8 text-xl font-semibold uppercase tracking-[0.15rem] text-secondary">HELPFUL LINKS</h2>
                  <ul className="text-secondary font-semibold">
                      <li>
                          <a href="#" className="underline">Cancellation Policy</a>
                      </li>
                      <li>
                          <a href="#" className="underline">Bounce House FAQ</a>
                      </li>
                      <li>
                          <a href="#" className="underline">Order Online</a>
                      </li>
                  </ul>
              </div>
          </div>
</footer>

  );
};

export default Footer;
