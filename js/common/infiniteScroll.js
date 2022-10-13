import { ProductCard } from "../components/productCard/index.js";
import getProducts from "./api.js";

export default function infiniteScroll() {
    let items = document.querySelector(".list-products").childNodes;
    const spinner = document.querySelector("#spinner");
    let callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                let page = parseInt(window.localStorage.getItem("page"));
                let next = window.localStorage.getItem("next");
                if (next === "null") {
                    spinner.remove();
                    return;
                } else if (parseInt(next) === page + 1) {
                    getProducts(page + 1, true).then((data) => {
                        const productList =
                            document.querySelector(".list-products");
                        data?.results.forEach((item) => {
                            const productItem = document.createElement("li");
                            const productCard = new ProductCard(item);
                            productItem.appendChild(productCard.render());
                            productList.appendChild(productItem);
                        });
                    });
                    observer.unobserve(entry.target);
                    setTimeout(() => {
                        observeLastItem(observer, items);
                    }, 3000);
                }
            }
        });
    };

    const options = { threshold: 1 };

    let observeLastItem = (observer, items) => {
        let lastItem = items[items.length - 1];
        observer.observe(lastItem);
    };

    let observer = new IntersectionObserver(callback, options);

    observeLastItem(observer, items);
}
