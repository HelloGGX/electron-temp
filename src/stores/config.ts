import { defineStore } from "pinia";
import { store } from "./index";

export const useConfigStore = defineStore("config", {
  state: () => ({
    config: {},
  }),
  actions: {
    async fetchConfig() {
      const config = await fetch(`${import.meta.env.BASE_URL}config.json`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
      return config;
    },
  },
});

export function useConfigStoreHook() {
  return useConfigStore(store);
}
