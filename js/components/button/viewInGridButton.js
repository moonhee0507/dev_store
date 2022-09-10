class ViewInGridButton {
    constructor() {
        this.a = document.createElement("a");
    }

    render() {
        this.a.setAttribute("class", "search-view grid");
        const span = document.createElement("span");
        span.setAttribute("class", "sr-only");
        span.innerText = "그리드 방식";

        this.a.appendChild(span);

        return this.a;
    }
}

export default ViewInGridButton;
