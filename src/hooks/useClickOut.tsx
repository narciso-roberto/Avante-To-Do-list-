import React from "react";

function useClickOut(
  elemento: React.RefObject<HTMLElement | null>,
  callback: Function,
  condition: Boolean = false
) {

    
  const el = elemento.current;

  React.useEffect(() => {
    const clickOut = (e: MouseEvent) => {
      e.stopPropagation();
      callback()
    };

    window.addEventListener("pointerdown", clickOut);

    return () => {
      window.removeEventListener("pointerdown", clickOut);
    };
  }, [elemento, callback]);

  return null;
}

export default useClickOut;
