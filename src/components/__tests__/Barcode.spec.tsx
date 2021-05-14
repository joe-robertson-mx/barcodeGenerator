import { createElement } from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { BarcodeComponent, BarcodeComponentProps } from "../BarcodeComponent";

describe("BarcodeComponent", () => {
    const createBarcode = (props: BarcodeComponentProps): ShallowWrapper => shallow(<BarcodeComponent {...props} />);

    it("should render the structure correctly", () => {
        const BarcodeProps: BarcodeComponentProps = {
            inputString: "World"
        };

        const Barcode = createBarcode(BarcodeProps);

        expect(Barcode.equals(<div className="widget-hello-world">Hello {BarcodeProps.inputString}</div>)).toEqual(
            true
        );
    });
});
