"use client";
import darkenColor from "@/app/util/darkerColor";
import { useEffect, useState } from "react";

const Color = () => {
  const [colors, setColors] = useState({
    primary: "#F55256",
    secondary: "#F8F9DE",
    tertiary: "#DCE35B",
  });

  
    // Update colors dynamically when the component mounts
    const buttonColor = darkenColor(colors.primary, 5);
  

  return (
    <>
      {/* Inline style ensures colors are applied during the first render */}
      <style>
        {`
          :root {
            --color-primary: ${colors.primary};
            --color-secondary: ${colors.secondary};
            --color-tertiary: ${colors.tertiary};
            --color-buttonHover: ${buttonColor};
          }
        `}
      </style>
    </>
  );
};

export default Color;
