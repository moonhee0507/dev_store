const awsConfig = {
    Auth: {
        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        identityPoolId: `${import.meta.env.VITE_IDENTITY_POOL_ID}`,

        // REQUIRED - Amazon Cognito Region
        region: `${import.meta.env.VITE_REGION}`,

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: `${import.meta.env.VITE_USER_POOL_ID}`,

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: `${import.meta.env.VITE_USER_POOL_WEB_CLIENT_ID}`,

        // OPTIONAL - Hosted UI configuration
        oauth: {
            domain: "google-oauth.auth.us-east-1.amazoncognito.com",
            scope: ["email", "profile", "openid"],
            redirectSignIn: "http://localhost:5173, https://devstore.work",
            redirectSignOut: "https://devstore.work, http://localhost:5173",
            responseType: "token", // or 'token', note that REFRESH token will only be generated when the responseType is code
        },
    },
};

export default awsConfig;
