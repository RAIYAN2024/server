import { build } from "esbuild";
import { nodeExternalsPlugin } from "esbuild-node-externals";
import path from "path";
build({
  entryPoints: ["src/app.ts"],
  bundle: true,
  platform: "node",
  target: ["node20"],
  outfile: "dist/app.js",
  format: "esm",
  alias: {
    "@": path.resolve("./src"),
  },
  sourcemap: true,
  plugins: [nodeExternalsPlugin()],
  logLevel: "info",
}).catch(() => process.exit(1));
