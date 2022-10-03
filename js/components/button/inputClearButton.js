class InputClearButton {
    constructor() {
        this.button = document.createElement("button");
    }

    render() {
        this.button.setAttribute("type", "reset");
        this.button.setAttribute("class", "button-clear");
        const imgClear = document.createElement("img");
        imgClear.setAttribute("src", "../../../images/icon-delete.png");
        imgClear.setAttribute("alt", "입력내용 삭제 이미지");
        imgClear.setAttribute("class", "img-clear");

        this.button.appendChild(imgClear);

        this.button.addEventListener("click", () => {
            const autocomplete = document.querySelector(".autocomplete");
            while (autocomplete.firstChild) {
                autocomplete.removeChild(autocomplete.firstChild);
            }
        });

        return this.button;
    }
}

export default InputClearButton;
