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
        console.log(idTokenPayload);
    } catch {
        console.log("❌ ID TOKEN이 유효하지 않습니다!");
    }
}
