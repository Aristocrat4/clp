<template>
  <div
    class="mx-auto grid grid-cols-4 md-desktop:grid-cols-12 grid-rows-[auto_auto_auto] md-desktop:gap-gutter-md md-desktop:max-w-screen-md-desktop"
  >
    <Hero
      class="col-span-4 md-desktop:col-start-1 md-desktop:col-end-9 md-desktop:row-start-1 md-desktop:row-end-2"
    ></Hero>
    <AllNews
      class="col-span-4 md-desktop:col-start-9 md-desktop:col-end-13 md-desktop:row-start-1 md-desktop:row-end-4"
    ></AllNews>
    <Facts
      class="col-span-4 md-desktop:grid md-desktop:col-start-1 md-desktop:col-end-9 md-desktop:row-start-2 md-desktop:row-end-3"
    ></Facts>
    <MixedCards
      class="col-span-4 md-desktop:col-start-1 md-desktop:col-end-9 md-desktop:row-start-3 md-desktop:row-end-4"
    ></MixedCards>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Hero from "@/components/Hero.vue";
import AllNews from "@/components/AllNews.vue";
import Facts from "@/components/Facts.vue";
import MixedCards from "@/components/MixedCards.vue";

export default defineComponent({
  name: "HomeView",
  components: { Hero, AllNews, Facts, MixedCards },
});
</script>
