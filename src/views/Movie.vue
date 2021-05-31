<template>
  <div>
    <div
      class="flex flex-col gap-5 pb-10 border-b border-gray-600  md:gap-10 md:flex-row"
    >
      <img src="@/assets/esotsm.jpg" alt="" class="w-64 mx-auto md:mx-0" />

      <div>
        <h2 class="text-4xl font-semibold">
          Eternal Sunshine of the Spotless Mind
        </h2>

        <div class="flex items-center mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 mr-2 text-yellow-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
          <span class="text-sm text-gray-500"
            >50% | 2020-10-20 | Science Fiction, Thriller, Drama</span
          >
        </div>

        <p class="mt-5">
          When their relationship turns sour, a couple undergoes a medical
          procedure to have each other erased from their memories.
        </p>

        <div class="mt-5">
          <span class="font-semibold">Featured Cast</span>

          <div class="flex gap-8 mt-1">
            <div class="flex flex-col">
              <span>Jim Carrey</span>
              <span class="text-gray-500">The boy</span>
            </div>

            <div class="flex flex-col">
              <span>Kate Winslet</span>
              <span class="text-gray-500">The girl</span>
            </div>
          </div>
        </div>

        <div
          class="flex flex-col w-64 gap-5 mx-auto mt-5  md:w-auto md:flex-row md:gap-10"
        >
          <a
            href="#"
            class="inline-flex items-center justify-center gap-3 px-5 py-3 font-bold text-gray-800 bg-yellow-500 rounded "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clip-rule="evenodd"
              />
            </svg>
            Play Trailer
          </a>

          <a
            href="#"
            class="inline-flex items-center justify-center gap-3 px-5 py-3 font-bold text-gray-800 bg-yellow-500 rounded "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            Add to Favorite
          </a>
        </div>
      </div>
    </div>

    <Cast />
    <Screenshots />
  </div>
</template>

<script lang="ts">
import Cast from '@/components/Cast.vue';
import Screenshots from '@/components/Screenshots.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Movie',
  components: {
    Cast,
    Screenshots,
  },
});
</script>
