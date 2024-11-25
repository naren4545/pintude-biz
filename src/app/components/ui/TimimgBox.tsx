"use client";

import { useState } from "react";

const timingsData = [
  { day: "Monday", workingHours: "8:00 AM - 6:00 PM", lunchBreak: "1:00 PM - 2:30 PM" },
  { day: "Tuesday", workingHours: "8:00 AM - 6:00 PM", lunchBreak: "1:00 PM - 2:30 PM" },
  { day: "Wednesday", workingHours: "8:00 AM - 6:00 PM", lunchBreak: "1:00 PM - 2:30 PM" },
  { day: "Thursday", workingHours: "8:00 AM - 6:00 PM", lunchBreak: "1:00 PM - 2:30 PM" },
  { day: "Friday", workingHours: "8:00 AM - 6:00 PM", lunchBreak: "1:00 PM - 2:30 PM" },
  { day: "Saturday", workingHours: "Closed", lunchBreak: null },
  { day: "Sunday", workingHours: "Closed", lunchBreak: null },
];

export default function TimingBox() {
  const [expanded, setExpanded] = useState(false);

  // Get current day and corresponding timing
  const currentDayIndex = new Date().getDay(); // 0 (Sunday) to 6 (Saturday)
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = weekdays[currentDayIndex];
  const todayTiming = timingsData.find((timing) => timing.day === currentDay);

  return (
    <div className="relative lg:max-w-[381px] pt-3 shadow-[0px_0px_6px_2px_#00000040] rounded-[5px] bg-white">
      {/* Header */}
      <div className="flex gap-7 pb-5 px-5">
        <svg
          width="70"
          height="60"
          viewBox="0 0 70 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="70" height="60" rx="5"  style={{ fill: "var(--color-primary)" }}/>
          <path
            d="M35 46C39.2435 46 43.3131 44.3143 46.3137 41.3137C49.3143 38.3131 51 34.2435 51 30C51 25.7565 49.3143 21.6869 46.3137 18.6863C43.3131 15.6857 39.2435 14 35 14C30.7565 14 26.6869 15.6857 23.6863 18.6863C20.6857 21.6869 19 25.7565 19 30C19 34.2435 20.6857 38.3131 23.6863 41.3137C26.6869 44.3143 30.7565 46 35 46ZM35 10C37.6264 10 40.2272 10.5173 42.6537 11.5224C45.0802 12.5275 47.285 14.0007 49.1421 15.8579C50.9993 17.715 52.4725 19.9198 53.4776 22.3463C54.4827 24.7728 55 27.3736 55 30C55 35.3043 52.8929 40.3914 49.1421 44.1421C45.3914 47.8929 40.3043 50 35 50C23.94 50 15 41 15 30C15 24.6957 17.1071 19.6086 20.8579 15.8579C24.6086 12.1071 29.6957 10 35 10ZM36 20V30.5L45 35.84L43.5 38.3L33 32V20H36Z"
            fill="white"
          />
        </svg>
        <p className="text-2xl font-medium my-5">Timings</p>
      </div>

      {/* Default view for today's timing */}
      <div className="flex justify-between pb-3 bg-[#F8F9DE] px-5">
        <div>
          <p className="text-base font-medium">{todayTiming?.day}</p>
          <p className="text-[10px] lg:text-xs italic text-[#9E9D9D]">Working Hours:</p>
          <p className="text-sm">
            {todayTiming?.workingHours === "Closed" ? "Closed" : todayTiming?.workingHours}
          </p>
        </div>
        <div>
          <p className="text-sx font-medium invisible">Monday</p>
          <p className="text-[10px] lg:text-xs italic text-[#9E9D9D]">Lunch break:</p>
          <p className="text-sm">
            {todayTiming?.lunchBreak || (todayTiming?.workingHours === "Closed" ? "N/A" : "-")}
          </p>
        </div>
      </div>

      {/* Floating Timings with Animation */}
      <div
        className={`absolute top-full left-0 mt-3 w-full bg-white shadow-[0px_0px_10px_2px_#00000040] rounded-[5px] z-10 overflow-hidden transform transition-all duration-300 ease-in-out ${
          expanded ? "max-h-[500px] opacity-100 scale-y-100" : "max-h-0 opacity-0 scale-y-0"
        }`}
      >
        {timingsData.map((timing, index) => (
          <div
            key={index}
            className={`flex justify-between py-2 px-5 border-b border-gray-200 last:border-none ${
              currentDay === timing.day ? "bg-[#F8F9DE]" : ""
            }`}
          >
            <div>
              <p className="text-base font-medium">{timing.day}</p>
              <p className="text-[10px] lg:text-xs italic text-[#9E9D9D]">
                {timing.workingHours === "Closed" ? "" : "Working Hours:"}
              </p>
              <p className="text-sm">
                {timing.workingHours === "Closed" ? "Closed" : timing.workingHours}
              </p>
            </div>
            <div>
              <p className="text-sx font-medium invisible">Monday</p>
              <p className="text-[10px] lg:text-xs italic text-[#9E9D9D]">
                {timing.workingHours === "Closed" ? "" : "Lunch break:"}
              </p>
              <p className="text-sm">
                {timing.lunchBreak || (timing.workingHours === "Closed" ? "" : "-")}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-right text-sm text-blue-500 mt-3 absolute top-1 right-2"
      >
        {expanded ? (
          <svg
            width="15"
            className="inline"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        ) : (
          <svg
            width="15"
            className="inline"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.8648 6.15803C11.6759 5.95657 11.3595 5.94637 11.158 6.13523L7.5 9.56464L3.84197 6.13523C3.64052 5.94637 3.3241 5.95657 3.13523 6.15803C2.94637 6.35948 2.95657 6.6759 3.15803 6.86477L7.15803 10.6148C7.35036 10.7951 7.64964 10.7951 7.84197 10.6148L11.842 6.86477C12.0434 6.6759 12.0536 6.35948 11.8648 6.15803Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        )}
      </button>
    </div>
  );
}
