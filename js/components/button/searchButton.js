import { API_URL } from "../../common/constants";
import Search from "../../pages/search";

class SearchButton {
    constructor() {
        this.button = document.createElement("button");
    }

    render() {
        this.button.setAttribute("type", "submit");
        this.button.setAttribute("class", "button-search");

        const searchImg = document.createElement("img");
        searchImg.setAttribute("class", "img-search");
        searchImg.setAttribute("src", "../images/icon-search.png");
        searchImg.setAttribute("alt", "search icon");
        this.button.appendChild(searchImg);

        this.button.addEventListener("click", (e) => {
            e.preventDefault();
            getProductsData();
        });

        async function getProductsData() {
            await fetch(`${API_URL}/products`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    const keyword =
                        document.getElementById("searchProducts").value;
                    const results = data.results.filter((el) => {
                        return el.product_name.includes(keyword);
                    });
                    console.log(results);
                    window.localStorage.setItem("keyword", keyword);
                    window.localStorage.setItem(
                        "results",
                        JSON.stringify(results)
                    );

                    window.location.pathname = `/search/?${keyword}`;
                })
                .catch((e) => console.error(e));
        }

        return this.button;
    }
}

export default SearchButton;
