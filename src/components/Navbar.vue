<template>
  <div class="border-b border-gray-700">
    <div class="container flex items-center justify-between p-5 mx-auto">
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
              >Profile</router-link
            >
          </li>
        </ul>
      </div>

      <div class="flex items-center gap-5 lg:gap-10">
        <div class="relative flex items-center">
          <input
            type="text"
            class="flex-1 py-1 pl-5 pr-8 bg-gray-700 rounded-full outline-none  focus:ring-2 ring-gray-300"
            placeholder="search..."
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="absolute w-4 h-4 text-gray-300 right-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <div class="absolute top-20">search result</div>

        <img
          src="@/assets/avatar.png"
          alt="avatar placeholder"
          class="w-10 rounded-full ring-3 ring-red-500"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Navbar',
});
</script>
