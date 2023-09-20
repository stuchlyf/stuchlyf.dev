const { createEnv } = require("@t3-oss/env-nextjs");
const { z } = require("zod");

const env = createEnv({
    server: {
        API_BASE_URL: z.string().url(),
    },
    client: {},
});

module.exports = { env };