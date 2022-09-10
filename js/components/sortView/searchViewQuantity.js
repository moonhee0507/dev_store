class SearchViewQuantity {
    constructor() {
        this.div = document.createElement("div");
    }

    render() {
        this.div.setAttribute("class", "search-view-quantity");

        const a = document.createElement("a");
        a.innerText = "20개씩 보기";

        const ul = document.createElement("ul");
        ul.setAttribute("class", "list-view-quantity");

        const arrOption = [20, 40, 60];

        for (let i = 0; i < arrOption.length; i++) {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.innerText = `${arrOption[i]}개씩 보기`;
            li.appendChild(a);
            ul.appendChild(li);
        }

        return this.div;
    }
}

export default SearchViewQuantity;
