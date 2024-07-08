import React from "react";
import { VariantProps } from "class-variance-authority";
interface OverlayCardProps extends VariantProps<typeof cardStyles> {
    title: string;
    titleColor?: "gray" | "black" | "blue" | "red";
    subtitle: string;
    subtitleColor?: "gray" | "black" | "blue" | "red";
    imageUrl: string;
    bg?: "gray" | "white" | "black" | "blue" | "red";
}
declare const cardStyles: (props?: ({
    size?: "small" | "medium" | "large" | null | undefined;
    bg?: "white" | "gray" | "blue" | "red" | "black" | null | undefined;
    titleColor?: "white" | "gray" | "blue" | "red" | "black" | null | undefined;
    subtitleColor?: "white" | "gray" | "blue" | "red" | "black" | null | undefined;
    defaultVariants?: "size" | "color" | "titleColor" | "subtitleColor" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const OverlayCard: React.FC<OverlayCardProps>;
export default OverlayCard;
//# sourceMappingURL=OverlayCard.d.ts.map