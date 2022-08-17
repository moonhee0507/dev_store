class ProductTab {
    constructor() {
        this.sectionElement = document.createElement("section");
    }

    render() {
        this.sectionElement.setAttribute("class", "section-product-info");

        const h2 = document.createElement("h2");
        h2.setAttribute("class", "sr-only");
        h2.innerText = "상품 정보 탭";
        const ul = document.createElement("ul");
        ul.setAttribute("class", "style-wrapper-info");

        // tab
        const tabName = ["상세정보", "리뷰", "Q&A", "반품/교환정보"];

        for (let i = 0; i < tabName.length; i++) {
            const li = document.createElement("li");
            const container = document.createElement("div");
            container.setAttribute("class", "style-container-info");
            const a = document.createElement("a");
            a.setAttribute("class", "link-product-info");
            a.setAttribute("href", "");
            a.innerText = tabName[i];
            container.appendChild(a);
            li.appendChild(container);
            ul.appendChild(li);
        }

        // content
        const content = document.createElement("div");
        content.setAttribute("class", "style-wrapper-tab-content");
        const tabDetail = document.createElement("div");
        tabDetail.setAttribute("class", "tab-detail");
        const imgTab = document.createElement("img");
        imgTab.setAttribute("class", "img-tab");
        imgTab.setAttribute("src", "../images/temporary-image.svg");
        imgTab.setAttribute("alt", "임시 이미지");
        tabDetail.appendChild(imgTab);

        const tabReview = document.createElement("div");
        tabReview.setAttribute("class", "tab-review");
        const tabQna = document.createElement("div");
        tabQna.setAttribute("class", "tab-qna");
        const tabReturnExchange = document.createElement("div");
        tabReturnExchange.setAttribute("class", "tab-return-exchange");

        content.append(tabDetail, tabReview, tabQna, tabReturnExchange);

        this.sectionElement.append(h2, ul, content);
        return this.sectionElement;
    }
}

export default ProductTab;
