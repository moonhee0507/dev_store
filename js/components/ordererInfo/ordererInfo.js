import { OrdererName, OrdererPhone, OrdererEmail } from "./index.js";

class OrdererInfo {
    constructor() {
        this.fieldset = document.createElement("fieldset");
    }

    render() {
        this.fieldset.setAttribute("class", "fieldset-shipping-info");

        const legend = document.createElement("legend");
        legend.setAttribute("class", "legend-shipping-info");
        legend.innerText = "주문자 정보";

        const ordererInfoWrapper = document.createElement("div");
        ordererInfoWrapper.setAttribute("class", "orderer-info-wrapper");

        const ordererName = new OrdererName();
        const ordererPhone = new OrdererPhone();
        const ordererEmail = new OrdererEmail();

        ordererInfoWrapper.append(
            ordererName.render(),
            ordererPhone.render(),
            ordererEmail.render()
        );
        this.fieldset.append(legend, ordererInfoWrapper);

        return this.fieldset;
    }
}

export default OrdererInfo;
