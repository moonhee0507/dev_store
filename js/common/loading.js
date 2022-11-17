class Loading {
    constructor() {
        this.view = document.createElement("div");
    }

    render() {
        this.view.setAttribute("class", "view-loading show");
        const spinner = document.createElement("div");
        spinner.setAttribute("class", "view-loading-content");

        this.view.appendChild(spinner);
        return this.view;
    }
}

export default Loading;
