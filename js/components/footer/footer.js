class Footer {
    constructor() {
        this.wrapper = document.createElement("div");
    }

    render() {
        this.wrapper.setAttribute("class", "max-width");

        const linkBox = document.createElement("div");
        linkBox.setAttribute("class", "link-box");
        const styleLinkPage = document.createElement("div");
        styleLinkPage.setAttribute("class", "style-link-page");
        linkBox.appendChild(styleLinkPage);

        const a1 = document.createElement("a");
        a1.innerText = "데브스토어 소개";

        const a2 = document.createElement("a");
        a2.innerText = "이용약관";

        const a3 = document.createElement("a");
        a3.innerText = "개인정보처리방침";

        const a4 = document.createElement("a");
        a4.innerText = "전자금융거래약관";

        const a5 = document.createElement("a");
        a5.innerText = "청소년보호정책";

        const a6 = document.createElement("a");
        a6.innerText = "제휴문의";

        styleLinkPage.append(a1, a2, a3, a4, a5, a6);
        for (let i = 0; i < styleLinkPage.childNodes.length; i++) {
            styleLinkPage.childNodes[i].setAttribute("class", "link-page");
            styleLinkPage.childNodes[i].setAttribute("href", "");
        }

        const styleLinkSns = document.createElement("div");
        styleLinkSns.setAttribute("class", "style-link-sns");
        const linkSns1 = document.createElement("a");
        linkSns1.setAttribute("href", "https://www.instagram.com/");
        const iconSns1 = document.createElement("img");
        iconSns1.setAttribute("class", "icon-sns");
        iconSns1.setAttribute("src", "../images/icon-insta.png");
        iconSns1.setAttribute("alt", "Instagram Link");
        linkSns1.appendChild(iconSns1);

        const linkSns2 = document.createElement("a");
        linkSns2.setAttribute("href", "https://www.facebook.com/");
        const iconSns2 = document.createElement("img");
        iconSns2.setAttribute("class", "icon-sns");
        iconSns2.setAttribute("src", "../images/icon-facebook.png");
        iconSns2.setAttribute("alt", "Facebook Link");
        linkSns2.appendChild(iconSns2);

        const linkSns3 = document.createElement("a");
        linkSns3.setAttribute("href", "https://www.youtube.com/");
        const iconSns3 = document.createElement("img");
        iconSns3.setAttribute("class", "icon-sns");
        iconSns3.setAttribute("src", "../images/icon-youtube.png");
        iconSns3.setAttribute("alt", "Youtube Link");
        linkSns3.appendChild(iconSns3);

        styleLinkSns.append(linkSns1, linkSns2, linkSns3);
        for (let i = 0; i < styleLinkSns.childNodes.length; i++) {
            styleLinkSns.childNodes[i].setAttribute("class", "link-sns");
        }

        linkBox.appendChild(styleLinkSns);

        const coInfo = document.createElement("div");
        coInfo.setAttribute("class", "co-info");

        const coInfoList = document.createElement("dl");
        coInfoList.setAttribute("class", "co-info-list");
        coInfo.appendChild(coInfoList);

        coInfoList.innerHTML = `
            <dl class="co-info-list">
                <div class="style-co-info">
                    <dt class="sr-only">회사명</dt>
                    <dd class="txt-co-name">dev store</dd>
                </div>
                <div class="style-co-info">
                    <dt class="sr-only">주소</dt>
                    <dd>경기도 용인시 수지구 문정로</dd>
                </div>
                <div class="style-co-info">
                    <dt>사업자 번호</dt>
                    <dd>123-45-678</dd>
                </div>
                <div class="style-co-info">
                    <dt class="sr-only">업종</dt>
                    <dd>통신판매업</dd>
                </div>
                <div class="style-co-info">
                    <dt>대표</dt>
                    <dd>문희</dd>
                </div>
            </dl>
        `;

        this.wrapper.append(linkBox, coInfo);

        return this.wrapper;
    }
}

export default Footer;
