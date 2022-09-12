import Header from "../components/header/header.js";
import SearchDescription from "../components/searchDescription/searchDescription.js";
import SearchFilter from "../components/searchFilter/searchFilter.js";
import SearchList from "../components/searchList/searchList.js";

class Search {
    constructor(header) {
        this.header = header;
    }

    render() {
        this.header = new Header();

        // header
        const header = document.createElement("header");
        header.setAttribute("class", "header");
        header.appendChild(this.header.render());

        // main
        const main = document.createElement("main");
        main.setAttribute("class", "max-width");

        const searchDescription = new SearchDescription();
        const searchFilter = new SearchFilter();
        const searchList = new SearchList();

        main.append(
            searchDescription.render(),
            searchFilter.render(),
            searchList.render()
        );

        const root = document.getElementById("root");
        root.appendChild(header);
        root.appendChild(main);
    }
}

export default Search;
