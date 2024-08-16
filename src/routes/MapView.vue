<script setup lang="ts">
import { Map, Marker } from "maplibre-gl";
import { onMounted, reactive } from "vue";
import Button from "../components/Button.vue";
import LocationTable from "../components/LocationTable.vue";
import AddingLocation from "../components/AddingLocation.vue";
import { useUiStore } from "../stores/ui.ts";
import { gMap } from "../map";
import { setMapCursor } from "../utils.ts";

const _data = reactive({
  users: [],
  locations: [],
});

onMounted(async () => {
  gMap.map = new Map({
    container: "map",
    style: {
      version: 8,
      sources: {
        osm: {
          type: "raster",
          tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
        },
      },
      layers: [
        {
          id: "osm",
          source: "osm",
          type: "raster",
        },
      ],
    },
  });

  gMap.map.on("click", async (e: any) => {
    if (useUiStore().isAddingLocation && gMap.marker === null) {
      gMap.marker = new Marker({
        draggable: true,
      })
        .setLngLat(e.lngLat)
        .addTo(gMap.map);
    }
  });
});
</script>

<template>
  <div>
    <div id="mapRelative" class="relative h-[600px]">
      <div
        id="map"
        class="absolute h-full left-0 right-0 top-0 bottom-0 z-10"
      ></div>
      <AddingLocation
        v-if="useUiStore().isAddingLocation"
        :send-callback="async () => {}"
      ></AddingLocation>
    </div>
    <Button
      class="mt-2"
      :on-click="
        async () => {
          useUiStore().isAddingLocation = true;
          // setMapCursor();
          if (useUiStore().isAddingLocation === true) {
            gMap.map.getCanvas().style.cursor = 'crosshair';
          } else {
            gMap.map.getCanvas().style.cursor = '';
          }
        }
      "
      >{{
        useUiStore().isAddingLocation ? "Adding location" : "Add location"
      }}</Button
    >
    <Button
      v-if="useUiStore().isAddingLocation === true"
      custom-classes="bg-red-800 ml-4"
      material-icon="cancel"
      :on-click="
        async () => {
          useUiStore().isAddingLocation = false;
          setMapCursor();
          if (gMap.marker !== null) {
            gMap.marker.remove();
            gMap.marker = null;
          }
        }
      "
    >
      cancel
    </Button>
    <LocationTable :locations="_data.locations"></LocationTable>
  </div>
</template>

<style scoped>
@import url("https://unpkg.com/maplibre-gl@4.2.0/dist/maplibre-gl.css");
</style>
