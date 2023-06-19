import { useEffect, useState } from 'react';

const useLocalStorage = <T>(key: string, initialValue: T) => {
  const isLocalStorageAvailable =
    typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  const [value, setValue] = useState<T>(() => {
    if (isLocalStorageAvailable) {
      const storedValue = localStorage.getItem(key);
      return storedValue ? (JSON.parse(storedValue) as T) : initialValue;
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    if (isLocalStorageAvailable) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
