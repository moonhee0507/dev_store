import {
    Home,
    ProductDetail,
    Login,
    Signup,
    MoveInfo,
    Payment,
    Cart,
    Center,
    Upload,
} from "./js/pages/index.js";
import { Router } from "./utils/index.js";

export default class App {
    constructor(props) {
        this.props = props;
    }
    // index.js의 config가 여기로 들어온다
    setup() {
        const { el } = this.props;

        // 미리 경로를 정해 놓는 곳
        const router = new Router({
            "/": Home,
            "/products": ProductDetail,
            "/login": window.localStorage.getItem("token") ? MoveInfo : Login,
            "/signup": window.localStorage.getItem("token") ? MoveInfo : Signup,
            "/payment": window.localStorage.getItem("token")
                ? Payment
                : MoveInfo,
            "/cart": Cart,
            "/center": Center,
            "/upload": Upload,
        });

        // root에 띄워준다
        router.init(el);
    }
}
