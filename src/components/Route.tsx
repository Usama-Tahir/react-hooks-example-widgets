import React, { useEffect, useState } from 'react';
interface Iprops {
  path: string;
  children: React.ReactElement<Iprops, any> | null;
}
const Route: React.FC<Iprops> = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState<string>(
    window.location.pathname
  );
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', onLocationChange);
    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);
  return currentPath === path ? children : null;
};

export default Route;
