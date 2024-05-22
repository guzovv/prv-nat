import { useRef } from "react";
import { useResize } from "./useResize";

export const App = () => {
  const element = useRef<HTMLInputElement>(null);
  const size = useResize(element);
  console.log(size, "size");

  return (
    <>
      <h1>Hello</h1>
      <p ref={element}>sdlkmv wev welvwe lv wlv welv </p>
    </>
  );
};
