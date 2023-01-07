import store from "../../../store.js";

class IdInput {
    constructor() {
        this.container = document.createElement("fieldset");
    }

    isActive(str) {
        store.dispatch({
            type: "loginSlice/LOGIN_ID",
            isActiveID: str.length ? true : false,
        });
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

        input.addEventListener("input", (e) => {
            this.isActive(e.target.value);
        });

        return this.container;
    }
}

export default IdInput;
