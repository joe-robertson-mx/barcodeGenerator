declare module "react-barcode" {
    import React from "react";

    export interface BarcodeProps {
        value: string;
        renderer?: string;
        format?: string;
        width?: number;
        height?: number;
        displayValue?: boolean;
        fontOptions?: string;
        font?: string;
        textAlign?: string;
        textPosition?: string;
        textMargin?: number;
        fontSize?: number;
        background?: string;
        lineColor?: string;
    }
    // let Barcode: React.Component<BarcodeProps>
    class Barcode extends React.Component<BarcodeProps, any> {}

    export default Barcode;
}
