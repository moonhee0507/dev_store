import store from "../../../store.js";

class SellerButton {
    constructor() {
        this.button = document.createElement("button");
    }

    storeType() {
        store.dispatch({
            type: "loginSlice/LOGIN_USER",
            loginType: "SELLER",
            buyer: false,
            seller: true,
        });
    }

    render() {
        this.button.setAttribute("type", "button");
        this.button.setAttribute("class", "button-seller help");
        this.button.setAttribute("name", "button-seller");
        this.button.setAttribute("value", "SELLER");
        this.button.innerText = "판매회원 로그인";

        this.button.addEventListener("click", this.storeType);

        store.subscribe(() => {
            this.button.style.backgroundColor = store.getState().rootReducer
                .loginSlice.typeButtonStyle.seller
                ? "inherit"
                : "#e9e9e9";
            this.button.classList.remove(
                store.getState().rootReducer.loginSlice.typeButtonStyle.seller
                    ? "help"
                    : "on"
            );
            this.button.classList.add(
                store.getState().rootReducer.loginSlice.typeButtonStyle.seller
                    ? "on"
                    : "help"
            );
        });

        return this.button;
    }
}

export default SellerButton;
