class ViewInListButton {
    constructor() {
        this.a = document.createElement("a");
    }

    render() {
        this.a.setAttribute("class", "search-view list");
        const span = document.createElement("span");
        span.setAttribute("class", "sr-only");
        span.innerText = "리스트 방식";

        this.a.appendChild(span);

        return this.a;
    }
}

export default ViewInListButton;
