import React from "react";
import { VariantProps } from "class-variance-authority";
interface AccordionItem {
    title: string;
    content: string;
}
interface AccordionProps extends VariantProps<typeof accordionStyles> {
    items: AccordionItem[];
    textColor?: "primary" | "secondary" | "danger" | "default" | "white";
}
declare const accordionStyles: (props?: ({
    size?: "small" | "medium" | "large" | null | undefined;
    color?: "default" | "primary" | "secondary" | "danger" | "white" | null | undefined;
    textColor?: "default" | "primary" | "secondary" | "danger" | "white" | null | undefined;
    defaultVariants?: "size" | "color" | "textColor" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const Accordion: React.FC<AccordionProps>;
export default Accordion;
//# sourceMappingURL=Accordion.d.ts.map