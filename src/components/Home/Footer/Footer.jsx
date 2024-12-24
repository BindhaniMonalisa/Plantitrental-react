import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
   

<footer className="bg-primary container flex flex-col justify-center items-center pt-7 pb-5">
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div className="p-5 pr-10 text-center">
                  <h2 className="mb-8 text-xl font-semibold uppercase text-secondary tracking-[0.15rem]">Our Store</h2>
                  <ul className="text-secondary font-semibold">
                      <li>
                          <Link href="">896 S Auto Mall Dr</Link>
                      </li>
                      <li>
                          <Link href="" >American Fork, UT 84003</Link>
                      </li>
                      <li>
                          <Link href="">801-319-5524</Link>
                      </li>
                      <li>
                          <Link href="" className="underline">info@planitrentals.com</Link>
                      </li>
                  </ul>
              </div>
              <div className="p-5 pr-10 text-center">
                  <h2 className="mb-8 text-xl font-semibold uppercase tracking-[0.15rem] text-tertiary">HOURS</h2>
                  <ul className="text-tertiary font-semibold">
                      <li className="">
                          <Link href="">Mon - Fri: 9am - 5pm</Link>
                      </li>
                      <li>
                          <Link href="">​​Saturday: 8am - Noon</Link>
                      </li>
                      <li>
                          <Link href="">​​​Sunday: Closed</Link>
                      </li>
                  </ul>
              </div>
              <div className="p-5 pr-10 text-center">
                  <h2 className="mb-8 text-xl font-semibold uppercase tracking-[0.15rem] text-secondary">HELPFUL LINKS</h2>
                  <ul className="text-secondary font-semibold">
                      <li>
                          <Link href="#" className="underline">Cancellation Policy</Link>
                      </li>
                      <li>
                          <Link to="/bounsehouse" className="underline">Bounce House FAQ</Link>
                      </li>
                      <li>
                          <Link href="#" className="underline">Order Online</Link>
                      </li>
                  </ul>
              </div>
          </div>
</footer>

  );
};

export default Footer;
