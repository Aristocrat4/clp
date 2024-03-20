<template>
  <section
    class="flex flex-col px-4 max-w-screen-md-tablet md-tablet:max-w-screen-md-tablet md-desktop:max-w-screen-md-desktop mx-auto md-tablet:flex-row gap-gutter-md md-tablet:gap-gutter-lg md-desktop:gap-gutter-md w-full py-4 items-center"
  >
    <div
      class="all-news bg-interface-white rounded-[1.25rem] py-3 px-3 mt-4 w-full"
    >
      <div class="inner-wrapper min-w-[20.5rem]">
        <h2 class="text-h2-mobile font-semibold">ყველა სიახლე</h2>
        <div class="news-wrapper mt-4 max-h-[15rem] overflow-scroll">
          <div class="news pb-5 border-b border-dashed mt-3">
            <div
              class="news-title flex items-center gap-2 text-primary-purple text-small-text font-bold"
            >
              <img src="../assets/time.svg" alt="time" />
              <span>7:30 • 02.01.2023</span>
            </div>
            <p class="mt-2 text-sm font-Regular">
              დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა
            </p>
          </div>
          <div class="news pb-5 border-b border-dashed mt-3">
            <div
              class="news-title flex items-center gap-2 text-primary-purple text-small-text font-bold"
            >
              <img src="../assets/time.svg" alt="time" />
              <span>7:30 • 02.01.2023</span>
            </div>
            <p class="mt-2 text-sm font-Regular">
              დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა
            </p>
          </div>
          <div class="news pb-5 border-b border-dashed mt-3">
            <div
              class="news-title flex items-center gap-2 text-primary-purple text-small-text font-bold"
            >
              <img src="../assets/time.svg" alt="time" />
              <span>7:30 • 02.01.2023</span>
            </div>
            <p class="mt-2 text-sm font-Regular">
              დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="popular bg-interface-white rounded-[1.25rem] p-3 mt-4 w-full">
      <div class="innter-wrapper">
        <h2 class="text-h2-mobile font-semibold">პოპულარული</h2>
        <div class="popular-items max-h-[15rem] overflow-scroll">
          <div class="item flex gap-2 pb-5 border-b border-dashed mt-3">
            <img
              class="max-w-[6rem] rounded-md"
              src="https://www.viewbug.com/media/mediafiles/2016/05/02/65792595_medium.jpg"
              alt="nature"
            />
            <p class="text-sm font-Regular">
              დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა
            </p>
          </div>
          <div class="item flex gap-2 pb-5 border-b border-dashed mt-3">
            <img
              class="max-w-[6rem] rounded-md"
              src="https://www.viewbug.com/media/mediafiles/2016/05/02/65792595_medium.jpg"
              alt="nature"
            />
            <p class="text-sm font-Regular">
              დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა
            </p>
          </div>
          <div class="item flex gap-2 pb-5 border-b border-dashed mt-3">
            <img
              class="max-w-[6rem] rounded-md"
              src="https://www.viewbug.com/media/mediafiles/2016/05/02/65792595_medium.jpg"
              alt="nature"
            />
            <p class="text-sm font-Regular">
              დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა
            </p>
          </div>
          <div class="item flex gap-2 pb-5 border-b border-dashed mt-3">
            <img
              class="max-w-[6rem] rounded-md"
              src="https://www.viewbug.com/media/mediafiles/2016/05/02/65792595_medium.jpg"
              alt="nature"
            />
            <p class="text-sm font-Regular">
              დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AllNews",
  components: {},
});
</script>
