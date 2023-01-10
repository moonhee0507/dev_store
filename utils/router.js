import store from "../store";

class Router {
    constructor(routes, pathStore) {
        if (!routes) {
            console.log("경로를 초기화할 수 없습니다. 경로가 필요합니다.");
        }

        this.routes = routes;
        this.pathStore = pathStore;

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

        window.addEventListener("popstate", () =>
            this.routing(window.location.pathname)
        );

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
        // this.routerContext(pathname);
    }

    // routerContext(pathname) {
    //     // TODO: 여기다 만들어야 하나...
    //     console.log(pathname);
    // }

    render(page) {
        const rootElement = document.querySelector(this.rootElementId);
        rootElement.innerHTML = "";
        rootElement.appendChild(page);
        // store.dispatch({
        //     type: "naviSlice/CURRENT_PAGE",
        //     currentPage: window.location.pathname,
        // });
    }
}

export default Router;
