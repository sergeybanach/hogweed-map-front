import { defineStore } from "pinia";

export const useMarkerStore = defineStore("marker", {
  state: (): {
    lng: number;
    lat: number;
  } => {
    return {
      lng: 0,
      lat: 0,
    };
  },
});
