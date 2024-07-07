import React from "react";
import { cva, VariantProps } from "class-variance-authority";

interface CardProps extends VariantProps<typeof cardStyles> {
  title: string;
  description: string;
  imageUrl: string;
}

const cardStyles = cva(
  "bg-white lg:h-96 h-80  shadow-md rounded-lg overflow-hidden",
  {
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
      defaultVariants: {
        size: "medium",
        color: "default",
      },
    },
  }
);

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  size,
  color,
}) => {
  return (
    <div className={cardStyles({ size, color })}>
      <img src={imageUrl} alt={title} className="w-full h-52  object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
