import {
    Home,
    ProductDetail,
    Login,
    Signup,
    Payment,
    Cart,
    Center,
    Upload,
    Search,
    Store,
} from "./js/pages/index.js";
import { Router } from "./utils/index.js";
import { Amplify } from "aws-amplify";
import cognitoInfo from "./js/oauth/cognitoInfo.js";
import store from "./store.js";

export default class App {
    constructor(props) {
        this.props = props;
    }
    setup() {
        const { el } = this.props;

        const router = new Router({
            "/": Home,
            "/products": ProductDetail,
            "/login": Login,
            "/signup": Signup,
            "/payment": Payment,
            "/cart": Cart,
            "/center": Center,
            "/upload": Upload,
            "/search": Search,
            "/store": Store,
        });

        router.init(el);

        Amplify.configure({
            Auth: cognitoInfo,
        });

        store;
    }
}
