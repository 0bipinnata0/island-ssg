import { StaticRouter } from "react-router-dom";
import { App } from "./App";
import { renderToString } from "react-dom/server";

export function render() {
  return renderToString(
    <StaticRouter location={"/guide"}>
      <App />
    </StaticRouter>
  );
}
