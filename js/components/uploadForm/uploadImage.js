class UploadImage {
    constructor() {
        this.container = document.createElement("div");
    }

    render() {
        this.container.setAttribute("class", "style-container-upload-img");

        const em = document.createElement("em");
        em.setAttribute("class", "txt-upload-small");
        em.innerText = "상품 이미지";

        const imgContainer = document.createElement("div");
        imgContainer.setAttribute("class", "style-container-img");

        const label = document.createElement("label");
        label.setAttribute("for", "product-img");

        const img = document.createElement("img");
        img.setAttribute("src", "../images/icon-img.png");
        img.setAttribute("alt", "상품 이미지 업로드 버튼");
        img.setAttribute("class", "button-upload-img");
        img.setAttribute("title", "업로드");

        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("name", "product-img");
        input.setAttribute("id", "product-img");
        input.setAttribute("accept", ".jpg, .jpeg, .png");
        input.setAttribute("required", true);

        this.container.appendChild(em);
        this.container.appendChild(imgContainer);
        this.container.appendChild(input);
        imgContainer.appendChild(label);
        label.appendChild(img);

        input.addEventListener("change", handleImageChange);

        function handleImageChange(e) {
            const currentFile = e.target.files;
            let formData = new FormData();
            formData.append("image", currentFile[0]);
            validFileType(currentFile) && preview(currentFile);
            iconBlur();
        }

        function preview(currentFile) {
            const reader = new FileReader();
            reader.onload = () => {
                imgContainer.style.backgroundImage = `url(${reader.result})`;
            };
            reader.readAsDataURL(currentFile[0]);
        }

        function iconBlur() {
            img.style.opacity = "0.3";
        }

        let fileTypes = ["image/jpg", "image/jpeg", "image/png"];

        function validFileType(currentFile) {
            if (fileTypes.includes(currentFile[0].type)) {
                return true;
            } else {
                alert(".jpg, .jpeg, .png 파일만 업로드 가능합니다.");
                return false;
            }
        }

        if (window.localStorage.getItem("edit")) {
            imgContainer.style.backgroundImage = `url(${
                JSON.parse(window.localStorage.getItem("edit")).image
            })`;
            iconBlur();
        }

        return this.container;
    }
}

export default UploadImage;
