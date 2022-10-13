import { API_URL } from "../../common/constants.js";

class SearchButton {
    constructor() {
        this.button = document.createElement("button");
    }

    render() {
        this.button.setAttribute("type", "submit");
        this.button.setAttribute("class", "button-search");

        const searchImg = document.createElement("img");
        searchImg.setAttribute("class", "img-search");
        searchImg.setAttribute("src", "/assets/images/icon-search.png");
        searchImg.setAttribute("alt", "search icon");
        this.button.appendChild(searchImg);

        this.button.addEventListener("click", (e) => {
            e.preventDefault();
            const input = document.getElementById("searchProducts");
            if (input.value === "") {
                alert(
                    "검색어가 입력되지 않았습니다.\n정확한 검색어를 입력하여 다시 검색해주세요."
                );
            } else {
                getProductsData();
            }
        });

        async function getProductsData() {
            await fetch(`${API_URL}/products`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((res) => {
                    if (res.ok === true) {
                        let keyword =
                            document.getElementById("searchProducts").value;
                        window.location.href = `/search/keyword=${keyword}`;
                    } else {
                        alert("error");
                    }
                })
                .catch((e) => console.error(e));
        }

        return this.button;
    }
}

export default SearchButton;
