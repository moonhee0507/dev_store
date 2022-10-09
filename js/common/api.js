import { API_URL } from "./constants";

export default async function getProducts(page, io) {
    try {
        const res = await fetch(`${API_URL}/products/?page=${page}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        if (io === true) {
            window.localStorage.setItem("page", page);
            window.localStorage.setItem(
                "next",
                data.next === null ? data.next : data.next.replace(/\D/g, "")
            );
            window.localStorage.setItem("count", data.count);
        }
        return data;
    } catch (e) {
        console.error(e);
    }
}

export async function getProductsDetail(id) {
    try {
        const res = await fetch(`${API_URL}/products/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        return data;
    } catch (e) {
        console.error(e);
    }
}
