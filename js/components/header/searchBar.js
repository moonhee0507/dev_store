import SearchList from "./searchList";
import { InputClearButton, SearchButton } from "../button/index.js";

class SearchBar {
    constructor() {
        this.container = document.createElement("form");
    }

    render() {
        this.container.setAttribute("name", "search");
        this.container.setAttribute("class", "style-search");

        const autocomplete = document.createElement("div");
        autocomplete.setAttribute("class", "autocomplete");

        const labelSearch = document.createElement("label");
        labelSearch.setAttribute("for", "searchProducts");
        labelSearch.setAttribute("class", "sr-only");
        labelSearch.innerText = "상품 검색";

        const inputSearch = document.createElement("input");
        inputSearch.setAttribute("id", "searchProducts");
        inputSearch.setAttribute("type", "search");

        if (window.location.pathname.includes("/search")) {
            let keywordFromURL = window.location.pathname.replace(
                /^\/search\/keyword=/g,
                ""
            );
            let decodedKeyword = decodeURIComponent(keywordFromURL);
            inputSearch.value = decodedKeyword;
        }

        const inputClearButton = new InputClearButton();
        const searchButton = new SearchButton();

        this.container.appendChild(labelSearch);
        this.container.appendChild(inputSearch);
        this.container.appendChild(inputClearButton.render());
        this.container.appendChild(searchButton.render());
        this.container.appendChild(autocomplete);

        inputSearch.addEventListener("input", () => {
            let keyword = inputSearch.value;
            if (keyword === "") {
                removeItems();
            } else {
                autocomplete.classList.add("show");
                removeItems();
                const searchList = new SearchList(keyword);
                autocomplete.appendChild(searchList.render());
            }
        });

        function removeItems() {
            while (autocomplete.firstChild) {
                autocomplete.removeChild(autocomplete.firstChild);
            }
        }

        return this.container;
    }
}

export default SearchBar;
