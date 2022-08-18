class MoveInfo {
    constructor() {
        this.wrapper = document.createElement("div");
    }
    render() {
        this.wrapper.setAttribute("class", "style-wrapper-move");
        const txtInfo = document.createElement("p");
        txtInfo.setAttribute("class", "txt-info");
        const sec = document.createElement("span");
        sec.setAttribute("class", "sec");
        txtInfo.appendChild(sec);
        sec.after("초 후 홈으로 이동합니다.");
        this.wrapper.appendChild(txtInfo);

        let count = 3;
        sec.innerText = `${count}`;
        // 3초 후 홈 이동
        setTimeout(() => {
            window.location.pathname = "/";
        }, 3000);
        // 1초 마다 텍스트 변화
        setInterval(() => {
            count -= 1;
            sec.innerText = `${count}`;
        }, 1000);

        return this.wrapper;
    }
}

export default MoveInfo;
