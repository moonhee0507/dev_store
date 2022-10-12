import PaymentMethod from "../paymentMethod/paymentMethod.js";
import FinalPayment from "../finalPayment/finalPayment.js";

class PayMethodFinal {
    constructor() {
        this.div = document.createElement("div");
    }

    render() {
        this.div.setAttribute("class", "style-wrapper-method-final");

        const paymentMethod = new PaymentMethod();
        const finalPayment = new FinalPayment();

        this.div.appendChild(paymentMethod.render());
        this.div.appendChild(finalPayment.render());
        return this.div;
    }
}
export default PayMethodFinal;
