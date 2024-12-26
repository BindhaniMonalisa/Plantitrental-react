import React from "react";


const Location = () => {
  return (
    <>
      <section data-aos="fade-up">
        <div className="container my-4 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7116.040113933064!2d83.97168138953894!3d26.90285855661167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39938d631905f7c1%3A0x189dbadf0b42da46!2sNew%20Mobile%20World!5e0!3m2!1sen!2sin!4v1700902186385!5m2!1sen!2sin"
              height="360"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
          <span className="block text-[15px] font-semibold text-tertiary text-center">© <a href="https://flowbite.com/" class="hover:underline">Plan-it-Rentals</a> - Founded 2013</span>
      </section>
    </>
  );
};

export default Location;
