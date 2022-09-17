class ViewInGridButton {
    constructor() {
        this.button = document.createElement("button");
    }

    render() {
        this.button.setAttribute("class", "search-view grid");
        this.button.setAttribute("type", "button");
        this.button.setAttribute("title", "그리드 방식");

        this.button.addEventListener("click", (e) => {
            initialize();
            let target = e.target;
            colorize(target);
        });

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

export default ViewInGridButton;
