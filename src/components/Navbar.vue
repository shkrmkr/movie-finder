<template>
  <div class="sticky top-0 z-50 bg-gray-800 border-b border-gray-700">
    <div
      class="container flex flex-col items-center gap-2 p-5 mx-auto  sm:justify-between sm:flex-row"
    >
      <div class="flex items-center gap-3 lg:gap-8">
        <router-link to="/" class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-10 h-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
            />
          </svg>
          <h1 class="hidden text-2xl font-bold lg:block">MovieFinder</h1>
        </router-link>

        <ul class="flex">
          <li>
            <router-link
              class="px-3 py-2 transition-opacity border-b-2 border-gray-300 border-opacity-0  hover:border-opacity-100"
              to="/"
            >
              Movies
            </router-link>
          </li>
          <li>
            <router-link
              class="px-3 py-2 border-b-2 border-gray-300 border-opacity-0  hover:border-opacity-100"
              to="/actors"
            >
              Actors
            </router-link>
          </li>
          <li>
            <router-link
              class="px-3 py-2 border-b-2 border-transparent  hover:border-gray-300"
              to="/profile"
            >
              Profile
            </router-link>
          </li>
        </ul>
      </div>
      <div>
        <SearchInput />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import SearchInput from './SearchInput.vue';

export default defineComponent({
  name: 'Navbar',
  components: {
    SearchInput,
  },
});
</script>
