import React from "react";
import { cva, VariantProps } from "class-variance-authority";

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends VariantProps<typeof selectStyles> {
  options: Option[];
  className?: string;
}

const selectStyles = cva("relative", {
  variants: {
    color: {
      primary: "border-[#000000] hover:border-[#e0e0e0] ",
      secondary: "border-[#ffffff] hover:border-[#000000]  ",
      danger: "bg-[#ad0202] hover:bg-[#df0505] ",
      plate: "border-[#c7c3c3]  hover:border-[#2c2727]    ",

      blue: "border-[#328dca] hover:border-[#48b6ff]   ",
    },
    defaultVariants: {
      color: "primary",
    },
  },
});

const Select: React.FC<SelectProps> = ({ options, className, color }) => {
  return (
    <div className={`relative  ${className}`}>
      <select
        className={`block appearance-none w-full   border ${selectStyles({
          color,
        })} px-4 py-2 pr-8 rounded-md shadow  leading-tight focus:outline-none focus:shadow-outline`}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg
          className="w-4 h-4 dark:text-gray-500 text-gray-200"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 12a1 1 0 0 1-.707-.293l-3-3a1 1 0 0 1 1.414-1.414L10 10.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-.707.293z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Select;
