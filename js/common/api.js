import { API_URL } from "./constants.js";

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

export async function getSeller(token, page) {
    try {
        const res = await fetch(`${API_URL}/seller/?page=${page}`, {
            method: "GET",
            headers: {
                Authorization: `JWT ${token}`,
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        window.localStorage.setItem("sellerCount", data.count);
        return data;
    } catch (e) {
        console.error(e);
    }
}

export async function reqLogin(body) {
    const res = await fetch(`${API_URL}/accounts/login/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    const data = await res.json();
    return data;
}
