import Header from "../components/header/header.js";
import Footer from "../components/footer/footer.js";
import UploadReference from "../components/upload/uploadReference.js";
import UploadForm from "../components/upload/uploadForm/uploadForm.js";

class Upload {
    constructor(header, footer) {
        this.header = header;
        this.footer = footer;
    }

    render() {
        const meta = document.createElement("meta");
        meta.name = "viewport";
        meta.content = "width=1200";
        document.querySelector("head").appendChild(meta);

        this.header = new Header();
        this.footer = new Footer();

        const header = document.createElement("header");
        header.setAttribute("class", "header");
        header.appendChild(this.header.render());

        const main = document.createElement("main");
        main.setAttribute("class", "max-width");
        const h3 = document.createElement("h3");
        h3.setAttribute("class", "center-title3 upload");
        h3.innerText = "상품 등록";

        const uploadReference = new UploadReference();

        const section = document.createElement("section");
        section.setAttribute("class", "style-wrapper-upload-content");
        const h4 = document.createElement("h4");
        h4.setAttribute("class", "sr-only");
        h4.innerText = "상품 등록 양식";

        const uploadForm = new UploadForm();

        main.appendChild(h3);
        main.appendChild(uploadReference.render());
        main.appendChild(section);
        section.appendChild(h4);
        section.appendChild(uploadForm.render());

        const footer = document.createElement("footer");
        footer.setAttribute("class", "footer");
        footer.appendChild(this.footer.render());

        document.getElementById("root").append(header, main, footer);
    }
}

export default Upload;
