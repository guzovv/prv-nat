import { RefObject, useEffect, useState } from "react";

export const useResize = (htmlElement?: RefObject<HTMLInputElement>) => {
  const [size, setSize] = useState([0, 0]);
  const isElement = htmlElement && htmlElement.current;
  const handleSetSize = () => {
    if (isElement) {
      setSize([htmlElement.current.offsetWidth, htmlElement.current.offsetHeight]);
    } else {
      setSize([window.innerWidth, window.innerHeight]);
    }
  };

  useEffect(() => {
    handleSetSize();
    window.addEventListener("resize", () => {
      handleSetSize();
    });
  }, [isElement]);

  return size;
};
