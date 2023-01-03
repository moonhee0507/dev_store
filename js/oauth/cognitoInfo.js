const cognitoInfo = {
    identityPoolId: import.meta.env.VITE_IDENTITY_POOL_ID,
    region: import.meta.env.VITE_REGION,
    userPoolId: import.meta.env.VITE_USER_POOL_ID,
    userPoolWebClientId: import.meta.env.VITE_USER_POOL_WEB_CLIENT_ID,
    oauth: {
        domain: import.meta.env.VITE_COGNITO_DOMAIN.replace("https://", ""),
        scope: ["email", "profile", "openid"],
        redirectSignIn: import.meta.env.VITE_REDIRECT_SIGNIN,
        redirectSignOut: import.meta.env.VITE_REDIRECT_SIGNOUT,
        responseType: "token",
    },
};

export default cognitoInfo;
