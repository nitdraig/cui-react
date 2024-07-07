import React from "react";
import { VariantProps } from "class-variance-authority";
interface TextCardProps extends VariantProps<typeof cardStyles> {
    title: string;
    titleColor?: string;
    subtitle: string;
    subtitleColor?: string;
}
declare const cardStyles: (props?: ({
    size?: "small" | "medium" | "large" | null | undefined;
    color?: "default" | "primary" | "secondary" | "danger" | null | undefined;
    defaultVariants?: "size" | "color" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const TextCard: React.FC<TextCardProps>;
export default TextCard;
//# sourceMappingURL=TextCard.d.ts.map