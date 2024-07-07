import React from "react";
import { cva, VariantProps } from "class-variance-authority";

interface ButtonProps extends VariantProps<typeof buttonStyles> {
  text: string;
  onClick?: () => void;
}

const buttonStyles = cva(
  "rounded-md cursor-pointer py-2 px-4 text-white font-sm transition duration-300 ease-in-out",
  {
    variants: {
      size: {
        small: "text-xs py-1 px-2",
        medium: "text-sm py-2 px-4",
        large: "text-lg py-3 px-6",
        full: "text-2xl py-4 px-8",
      },
      color: {
        primary:
          "bg-[#FFFFFF] text-[#000] border-2 border-[#000000] hover:bg-[#e0e0e0] ",
        secondary:
          "bg-[#000000] border-2 border-[#000000] hover:bg-[#534f4f]  ",
        danger: "bg-[#ad0202] hover:bg-[#df0505] ",
        plate:
          "bg-[#CCCCCC]  text-[#383838]   hover:bg-[#2c2727]  hover:text-[#ffffff]  ",
      },
      defaultVariants: {
        color: "primary",
      },
    },
  }
);

export default function Button({
  size,
  color,
  text,
  onClick,
  ...props
}: ButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={buttonStyles({ size, color })}
      onClick={handleClick}
      {...props}
    >
      {text}
    </button>
  );
}
