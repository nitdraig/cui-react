import React from "react";
import { cva, VariantProps } from "class-variance-authority";

interface OverlayCardProps extends VariantProps<typeof cardStyles> {
  title: string;
  titleColor?: string;
  subtitle: string;
  subtitleColor?: string;
  imageUrl: string;
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

const OverlayCard: React.FC<OverlayCardProps> = ({
  title,
  titleColor = "text-black",
  subtitle,
  subtitleColor = "text-black",
  imageUrl,
  size,
  color,
}) => {
  return (
    <div
      className={cardStyles({ size, color })}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute  inset-0 flex flex-col justify-between p-4">
        <div>
          <h3 className={`text-lg font-semibold mb-2 ${titleColor}`}>
            {title}
          </h3>
        </div>
        <div className="text-right">
          <p className={`text-md ${subtitleColor}`}>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default OverlayCard;
