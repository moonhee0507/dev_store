class GoToLoginModal {
    constructor() {
        this.modal = document.createElement("div");
    }

    render() {
        this.modal.setAttribute("class", "modal");
        const modalContent = document.createElement("div");
        const buttonClose = document.createElement("button");
        const modalWrapperTxt = document.createElement("div");
        const modalWrapperbutton = document.createElement("div");
        modalContent.setAttribute("class", "modal-content");
        buttonClose.setAttribute("class", "button-close");
        modalWrapperTxt.setAttribute("class", "modal-wrapper-txt");
        modalWrapperbutton.setAttribute("class", "modal-wrapper-button");

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        p1.setAttribute("class", "txt-goToLogin");
        p2.setAttribute("class", "txt-goToLogin");
        p1.innerText = "로그인이 필요한 서비스입니다.";
        p2.innerText = "로그인 하시겠습니까?";

        const buttonNo = document.createElement("button");
        const buttonYes = document.createElement("button");
        buttonNo.setAttribute("type", "button");
        buttonYes.setAttribute("type", "button");
        buttonNo.setAttribute("class", "button-no");
        buttonYes.setAttribute("class", "button-yes");
        buttonNo.innerText = "아니오";
        buttonYes.innerText = "예";

        modalWrapperbutton.append(buttonNo, buttonYes);
        modalWrapperTxt.append(p1, p2);
        modalContent.append(buttonClose, modalWrapperTxt, modalWrapperbutton);
        this.modal.appendChild(modalContent);

        const body = document.querySelector("body");

        this.modal.addEventListener("click", (e) => {
            const target = e.target;
            if (target.classList.contains("show")) {
                target.classList.remove("show");
                body.style.overflow = "auto";
            }
        });

        buttonClose.addEventListener("click", () => {
            this.modal.classList.remove("show");
            body.style.overflow = "auto";
        });

        buttonNo.addEventListener("click", () => {
            this.modal.classList.remove("show");
            body.style.overflow = "auto";
        });

        buttonYes.addEventListener("click", () => {
            window.location.href = "/login";
        });

        return this.modal;
    }
}
export default GoToLoginModal;
