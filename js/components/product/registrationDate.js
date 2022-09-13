import { API_URL } from "../../common/constants.js";

class RegistrationDate {
    constructor(id) {
        this.id = id;
        this.p = document.createElement("p");
        this.date = {};
    }

    // TODO: created_at
    async getDate() {
        const id = this.id;
        const res = await fetch(`${API_URL}/products/${id}/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await res.json();
        this.date = await data;
    }

    async setDate() {
        await this.getDate();

        this.p.setAttribute("class", "search-txt-date");
        const span = document.createElement("span");
        span.setAttribute("class", "search-date");
        span.innerText = this.date;
        this.p.append("등록일", span);
    }
    render() {
        this.setDate();

        return this.p;
    }
}

export default RegistrationDate;
