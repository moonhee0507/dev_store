import { API_URL } from "../../common/constants";

class StoreIntroduction {
    constructor() {
        this.div = document.createElement("div");
    }

    render() {
        this.div.setAttribute("class", "style-wrapper-store-introduction");

        const h2 = document.createElement("h2");
        h2.setAttribute("class", "title-store");
        const url = window.location.pathname;
        let sellerNumber = parseInt(url.replace(/^\/store\//g, ""));
        this.div.appendChild(h2);

        findSellerName();
        async function findSellerName() {
            await fetch(`${API_URL}/products/`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    const firstElement = data.results.find((el) => {
                        return el.seller === sellerNumber;
                    });
                    h2.innerText = firstElement.store_name;
                })
                .catch((e) => console.error(e));
        }

        return this.div;
    }
}

export default StoreIntroduction;
