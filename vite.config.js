import { defineConfig } from "vite";

export default defineConfig({
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
