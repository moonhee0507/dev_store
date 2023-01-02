import Header from "../components/header/header.js";
import TopButton from "../components/button/topButton.js";
import Loading from "../common/loading.js";
import {
    SearchDescription,
    SearchFilter,
    SearchList,
} from "../components/search/index.js";

class Search {
    constructor(header) {
        this.header = header;
    }

    render() {
        const loading = new Loading();
        const root = document.getElementById("root");
        root.appendChild(loading.render());

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

        root.append(header, main, topButton.render());
        setTimeout(() => {
            root.removeChild(root.firstChild);
        }, 2000);
    }
}

export default Search;
