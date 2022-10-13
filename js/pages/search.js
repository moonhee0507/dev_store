import Header from "../components/header/header.js";
import SearchDescription from "../components/searchDescription/searchDescription.js";
import SearchFilter from "../components/searchFilter/searchFilter.js";
import SearchList from "../components/searchList/searchList.js";
import TopButton from "../components/button/topButton.js";

class Search {
    constructor(header) {
        this.header = header;
    }

    render() {
        this.header = new Header();

        const header = document.createElement("header");
        header.setAttribute("class", "header");
        header.appendChild(this.header.render());

        const main = document.createElement("main");
        main.setAttribute("class", "max-width");

        const searchDescription = new SearchDescription();
        const searchFilter = new SearchFilter();
        const searchList = new SearchList();
        const topButton = new TopButton();

        main.append(
            searchDescription.render(),
            searchFilter.render(),
            searchList.render()
        );

        const root = document.getElementById("root");
        root.append(header, main, topButton.render());
    }
}

export default Search;
