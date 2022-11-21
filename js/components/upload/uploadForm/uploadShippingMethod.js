class UploadShippingMethod {
    constructor() {
        this.container = document.createElement("div");
    }

    render() {
        this.container.setAttribute("class", "upload-container shippingmethod");

        const em = document.createElement("em");
        em.setAttribute("class", "txt-upload-small");
        em.innerText = "배송방법";

        const buttonContainer = document.createElement("div");
        buttonContainer.setAttribute(
            "class",
            "button-container-shippingmethod"
        );

        const parcel = document.createElement("button");
        parcel.setAttribute("type", "button");
        parcel.setAttribute("class", "button-parcel");
        parcel.setAttribute("value", "PARCEL");
        parcel.innerText = "택배, 소포, 등기";

        const delivery = document.createElement("button");
        delivery.setAttribute("type", "button");
        delivery.setAttribute("class", "button-delivery");
        delivery.setAttribute("value", "DELIVERY");
        delivery.innerText = "직접배송(화물배달)";

        this.container.appendChild(em);
        this.container.appendChild(buttonContainer);
        buttonContainer.appendChild(parcel);
        buttonContainer.appendChild(delivery);

        parcel.addEventListener("click", (e) => {
            clickState(e);
            delivery.style.background = "#303134";
            localStorage.setItem("shipping_method", parcel.value);
        });
        delivery.addEventListener("click", (e) => {
            clickState(e);
            parcel.style.background = "#303134";
            localStorage.setItem("shipping_method", delivery.value);
        });

        function clickState(e) {
            e.target.style.background = "#a158fe";
        }

        if (
            window.localStorage.getItem("edit") &&
            JSON.parse(window.localStorage.getItem("edit")).shipping_method ===
                "PARCEL"
        ) {
            parcel.style.background = "#a158fe";
            delivery.style.background = "#303134";
        } else if (
            window.localStorage.getItem("edit") &&
            JSON.parse(window.localStorage.getItem("edit")).shipping_method ===
                "DELIVERY"
        ) {
            delivery.style.background = "#a158fe";
            parcel.style.background = "#303134";
        }

        return this.container;
    }
}

export default UploadShippingMethod;
