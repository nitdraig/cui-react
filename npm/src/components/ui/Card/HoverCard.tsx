import { cva, VariantProps } from "class-variance-authority";
import React, { useState } from "react";

interface HoverCardProps extends VariantProps<typeof cardStyles> {
  title: string;
  titleColor?: string;
  subtitle: string;
  subtitleColor?: string;
  imageUrl: string;
}

const cardStyles = cva(
  "bg-white lg:h-96 h-80 shadow-md rounded-lg overflow-hidden relative",
  {
    variants: {
      size: {
        small: "w-64",
        medium: "w-80",
        large: "w-96",
      },
      color: {
        default: "text-[#fff] border-gray-200",
        primary: "text-black border-blue-500",
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

const HoverCard: React.FC<HoverCardProps> = ({
  title,
  titleColor,
  subtitle,
  subtitleColor,
  imageUrl,
  size,
  color,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={cardStyles({ size, color })}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <div
          className={`absolute inset-0 bg-cover bg-no-repeat bg-center filter ${
            isHovered ? "blur-lg" : "blur-0"
          } transition-filter duration-500`}
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 hover:opacity-100 bg-black bg-opacity-20 transition-opacity duration-500">
          <h3 className={`text-2xl font-bold mb-1 ${titleColor}`}>{title}</h3>
          <p className={`text-lg ${subtitleColor}`}>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
