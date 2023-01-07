import store from "../../../store.js";

class BuyerButton {
    constructor() {
        this.button = document.createElement("button");
    }

    storeType() {
        store.dispatch({
            type: "loginSlice/LOGIN_USER",
            loginType: "BUYER",
            buyer: true,
            seller: false,
        });
    }

    render() {
        this.button.setAttribute("type", "button");
        this.button.setAttribute("class", "button-buyer on");
        this.button.setAttribute("name", "button-buyer");
        this.button.setAttribute("value", "BUYER");
        this.button.innerText = "구매회원 로그인";

        this.button.addEventListener("click", this.storeType);

        store.subscribe(() => {
            this.button.style.backgroundColor = store.getState().loginSlice
                .typeButtonStyle.buyer
                ? "inherit"
                : "#e9e9e9";
            this.button.classList.remove(
                store.getState().loginSlice.typeButtonStyle.buyer
                    ? "help"
                    : "on"
            );
            this.button.classList.add(
                store.getState().loginSlice.typeButtonStyle.buyer
                    ? "on"
                    : "help"
            );
        });

        return this.button;
    }
}

export default BuyerButton;
