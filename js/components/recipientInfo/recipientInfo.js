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

        // 수령자 이름
        const recipientName = new RecipientName();
        // 수령자 연락처
        const recipientPhone = new RecipientPhone();
        // 수령자 배송주소
        const recipientAddress = new RecipientAddress();
        // 수령자 배송 메시지
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
