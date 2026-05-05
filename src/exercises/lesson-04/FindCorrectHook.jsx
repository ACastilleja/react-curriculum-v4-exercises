// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
import { useRef } from 'react';

export default function FindCorrectHook() {
  const buttonRef = useRef(null); // in order for it to not re-render we need to add a useRef for the button so we can manually update textcontent inside the click handler
  const clickCount = useRef(0); // in order to prevent re-render we utilize useRef to keep of the count

  function handleClick() {
    clickCount.current += 1;

    if (buttonRef.current) {
      buttonRef.current.textContent = `${clickCount.current} Clicks`;
    }
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick} ref={buttonRef}>
        {' '}
        0 Clicks
      </button>
    </div>
  );
}
