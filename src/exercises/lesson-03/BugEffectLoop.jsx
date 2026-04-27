//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, []); // Adding an empty array stops the infinite render loop

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
// (Without a second argument the useEffect runs at every single render which is triggered setCount(cont+1) and it continues causing an ifinite loop.)
