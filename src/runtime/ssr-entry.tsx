import { StaticRouter } from "react-router-dom";
import { App } from "./App";
import { renderToString } from "react-dom/server";

export function render(pagePath: string) {
  return renderToString(
    <StaticRouter location={pagePath}>
      <App />
    </StaticRouter>
  );
}

export { routes } from "island:routes";
