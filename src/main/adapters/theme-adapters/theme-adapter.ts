import { makeLocalStorageAdapter } from "@/main/factories/cache";

export const setCurrentThemeAdapter = (theme: object): void => {
  makeLocalStorageAdapter().set("theme-alurageek", theme);
};

export const getCurrentThemeAdapter = (): { theme: string } => {
  return makeLocalStorageAdapter().get("theme-alurageek");
};
