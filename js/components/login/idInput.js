import loginState from "./loginState.js";

class IdInput {
    constructor() {
        this.container = document.createElement("fieldset");
    }

    render() {
        const legend = document.createElement("legend");
        legend.setAttribute("class", "legend id");
        const label = document.createElement("label");
        label.setAttribute("for", "username");
        label.setAttribute("class", "sr-only");
        label.innerText = "아이디";
        const input = document.createElement("input");
        input.setAttribute("id", "username");
        input.setAttribute("class", "input-login-username");
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", "아이디");
        input.setAttribute("required", true);
        legend.append(label, input);
        this.container.appendChild(legend);

        input.addEventListener("input", changeState);

        function changeState() {
            if (input.value !== "") {
                loginState.passId = true;
            } else {
                loginState.passId = false;
            }
        }
        return this.container;
    }
}

export default IdInput;
