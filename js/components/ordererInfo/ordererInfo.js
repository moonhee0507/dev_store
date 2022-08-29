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

        // 주문자 이름
        const ordererName = new OrdererName();
        // 주문자 연락처
        const ordererPhone = new OrdererPhone();
        // 주문자 이메일
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
