import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
<footer className="bg-white flex flex-col justify-center items-center">
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 container bg-mainbg">
              <div className="p-5 pr-10 text-center">
                  <h2 className="mb-5 text-xl font-semibold uppercase text-green-500">Our Store</h2>
                  <ul className="text-secondary text-[15px]">
                      <li>
                          <Link to="">896 S Auto Mall Dr</Link>
                      </li>
                      <li>
                          <Link to="" >American Fork, UT 84003</Link>
                      </li>
                      <li>
                          <Link to="">801-319-5524</Link>
                      </li>
                      <li>
                          <Link to="" className="underline">info@planitrentals.com</Link>
                      </li>
                  </ul>
              </div>
              <div className="p-5  text-center">
                  <h2 className="mb-5 text-xl font-semibold uppercase text-green-500">HOURS</h2>
                  <ul className="text-secondary text-[15px]">
                      <li className="">
                          <Link to="">Mon - Fri: 9am - 5pm</Link>
                      </li>
                      <li>
                          <Link to="">​​Saturday: 8am - Noon</Link>
                      </li>
                      <li>
                          <Link to="">​​​Sunday: Closed</Link>
                      </li>
                  </ul>
              </div>
              <div className="p-5 pr-10 text-center">
                  <h2 className="mb-5 text-xl font-semibold uppercase text-green-500">HELPFUL LINKS</h2>
                  <ul className="text-secondary text-[15px]">
                      <li>
                          <Link to="" className="underline">Cancellation Policy</Link>
                      </li>
                      <li>
                          <Link to="/bounsehouse" className="underline">Bounce House FAQ</Link>
                      </li>
                  </ul>
              </div>
          </div>
          <span class="block text-[13px] text-center pb-4">© <Link href="https://flowbite.com/" class="hover:underline">Plan-it-Rentals</Link> - Founded 2013</span>
</footer>

  );
};

export default Footer;
