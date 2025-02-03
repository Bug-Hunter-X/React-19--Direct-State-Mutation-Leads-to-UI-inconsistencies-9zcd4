```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect: Directly modifying the state variable
    count = count + 1; // This will not trigger a re-render
    console.log('Count:', count); // This will show the updated count, but the UI won't reflect it
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```