import { VariantProps } from "class-variance-authority";
import React from "react";
interface HoverCardProps extends VariantProps<typeof cardStyles> {
    title: string;
    titleColor?: string;
    subtitle: string;
    subtitleColor?: string;
    imageUrl: string;
}
declare const cardStyles: (props?: ({
    size?: "small" | "medium" | "large" | null | undefined;
    color?: "default" | "primary" | "secondary" | "danger" | null | undefined;
    defaultVariants?: "size" | "color" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const HoverCard: React.FC<HoverCardProps>;
export default HoverCard;
//# sourceMappingURL=HoverCard.d.ts.map