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

        // 우편번호 검색
        findZipCode.addEventListener("click", sample6_execDaumPostcode);

        function sample6_execDaumPostcode() {
            new daum.Postcode({
                oncomplete: function (data) {
                    // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                    // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                    // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                    var fullAddr = ""; // 최종 주소 변수
                    var extraAddr = ""; // 조합형 주소 변수

                    // 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                    if (data.userSelectedType === "R") {
                        // 사용자가 도로명 주소를 선택했을 경우
                        fullAddr = data.roadAddress;
                    } else {
                        // 사용자가 지번 주소를 선택했을 경우(J)
                        fullAddr = data.jibunAddress;
                    }

                    // 사용자가 선택한 주소가 도로명 타입일때 조합한다.
                    if (data.userSelectedType === "R") {
                        //법정동명이 있을 경우 추가한다.
                        if (data.bname !== "") {
                            extraAddr += data.bname;
                        }
                        // 건물명이 있을 경우 추가한다.
                        if (data.buildingName !== "") {
                            extraAddr +=
                                extraAddr !== ""
                                    ? ", " + data.buildingName
                                    : data.buildingName;
                        }
                        // 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.
                        fullAddr +=
                            extraAddr !== "" ? " (" + extraAddr + ")" : "";
                    }

                    // 우편번호와 주소 정보를 해당 필드에 넣는다.
                    inputZipCode.value = data.zonecode; //5자리 새우편번호 사용
                    inputAddressMain.value = fullAddr;

                    // 커서를 상세주소 필드로 이동한다.
                    inputAddressSub.focus();
                    message.innerText = "";
                },
            }).open();
        }

        return this.wrapper;
    }
}

export default RecipientAddress;
