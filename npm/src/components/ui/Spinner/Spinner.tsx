import React from "react";
import { cva, VariantProps } from "class-variance-authority";

interface SpinnerProps extends VariantProps<typeof spinnerStyles> {}

const spinnerStyles = cva("animate-spin rounded-full border-t-2 border-b-2", {
  variants: {
    size: {
      small: "h-6 w-6",
      medium: "h-10 w-10",
      large: "h-14 w-14",
    },
    color: {
      blue: "border-blue-500",
      red: "border-red-500",
      green: "border-green-500",
      yellow: "border-yellow-500",
      black: "border-black-500",
      white: "border-white-500",
    },
  },
  defaultVariants: {
    size: "medium",
    color: "blue",
  },
});

const Spinner: React.FC<SpinnerProps> = ({ size, color }) => {
  return (
    <div className="flex justify-center items-center">
      <div className={spinnerStyles({ size, color })}></div>
    </div>
  );
};

export default Spinner;
