import { createServer as createViteDevServer } from "vite";
import { resolveConfig } from "./config";
import { PACKAGE_ROOT } from "./constants";
import { createVitePlugins } from "./vitePlugins";

export async function createDevServer(
  root = process.cwd(),
  restartServer: () => Promise<void>
) {
  const config = await resolveConfig(root, "serve", "development");
  console.log(config);
  return createViteDevServer({
    root,
    plugins: createVitePlugins(config, restartServer),
    server: {
      fs: {
        allow: [PACKAGE_ROOT],
      },
    },
  });
}
