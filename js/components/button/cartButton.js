class CartButton {
    constructor() {
        this.button = document.createElement("button");
    }

    render() {
        this.button.setAttribute("class", "button-cart");
        this.button.innerText = "장바구니";

        const body = document.querySelector("body");
        const modal = document.querySelector(".modal");
        const buttonClose = document.querySelector(".button-close");
        const buttonNo = document.querySelector(".button-no");
        const buttonYes = document.querySelector(".button-yes");

        // 클릭이벤트
        this.button.addEventListener("click", () => {
            // 로그인 되어 있으면 /payment 이동
            // 로그인이 안되어 있으면 로그인 안내 모달 띄우기
            if (window.localStorage.getItem("token")) {
                window.location.pathname = "/payment";
            } else {
                // 로그인 안내 모달 띄우기
                modal.classList.toggle("show");

                // 모달 class가 show면 body의 overflow hidden처리
                if (modal.classList.contains("show")) {
                    body.style.overflow = "hidden";
                }
            }
        });

        // 바깥부분 클릭하면 모달창이 없어지는 기능
        modal.addEventListener("click", (e) => {
            const target = e.target;
            if (target.classList.contains("show")) {
                target.classList.remove("show");
                body.style.overflow = "auto";
            }
        });

        // x 버튼 클릭하면 모달창이 없어지는 기능
        buttonClose.addEventListener("click", () => {
            modal.classList.remove("show");
            body.style.overflow = "auto";
        });

        // 아니오 버튼 누르면 모달창이 없어지는 기능
        buttonNo.addEventListener("click", () => {
            modal.classList.remove("show");
            body.style.overflow = "auto";
        });

        // 예 버튼을 누르면 로그인 페이지로 이동하는 기능
        buttonYes.addEventListener("click", () => {
            window.location.pathname = "/login";
        });

        return this.button;
    }
}

export default CartButton;
