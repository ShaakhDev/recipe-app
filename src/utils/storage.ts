import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

export class Storage {
  public static setItem(key: string, value: any) {
    storage.set(key, value);
  }

  public static getItem(key: string, isNumber = false) {
    if (isNumber) {
      return storage.getNumber(key);
    } else {
      return storage.getString(key);
    }
  }

  public static deleteItem(key: string) {
    storage.delete(key);
  }
  public static deleteItems(keys: string[]) {
    keys.forEach(key => storage.delete(key));
  }

  public static clearStorage() {
    storage.clearAll();
  }
}
