import localforage from "localforage";
import { ModelState } from "../model";

export enum LocalStorageKey {
  ModelCache = "ModelCache",
}

export type LocalStorageRecord = {
  [LocalStorageKey.ModelCache]: ModelState;
};

const storage = localforage.createInstance({
  name: "pickbox",
});

export const localStorage = {
  getItem<T extends keyof LocalStorageRecord>(key: T) {
    return storage.getItem<LocalStorageRecord[T]>(String(key));
  },
  setItem<T extends keyof LocalStorageRecord>(
    key: T,
    value: LocalStorageRecord[T]
  ) {
    return storage.setItem(String(key), value);
  },
};

export function setModelCache(model: ModelState) {
  return localStorage.setItem(LocalStorageKey.ModelCache, model);
}

export function getModelCache() {
  return localStorage.getItem(LocalStorageKey.ModelCache);
}
