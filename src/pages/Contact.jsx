import Navbar from "../components/Navbar";
import Footer from "../components/Home/Footer/Footer";
import Location from "../components/Home/Location/Location";
import Hero from "../components/Home/Hero/Hero";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="flex justify-center items-center container">
        <div className="w-full mx-auto p-6">
          <h2 className="font-semibold text-center mt-5 text-secondary uppercase tracking-[0.20rem] text-[50px]">
            Contact Us
          </h2>
          <form className="bg-gray-200 p-3">
            <div className="grid md:grid-cols-2 md:gap-6 ">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block py-6 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-secondary appearance-none dark:border-secondary focus:outline-none focus:ring-0 focus:border-secondary peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_first_name"
                  className="peer-focus:font-medium absolute text-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-secondary peer-focus:dark:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-lg font-semibold tracking-[0.07rem]"
                >
                  First name <span className="text-green-500 font-bold">*</span>
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  className="block py-6 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-secondary appearance-none dark:border-secondary focus:outline-none focus:ring-0 focus:border-secondary peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_last_name"
                  className="peer-focus:font-medium absolute text-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-secondary peer-focus:dark:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-lg font-semibold tracking-[0.07rem]"
                >
                  Last name <span className="text-green-500 font-bold">*</span>
                </label>
              </div>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-6 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-secondary appearance-none dark:border-secondary focus:outline-none focus:ring-0 focus:border-secondary peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-secondary peer-focus:dark:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-lg font-semibold tracking-[0.07rem]"
              >
                Email address{" "}
                <span className="text-green-500 font-bold">*</span>
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-6 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-secondary appearance-none dark:border-secondary focus:outline-none focus:ring-0 focus:border-secondary peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-secondary peer-focus:dark:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-lg font-semibold tracking-[0.07rem]"
              >
                Phone <span className="text-green-500 font-bold">*</span>
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <select
                name="choose_option"
                id="choose_option"
                className="block py-6 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-secondary appearance-none dark:border-secondary focus:outline-none focus:ring-0 focus:border-secondary peer"
                required
              >
                <option value="" disabled selected>
                  Choose an option
                </option>
                <option value="option1">American Frok, UT Office</option>
                <option value="option2">Cedar Park, TX Office</option>
              </select>
              <label
                htmlFor="choose_option"
                className="peer-focus:font-medium absolute text-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-secondary peer-focus:dark:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-lg font-semibold tracking-[0.07rem]"
              >
                Choose an Option{" "}
                <span className="text-green-500 font-bold">*</span>
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-6 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-secondary appearance-none dark:border-secondary focus:outline-none focus:ring-0 focus:border-secondary peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-secondary peer-focus:dark:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-lg font-semibold tracking-[0.07rem]"
              >
                Write a message{" "}
                <span className="text-green-500 font-bold">*</span>
              </label>
            </div>
            <div className="flex text-center items-center justify-center pt-6">
              <button
                type="submit"
                className="bg-secondary px-5 py-2 text-white rounded-full border-2 border-green-600 text-sm font-semibold hover:bg-green-600 hover:text-white transition duration-300 mt-[-20px] ml-0 left-[115px]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Footer */}
      <Footer />
      {/* Location */}
      <Location />
    </>
  );
};

export default Contact;
