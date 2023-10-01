import { useState, useEffect } from "react";

function useFastReload(interval = 5000) {
  const [reloadCounter, setReloadCounter] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setReloadCounter(reloadCounter + 1);
    }, interval);

    return () => {
      clearTimeout(timerId);
    };
  }, [reloadCounter, interval]);

  return reloadCounter;
}

export default useFastReload;
