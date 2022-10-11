class Router {
    constructor(routes) {
        if (!routes) {
            console.log("경로를 초기화할 수 없습니다. 경로가 필요합니다.");
        }

        this.routes = routes;

        for (const key in routes) {
            const route = routes[key];
            if (key.indexOf(":") > -1) {
                const [_, routeName, param] = pathname.split("/");
                this.routes["/" + routeName] = route;
            }
        }
    }

    init(rootElementId) {
        if (!rootElementId) {
            return null;
        }

        this.rootElementId = rootElementId;

        this.routing(window.location.pathname);

        window.addEventListener("click", (event) => {
            if (event.target.tagname === "a") {
                event.preventDefault();
                this.routePush(event.target.href);
            }
        });

        window.onpopstate = () => this.routing(window.location.pathname);
    }

    routePush(pathname) {
        window.history.pushState({}, null, pathname);
        this.routing(window.location.pathname);
    }

    routing(pathname) {
        const [_, routeName, param] = pathname.split("/");
        let page = "";

        if (this.routes[pathname]) {
            const component = new this.routes[pathname]();
            page = component.render();
        } else if (param) {
            const component = new this.routes["/" + routeName](param);
            page = component.render();
        }

        if (page) {
            this.render(page);
        }
    }

    render(page) {
        const rootElement = document.querySelector(this.rootElementId);
        rootElement.innerHTML = "";
        rootElement.appendChild(page);
    }
}

export default Router;
