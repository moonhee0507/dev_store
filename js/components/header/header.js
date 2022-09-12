import { API_URL } from "../../common/constants";
import { GoToLogin } from "../modal";
import SearchBar from "./searchBar";

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
        h1.setAttribute("title", "홈 이동");
        const a = document.createElement("a");
        const logoImg = document.createElement("img");
        logoImg.setAttribute("class", "logo");
        logoImg.setAttribute("src", "../images/logo.svg");
        logoImg.setAttribute("alt", "dev store logo");
        a.setAttribute("href", "/");
        a.appendChild(logoImg);
        h1.appendChild(a);
        styleWrapper.appendChild(h1);

        // 검색
        const searchBar = new SearchBar();

        // 판매자 센터
        const titleSellerCenter = document.createElement("h2");
        titleSellerCenter.setAttribute("class", "title-seller-center");
        titleSellerCenter.innerText = "판매자 센터";

        styleWrapper.appendChild(
            location.pathname === "/center" || location.pathname === "/upload"
                ? titleSellerCenter
                : searchBar.render()
        );

        // 사용자 메뉴(우측 상단)
        const nav = document.createElement("nav");
        const listUsermenu = document.createElement("ul");
        listUsermenu.setAttribute("class", "list-usermenu");
        nav.appendChild(listUsermenu);

        const listItem1 = document.createElement("li");
        listUsermenu.appendChild(listItem1);

        const listItem2 = document.createElement("li");
        listUsermenu.appendChild(listItem2);

        const myPageButton = document.createElement("button");
        myPageButton.setAttribute("class", "link-list mypage");
        myPageButton.setAttribute("type", "button");
        // 마이페이지 DropDown div
        const dropDown = document.createElement("div");
        dropDown.setAttribute("class", "dropdown");
        dropDown.appendChild(myPageButton);
        listItem2.appendChild(dropDown);

        async function logout() {
            await fetch(`${API_URL}/accounts/logout/`, {
                method: "POST",
                headers: {
                    Authorization: `JWT ${window.localStorage.getItem(
                        "token"
                    )}`,
                    "Content-Type": "application/json",
                },
            })
                .then((res) => {
                    if (res.ok === true) {
                        window.localStorage.clear();
                        window.location.pathname = "/";
                    } else {
                        console.error("다시 시도해주세요.");
                    }
                })
                .catch((e) => console.error(e));
        }

        const infoFeat = () => {
            // id
            const userId = document.createElement("strong");
            userId.setAttribute("class", "txt-user-id");
            userId.innerText = localStorage.getItem("1");

            // 마이페이지 드롭다운박스(마이페이지, 로그아웃)
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

            // 로그아웃 기능
            linkDropLogout.addEventListener("click", () => {
                logout();
            });
        };

        if (
            localStorage.getItem("token") &&
            localStorage.getItem("loginType") === "BUYER"
        ) {
            // 장바구니
            const cartButton = document.createElement("button");
            cartButton.setAttribute("class", "link-list cart");
            cartButton.setAttribute("type", "button");
            cartButton.innerText = "장바구니";
            listItem1.appendChild(cartButton);

            const showQt = document.createElement("em");
            showQt.setAttribute("class", "header-cart-qt");

            cartButton.addEventListener("click", () => {
                window.location.pathname = "/cart";
            });
            cartButton.appendChild(showQt);
            getCartData();
            // 장바구니 갯수 보여주기
            async function getCartData() {
                await fetch(`${API_URL}/cart/`, {
                    method: "GET",
                    headers: {
                        Authorization: `JWT ${window.localStorage.getItem(
                            "token"
                        )}`,
                        "Content-Type": "application/json",
                    },
                })
                    .then((res) => res.json())
                    .then((data) => (showQt.innerText = data.count))
                    .catch((e) => console.error(e));
            }
            infoFeat();
        } else if (
            localStorage.getItem("token") &&
            localStorage.getItem("loginType") === "SELLER"
        ) {
            infoFeat();

            // 판매자센터 버튼
            const sellerCenterButton = document.createElement("a");
            sellerCenterButton.setAttribute("href", "/center");
            sellerCenterButton.setAttribute("title", "판매자 센터");
            sellerCenterButton.setAttribute("class", "link-seller-center");
            sellerCenterButton.innerText = "판매자 센터";
            listItem1.appendChild(sellerCenterButton);
        } else {
            const cartButton = document.createElement("button");
            cartButton.setAttribute("class", "link-list cart");
            cartButton.setAttribute("type", "button");
            cartButton.innerText = "장바구니";
            listItem1.appendChild(cartButton);

            // 로그인 안내 모달 생성
            const goToLogin = new GoToLogin();
            this.head.appendChild(goToLogin.render());

            const loginButton = document.createElement("p");
            loginButton.innerText = "로그인";
            loginButton.title = "로그인";
            myPageButton.classList.remove("mypage");
            myPageButton.classList.add("login");

            myPageButton.addEventListener("click", () => {
                window.location.pathname = "/login";
            });
            myPageButton.appendChild(loginButton);
            // 장바구니 클릭이벤트(로그인 안내 모달)
            cartButton.addEventListener("click", () => {
                const body = document.querySelector("body");
                const modal = document.querySelector(".modal");
                modal.classList.add("show");
                // 모달 class가 show면 body의 overflow hidden처리
                if (modal.classList.contains("show")) {
                    body.style.overflow = "hidden";
                }
            });
        }

        this.head.appendChild(styleWrapper);
        window.location.pathname === "/center" ||
        window.location.pathname === "/upload"
            ? null
            : this.head.appendChild(nav);

        return this.head;
    }
}

export default Header;
