<template>
  <div class="">
    <Header> </Header>
    <Hero></Hero>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";

export default defineComponent({
  name: "HomeView",
  components: { Header, Hero },
});
</script>
