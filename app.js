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
    Search,
    Store,
} from "./js/pages/index.js";
import { Router } from "./utils/index.js";

export default class App {
    constructor(props) {
        this.props = props;
    }
    setup() {
        const { el } = this.props;

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
            "/search": Search,
            "/store": Store,
        });

        router.init(el);
    }
}
