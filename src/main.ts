import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
createApp(App).use(router).mount("#app");
