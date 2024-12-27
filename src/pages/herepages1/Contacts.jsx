import HereNav from '../HereNav';
import Footer2 from './Footer2';


const Contacts = () => {
  return (
    <>
      <HereNav />
      <div className="bg-white pt-20 ">
      <div className="flex justify-center items-center min-h-screen sm:pt-20">
        <div className="w-full px-4 sm:px-8 lg:px-20">
          <h2 className="text-center mb-6 text-green-600 tracking-[0.1em] text-[22px] sm:text-[25px] font-semibold">
            Contact Us
          </h2>
          <form className="p-6 sm:p-8 bg-gray-300 rounded-lg max-w-xl mx-auto shadow-md">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 rounded-md"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 rounded-md"
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 rounded-md"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Message"
                className="w-full px-4 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 h-32 rounded-md"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 text-white bg-red-500 hover:bg-red-600 transition duration-300 rounded-md"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
      </div>
      <Footer2 />
    </>
  );
};


export default Contacts

