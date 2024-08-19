<template>
  <div
    class="absolute top-[20px] left-[20px] w-[200px] h-[300px] bg-white z-20 rounded-md"
  >
    <!-- <div class="text-xl font-bold">Add location</div> -->
    <!-- <div>description</div>
    <textarea
      rows="2"
      class="w-full border"
      v-model="locationData.description"
    ></textarea> -->

    <div class="m-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        lng
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="lng"
        type="text"
        placeholder="Username"
        v-model="useMarkerStore().lng"
      />
    </div>
    <div class="m-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        lat
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="lat"
        type="text"
        placeholder="Username"
        v-model="useMarkerStore().lat"
      />
    </div>
    <Button :on-click="send" class="ml-4">Send</Button>
  </div>
</template>

<script setup lang="ts">
import Button from "./Button.vue";

import { gMap } from "../map";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../main.ts";
import { useUiStore } from "../stores/ui.ts";
import { useMarkerStore } from "../stores/marker.ts";

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
</script>
