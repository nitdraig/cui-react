import React from "react";
import { VariantProps } from "class-variance-authority";
interface CardProps extends VariantProps<typeof cardStyles> {
    title: string;
    description: string;
    imageUrl: string;
    textColor?: "gray" | "black" | "blue" | "red";
    titleColor?: "gray" | "black" | "blue" | "red";
}
declare const cardStyles: (props?: ({
    size?: "small" | "medium" | "large" | null | undefined;
    color?: "default" | "primary" | "secondary" | "danger" | null | undefined;
    bgColor?: "white" | "gray" | "blue" | "red" | null | undefined;
    titleColor?: "gray" | "blue" | "red" | "black" | null | undefined;
    textColor?: "gray" | "blue" | "red" | "black" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const Card: React.FC<CardProps>;
export default Card;
//# sourceMappingURL=Card.d.ts.map