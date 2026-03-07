import type { OpenNextConfig } from "@opennextjs/aws/types/open-next.js";

const config = {
    default: {
        override: {
            wrapper: "cloudflare-node",
            converter: "edge",
        },
    },
    middleware: {
        external: true,
        override: {
            wrapper: "cloudflare-edge",
            converter: "edge",
            proxyExternalRequest: "fetch",
        },
    },
} satisfies OpenNextConfig;

export default config;
