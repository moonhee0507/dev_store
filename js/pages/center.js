import Header from "../components/header/header.js";
import Footer from "../components/footer/footer.js";
import DashboardTitle from "../components/dashboardTitle/dashboardTitle.js";
import DashboardMenu from "../components/dashboardMenu/dashboardMenu.js";
import DashboardView from "../components/dashboardView/dashboardView.js";

class Center {
    constructor(header, footer) {
        this.header = header;
        this.footer = footer;
    }

    render() {
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
        dashboardMain.append(dashboardMenu.render(), dashboardView.render());

        const footer = document.createElement("footer");
        footer.setAttribute("class", "footer");
        footer.appendChild(this.footer.render());

        dashboard.append(dashboardTitle.render(), dashboardMain);
        document.getElementById("root").append(header, main, footer);
    }
}

export default Center;
