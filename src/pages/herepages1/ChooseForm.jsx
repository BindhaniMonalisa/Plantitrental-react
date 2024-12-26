import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ChooseForm = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [days, setDays] = useState(1);

  return (
    <div className="pt-20 bg-gray-100">
      <h2 className="text-xl font-semibold text-red-500 px-5 pt-20">Step 1 - Select Your Rental Date:</h2>
      <div className="flex items-center">
        <div className="relative p-5 flex-row">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="border border-gray-300 rounded-md px-2 py-2"
          />
        </div>
        <div className="relative">
          <select
            value={days}
            onChange={(e) => setDays(e.target.value)}
            className="border border-gray-300 rounded-md px-2 py-2"
          >
            {[...Array(10)].map((_, index) => (
              <option key={index} value={index + 1}>
                {index + 1} day{index > 0 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ChooseForm ;
