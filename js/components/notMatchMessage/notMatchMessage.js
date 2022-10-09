class NotMatchMessage {
    constructor() {
        this.container = document.createElement("div");
    }

    render() {
        this.container.setAttribute("class", "search-message-box");

        let keyword = document.getElementById("searchProducts").value;
        const message = document.createElement("span");
        const styledKeyword = document.createElement("strong");
        message.setAttribute("class", "search-no-match");
        styledKeyword.setAttribute("class", "search-keyword");
        styledKeyword.innerText = `'` + keyword + `'`;

        message.append(styledKeyword, "에 대한 상품이 없습니다.");
        this.container.appendChild(message);

        return this.container;
    }
}

export default NotMatchMessage;
