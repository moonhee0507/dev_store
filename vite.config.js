import { defineConfig } from "vite";
import EnvironmentPlugin from "vite-plugin-environment";
import resolve from "@rollup/plugin-node-resolve";

export default defineConfig({
    plugins: [EnvironmentPlugin("all")],
    resolve: {
        alias: {
            "./runtimeConfig": "./runtimeConfig.browser",
        },
    },
    build: {
        rollupOptions: {
            plugins: [resolve({ browser: true })],
            external: [
                "@aws-sdk/protocol-http",
                "@aws-sdk/querystring-builder",
            ],
        },
    },
});
