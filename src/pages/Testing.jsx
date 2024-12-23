import React, { useState } from "react";

const ArticleCard = () => {
  const [showShareButton, setShowShareButton] = useState(false);

  const toggleShareButton = () => {
    setShowShareButton(!showShareButton);
  };

  return (
    <div className="max-w-4xl mx-auto my-8">
      <div className="border rounded-lg shadow-md p-4 bg-white">
        <div className="flex">
          {/* Left Section (Image) */}
          <div className="w-1/3">
            <img
              src="https://via.placeholder.com/150"
              alt="Article"
              className="rounded-md w-full h-full object-cover"
            />
          </div>

          {/* Right Section (Content) */}
          <div className="w-2/3 pl-4 flex flex-col justify-between">
            <div>
                <div className="flex flex-row justify-between">

              <p className="text-gray-500 text-sm">Sep 12</p>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={toggleShareButton}
              >
                &#8226;&#8226;&#8226;
              </button>
              {/* Share Now Button */}
              {showShareButton && (
                <button
                  onClick={() => alert("Share Now Clicked!")}
                  className="absolute mt-2 bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700"
                >
                  Share Now
                </button>
              )}
            </div>
                </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                How to Plan an Accessible and Fun Party for Children of All
                Abilities
              </h3>
              <p className="text-gray-600 text-sm">
                Planning a party for children requires special care to make sure
                everyone has fun, no matter their abilities. Creating an
                inclusive party...
              </p>
            </div>
            {/* Three Dots */}
            
          </div>
        </div>
      </div>
  );
};

export default ArticleCard;
