import { createServer as createViteDevServer } from "vite";
import { pluginIndexHtml } from "./plugin-island/indexHtml";
import pluginReact from "@vitejs/plugin-react";
import { resolveConfig } from "./config";
import { pluginConfig } from "./plugin-island/config";
import { PACKAGE_ROOT } from "./constants";
import { pluginRoutes } from "./plugin-routes";
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
