import React from "react";
import { cva, VariantProps } from "class-variance-authority";

interface InputProps extends VariantProps<typeof inputStyles> {
  name?: string;
  id?: string;
  labelText?: string;
  type?: string;
  pattern?: string;
  color?: "primary" | "secondary" | "success" | "warning" | "dark" | "light";
  textColor?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "dark"
    | "light";
}

const inputStyles = cva("block  w-full text-sm text-gray-900 ", {
  variants: {
    color: {
      primary:
        "border-blue-500 focus:border-blue-600 dark:border-blue-500 dark:focus:border-blue-600",
      secondary:
        "border-red-500 focus:border-red-600 dark:border-red-500 dark:focus:border-red-600",
      success:
        "border-green-500 focus:border-green-600 dark:border-green-500 dark:focus:border-green-600",
      warning:
        "border-yellow-500 focus:border-yellow-600 dark:border-yellow-500 dark:focus:border-yellow-600",
      dark: "border-black focus:border-black dark:border-black dark:focus:border-black",
      light:
        "border-white focus:border-white dark:border-white dark:focus:border-white",
    },
    textColor: {
      primary: "text-blue-500 dark:text-blue-400",
      secondary: "text-red-500 dark:text-red-400",
      success: "text-green-500 dark:text-green-400",
      warning: "text-yellow-500 dark:text-yellow-400",
      dark: "text-black dark:text-gray-400",
      light: "text-white dark:text-white",
    },
  },
  defaultVariants: {
    color: "primary",
    textColor: "primary",
  },
});

const Input: React.FC<InputProps> = ({
  id,
  name,
  labelText,
  type,
  pattern,
  color = "primary",
  textColor = "primary",
}) => {
  const inputClass = inputStyles({ color });

  return (
    <div className="relative z-0 mb-6 w-full  group">
      <input
        type={type}
        name={name}
        id={id}
        className={`${inputClass}, border-0 py-2.5 px-0 border-b-2 bg-transparent  appearance-none focus:outline-none focus:ring-0 peer`}
        placeholder=" "
        required
        pattern={pattern}
      />
      <label
        htmlFor={id}
        className={`absolute text-sm ${inputStyles({
          textColor,
        })} duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
      >
        {labelText}
      </label>
    </div>
  );
};

export default Input;
