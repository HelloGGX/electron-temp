import { defineStore } from "pinia";
import { store } from "./index";

export const useLoginStore = defineStore("login", {
  state: () => ({
    isLogin: false,
  }),
  actions: {
    async patchLogin(isLogin: boolean) {
      this.isLogin = isLogin;
    },
  },
});

export function useLoginStoreHook() {
  return useLoginStore(store);
}
