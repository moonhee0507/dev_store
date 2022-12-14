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

export async function reqLogout() {
    await fetch(`${API_URL}/accounts/logout/`, {
        method: "POST",
        headers: {
            Authorization: `JWT ${window.localStorage.getItem("token")}`,
            "Content-Type": "application/json",
        },
    })
        .then((res) => {
            if (res.ok === true) {
                window.localStorage.clear();
                window.location.href = "/";
            } else {
                console.error("?????? ??????????????????.");
            }
        })
        .catch((e) => console.error(e));
}

export async function reqCart(
    method,
    product_id,
    quantity,
    cart_item_id,
    is_active
) {
    const res = await fetch(
        `${API_URL}/cart/${cart_item_id ? cart_item_id + "/" : ""}`,
        {
            method: method,
            headers: {
                Authorization: `JWT ${window.localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
            ...((method === "POST" || method === "PUT") && {
                body: JSON.stringify({
                    product_id: product_id,
                    quantity: quantity,
                    check: true,
                    ...(is_active && {
                        is_active: is_active,
                    }),
                }),
            }),
        }
    );
    return res;
}

export async function reqValid(username) {
    await fetch(`${API_URL}/accounts/signup/valid/${username}`, {
        method: "POST",
    })
        .then((res) => {
            console.log(res);
        })
        .catch((e) => console.error(e));
}

export async function reqUpload(formData, id) {
    await fetch(`${API_URL}/products/${id ? id + "/" : ""}`, {
        method: id ? "PATCH" : "POST",
        headers: {
            Authorization: `JWT ${window.localStorage.getItem("token")}`,
        },
        body: formData,
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.product_id) {
                window.location.href = `/products/${data.product_id}`;
                window.localStorage.removeItem("edit");
                window.localStorage.removeItem("shipping_method");
            } else {
                alert("?????? ????????? ??????????????????.");
            }
        })
        .catch((e) => console.error(e));
}

export async function reqDeleteCart(middleAddress, cart_item_id) {
    await fetch(`${API_URL}/${middleAddress}/${cart_item_id}/`, {
        method: "DELETE",
        headers: {
            Authorization: `JWT ${window.localStorage.getItem("token")}`,
            "Content-Type": "application/json",
        },
    })
        .then((res) => {
            res.ok === true && location.reload();
        })
        .catch((e) => console.error(e));
}
