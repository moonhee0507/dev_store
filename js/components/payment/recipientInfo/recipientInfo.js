import {
    RecipientName,
    RecipientPhone,
    RecipientAddress,
    ShippingMessage,
} from "./index.js";

class RecipientInfo {
    constructor() {
        this.fieldset = document.createElement("fieldset");
    }

    render() {
        this.fieldset.setAttribute("class", "fieldset-shipping-info");

        const legend = document.createElement("legend");
        legend.setAttribute("class", "legend-shipping-info");
        legend.innerText = "배송지 정보";

        const shippingInfoWrapper = document.createElement("div");
        shippingInfoWrapper.setAttribute("class", "shipping-info-wrapper");

        const recipientName = new RecipientName();
        const recipientPhone = new RecipientPhone();
        const recipientAddress = new RecipientAddress();
        const shippingMessage = new ShippingMessage();

        shippingInfoWrapper.append(
            recipientName.render(),
            recipientPhone.render(),
            recipientAddress.render(),
            shippingMessage.render()
        );
        this.fieldset.append(legend, shippingInfoWrapper);

        return this.fieldset;
    }
}

export default RecipientInfo;
