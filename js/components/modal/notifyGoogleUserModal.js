class NotifyGoogleUserModal {
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
        p1.innerText = "구글 로그인 유저도 이용할 수 있도록";
        p2.innerText = "준비 중입니다. 조금만 기다려주세요!";

        const buttonConfirm = document.createElement("button");
        buttonConfirm.setAttribute("type", "button");
        buttonConfirm.setAttribute("class", "button-confirm");
        buttonConfirm.innerText = "확인";

        modalWrapperbutton.append(buttonConfirm);
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

        buttonConfirm.addEventListener("click", () => {
            this.modal.classList.remove("show");
            body.style.overflow = "auto";
        });

        return this.modal;
    }
}
export default NotifyGoogleUserModal;
