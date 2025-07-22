"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

type SliderProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
  trackClassName?: string;
  rangeClassName?: string;
  thumbClassName?: string;
  showValue?: boolean;
};

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(
  (
    {
      className,
      trackClassName,
      rangeClassName,
      thumbClassName,
      showValue = true,
      value,
      defaultValue,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState<number[]>(
      Array.isArray(defaultValue) ? defaultValue : [0]
    );

    React.useEffect(() => {
      if (value) setInternalValue(value as number[]);
    }, [value]);

    return (
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          className
        )}
        defaultValue={defaultValue}
        value={value}
        onValueChange={(val) => {
          setInternalValue(val);
          props.onValueChange?.(val);
        }}
        {...props}
      >
        <SliderPrimitive.Track
          className={cn(
            "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",
            trackClassName
          )}
        >
          <SliderPrimitive.Range
            className={cn("absolute h-full bg-primary", rangeClassName)}
          />
        </SliderPrimitive.Track>

        {internalValue.map((val, index) => (
          <SliderPrimitive.Thumb
            key={index}
            className={cn(
              "relative block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
              thumbClassName
            )}
          >
            {showValue && (
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs bg-primary text-white px-2 py-0.5 rounded">
                {val}
              </span>
            )}
          </SliderPrimitive.Thumb>
        ))}
      </SliderPrimitive.Root>
    );
  }
);
Slider.displayName = SliderPrimitive.Root.displayName;

export default Slider;
