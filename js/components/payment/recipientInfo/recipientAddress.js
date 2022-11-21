class RecipientAddress {
    constructor() {
        this.wrapper = document.createElement("div");
    }

    render() {
        this.wrapper.setAttribute("class", "style-wrapper-inline");

        const inputTitle = document.createElement("div");
        inputTitle.setAttribute("class", "input-title");
        inputTitle.innerText = "배송주소";

        const addressContainer = document.createElement("div");
        addressContainer.setAttribute("class", "address-container");

        const zipCodeArea = document.createElement("div");
        const inputAddressMain = document.createElement("input");
        const inputAddressSub = document.createElement("input");
        zipCodeArea.setAttribute("class", "zip-code-area");
        inputAddressMain.setAttribute("id", "input-address-main");
        inputAddressMain.setAttribute("type", "text");
        inputAddressMain.setAttribute("readOnly", true);
        inputAddressMain.setAttribute("placeholder", "도로명 주소");
        inputAddressMain.setAttribute("required", true);
        inputAddressSub.setAttribute("id", "input-address-sub");
        inputAddressSub.setAttribute("type", "text");
        inputAddressSub.setAttribute("maxLength", "50");
        inputAddressSub.setAttribute("placeholder", "상세주소");

        const inputZipCode = document.createElement("input");
        inputZipCode.setAttribute("type", "text");
        inputZipCode.setAttribute("id", "input-zip-code");
        inputZipCode.setAttribute("readOnly", true);
        inputZipCode.setAttribute("maxLength", "7");
        inputZipCode.setAttribute("placeholder", "우편번호");

        const findZipCode = document.createElement("button");
        findZipCode.setAttribute("type", "button");
        findZipCode.setAttribute("class", "find-zip-code");
        findZipCode.innerText = "우편번호 조회";

        const message = document.createElement("p");
        message.setAttribute("class", "payment-error-message");
        message.innerText = "*버튼을 클릭해주세요.";

        zipCodeArea.append(inputZipCode, findZipCode, message);
        addressContainer.append(zipCodeArea, inputAddressMain, inputAddressSub);
        this.wrapper.append(inputTitle, addressContainer);

        findZipCode.addEventListener("click", sample6_execDaumPostcode);

        function sample6_execDaumPostcode() {
            new daum.Postcode({
                oncomplete: function (data) {
                    var fullAddr = "";
                    var extraAddr = "";

                    if (data.userSelectedType === "R") {
                        fullAddr = data.roadAddress;
                    } else {
                        fullAddr = data.jibunAddress;
                    }

                    if (data.userSelectedType === "R") {
                        if (data.bname !== "") {
                            extraAddr += data.bname;
                        }
                        if (data.buildingName !== "") {
                            extraAddr +=
                                extraAddr !== ""
                                    ? ", " + data.buildingName
                                    : data.buildingName;
                        }
                        fullAddr +=
                            extraAddr !== "" ? " (" + extraAddr + ")" : "";
                    }

                    inputZipCode.value = data.zonecode;
                    inputAddressMain.value = fullAddr;

                    inputAddressSub.focus();
                    message.innerText = "";
                },
            }).open();
        }

        return this.wrapper;
    }
}

export default RecipientAddress;
