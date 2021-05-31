<template>
  <div class="py-5 border-b border-gray-600">
    <h3 class="text-3xl font-thin tracking-wider">Cast</h3>

    <div
      class="
        grid grid-cols-1
        gap-5
        mt-5
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
      "
    >
      <div class="flex flex-col">
        <div class="aspect-w-10 aspect-h-13">
          <img
            src="@/assets/jim_carrey.jpg"
            class="
              object-cover
              transition-opacity
              duration-150
              ease-in
              hover:opacity-50
            "
            alt="jim carrey"
          />
        </div>
        <span class="mt-2">Jim Carrey / The boy</span>
      </div>
      <div class="flex flex-col">
        <div class="aspect-w-10 aspect-h-13">
          <img
            src="@/assets/kate_winslet.jpg"
            class="
              object-cover
              transition-opacity
              duration-150
              ease-in
              hover:opacity-50
            "
            alt="jim carrey"
          />
        </div>
        <span class="mt-2">Kate Winslet / The girl</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Cast',
});
</script>
