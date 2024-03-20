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
          class="px-4 text-h2-mobile max-w-screen-md-tablet md-tablet:max-w-screen-md-tablet md-desktop:max-w-screen-md-desktop w-full py-4 mx-auto items-center"
        >
          <ul class="flex gap-8 text-body-medium">
            <li v-for="(category, index) in visibleCategories" :key="index">
              {{ category }}
            </li>
            <li v-if="hiddenCategories.length" class="dropdown-others z-20">
              სხვა
              <ul class="dropdown-menu hidden">
                <li v-for="(category, index) in hiddenCategories" :key="index">
                  {{ category }}
                </li>
              </ul>
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
          @click="toggleSidebar"
          class="burger bg-primary-white w-12 h-12 rounded-[50%] flex justify-center items-center md-desktop:hidden"
        >
          <img src="../assets/burger.png" alt="burger" />
        </div>
      </div>
    </header>
  </div>
  <div
    :style="{
      left: showSideBar ? '0' : '100%',
    }"
    class="sidebar w-full bg-interface-white absolute z-50 transition-all duration-300 h-[100%]"
  >
    <nav
      class="px-4 text-h2-mobile max-w-screen-md-tablet md-tablet:max-w-screen-md-tablet md-desktop:max-w-screen-md-desktop w-full py-4 mx-auto items-center"
    >
      <ul class="flex flex-col gap-8 text-body-medium">
        <li>პოლიტიკა</li>
        <li>საზოგადოება</li>
        <li>სამართალი</li>
        <li>რელიგია</li>
        <li>ბიზნესი</li>
        <li>ეკონომიკა</li>
      </ul>
    </nav>
    <div
      class="socials md-tablet:hidden flex gap-2 justify-center items-center mt-6"
    >
      <div
        class="instagram bg-primary-white w-12 h-12 rounded-[50%] justify-center items-center flex"
      >
        <img src="../assets/instagram.svg" alt="instagram" />
      </div>
      <div
        class="fb bg-primary-white w-12 h-12 rounded-[50%] justify-center items-center flex"
      >
        <img src="../assets/fb.svg" alt="fb" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  components: {},
  data() {
    return {
      showSideBar: false,
      allCategories:
        ([
          "პოლიტიკა",
          "საზოგადოება",
          "ეკონომიკა",
          "რელიგია",
          "ბიზნესი",
          "ეკონომიკა",
        ] as string[]) || [],
      visibleCategories: ([] as string[]) || [],
      hiddenCategories: ([] as string[]) || [],
      maxVisible: 3,
    };
  },
  mounted() {
    this.calculateCategories();
    window.addEventListener("resize", this.calculateCategories);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.calculateCategories);
  },
  methods: {
    calculateCategories() {
      this.visibleCategories = this.allCategories.slice(0, this.maxVisible);
      this.hiddenCategories = this.allCategories.slice(this.maxVisible);
    },
    toggleSidebar() {
      this.showSideBar = !this.showSideBar;
      if (this.showSideBar) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    },
  },
});
</script>
<style>
li {
  cursor: pointer;
}
.dropdown-others:hover .dropdown-menu {
  display: block !important;
}
</style>
