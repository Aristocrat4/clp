<template>
  <div class="">
    <Header> </Header>

    <HomeView />
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import HomeView from "@/views/HomeView.vue";

export default defineComponent({
  name: "App",
  components: { Header, HomeView },
});
</script>
<style></style>
