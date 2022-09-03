import Header from "../components/header/header.js";
import Footer from "../components/footer/footer.js";
import DashboardTitle from "../components/dashboardTitle/dashboardTitle.js";
import DashboardMenu from "../components/dashboardMenu/dashboardMenu.js";
import DashboardView from "../components/dashboardView/dashboardView.js";

class Center {
    constructor(header, section, footer) {
        this.header = header;
        this.section = section;
        this.footer = footer;
    }

    render() {
        this.header = new Header();
        this.footer = new Footer();

        // header
        const header = document.createElement("header");
        header.setAttribute("class", "header");
        header.appendChild(this.header.render());

        // section
        const section = document.createElement("section");
        section.setAttribute("class", "max-width");
        const dashboard = document.createElement("div");
        dashboard.setAttribute("class", "style-wrapper-dashboard");
        section.appendChild(dashboard);

        // 대시보드 타이틀(셀러명)
        const dashboardTitle = new DashboardTitle();

        // 판매자 메뉴, 판매 상품리스트
        const dashboardMain = document.createElement("div");
        dashboardMain.setAttribute("class", "style-container-center-main");
        const dashboardMenu = new DashboardMenu();
        const dashboardView = new DashboardView();
        dashboardMain.append(dashboardMenu.render(), dashboardView.render());

        // footer
        const footer = document.createElement("footer");
        footer.setAttribute("class", "footer");
        footer.appendChild(this.footer.render());

        dashboard.append(dashboardTitle.render(), dashboardMain);
        document.getElementById("root").append(header, section, footer);
    }
}

export default Center;
