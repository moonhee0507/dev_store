import { Amplify, Auth, Hub } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import config from "../../oauth/awsConfig";

class GoogleLoginButton {
    constructor() {
        this.button = document.createElement("button");
    }

    render() {
        this.button.setAttribute("class", "button-google");
        const span = document.createElement("span");
        span.setAttribute("class", "txt-google");
        span.innerText = "Google 계정으로 로그인";
        this.button.append(span);

        this.button.addEventListener("click", (e) => {
            e.preventDefault();

            // Auth.federatedSignIn({
            //     provider: CognitoHostedUIIdentityProvider.Google,
            // });
            window.location.href = `${
                import.meta.env.VITE_COGNITO_DOMAIN
            }/login?client_id=${
                import.meta.env.VITE_COGNITO_CLIENT_ID
            }&response_type=${
                import.meta.env.VITE_COGNITO_RESPONSE_TYPE
            }&scope=email+openid+profile&redirect_uri=${
                import.meta.env.VITE_REDIRECT_URI
            }`;
        });

        return this.button;
    }
}

export default GoogleLoginButton;
