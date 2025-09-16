import { build } from "esbuild";
import { nodeExternalsPlugin } from "esbuild-node-externals";
build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  platform: "node",
  target: ["node20"],
  outdir: "dist/index.js",
  format: "esm",
  alias: {
    "@": "./src",
  },
  sourcemap: true,
  plugins: [nodeExternalsPlugin()],
  logLevel: "info",
}).catch(() => process.exit(1));
