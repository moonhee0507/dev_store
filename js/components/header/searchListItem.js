class SearchListItem {
    constructor(keyword, matchItem) {
        this.keyword = keyword;
        this.matchItem = matchItem;
        this.a = document.createElement("a");
    }

    render() {
        this.a.setAttribute("class", "link-match");
        this.a.setAttribute("href", `/products/${this.matchItem.product_id}`);

        const container = document.createElement("div");
        container.setAttribute("class", "autocomplete-name");

        let productName = this.matchItem.product_name;
        const span1 = document.createElement("span");
        span1.innerText = productName.split(this.keyword)[0];

        const strong = document.createElement("strong");
        strong.setAttribute("class", "style-keyword");
        strong.innerText = this.keyword;

        const span2 = document.createElement("span");
        span2.innerText = productName.replace(
            productName.split(this.keyword)[0] + this.keyword,
            ""
        );

        this.a.appendChild(container);
        container.append(span1, strong, span2);
        return this.a;
    }
}

export default SearchListItem;
