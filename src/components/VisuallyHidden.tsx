import { PropsWithChildren, useEffect, useState } from "react";

const VisuallyHidden = ({ children }: PropsWithChildren) => {
  // When `forceShow` is true, visually hidden content will be shown
  const [forceShow, setForceShow] = useState(false);

  useEffect(() => {
    // This code only runs in development environment:
    // when user presses `Alt` key, `forceShow` will be set to true
    if (import.meta.env.NODE_ENV !== "production") {
      const handleKeyDown = (ev: KeyboardEvent) => {
        if (ev.key === "Alt") {
          setForceShow(true);
        }
      };
      const handleKeyUp = (ev: KeyboardEvent) => {
        if (ev.key === "Alt") {
          setForceShow(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
      };
    }
  }, []);

  if (forceShow) {
    // render content without visually hidden styles
    return <>{children}</>;
  }

  // hide content with visually hidden styles
  return (
    <span
      style={{
        display: "inline-block",
        position: "absolute",
        overflow: "hidden",
        clip: "rect(0 0 0 0)",
        height: 1,
        width: 1,
        margin: -1,
        padding: 0,
        border: 0,
      }}
    >
      {children}
    </span>
  );
};

export default VisuallyHidden;
