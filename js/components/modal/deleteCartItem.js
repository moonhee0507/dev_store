import { API_URL } from "../../common/constants";

class DeleteCartItem {
    constructor(cart_item_id) {
        this.cart_item_id = cart_item_id;
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
        modalWrapperTxt.setAttribute("class", "modal-wrapper-txt delete");
        modalWrapperbutton.setAttribute("class", "modal-wrapper-button");

        const p = document.createElement("p");
        p.setAttribute("class", "txt-goToLogin");
        p.innerText = "상품을 삭제하시겠습니까?";

        const buttonNo = document.createElement("button");
        const buttonYes = document.createElement("button");
        buttonNo.setAttribute("type", "button");
        buttonYes.setAttribute("type", "button");
        buttonNo.setAttribute("class", "button-no");
        buttonYes.setAttribute("class", "button-yes");
        buttonNo.innerText = "취소";
        buttonYes.innerText = "확인";

        modalWrapperbutton.append(buttonNo, buttonYes);
        modalWrapperTxt.append(p);
        modalContent.append(buttonClose, modalWrapperTxt, modalWrapperbutton);
        this.modal.appendChild(modalContent);

        const body = document.querySelector("body");

        // 바깥부분 클릭하면 모달창이 없어지는 기능
        this.modal.addEventListener("click", (e) => {
            const target = e.target;
            if (target.classList.contains("show")) {
                target.classList.remove("show");
                body.style.overflow = "auto";
            }
        });
        // x 버튼 클릭하면 모달창이 없어지는 기능
        buttonClose.addEventListener("click", () => {
            this.modal.classList.remove("show");
            body.style.overflow = "auto";
        });
        // 취소 버튼 누르면 모달창이 없어지는 기능
        buttonNo.addEventListener("click", () => {
            this.modal.classList.remove("show");
            body.style.overflow = "auto";
        });

        // 확인 버튼을 누르면 DELETE 요청
        const cart_item_id = this.cart_item_id;
        buttonYes.addEventListener("click", () => {
            deleteReq();
        });

        async function deleteReq() {
            await fetch(`${API_URL}/cart/${cart_item_id}/`, {
                method: "DELETE",
                headers: {
                    Authorization: `JWT ${window.localStorage.getItem(
                        "token"
                    )}`,
                    "Content-Type": "application/json",
                },
            })
                .then((res) => {
                    res.ok === true && location.reload();
                })
                .catch((e) => console.error(e));
        }

        return this.modal;
    }
}

export default DeleteCartItem;
