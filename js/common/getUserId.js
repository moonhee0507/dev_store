export default function getUserId(cog) {
    if (typeof localStorage.getItem("token") === "string")
        return localStorage.getItem("user");
    if (cog) return cog;
}
