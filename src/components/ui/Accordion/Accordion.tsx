"use client";
import React, { useState } from "react";
import { cva, VariantProps } from "class-variance-authority";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps extends VariantProps<typeof accordionStyles> {
  items: AccordionItem[];
  textColor?: "primary" | "secondary" | "danger" | "default" | "white";
}

const accordionStyles = cva("divide-y divide-gray-200", {
  variants: {
    size: {
      small: "w-64",
      medium: "w-80",
      large: "w-96",
    },
    color: {
      default: "bg-transparent",
      primary: "bg-black",
      secondary: "bg-gray-100",
      danger: "bg-red-100",
      white: "bg-white",
    },
    textColor: {
      default: "text-black",
      primary: "text-blue-500",
      secondary: "text-gray-500",
      danger: "text-red-500",
      white: "text-white",
    },
    defaultVariants: {
      size: "medium",
      color: "default",
      textColor: "default",
    },
  },
});

const Accordion: React.FC<AccordionProps> = ({ items, color, textColor }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={accordionStyles({ color, textColor })}>
      {items.map((item, index) => (
        <div key={index}>
          <div
            className={`flex justify-between items-center cursor-pointer p-4 ${accordionStyles(
              {
                textColor,
              }
            )}`}
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 no-underline transition-transform ${
                activeIndex === index ? "transform rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 12a1 1 0 0 1-.707-.293l-3-3a1 1 0 0 1 1.414-1.414L10 10.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-.707.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            className={`overflow-hidden transition-all ${
              activeIndex === index ? "h-auto opacity-100" : "h-0 opacity-0"
            }`}
          >
            <div className="p-4">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
