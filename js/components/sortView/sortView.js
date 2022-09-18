import SearchViewQuantity from "./searchViewQuantity";
import SearchViewMethod from "./searchViewMethod";

class SortView {
    constructor() {
        this.div = document.createElement("div");
    }

    render() {
        this.div.setAttribute("class", "sort-view");

        const searchViewQuantity = new SearchViewQuantity();
        const searchViewMethod = new SearchViewMethod();

        this.div.appendChild(searchViewQuantity.render());
        this.div.appendChild(searchViewMethod.render());

        return this.div;
    }
}

export default SortView;
