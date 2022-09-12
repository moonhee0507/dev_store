import SearchList from "./searchList";
import SearchButton from "../button/searchButton";

class SearchBar {
    constructor() {
        this.container = document.createElement("form");
    }

    render() {
        this.container.setAttribute("name", "search");
        // this.container.setAttribute("method", "get");
        this.container.setAttribute("class", "style-search");

        const autocomplete = document.createElement("div");
        autocomplete.setAttribute("class", "autocomplete");
        // const searchList = new SearchList();
        // searchList.appendChild(searchList.render());

        const labelSearch = document.createElement("label");
        labelSearch.setAttribute("for", "searchProducts");
        labelSearch.setAttribute("class", "sr-only");
        labelSearch.innerText = "상품 검색";

        const inputSearch = document.createElement("input");
        inputSearch.setAttribute("id", "searchProducts");
        inputSearch.setAttribute("type", "search");
        inputSearch.setAttribute("name", "q");

        if (window.location.pathname.includes("/search")) {
            let keywordFromURL = window.location.pathname.replace(
                /^\/search\/keyword=/g,
                ""
            );
            let decodedKeyword = decodeURIComponent(keywordFromURL);
            inputSearch.value = decodedKeyword;
        }

        const searchButton = new SearchButton();

        this.container.appendChild(labelSearch);
        this.container.appendChild(inputSearch);
        this.container.appendChild(searchButton.render());
        this.container.appendChild(autocomplete);

        return this.container;
    }
}

export default SearchBar;
