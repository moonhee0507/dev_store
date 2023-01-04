import { CognitoJwtVerifier } from "aws-jwt-verify";

export default async function verifyIdToken(idToken) {
    const idTokenVerifier = CognitoJwtVerifier.create([
        {
            userPoolId: import.meta.env.VITE_USER_POOL_ID,
            tokenUse: "id",
            clientId: import.meta.env.VITE_COGNITO_CLIENT_ID,
        },
    ]);

    try {
        const idTokenPayload = await idTokenVerifier.verify(idToken);
        localStorage.setItem(
            "user",
            JSON.stringify({ id: idTokenPayload.email, isCog: true })
        );
        window.location.reload();
    } catch {
        alert("002: 유효하지 않은 토큰입니다.");
    }
}
