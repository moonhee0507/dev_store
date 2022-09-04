import { API_URL } from "../../common/constants.js";
import ProductForSaleList from "../productForSaleList/productForSaleList.js";

class DashboardView {
    constructor() {
        this.view = document.createElement("div");
        this.products = {};
    }

    // 전체 판매상품 정보 가져오기
    async getProductsData() {
        const res = await fetch(`${API_URL}/seller/`, {
            method: "GET",
            headers: {
                Authorization: `JWT ${window.localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();

        this.products = await data.results;
    }

    // 상품리스트 세팅
    async setProductList() {
        this.view.setAttribute("class", "center-view");
        // 제목행
        const tableHead = document.createElement("div");
        tableHead.setAttribute("class", "view-head");
        const ul = document.createElement("ul");
        ul.setAttribute("class", "view-list");

        let titleRowClassName = ["product-info", "price", "edit", "delete"];
        let titleRowText = ["상품정보", "판매가격", "수정", "삭제"];
        for (let i = 0; i < titleRowClassName.length; i++) {
            const li = document.createElement("li");
            li.setAttribute("class", "center-head");
            li.classList.add(titleRowClassName[i]);
            li.innerText = titleRowText[i];
            ul.appendChild(li);
        }
        tableHead.appendChild(ul);

        // get 실행
        await this.getProductsData();

        // 상품정보 행
        const tableBody = document.createElement("div");
        tableBody.setAttribute("class", "view-body");

        this.products.forEach((item) => {
            const productForSaleList = new ProductForSaleList(item);
            tableBody.appendChild(productForSaleList.render());
        });

        this.view.append(tableHead, tableBody);
    }

    render() {
        this.setProductList();

        return this.view;
    }
}

export default DashboardView;
