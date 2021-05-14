/**
 * This file was generated from BarcodeGenerator.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export type BarcodeTypeEnum = "CODE128" | "EAN13" | "EAN8" | "EAN5" | "EAN2" | "UPC" | "CODE39" | "ITF14";

export interface BarcodeGeneratorContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    value: EditableValue<string>;
    barcodeType: BarcodeTypeEnum;
    width: number;
    height: number;
}

export interface BarcodeGeneratorPreviewProps {
    class: string;
    style: string;
    value: string;
    barcodeType: BarcodeTypeEnum;
    width: number | null;
    height: number | null;
}
