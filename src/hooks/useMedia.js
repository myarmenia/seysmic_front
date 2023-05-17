import { useState, useEffect } from "react";

function useMedia(media) {
  const [isResize, setIsResize] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsResize(window.innerWidth <= media);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth, media]);
  return isResize;
}

export default useMedia;
