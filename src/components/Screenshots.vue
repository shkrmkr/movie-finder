<template>
  <div class="py-5">
    <h3 class="text-3xl font-thin tracking-wider">Screenshots</h3>

    <div
      class="grid grid-cols-1 gap-5 mt-5  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <div class="flex flex-col">
        <div class="aspect-w-16 aspect-h-9">
          <img
            src="@/assets/esotsm_scrot_1.jpg"
            class="object-cover transition-opacity duration-150 ease-in  hover:opacity-50"
            alt="jim carrey"
          />
        </div>
      </div>

      <div class="flex flex-col">
        <div class="aspect-w-16 aspect-h-9">
          <img
            src="@/assets/esotsm_scrot_2.jpg"
            class="object-cover transition-opacity duration-150 ease-in  hover:opacity-50"
            alt="jim carrey"
          />
        </div>
      </div>

      <div class="flex flex-col">
        <div class="aspect-w-16 aspect-h-9">
          <img
            src="@/assets/esotsm_scrot_3.jpg"
            class="object-cover transition-opacity duration-150 ease-in  hover:opacity-50"
            alt="jim carrey"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Screenshots',
});
</script>
