import { pluginMdxRollup } from "./pluginMdxRollup";

export async function createPluginMdx() {
  return [pluginMdxRollup()];
}
