class ShippingMessage {
    constructor() {
        this.wrapper = document.createElement("div");
    }

    render() {
        this.wrapper.setAttribute("class", "style-wrapper-inline");

        const inputTitle = document.createElement("strong");
        inputTitle.setAttribute("class", "input-title");
        inputTitle.innerText = "배송 메시지";

        const messageContainer = document.createElement("div");
        messageContainer.setAttribute("class", "message-container");

        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", "input-message");
        input.setAttribute("title", "배송 메시지");
        input.setAttribute("value", "배송 전에 미리 연락 바랍니다.");

        const commentWrapper = document.createElement("div");
        commentWrapper.setAttribute("class", "comment-wrapper");
        const comment = document.createElement("div");
        comment.setAttribute("class", "comment");
        const ul = document.createElement("ul");
        const li1 = document.createElement("li");
        li1.setAttribute("class", "list-comment");
        const a1 = document.createElement("a");
        const span1 = document.createElement("span");
        span1.setAttribute("class", "txt-comment");
        span1.innerText = "배송 전에 미리 연락 바랍니다.";

        const li2 = document.createElement("li");
        li2.setAttribute("class", "list-comment");
        const a2 = document.createElement("a");
        const span2 = document.createElement("span");
        span2.setAttribute("class", "txt-comment");
        span2.innerText = "부재시 경비실에 맡겨 주세요.";

        const li3 = document.createElement("li");
        li3.setAttribute("class", "list-comment");
        const a3 = document.createElement("a");
        const span3 = document.createElement("span");
        span3.setAttribute("class", "txt-comment");
        span3.innerText = "부재시 전화 주시거나 문자 남겨 주세요.";

        input.addEventListener("click", () => {
            if (commentWrapper.style.display === "none") {
                commentWrapper.style.display = "block";
                handleComment();
            } else {
                commentWrapper.style.display = "none";
            }
        });

        function handleComment() {
            const li = document.querySelectorAll(".list-comment");
            for (let i = 0; i < li.length; i++) {
                li[i].addEventListener("click", () => {
                    input.value = li[i].firstChild.firstChild.innerText;
                    commentWrapper.style.display = "none";
                });
            }
            document.getElementById("root").addEventListener("click", (e) => {
                const target = e.target;
                if (target !== input) {
                    commentWrapper.style.display = "none";
                }
            });
        }

        a1.appendChild(span1);
        a2.appendChild(span2);
        a3.appendChild(span3);
        li1.appendChild(a1);
        li2.appendChild(a2);
        li3.appendChild(a3);
        ul.append(li1, li2, li3);
        comment.appendChild(ul);
        commentWrapper.appendChild(comment);

        messageContainer.append(input, commentWrapper);
        this.wrapper.append(inputTitle, messageContainer);

        return this.wrapper;
    }
}
export default ShippingMessage;
