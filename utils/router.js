class Router {
    constructor(routes) {
        // routes가 없는 경우 처리
        if (!routes) {
            console.log("경로를 초기화할 수 없습니다. 경로가 필요합니다.");
        }

        this.routes = routes;

        // 파라미터(/숫자)
        for (const key in routes) {
            const route = routes[key];
            if (key.indexOf(":") > -1) {
                const [_, routeName, param] = pathname.split("/");
                this.routes["/" + routeName] = route;
            }
        }
        console.log(this.routes);
    }

    init(rootElementId) {
        // root Id가 없는 경우 처리
        if (!rootElementId) {
            console.log("");
            return null;
        }

        this.rootElementId = rootElementId;

        // routing()은 경로를 파싱해서 그에 해당하는 컴포넌트를 뿌려준다
        this.routing(window.location.pathname);

        // a 태그를 클릭하면 일어나는 이벤트
        window.addEventListener("click", (event) => {
            if (event.target.tagname === "a") {
                event.preventDefault();
                this.routePush(event.target.href);
            }
        });

        // 뒤로가기 눌렀을 때
        window.onpopstate = () => this.routing(window.location.pathname);
    }

    //
    routePush(pathname) {
        window.history.pushState({}, null, pathname);
        this.routing(window.location.pathname);
    }

    routing(pathname) {
        const [_, routeName, param] = pathname.split("/");
        // 빈 페이지 초기화
        let page = "";

        if (this.routes[pathname]) {
            const component = new this.routes[pathname]();
            page = component.render();
        } else if (param) {
            const component = new this.routes["/" + routeName](param);
            page = component.render();
        }

        // 여기의 render는 라우터 안에서의 render(위와 다름)
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
