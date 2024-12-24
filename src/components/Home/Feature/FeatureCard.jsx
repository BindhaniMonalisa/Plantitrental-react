import React from 'react'

const FeatureCard = ({img,title,description}) => {
  return (
    <div className='shadow-lg transition-all duration-500 hover:shadow-xl bg-white dark:text-white cursor-pointer mb-3  border border-solid  border-secondary'>
        <div className="overflow-hidden ">
            <img src={img} alt=""className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"/>
            <button className="bg-secondary px-4 py-2 text-white rounded-full border-2 border-tertiary text-sm font-semibold hover:bg-green-600 hover:text-white transition duration-300  relative mt-[-20px] ml-0 left-[115px] row-start-3 justify-center">
          Browse Items
        </button>
        </div>
       
        <div className="flex flex-col space-y-4 p-6 justify-center items-center">
        
        <h1 className="line-clamp-1 font-semibold text-tertiary text-[26px] underline ">{title}</h1>
        <p className="line-clamp-2 text-[14px] font-semibold text-secondary">{description}</p>
        
        </div>

    </div>
  )
}

export default FeatureCard