import React from "react";
import { VariantProps } from "class-variance-authority";
interface OverlayCardProps extends VariantProps<typeof cardStyles> {
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
declare const OverlayCard: React.FC<OverlayCardProps>;
export default OverlayCard;
//# sourceMappingURL=OverlayCard.d.ts.map