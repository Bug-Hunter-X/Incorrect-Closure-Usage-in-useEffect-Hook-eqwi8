```javascript
import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const myVarRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      myVarRef.current++;
      setCount(myVarRef.current);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>Count: {count}</div>;
}

export default MyComponent;
```