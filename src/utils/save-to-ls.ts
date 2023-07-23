export const getFromLS = (key: string): any => {
  let ls: any = {};
  if (global.localStorage) {
    try {
      const data = global.localStorage.getItem(key);
      ls = data ? JSON.parse(data) : {};
    } catch (e) {
      console.error(e);
    }
  }
  return ls[key];
};

export const saveToLS = (key: string, value: any) => {
  if (global.localStorage) {
    const dataToSave = value ? { [key]: value } : null;
    global.localStorage.setItem(key, JSON.stringify(dataToSave));
  }
};
