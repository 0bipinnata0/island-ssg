import { pluginMdxRollup } from "./pluginMdxRollup";

export async function createPluginMdx() {
  return [{ enforce: "pre", ...(await pluginMdxRollup()) }];
}
