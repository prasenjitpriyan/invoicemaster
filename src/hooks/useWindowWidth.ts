import { useEffect, useState } from 'react';

type WindowDimensions = {
  width: number;
};

const getWindowDimensions = (): WindowDimensions => {
  const { innerWidth: width } = window;
  return { width };
};

function useWindowDimensions(): WindowDimensions {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(
    getWindowDimensions(),
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export default useWindowDimensions;
