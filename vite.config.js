import { defineConfig } from "vite";

const outputPluginStats = () => ({
    name: "output-plugin-stats",
    configResolved(config) {
        const plugins = config.plugins.map((plugin) => plugin.name);
        console.log(`Your project has ${plugins.length} Vite plugins.`);
        console.table(plugins);
    },
});

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
