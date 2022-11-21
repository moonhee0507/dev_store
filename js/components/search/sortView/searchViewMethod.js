import { ViewInListButton, ViewInGridButton } from "../../button/index.js";

class SearchViewMethod {
    constructor() {
        this.div = document.createElement("div");
    }

    render() {
        this.div.setAttribute("class", "search-view-method");
        const viewInListButton = new ViewInListButton();
        const viewInGridButton = new ViewInGridButton();

        this.div.appendChild(viewInListButton.render());
        this.div.appendChild(viewInGridButton.render());

        return this.div;
    }
}

export default SearchViewMethod;
