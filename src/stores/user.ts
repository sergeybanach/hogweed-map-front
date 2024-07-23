import { defineStore } from "pinia";
import { User } from "../types.ts";

export const useUserStore = defineStore("user", {
  state: (): {
    user: User | null;
  } => {
    return {
      user: null,
    };
  },

  actions: {},
});
