import { useState, useEffect } from 'react';

export const useLocalStorage = (storageKey, defaultValue) => {
  const parseContactsLocalStorage = JSON.parse(
    window.localStorage.getItem(storageKey)
  );

  const [value, setValue] = useState(
    () => parseContactsLocalStorage ?? [...defaultValue]
  );

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};
