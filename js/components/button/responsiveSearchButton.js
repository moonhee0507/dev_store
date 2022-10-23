class ResponsiveSearchButton {
    constructor() {
        this.button = document.createElement("button");
    }

    render() {
        this.button.setAttribute("type", "button");
        this.button.setAttribute("class", "button-responsive-search");
        const span = document.createElement("span");
        span.setAttribute("class", "sr-only");
        span.innerText = "검색";
        this.button.appendChild(span);

        return this.button;
    }
}

export default ResponsiveSearchButton;
