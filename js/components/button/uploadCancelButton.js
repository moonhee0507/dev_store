class UploadCancelButton {
    constructor() {
        this.button = document.createElement("button");
    }

    render() {
        this.button.setAttribute("type", "button");
        this.button.setAttribute("class", "button-upload-cancel");
        this.button.innerText = "취소";

        this.button.addEventListener("click", goBack);

        function goBack() {
            if (
                confirm(
                    `상품 ${
                        window.localStorage.getItem("edit") ? "수정" : "등록"
                    }을 취소하시겠습니까?`
                )
            ) {
                window.history.back();
                window.localStorage.removeItem("edit");
                window.localStorage.removeItem("shipping_method");
            }
        }

        return this.button;
    }
}

export default UploadCancelButton;
