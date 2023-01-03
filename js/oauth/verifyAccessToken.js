import { CognitoJwtVerifier } from "aws-jwt-verify";

export default async function verifyAccessToken() {
    const verifier = CognitoJwtVerifier.create({
        userPoolId: import.meta.env.VITE_USER_POOL_ID,
        tokenUse: "access",
        clientId: import.meta.env.VITE_COGNITO_CLIENT_ID,
    });

    try {
        const payload = await verifier.verify(
            localStorage.getItem("accessToken")
        );
        console.log("Token이 유효합니다. payload: ", payload);
    } catch {
        console.log("❌ Token이 유효하지 않습니다!");
    }
}
