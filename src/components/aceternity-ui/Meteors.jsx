import { cn } from "@/utils/cn";
import React from "react";

export const Meteors = ({
  number,
  className,
}) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute top-0 left-0 h-0.5 w-0.5 rounded-[9999px] bg-pp-primary shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[40px] before:h-[1px] before:bg-gradient-to-r before:from-pp-primary before:to-transparent",
            className
          )}
          style={{
            top: (Math.floor(Math.random() * 60) - 30) + "%",
			left: (Math.floor(Math.random() * 71) - 20) + "%",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        ></span>
      ))}
    </>
  );
};
