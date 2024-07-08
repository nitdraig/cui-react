import React from "react";
import { cva, VariantProps } from "class-variance-authority";

interface CardProps extends VariantProps<typeof cardStyles> {
  title: string;
  description: string;
  imageUrl: string;
  textColor?: "gray" | "black" | "blue" | "red";
  titleColor?: "gray" | "black" | "blue" | "red";
}

const cardStyles = cva("shadow-md rounded-lg overflow-hidden", {
  variants: {
    size: {
      small: "w-64",
      medium: "w-80",
      large: "w-96",
    },
    color: {
      default: "border-gray-200",
      primary: "border-blue-500",
      secondary: "border-gray-400",
      danger: "border-red-500",
    },
    bgColor: {
      white: "bg-white",
      gray: "bg-gray-100",
      blue: "bg-blue-100",
      red: "bg-red-100",
    },
    titleColor: {
      black: "text-black",
      gray: "text-gray-800",
      blue: "text-blue-800",
      red: "text-red-800",
    },
    textColor: {
      gray: "text-gray-600",
      black: "text-black",
      blue: "text-blue-600",
      red: "text-red-600",
    },
  },
  defaultVariants: {
    size: "medium",
    color: "default",
    bgColor: "white",
    titleColor: "black",
    textColor: "gray",
  },
});

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  size = "medium",
  color = "default",
  bgColor = "white",
  titleColor = "black",
  textColor = "gray",
}) => {
  const cardClass = cardStyles({ size, color, bgColor, titleColor, textColor });

  return (
    <div className={cardClass}>
      <img src={imageUrl} alt={title} className="w-full h-52 object-cover" />
      <div className="p-4">
        <h3 className={`text-2xl font-bold mb-1 ${titleColor}`}>{title}</h3>
        <p className={`text-lg ${textColor}`}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
