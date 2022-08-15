class Header {
    constructor() {
        this.head = document.createElement("div");
    }

    render() {
        this.head.setAttribute("class", "head max-width");

        const styleWrapper = document.createElement("div");
        styleWrapper.setAttribute("class", "style-wrapper");

        // 로고
        const h1 = document.createElement("h1");
        const a = document.createElement("a");
        const logoImg = document.createElement("img");
        logoImg.setAttribute("class", "logo");
        logoImg.setAttribute("src", "../images/logo.svg");
        logoImg.setAttribute("alt", "dev store logo");
        a.appendChild(logoImg);
        h1.appendChild(a);
        styleWrapper.appendChild(h1);

        // 검색
        const formSearch = document.createElement("form");
        formSearch.setAttribute("class", "style-search");
        const labelSearch = document.createElement("label");
        labelSearch.setAttribute("for", "searchProducts");
        labelSearch.setAttribute("class", "sr-only");
        labelSearch.innerText = "상품 검색";
        const inputSearch = document.createElement("input");
        inputSearch.setAttribute("id", "searchProducts");
        inputSearch.setAttribute("type", "search");
        inputSearch.setAttribute("placeholder", "상품을 검색해보세요!");
        const buttonSearch = document.createElement("button");
        buttonSearch.setAttribute("type", "submit");
        buttonSearch.setAttribute("class", "button-search");
        const searchImg = document.createElement("img");
        searchImg.setAttribute("class", "img-search");
        searchImg.setAttribute("src", "../images/icon-search.png");
        searchImg.setAttribute("alt", "search icon");
        buttonSearch.appendChild(searchImg);

        formSearch.appendChild(labelSearch);
        formSearch.appendChild(inputSearch);
        formSearch.appendChild(buttonSearch);
        styleWrapper.appendChild(formSearch);

        // 사용자 메뉴(우측 상단)
        const nav = document.createElement("nav");
        const listUsermenu = document.createElement("ul");
        listUsermenu.setAttribute("class", "list-usermenu");
        nav.appendChild(listUsermenu);

        const listItem1 = document.createElement("li");
        listUsermenu.appendChild(listItem1);

        const linkList1 = document.createElement("a");
        linkList1.setAttribute("href", "/");
        linkList1.setAttribute("class", "link-list");
        listItem1.appendChild(linkList1);

        const shoppingBagImg = document.createElement("img");
        shoppingBagImg.setAttribute("class", "icon-shopping-bag");
        shoppingBagImg.setAttribute("src", "../images/icon-shopping-bag.svg");

        linkList1.append(shoppingBagImg, "장바구니");

        const listItem2 = document.createElement("li");
        listUsermenu.appendChild(listItem2);

        const linkList2 = document.createElement("a");
        linkList2.setAttribute("href", "/login");
        linkList2.setAttribute("class", "link-list");
        listItem2.appendChild(linkList2);

        const userImg = document.createElement("img");
        userImg.setAttribute("class", "icon-user");
        userImg.setAttribute("src", "../images/icon-user.svg");

        linkList2.append(userImg, "로그인");

        this.head.appendChild(styleWrapper);
        this.head.appendChild(nav);

        return this.head;
    }
}

export default Header;
