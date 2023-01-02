import PayForm from "./payForm.js";

class PayShippingInfo {
    constructor() {
        this.sectionElement = document.createElement("section");
    }

    render() {
        this.sectionElement.classList.add("section-shipping-info");
        const h3 = document.createElement("h3");
        h3.setAttribute("class", "sr-only");
        h3.innerText = "배송 및 결제정보 입력";

        const payForm = new PayForm();

        this.sectionElement.append(h3, payForm.render());
        return this.sectionElement;
    }
}

export default PayShippingInfo;
