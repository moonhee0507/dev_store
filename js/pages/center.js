import Header from "../components/header/header.js";
import Footer from "../components/footer/footer.js";
import {
    DashboardTitle,
    DashboardMenu,
    DashboardView,
} from "../components/center/index.js";
import Loading from "../common/loading.js";

class Center {
    constructor(header, footer) {
        this.header = header;
        this.footer = footer;
    }

    render() {
        const meta = document.createElement("meta");
        meta.name = "viewport";
        meta.content = "width=1200";
        document.querySelector("head").appendChild(meta);

        const loading = new Loading();
        const root = document.getElementById("root");
        root.appendChild(loading.render());

        this.header = new Header();
        this.footer = new Footer();

        const header = document.createElement("header");
        header.setAttribute("class", "header");
        header.appendChild(this.header.render());

        const main = document.createElement("main");
        main.setAttribute("class", "max-width");
        const dashboard = document.createElement("div");
        dashboard.setAttribute("class", "style-wrapper-dashboard");
        main.appendChild(dashboard);

        const dashboardTitle = new DashboardTitle();

        const dashboardMain = document.createElement("div");
        dashboardMain.setAttribute("class", "style-container-center-main");
        const dashboardMenu = new DashboardMenu();
        const dashboardView = new DashboardView();
        dashboardMain.appendChild(dashboardMenu.render());
        setTimeout(() => {
            dashboardMain.appendChild(dashboardView.render());
            root.removeChild(root.firstChild);
        }, 2000);

        const footer = document.createElement("footer");
        footer.setAttribute("class", "footer");
        footer.appendChild(this.footer.render());

        dashboard.append(dashboardTitle.render(), dashboardMain);
        document.getElementById("root").append(header, main, footer);
    }
}

export default Center;
