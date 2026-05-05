// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// Write your explanation of how StrictMode helps us catch this bug
// Since Strict mode double runs our component twice to catch memory leak we can see by the doubled increase in count number that
// we have an interval running in the background adding an additional +1. So we stop the background interval by using a cleanup function.
