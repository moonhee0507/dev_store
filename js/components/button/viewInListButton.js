class ViewInListButton {
    constructor() {
        this.button = document.createElement("button");
    }

    render() {
        this.button.setAttribute("class", "search-view list");
        this.button.setAttribute("type", "button");
        this.button.setAttribute("title", "리스트 방식");
        this.button.autofocus = true;

        this.button.addEventListener("click", (e) => {
            initialize();
            let target = e.target;
            colorize(target);
            window.localStorage.removeItem("grid");
        });

        const button = this.button;
        if (button.autofocus === true) {
            colorize(button);
        }

        function colorize(target) {
            target.classList.add("on");
            target.disabled = true;
        }

        function initialize() {
            const button = document.querySelectorAll(".search-view");
            for (let i = 0; i < button.length; i++) {
                button[i].classList.remove("on");
                button[i].disabled = false;
            }
        }

        return this.button;
    }
}

export default ViewInListButton;
