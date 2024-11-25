"use client";
import { useEffect, useState } from "react";

const Color = () => {
  const [colors, setColors] = useState({
    primary: "#FF5E62",
    secondary: "#F8F9DE",
    tertiary: "#DCE35B",
  });

  
    // Update colors dynamically when the component mounts
    
  

  return (
    <>
      {/* Inline style ensures colors are applied during the first render */}
      <style>
        {`
          :root {
            --color-primary: ${colors.primary};
            --color-secondary: ${colors.secondary};
            --color-tertiary: ${colors.tertiary};
          }
        `}
      </style>
    </>
  );
};

export default Color;
