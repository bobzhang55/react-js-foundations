import { useState } from "react";

export function CountUp() {
  const [count, setCount] = useState(11);
  return (
    <>
      <div>
        <button onClick={() => setCount(count + 1)}>Add One</button>
        {count}
      </div>
      
    </>
  );
}

// export default CountUp;
