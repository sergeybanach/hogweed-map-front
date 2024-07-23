import { defineStore } from "pinia";

export const useUiStore = defineStore("ui", {
  state: (): {
    isAddingLocation: boolean;
  } => {
    return {
      isAddingLocation: false,
    };
  },

  actions: {},
});
