import GoToLogin from "../modal/goToLogin.js";
import SearchBar from "./searchBar.js";
import StoreIntroduction from "../store/storeIntroduction.js";
import { reqLogout } from "../../common/api.js";
import {
    ResponsiveSearchButton,
    ResponsiveCartButton,
} from "../button/index.js";

class Header {
    constructor() {
        this.head = document.createElement("div");
    }

    render() {
        const url = window.location.pathname;
        this.head.setAttribute("class", "head max-width");

        const styleWrapper = document.createElement("div");
        styleWrapper.setAttribute("class", "style-wrapper");

        const h1 = document.createElement("h1");
        h1.setAttribute("title", "홈 이동");
        h1.setAttribute("class", "dev-store");
        const a = document.createElement("a");
        const logoImg = document.createElement("img");
        logoImg.setAttribute("class", "logo");
        logoImg.setAttribute("src", "/assets/images/logo.svg");
        logoImg.setAttribute("alt", "dev store logo");
        a.setAttribute("href", "/");
        a.appendChild(logoImg);
        h1.appendChild(a);
        styleWrapper.appendChild(h1);

        const searchBar = new SearchBar();

        const titleSellerCenter = document.createElement("h2");
        titleSellerCenter.setAttribute("class", "title-seller-center");
        titleSellerCenter.innerText = "판매자 센터";

        const storeIntroduction = new StoreIntroduction();

        !url.includes("/store") &&
            styleWrapper.appendChild(
                url === "/center" || url === "/upload"
                    ? titleSellerCenter
                    : searchBar.render()
            );

        const nav = document.createElement("nav");
        nav.setAttribute("class", "header-nav");
        const listUsermenu = document.createElement("ul");
        listUsermenu.setAttribute("class", "list-usermenu");
        nav.appendChild(listUsermenu);

        const listItem1 = document.createElement("li");
        listUsermenu.appendChild(listItem1);

        const listItem2 = document.createElement("li");
        listUsermenu.appendChild(listItem2);

        const listItem3 = document.createElement("li");
        listUsermenu.appendChild(listItem3);

        const responsiveSearchButton = new ResponsiveSearchButton();
        listItem1.appendChild(responsiveSearchButton.render());

        const myPageButton = document.createElement("button");
        myPageButton.setAttribute("class", "link-list mypage");
        myPageButton.setAttribute("type", "button");

        const dropDown = document.createElement("div");
        dropDown.setAttribute("class", "dropdown");
        dropDown.appendChild(myPageButton);
        listItem3.appendChild(dropDown);

        const infoFeat = () => {
            const userId = document.createElement("strong");
            userId.setAttribute("class", "txt-user-id");
            userId.innerText = localStorage.getItem("1");

            const dropContent = document.createElement("div");
            dropContent.setAttribute("class", "drop-content");
            dropContent.style.display = "none";
            const linkDropMy = document.createElement("a");
            linkDropMy.setAttribute("class", "link-drop");
            const linkDropLogout = document.createElement("a");
            linkDropLogout.setAttribute("class", "link-drop");
            linkDropMy.innerText = "마이페이지";
            linkDropLogout.innerText = "로그아웃";
            dropContent.append(linkDropMy, linkDropLogout);
            myPageButton.append(userId, dropContent);
            myPageButton.addEventListener("click", dropDown);
            myPageButton.addEventListener("blur", () => {
                dropContent.style.display = "none";
            });

            function dropDown() {
                if (dropContent.style.display === "none") {
                    dropContent.style.display = "block";
                } else {
                    dropContent.style.display = "none";
                }
            }

            linkDropLogout.addEventListener("click", () => {
                reqLogout();
            });
        };

        if (
            localStorage.getItem("token") &&
            localStorage.getItem("loginType") === "BUYER"
        ) {
            const responsiveCartButton = new ResponsiveCartButton();
            listItem2.appendChild(responsiveCartButton.render());
            infoFeat();
        } else if (
            localStorage.getItem("token") &&
            localStorage.getItem("loginType") === "SELLER"
        ) {
            infoFeat();

            const sellerCenterButton = document.createElement("a");
            sellerCenterButton.setAttribute("href", "/center");
            sellerCenterButton.setAttribute("title", "판매자 센터");
            sellerCenterButton.setAttribute("class", "link-seller-center");
            const vw = window.matchMedia(`(max-width: 500px)`);
            sellerCenterButton.innerHTML = vw.matches
                ? `<img src="/assets/images/icon-shopping-bag.svg" alt="판매자 센터" class="img-center">`
                : "판매자 센터";
            vw.addEventListener("change", (e) => {
                sellerCenterButton.innerHTML = e.matches
                    ? `<img src="/assets/images/icon-shopping-bag.svg" alt="판매자 센터" class="img-center">`
                    : "판매자 센터";
            });
            listItem2.appendChild(sellerCenterButton);
        } else {
            const responsiveCartButton = new ResponsiveCartButton();
            listItem2.appendChild(responsiveCartButton.render());

            const goToLogin = new GoToLogin();
            this.head.appendChild(goToLogin.render());

            const loginButton = document.createElement("p");
            loginButton.innerText = "로그인";
            loginButton.title = "로그인";
            myPageButton.classList.remove("mypage");
            myPageButton.classList.add("login");

            myPageButton.addEventListener("click", () => {
                window.location.href = "/login";
            });
            myPageButton.appendChild(loginButton);
        }

        this.head.appendChild(styleWrapper);
        url.includes("/store") &&
            this.head.appendChild(storeIntroduction.render());
        url === "/center" || url === "/upload"
            ? null
            : this.head.appendChild(nav);

        return this.head;
    }
}

export default Header;
