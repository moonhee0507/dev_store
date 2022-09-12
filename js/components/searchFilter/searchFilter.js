import SortOrder from "../sortOrder/sortOrder.js";
import SortView from "../sortView/sortView.js";

class SearchFilter {
    constructor() {
        this.wrapper = document.createElement("div");
    }

    render() {
        this.wrapper.setAttribute("class", "style-wrapper-filter");

        const sortOrder = new SortOrder();
        const sortView = new SortView();

        this.wrapper.appendChild(sortOrder.render());
        this.wrapper.appendChild(sortView.render());

        return this.wrapper;
    }
}

export default SearchFilter;
