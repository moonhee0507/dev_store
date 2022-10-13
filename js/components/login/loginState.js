import observer from "./observer.js";

let defaultState = {
    passId: false,
    passPw: false,
};

let loginState = observer(defaultState, (state) => {
    const button = document.querySelector(".button-login");
    if (state.passId && state.passPw) {
        button.disabled = false;
        button.style.backgroundColor = "#334863";
        button.style.cursor = "pointer";
    } else {
        button.disabled = true;
        button.style.backgroundColor = "#abb5c2";
    }
});

export default loginState;
