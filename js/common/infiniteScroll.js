import { ProductCard } from "../components/productCard";
import getProducts from "./api";

export default function infiniteScroll() {
    const items = document.querySelector(".list-products").childNodes;

    const observeLastItem = (observer, items) => {
        const lastItem = items[items.length - 1];
        observer.observe(lastItem);
    };

    let page = 1;
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    page += 1;
                    getProducts(page).then((data) => {
                        const productList =
                            document.querySelector(".list-products");
                        data.results.forEach((item) => {
                            const productItem = document.createElement("li");
                            const productCard = new ProductCard(item);
                            productItem.appendChild(productCard.render());
                            productList.appendChild(productItem);
                        });
                    });
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 1.0 }
    );
    observeLastItem(observer, items);
}
