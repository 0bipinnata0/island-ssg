import { Plugin } from "vite";
import { pluginMdxRollup } from "./pluginMdxRollup";

export function createPluginMdx(): Array<Promise<Plugin> | Plugin> {
  return [pluginMdxRollup()];
}
