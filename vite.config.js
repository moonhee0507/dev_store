import { defineConfig } from "vite";
import EnvironmentPlugin from "vite-plugin-environment";

export default defineConfig({
    plugins: [EnvironmentPlugin("all")],
    resolve: {
        alias: {
            "./runtimeConfig": "./runtimeConfig.browser",
        },
    },
    build: {
        rollupOptions: {
            external: [
                "@aws-sdk/protocol-http",
                "@aws-sdk/querystring-builder",
            ],
        },
    },
});
