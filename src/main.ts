import { createApp } from "vue";
import "./style.css";
import vueApp from "./App.vue";
import { createPinia } from "pinia";

// firebase setup
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

import { createMemoryHistory, createRouter } from "vue-router";

import MapView from "./routes/MapView.vue";
import LoginView from "./routes/LoginView.vue";

const routes = [
  { path: "/", component: MapView },
  { path: "/login", component: LoginView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

const firebaseConfig = {
  apiKey: "AIzaSyCZZq1UfrIIcjsbZe3JTyEMQ2xa0NkZoBo",
  authDomain: "hogweed-map.firebaseapp.com",
  projectId: "hogweed-map",
  storageBucket: "hogweed-map.appspot.com",
  messagingSenderId: "790762617108",
  appId: "1:790762617108:web:bdcabebbf639f66eaeaa01",
  measurementId: "G-HG7MFQSGNM",
};

export const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);
export const db = getFirestore(firebaseApp);

const pinia = createPinia();

const app = createApp(vueApp);
app.use(pinia);
app.use(router);
app.mount("#app");
