import React from "react";
import { cva, VariantProps } from "class-variance-authority";

interface OverlayCardProps extends VariantProps<typeof cardStyles> {
  title: string;
  titleColor?: "gray" | "black" | "blue" | "red";
  subtitle: string;
  subtitleColor?: "gray" | "black" | "blue" | "red";
  imageUrl: string;
  bg?: "gray" | "white" | "black" | "blue" | "red";
}

const cardStyles = cva(
  "bg-transparent shadow-md lg:h-96 h-80 rounded-lg overflow-hidden relative bg-cover bg-no-repeat bg-center",
  {
    variants: {
      size: {
        small: "w-64",
        medium: "w-80",
        large: "w-96",
      },
      bg: {
        gray: "bg-gray-600",
        white: "bg-white",
        black: "bg-black",
        blue: "bg-blue-600",
        red: "bg-red-600",
      },
      titleColor: {
        gray: "text-gray-800",
        white: "text-white",
        black: "text-black",
        blue: "text-blue-800",
        red: "text-red-800",
      },
      subtitleColor: {
        gray: "text-gray-600",
        white: "text-white",
        black: "text-black",
        blue: "text-blue-600",
        red: "text-red-600",
      },
      defaultVariants: {
        size: "medium",
        color: "default",
        titleColor: "black",
        subtitleColor: "black",
      },
    },
  }
);

const OverlayCard: React.FC<OverlayCardProps> = ({
  title,
  titleColor = "black",
  subtitle,
  subtitleColor = "black",
  imageUrl,
  size,
  bg,
}) => {
  return (
    <div
      className={cardStyles({ size, titleColor, subtitleColor, bg })}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div
        className={`absolute inset-0 flex flex-col justify-between p-4 bg-white bg-opacity-40 w-full`}
      >
        <div className="">
          <h3 className={`text-2xl font-bold mb-2 ${titleColor}`}>{title}</h3>
        </div>
        <div className="text-right">
          <p className={`text-lg ${subtitleColor}`}>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default OverlayCard;
