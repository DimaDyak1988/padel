export function useLocalStorage<Schema extends Record<string, unknown>>() {
  function setLocalStorageItem<K extends keyof Schema>(key: K & string, value: Schema[K]): void {
    try {
      const serializedValue = JSON.stringify(value);
      window.localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error(`[LocalStorage Error] Save failed for key "${key}":`, error);
    }
  }

  function getLocalStorageItem<K extends keyof Schema>(key: K & string): Schema[K] | null {
    const data = window.localStorage.getItem(key);

    if (data === null) return null;

    try {
      return JSON.parse(data) as Schema[K];
    }
    catch {
      return null;
    }
  }

  return {
    setLocalStorageItem,
    getLocalStorageItem,
  };
}
