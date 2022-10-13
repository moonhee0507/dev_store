import OrdererInfo from "../ordererInfo/ordererInfo.js";
import RecipientInfo from "../recipientInfo/recipientInfo.js";
import PayMethodFinal from "../payMethodFinal/payMethodFinal.js";

class PayForm {
    constructor() {
        this.form = document.createElement("form");
    }

    render() {
        this.form.setAttribute("id", "shipping-info-form");
        const titleShippingInfo = document.createElement("h4");
        titleShippingInfo.setAttribute("class", "title-shipping-info");
        titleShippingInfo.innerText = "배송정보";

        const ordererInfo = new OrdererInfo();

        const recipientInfo = new RecipientInfo();

        const payMethodFinal = new PayMethodFinal();

        this.form.append(
            titleShippingInfo,
            ordererInfo.render(),
            recipientInfo.render(),
            payMethodFinal.render()
        );

        return this.form;
    }
}
export default PayForm;
