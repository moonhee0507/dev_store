import UploadImage from "./uploadImage";
import UploadDetail from "./uploadDetail";
import UploadEditor from "./uploadEditor";
import { UploadCancelButton, UploadSaveButton } from "../button/index.js";

class UploadForm {
    constructor() {
        this.form = document.createElement("form");
    }

    render() {
        this.form.setAttribute("id", "form-upload");

        const formContent = document.createElement("div");
        formContent.setAttribute("class", "style-wrapper-upload-grid");

        // 상품이미지 등록
        const uploadImage = new UploadImage();
        // 상품명등
        const uploadDetail = new UploadDetail();
        // 상품 에디터
        const uploadEditor = new UploadEditor();

        const buttonContainer = document.createElement("div");
        buttonContainer.setAttribute("class", "button-container-upload");

        // 취소버튼
        const uploadCancelButton = new UploadCancelButton();

        // 저장버튼
        const uploadSaveButton = new UploadSaveButton();

        this.form.appendChild(formContent);
        this.form.appendChild(buttonContainer);
        formContent.append(
            uploadImage.render(),
            uploadDetail.render(),
            uploadEditor.render()
        );
        buttonContainer.append(
            uploadCancelButton.render(),
            uploadSaveButton.render()
        );

        return this.form;
    }
}

export default UploadForm;
