import { useEffect, useState } from 'react';

const useScreenDimensions = (): [number, number] => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const updateDimensions = (): void => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', updateDimensions);
    return (): void => window.removeEventListener('resize', updateDimensions);
  }, [setWidth, setHeight]);

  return [width, height];
};

export default useScreenDimensions;
