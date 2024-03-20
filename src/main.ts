import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
createApp(App).use(router).mount("#app");
