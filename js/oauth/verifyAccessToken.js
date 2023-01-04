import { CognitoJwtVerifier } from "aws-jwt-verify";

export default async function verifyAccessToken(accessToken) {
    const verifier = CognitoJwtVerifier.create({
        userPoolId: import.meta.env.VITE_USER_POOL_ID,
        tokenUse: "access",
        clientId: import.meta.env.VITE_COGNITO_CLIENT_ID,
    });

    try {
        await verifier.verify(accessToken);

        return true;
    } catch {
        alert("001: 유효하지 않은 토큰입니다.");
    }
}
