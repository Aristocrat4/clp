<template>
  <div class="">
    <Header> </Header>
    <Hero></Hero>
    <AllNews></AllNews>
    <Facts></Facts>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import AllNews from "@/components/AllNews.vue";
import Facts from "@/components/Facts.vue";

export default defineComponent({
  name: "HomeView",
  components: { Header, Hero, AllNews, Facts },
});
</script>
