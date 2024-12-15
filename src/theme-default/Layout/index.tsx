import { useState } from "react";
import { Content } from "../../runtime";

export function Layout() {
  const [count, setCount] = useState(1);
  return (
    <div>
      <h1>This is Layout Component</h1>
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>Add Count</button>
      </div>

      <h1>Doc Content</h1>
      <Content />
    </div>
  );
}
