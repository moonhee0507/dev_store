class SortOrder {
    constructor() {
        this.div = document.createElement("div");
    }

    render() {
        this.div.setAttribute("class", "sort-order");

        const lowPriceOrder = document.createElement("button");
        lowPriceOrder.setAttribute("type", "button");
        lowPriceOrder.setAttribute("class", "sort low-price");
        const vw = window.matchMedia(`(max-width: 440px)`);
        lowPriceOrder.innerText = vw.matches ? "↓" : "낮은 가격순";
        vw.addEventListener("change", (e) => {
            lowPriceOrder.innerText = e.matches ? "↓" : "낮은 가격순";
        });

        const highPriceOrder = document.createElement("button");
        highPriceOrder.setAttribute("type", "button");
        highPriceOrder.setAttribute("class", "sort high-price");
        highPriceOrder.innerText = vw.matches ? "↑" : "높은 가격순";
        vw.addEventListener("change", (e) => {
            highPriceOrder.innerText = e.matches ? "↑" : "높은 가격순";
        });

        const createdOrder = document.createElement("button");
        createdOrder.setAttribute("type", "button");
        createdOrder.setAttribute("class", "sort created");
        createdOrder.innerText = "등록일순";

        this.div.appendChild(lowPriceOrder);
        this.div.appendChild(highPriceOrder);
        this.div.appendChild(createdOrder);

        let arrButton = [lowPriceOrder, highPriceOrder, createdOrder];
        for (let i = 0; i < arrButton.length; i++) {
            arrButton[i].addEventListener("click", (e) => {
                initialize();
                let target = e.target;
                colorize(target);
            });
        }

        function colorize(target) {
            target.style.color = "#a158fe";
            target.classList.add("on");
            target.disabled = true;
        }

        function initialize() {
            for (let i = 0; i < arrButton.length; i++) {
                arrButton[i].style.color = "rgb(233, 233, 233)";
                arrButton[i].classList.remove("on");
                arrButton[i].disabled = false;
            }
        }

        return this.div;
    }
}

export default SortOrder;
