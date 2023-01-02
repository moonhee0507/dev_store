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
            Auth: {
                identityPoolId: `${import.meta.env.VITE_IDENTITY_POOL_ID}`,
                region: `${import.meta.env.VITE_REGION}`,
                userPoolId: `${import.meta.env.VITE_USER_POOL_ID}`,
                userPoolWebClientId: `${
                    import.meta.env.VITE_USER_POOL_WEB_CLIENT_ID
                }`,
                oauth: {
                    domain: "google-oauth.auth.us-east-1.amazoncognito.com",
                    scope: ["email", "profile", "openid"],
                    redirectSignIn: `${import.meta.env.VITE_REDIRECT_SIGNIN}`,
                    redirectSignOut: `${import.meta.env.VITE_REDIRECT_SIGNOUT}`,
                    responseType: "token",
                },
            },
        });
    }
}
