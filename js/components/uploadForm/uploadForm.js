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

        const uploadImage = new UploadImage();
        const uploadDetail = new UploadDetail();
        const uploadEditor = new UploadEditor();

        const buttonContainer = document.createElement("div");
        buttonContainer.setAttribute("class", "button-container-upload");

        const uploadCancelButton = new UploadCancelButton();

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
