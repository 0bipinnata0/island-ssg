import { VitePluginConfig } from "unocss/vite";
import { presetAttributify, presetWind, presetIcons } from "unocss";

const options: VitePluginConfig = {
  presets: [presetAttributify(), presetWind({}), presetIcons()],
  // configFile: "../my-uno.config.ts",
};

export default options;
