import { getProductsDetail } from "../../../common/api.js";

class RegistrationDate {
    constructor(id, created_at, updated_at) {
        this.id = id;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.p = document.createElement("p");
        this.date = {};
    }

    async getDate() {
        const id = this.id;
        const data = await getProductsDetail(id);
        this.date = await data;
    }

    async setDate() {
        const p = this.p;
        await this.getDate();

        this.p.setAttribute("class", "search-txt-date");
        const span = document.createElement("span");
        span.setAttribute("class", "search-date");

        let isGrid = window.localStorage.getItem("grid") ? true : false;
        if (isGrid) {
            const createdAt = new Date(this.created_at);
            const updatedAt = new Date(this.updated_at);
            handleDate(createdAt, updatedAt);
        } else {
            const createdAt = new Date(this.date.created_at);
            const updatedAt = new Date(this.date.updated_at);
            handleDate(createdAt, updatedAt);
        }

        function handleDate(createdAt, updatedAt) {
            if (createdAt < updatedAt) {
                span.innerText = updatedAt.toLocaleDateString("ko-KR");
                p.append("수정일", span);
            } else {
                span.innerText = createdAt.toLocaleDateString("ko-KR");
                p.append("등록일", span);
            }
        }
    }
    render() {
        this.setDate();

        return this.p;
    }
}

export default RegistrationDate;
