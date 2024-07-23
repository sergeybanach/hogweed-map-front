import { ofetch } from "ofetch";
import { useUiStore } from "./stores/ui";
import { gMap } from "./map";

export const apiCall = async (
  url: string,
  method: "GET" | "PUT" | "DELETE" | "POST" = "GET",
  body: object = null,
  isAuth: boolean = true,
) => {
  let headers: any = {};
  if (isAuth) {
    headers.Authorization = `Bearer ${localStorage.getItem("jwt")}`;
  }
  return await ofetch(url, {
    headers,
    method,
    body,
  });
};

export const setMapCursor = () => {
  if (useUiStore().isAddingLocation === true) {
    gMap.map.getCanvas().style.cursor = "crosshair";
  } else {
    gMap.map.getCanvas().style.cursor = "";
  }
};
