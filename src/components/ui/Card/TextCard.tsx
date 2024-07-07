import React from "react";
import { cva, VariantProps } from "class-variance-authority";

interface TextCardProps extends VariantProps<typeof cardStyles> {
  title: string;
  titleColor?: string;
  subtitle: string;
  subtitleColor?: string;
}

const cardStyles = cva("bg-white shadow-md rounded-lg overflow-hidden", {
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
});

const TextCard: React.FC<TextCardProps> = ({
  title,
  titleColor = "text-black",
  subtitle,
  subtitleColor = "text-gray-600",
  size,
  color,
}) => {
  return (
    <div className={cardStyles({ size, color })}>
      <div className="flex flex-col justify-between p-4">
        <div>
          <h3 className={`text-lg font-semibold mb-1 ${titleColor}`}>
            {title}
          </h3>
          <div className="text-center">
            <p className={`text-md ${subtitleColor}`}>{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextCard;
