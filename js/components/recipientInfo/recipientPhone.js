class RecipientPhone {
    constructor() {
        this.wrapper = document.createElement("div");
    }

    render() {
        this.wrapper.setAttribute("class", "style-wrapper-inline");

        const inputTitle = document.createElement("strong");
        inputTitle.setAttribute("class", "input-title");
        inputTitle.innerText = "연락처";

        const phoneContainer = document.createElement("div");
        phoneContainer.setAttribute("class", "phone-container");

        // 010
        const select = document.createElement("select");
        select.setAttribute("class", "input-recipient-phone first");
        select.setAttribute("value", "010");

        select.innerHTML = `
                <option value="010">010</option>
                <option value="02">02</option>
                <option value="031">031</option>
                <option value="032">032</option>
                <option value="033">033</option>
                <option value="041">041</option>
                <option value="042">042</option>
                <option value="043">043</option>
                <option value="044">044</option>
                <option value="051">051</option>
                <option value="052">052</option>
                <option value="053">053</option>
                <option value="054">054</option>
                <option value="055">055</option>
                <option value="061">061</option>
                <option value="062">062</option>
                <option value="063">063</option>
                <option value="064">064</option>
                <option value="070">070</option>
                <option value="080">080</option>
                <option value="050">050</option>
                <option value="012">012</option>
                <option value="059">059</option>
        `;

        const firstDash = document.createElement("p");
        firstDash.setAttribute("class", "dash");
        firstDash.innerText = "-";

        const inputMiddle = document.createElement("input");
        inputMiddle.setAttribute("type", "number");
        inputMiddle.setAttribute("id", "input-recipient-phone-middle");
        inputMiddle.setAttribute("required", true);

        const secondDash = document.createElement("p");
        secondDash.setAttribute("class", "dash");
        secondDash.innerText = "-";

        const inputLast = document.createElement("input");
        inputLast.setAttribute("type", "number");
        inputLast.setAttribute("id", "input-recipient-phone-last");
        inputLast.setAttribute("required", true);

        const message = document.createElement("p");
        message.setAttribute("class", "payment-error-message");
        message.innerText = "*11자리 이하로 입력해주세요.";

        phoneContainer.append(
            select,
            firstDash,
            inputMiddle,
            secondDash,
            inputLast
        );
        this.wrapper.append(inputTitle, phoneContainer, message);

        // 숫자 외 입력불가 함수
        function onlyNumber(event) {
            if (
                event.key === "+" ||
                event.key === "-" ||
                event.key === "." ||
                event.key === "e"
            ) {
                event.preventDefault();
            }
        }
        // 길이제한 함수
        function numberMaxLength() {
            if (inputMiddle.value.length > 4) {
                inputMiddle.value = inputMiddle.value.slice(0, 4);
            } else if (inputLast.value.length > 4) {
                inputLast.value = inputLast.value.slice(0, 4);
            }
        }

        inputMiddle.addEventListener("keydown", onlyNumber);
        inputMiddle.addEventListener("input", () => {
            numberMaxLength();
        });
        inputLast.addEventListener("keydown", onlyNumber);
        inputLast.addEventListener("input", () => {
            numberMaxLength();
        });

        // 유효성 검사
        inputMiddle.addEventListener("blur", () => {
            if (
                !(
                    inputMiddle.value.length === 3 ||
                    inputMiddle.value.length === 4
                )
            ) {
                inputMiddle.focus();
                message.innerText = "*3~4자를 입력해주세요.";
            } else {
                message.innerText = "";
            }
        });
        inputLast.addEventListener("blur", () => {
            if (inputLast.value.length !== 4) {
                inputLast.focus();
                message.innerText = "*4자를 입력해주세요.";
            } else {
                message.innerText = "";
            }
        });

        return this.wrapper;
    }
}

export default RecipientPhone;
