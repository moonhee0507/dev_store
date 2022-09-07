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
            "- 상품 이미지\n.jpg, .jpeg, .png 파일만 업로드 가능합니다. 크기는 1000px * 1000px(정사각형) 권장합니다. 업로드가 안될 시 파일명에 특수문자를 제거하고 다시 시도해주세요.";
        const paragragh2 = "- 상품명\n4~20자 이내로 제한됩니다.";
        const paragragh3 =
            "- 상품 상세 정보를 입력하는 에디터 영역 기능이 있습니다.";
        const paragragh4 =
            "- 저장하기 버튼을 누르면 상품 등록이 완료되며 상품 상세 페이지로 이동합니다.";

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
