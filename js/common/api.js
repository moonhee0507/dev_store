import { API_URL } from "./constants";

export default async function getProducts(page) {
    try {
        const res = await fetch(`${API_URL}/products/?page=${page}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        window.localStorage.setItem("page", page);
        window.localStorage.setItem(
            "next",
            data.next === null ? data.next : data.next.replace(/\D/g, "")
        );
        return data;
    } catch (e) {
        console.error(e);
    }
}
