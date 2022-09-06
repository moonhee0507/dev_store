class UploadReference {
    constructor() {
        this.aside = document.createElement("aside");
    }

    render() {
        this.aside.setAttribute("class", "upload-aside");

        const wrapper = document.createElement("div");
        wrapper.setAttribute("class", "upload-aside-wrapper");

        const title = document.createElement("em");
        title.innerText = "*상품 등록 주의사항";

        const reference = document.createElement("div");
        reference.setAttribute("class", "style-wrapper-reference");

        const paragragh1 =
            "- 상품 이미지\n.jpg, .jpeg, .png 파일만 업로드 가능합니다. 크기는 1000px * 1000px(정사각형) 권장합니다.";
        const paragragh2 = "- 상품명\n4~20자 이내의 상품명을 입력해주세요.";
        const paragragh3 =
            "- 자신과 우는 옷을 지혜는 아니다. 더운지라 설레는 기쁘며, 위하여서, 평화스러운 광야에서 그리하였는가? 소담스러운 위하여 인도하겠다는 어디 무엇을 이상을 같지  따뜻한 청춘 칼이다.";
        const paragragh4 =
            "- 가치를 그들을 예수는 찬미를 가슴이 과실이 이것이다. 희망의 것이다.보라, 풍부하게 이것은 황금시대를 얼마나 인간에 돋고, 이것이다.";

        let paragraghLength = 4;
        let paragragh = [paragragh1, paragragh2, paragragh3, paragragh4];
        for (let i = 0; i < paragraghLength; i++) {
            const p = document.createElement("p");
            p.innerText = paragragh[i];
            reference.appendChild(p);
        }

        this.aside.appendChild(wrapper);
        wrapper.append(title, reference);

        return this.aside;
    }
}
export default UploadReference;
