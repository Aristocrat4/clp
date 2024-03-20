<template>
  <div
    class="grid grid-cols-4 gap-gutter-lg md-tablet:grid-cols-8 md-desktop:grid-cols-12 md-desktop:grid-rows-2 md-tablet:gap-gutter-md px-4 max-w-screen-md-tablet md-tablet:max-w-screen-md-tablet md-desktop:max-w-screen-md-desktop h-fit mt-4 mb-4 mx-auto"
  >
    <div
      class="col-span-4 md-tablet:col-span-8 md-desktop:col-span-4 md-desktop:col-start-5 md-desktop:row-start-1 md-desktop:row-span-2 bg-interface-white pb-4 px-3 rounded-[1.25rem] card py-4 mt-4"
    >
      <div>
        <img
          class="mySwiper w-full h-[17.5rem] flex justify-center items-center rounded-[1.25rem]"
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </div>
      <div
        class="titles col-span-4 md-tablet:col-span-8 md-desktop:col-span-12 my-4"
      >
        <span
          class="bg-primary-white w-12 h-12 justify-center items-center py-[.375rem] px-2 rounded-[.625rem] text-small-text font-bold"
          >12.08.2023</span
        >
        <span
          class="bg-primary-white ml-3 w-12 h-12 justify-center py-[.375rem] px-2 items-center rounded-[.625rem] text-small-text font-bold"
          >პოლიტიკა</span
        >
      </div>
      <h3
        class="col-span-4 text-h2 md-tablet:col-span-8 md-desktop:col-span-12 md-tablet:text-2xl"
      >
        ქვემო ქართლის რეგიონში 20 მლნ ლარამდე
      </h3>
    </div>
    <div
      class="col-span-4 bg-interface-white pb-4 px-3 rounded-[1.25rem] card py-4 mt-4"
    >
      <div>
        <img
          class="mySwiper w-full h-[10rem] flex justify-center items-center rounded-[1.25rem]"
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </div>
      <div
        class="titles col-span-4 md-tablet:col-span-8 md-desktop:col-span-12 my-4"
      >
        <span
          class="bg-primary-white w-12 h-12 justify-center items-center py-[.375rem] px-2 rounded-[.625rem] text-small-text font-bold"
          >12.08.2023</span
        >
        <span
          class="bg-primary-white ml-3 w-12 h-12 justify-center py-[.375rem] px-2 items-center rounded-[.625rem] text-small-text font-bold"
          >პოლიტიკა</span
        >
      </div>
      <h3
        class="col-span-4 text-h2 md-tablet:col-span-8 md-desktop:col-span-12 md-tablet:text-2xl"
      >
        ქვემო ქართლის რეგიონში 20 მლნ ლარამდე
      </h3>
    </div>
    <div
      class="col-span-4 bg-interface-white pb-4 px-3 rounded-[1.25rem] card py-4 mt-4"
    >
      <div>
        <img
          class="mySwiper w-full h-[10rem] flex justify-center items-center rounded-[1.25rem]"
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </div>
      <div
        class="titles col-span-4 md-tablet:col-span-8 md-desktop:col-span-12 my-4"
      >
        <span
          class="bg-primary-white w-12 h-12 justify-center items-center py-[.375rem] px-2 rounded-[.625rem] text-small-text font-bold"
          >12.08.2023</span
        >
        <span
          class="bg-primary-white ml-3 w-12 h-12 justify-center py-[.375rem] px-2 items-center rounded-[.625rem] text-small-text font-bold"
          >პოლიტიკა</span
        >
      </div>
      <h3
        class="col-span-4 text-h2 md-tablet:col-span-8 md-desktop:col-span-12 md-tablet:text-2xl"
      >
        ქვემო ქართლის რეგიონში 20 მლნ ლარამდე
      </h3>
    </div>
    <div
      class="col-span-4 md-desktop:row-start-2 md-desktop:col-start-1 bg-interface-white pb-4 px-3 rounded-[1.25rem] card py-4 mt-4"
    >
      <div>
        <img
          class="mySwiper w-full h-[10rem] flex justify-center items-center rounded-[1.25rem]"
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </div>
      <div
        class="titles col-span-4 md-tablet:col-span-8 md-desktop:col-span-12 my-4"
      >
        <span
          class="bg-primary-white w-12 h-12 justify-center items-center py-[.375rem] px-2 rounded-[.625rem] text-small-text font-bold"
          >12.08.2023</span
        >
        <span
          class="bg-primary-white ml-3 w-12 h-12 justify-center py-[.375rem] px-2 items-center rounded-[.625rem] text-small-text font-bold"
          >პოლიტიკა</span
        >
      </div>
      <h3
        class="col-span-4 text-h2 md-tablet:col-span-8 md-desktop:col-span-12 md-tablet:text-2xl"
      >
        ქვემო ქართლის რეგიონში 20 მლნ ლარამდე
      </h3>
    </div>
    <div
      class="col-span-4 md-desktop:row-start-1 md-desktop:col-start-1 bg-interface-white pb-4 px-3 rounded-[1.25rem] card py-4 mt-4"
    >
      <div
        class="md-tablet:col-span-8 md-desktop:col-span-12 md-desktop:flex md-desktop:items-center md-desktop:gap-10"
      >
        <img
          class="mySwiper w-full h-[10rem] flex justify-center items-center rounded-[1.25rem]"
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </div>
      <div
        class="titles col-span-4 md-tablet:col-span-8 md-desktop:col-span-12 my-4"
      >
        <span
          class="bg-primary-white w-12 h-12 justify-center items-center py-[.375rem] px-2 rounded-[.625rem] text-small-text font-bold"
          >12.08.2023</span
        >
        <span
          class="bg-primary-white ml-3 w-12 h-12 justify-center py-[.375rem] px-2 items-center rounded-[.625rem] text-small-text font-bold"
          >პოლიტიკა</span
        >
      </div>
      <h3
        class="col-span-4 text-h2 md-tablet:col-span-8 md-desktop:col-span-12 md-tablet:text-2xl"
      >
        ქვემო ქართლის რეგიონში 20 მლნ ლარამდე
      </h3>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MixedCards",
  components: {},
});
</script>
<style>
.card {
  margin-top: 60px;
}
</style>
