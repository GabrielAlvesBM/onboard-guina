import type { CodegenConfig } from "@graphql-codegen/cli";
import { config as dotenvConfig } from "dotenv";

dotenvConfig();
const serverUrl = process.env.VITE_SERVER_URL;

if (!serverUrl) {
  throw new Error("VITE_SERVER_URL is not defined in your environment.");
}

const config: CodegenConfig = {
  schema: serverUrl,
  documents: "./src/app/data/graphql/**/*.graphql",
  generates: {
    "./src/app/data/graphql/generated/index.ts": {
      plugins: ["typescript", "typescript-operations"],
    },
  },
};

export default config;
