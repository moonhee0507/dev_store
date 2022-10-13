import loginState from "./loginState.js";

class PasswordInput {
    constructor() {
        this.container = document.createElement("fieldset");
    }

    render() {
        const legend = document.createElement("legend");
        legend.setAttribute("class", "legend password");
        const label = document.createElement("label");
        label.setAttribute("for", "password");
        label.setAttribute("class", "sr-only");
        label.innerText = "비밀번호";
        const input = document.createElement("input");
        input.setAttribute("id", "password");
        input.setAttribute("class", "input-login-password");
        input.setAttribute("type", "password");
        input.setAttribute("placeholder", "비밀번호");
        input.setAttribute("required", true);
        legend.append(label, input);
        this.container.appendChild(legend);

        input.addEventListener("input", () => {
            if (input.value !== "") {
                loginState.passPw = true;
            } else {
                loginState.passPw = false;
            }
        });
        return this.container;
    }
}

export default PasswordInput;
