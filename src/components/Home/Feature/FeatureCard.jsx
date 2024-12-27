import React from 'react';
import { useNavigate } from 'react-router-dom';

const FeatureCard = ({ img, title, description, link }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(link);
  };

  return (
    <div className="shadow-lg transition-all duration-500 hover:shadow-xl bg-white dark:bg-gray-800 dark:text-white cursor-pointer mb-3 border border-solid border-secondary sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
      <div className="overflow-hidden">
        <img
          src={img}
          alt="Card Image"
          className="mx-auto h-[180px] sm:h-[200px] md:h-[220px] lg:h-[260px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
        />
        <div className="flex justify-center mt-[-20px]">
          <button
            onClick={handleButtonClick}
            className="bg-secondary relative px-4 py-2 text-white rounded-full border-2 border-tertiary text-sm md:text-base font-semibold hover:bg-green-600 hover:text-white transition duration-300"
          >
            Browse Items
          </button>
        </div>
      </div>
  
      <div className="flex flex-col space-y-4 p-4 sm:p-6 justify-center items-center text-center">
        <h1 className="line-clamp-1 font-semibold text-tertiary text-[16px] sm:text-[20px] md:text-[24px] lg:text-[26px] underline">
          {title}
        </h1>
        <p className="line-clamp-2 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-medium text-secondary">
          {description}
        </p>
      </div>
    </div>
  );
  
};

export default FeatureCard;
