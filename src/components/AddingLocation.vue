<template>
  <div
    class="absolute top-[20px] left-[20px] w-[200px] h-[300px] bg-white z-20 rounded-md"
  >
    <div class="text-xl font-bold">Add location</div>
    <div>description</div>
    <textarea
      rows="2"
      class="w-full border"
      v-model="locationData.description"
    ></textarea>
    <Button :on-click="send">Send</Button>
  </div>
</template>

<script setup lang="ts">
import Button from "./Button.vue";
import { reactive } from "vue";

import { gMap } from "../map";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../main.ts";
import { useUiStore } from "../stores/ui.ts";

const props = defineProps(["sendCallback", "cancelCallback"]);

const send = async () => {
  if (gMap.marker !== null) {
    try {
      await addLocation({
        lng: gMap.marker.getLngLat().lng,
        lat: gMap.marker.getLngLat().lat,
        description: locationData.description,
      });
      useUiStore().isAddingLocation = false;
    } catch {}
  } else {
    window.alert("Please specify the location on map!");
  }
};

const addLocation = async (location: {
  lng: number;
  lat: number;
  description: string;
}) => {
  try {
    const docRef = await addDoc(collection(db, "locations"), {
      lng: location.lng,
      lat: location.lat,
      description: location.description,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const locationData = reactive({
  description: "",
});
</script>
