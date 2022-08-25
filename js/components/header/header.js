import { API_URL } from "../../common/constants";
import { GoToLogin } from "../modal";

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

        const cartButton = document.createElement("button");
        cartButton.setAttribute("class", "link-list cart");
        cartButton.setAttribute("type", "button");
        cartButton.innerText = "장바구니";
        listItem1.appendChild(cartButton);

        const showQt = document.createElement("em");
        showQt.setAttribute("class", "header-cart-qt");

        const listItem2 = document.createElement("li");
        listUsermenu.appendChild(listItem2);

        // 조건부: 로그인-마이페이지
        const myPageButton = document.createElement("button");
        myPageButton.setAttribute("class", "link-list mypage");
        myPageButton.setAttribute("type", "button");
        // 마이페이지 DropDown div
        const dropDown = document.createElement("div");
        dropDown.setAttribute("class", "dropdown");
        dropDown.appendChild(myPageButton);
        listItem2.appendChild(dropDown);

        // 로그인 안내 모달 생성
        const goToLogin = new GoToLogin();

        if (window.localStorage.getItem("token")) {
            // 장바구니페이지로 이동
            cartButton.addEventListener("click", () => {
                window.location.pathname = "/cart";
            });
            cartButton.appendChild(showQt);

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
            myPageButton.appendChild(dropContent);
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
                            window.localStorage.removeItem("token");
                            window.location.pathname = "/";
                        } else {
                            console.error("다시 시도해주세요.");
                        }
                    })
                    .catch((e) => console.error(e));
            }

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
            getCartData();
        } else {
            // 토큰이 없으면 로그인
            const loginButton = document.createElement("p");
            loginButton.innerText = "로그인";
            myPageButton.addEventListener("click", () => {
                window.location.pathname = "/login";
            });
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
        this.head.appendChild(nav);
        this.head.appendChild(goToLogin.render());
        return this.head;
    }
}

export default Header;
