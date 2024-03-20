<template>
  <div class="bg-interface-white">
    <header
      class="px-4 max-w-screen-md-tablet md-tablet:max-w-screen-md-tablet md-desktop:max-w-screen-md-desktop grid grid-cols-4 md-tablet:grid-cols-8 md-desktop:grid-cols-12 gap-gutter-md md-tablet:gap-gutter-lg md-desktop:gap-gutter-md w-full py-4 mx-auto items-center"
    >
      <div
        class="logo col-span-2 md-tablet:col-span-4 md-desktop:col-span-6 md-desktop:flex md-desktop:items-center md-desktop:gap-10"
      >
        <img class="w-[6.75rem] h-8" src="../assets/logo.svg" alt="logo" />
        <nav
          class="hidden md-desktop:block relative before:content-[''] before:block before:absolute before:w-px before:h-full before:bg-interface-lightGray before:-left-5"
        >
          <ul class="flex gap-8 text-body-medium">
            <li>პოლიტიკა</li>
            <li>საზოგადოება</li>
            <li>სამართალი</li>
            <li class="flex gap-2 uppercase">
              სხვა <img src="../assets/arrow-down.svg" alt="arrow-down" />
            </li>
          </ul>
        </nav>
      </div>
      <div
        class="search-burger col-span-2 md-tablet:col-span-4 md-desktop:col-span-6 flex items-center gap-2 justify-end"
      >
        <div
          class="instagram bg-primary-white w-12 h-12 rounded-[50%] justify-center items-center hidden md-tablet:flex"
        >
          <img src="../assets/instagram.svg" alt="instagram" />
        </div>
        <div
          class="fb bg-primary-white w-12 h-12 rounded-[50%] justify-center items-center hidden md-tablet:flex"
        >
          <img src="../assets/fb.svg" alt="fb" />
        </div>
        <div
          class="search bg-primary-white w-12 h-12 rounded-[50%] flex justify-center items-center md-tablet:hidden"
        >
          <img src="../assets/search.svg" alt="search" />
        </div>
        <div
          class="hidden search bg-primary-white px-4 h-12 rounded-[4rem] md-tablet:flex justify-center items-center"
        >
          <input
            class="bg-primary-white text-black"
            type="text"
            placeholder="ძიება"
          />
          <img src="../assets/search.svg" alt="search" />
        </div>
        <div
          class="burger bg-primary-white w-12 h-12 rounded-[50%] flex justify-center items-center md-desktop:hidden"
        >
          <img src="../assets/burger.png" alt="burger" />
        </div>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  components: {},
});
</script>
