import { getSeller } from "../../common/api.js";

class DashboardMenu {
    constructor() {
        this.menu = document.createElement("div");
        this.quantity = {};
    }

    async getQuantity() {
        const token = window.localStorage.getItem("token");
        const data = await getSeller(token, 1);
        this.quantity = await data.count;
    }

    async setQuantity() {
        await this.getQuantity();

        this.menu.setAttribute("class", "center-menu");

        const ul = document.createElement("ul");
        ul.setAttribute("class", "center-list");

        let listLength = 5;
        let listArr = Array();

        const txtOnsale = document.createElement("div");
        txtOnsale.setAttribute("class", "txt-onsale");
        const numOnsale = document.createElement("span");
        numOnsale.setAttribute("class", "num-onsale");
        numOnsale.innerText = this.quantity;
        txtOnsale.append("판매중인 상품(", numOnsale, ")");

        listArr.push(txtOnsale);

        const txtOrderDelivery = document.createElement("div");
        txtOrderDelivery.setAttribute("class", "txt-order-delivery");
        txtOrderDelivery.innerText = "주문/배송";
        const numSmallOd = document.createElement("span");
        numSmallOd.setAttribute("class", "num-small od");
        const numOrderDelivery = document.createElement("em");
        numOrderDelivery.innerText = "2";
        numSmallOd.appendChild(numOrderDelivery);

        listArr.push(txtOrderDelivery);

        const txtInquiryReview = document.createElement("div");
        txtInquiryReview.setAttribute("class", "txt-inquiry-review");
        txtInquiryReview.innerText = "문의/리뷰";
        const numSmallIr = document.createElement("span");
        numSmallIr.setAttribute("class", "num-small ir");
        const numInquiryReview = document.createElement("em");
        numInquiryReview.innerText = "1";
        numSmallIr.appendChild(numInquiryReview);

        listArr.push(txtInquiryReview);

        const txtStatistics = document.createElement("div");
        txtStatistics.setAttribute("class", "txt-statistics");
        txtStatistics.innerText = "통계";

        listArr.push(txtStatistics);

        const txtStoreSettings = document.createElement("div");
        txtStoreSettings.setAttribute("class", "txt-store-settings");
        txtStoreSettings.innerText = "스토어 설정";

        listArr.push(txtStoreSettings);

        this.menu.appendChild(ul);

        for (let i = 0; i < listLength; i++) {
            const li = document.createElement("li");
            li.appendChild(listArr[i]);
            ul.appendChild(li);
        }
        txtOrderDelivery.after(numSmallOd);
        txtInquiryReview.after(numSmallIr);
    }
    render() {
        this.setQuantity();

        return this.menu;
    }
}

export default DashboardMenu;
