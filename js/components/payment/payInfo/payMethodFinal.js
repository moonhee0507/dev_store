import { PayMethod, FinalPayInfo } from "./index.js";

class PayMethodFinal {
    constructor() {
        this.div = document.createElement("div");
    }

    render() {
        this.div.setAttribute("class", "style-wrapper-method-final");

        const paymentMethod = new PayMethod();
        const finalPayment = new FinalPayInfo();

        this.div.appendChild(paymentMethod.render());
        this.div.appendChild(finalPayment.render());
        return this.div;
    }
}
export default PayMethodFinal;
