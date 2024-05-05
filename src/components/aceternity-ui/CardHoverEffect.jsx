import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import PPImage from "../PPImage/PPImage";
import { useState } from "react";

export const CardHoverEffect = ({
  items,
  className,
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);
  console.log("items", items);
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full aspect-video"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card isFooterBlurred className={"group/product-card product-card w-full h-full col-span-12 sm:col-span-5 p-0"}>
              <PPImage
                  removeWrapper
                  alt="Card example background"
                  className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                  src={item?.shopImage?.media_original}
              />
              <div className="absolute bg-white/30 bottom-0 left-0 backdrop-blur-md h-20 border-t-1 border-zinc-100/50 z-10 flex w-full justify-between">
                  <div className="w-full px-10 py-3">
                      <h4 className="text-black font-medium text-3xl whitespace-nowrap text-ellipsis overflow-hidden ">{item?.name}</h4>
                  </div>
              </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
    className,
    children,
}) => {
    return (
        <div
        className={cn(
            "rounded-2xl h-full w-full overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
            className
        )}
        >
        <div className="relative h-full z-50">
            <div className="">{children}</div>
        </div>
        </div>
    );
    };
    export const CardTitle = ({
    className,
    children,
    }) => {
    return (
        <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
        {children}
        </h4>
    );
    };
    export const CardDescription = ({
    className,
    children,
    }) => {
    return (
        <p
        className={cn(
            "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
            className
        )}
        >
        {children}
        </p>
    );
};
