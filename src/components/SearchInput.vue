<template>
  <div class="relative flex items-center">
    <input
      type="text"
      class="flex-1 py-1 pl-5 pr-8 bg-gray-700 rounded-full outline-none  focus:ring-2 ring-gray-300"
      @input="debounceSearch"
      @keydown.esc="clearSearch"
      v-model="searchTerm"
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

  <div
    v-if="searchTerm.length !== 0"
    class="fixed top-0 left-0 z-10 w-full h-screen"
    @click.self="clearSearch"
  ></div>

  <div
    v-if="searchTerm.length !== 0"
    class="absolute z-20 p-2 overflow-scroll bg-gray-600 rounded  scrollbar-hide w-72 top-16"
  >
    <ul class="h-48" v-if="searchResults.length !== 0">
      <li
        v-for="movie in searchResults"
        :key="movie.id"
        class="flex items-center gap-2 p-2 border-b border-gray-400"
      >
        <router-link
          @click="clearSearch"
          :to="`/movie/${movie.id}`"
          class="flex items-center gap-2"
        >
          <img
            :src="getPosterPath(movie)"
            :alt="`poster of ${movie.title}`"
            class="w-10"
          />
          <span>{{ movie.title }}</span>
        </router-link>
      </li>
    </ul>
    <ul v-else>
      <li>No result found for '{{ searchTerm }}' :(</li>
    </ul>
  </div>
</template>

<script lang="ts">
import api from '@/api';
import { SearchResponse, SearchResult } from '@/types';
import { defineComponent, reactive, toRefs } from 'vue';
import posterPlaceholder from '@/assets/poster_placeholder.png';

export default defineComponent({
  setup() {
    let timeoutId: number;
    const state = reactive({
      searchResults: [] as SearchResult[],
      searchTerm: '',
    });

    const debounceSearch = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      if (state.searchTerm.length < 2) {
        state.searchResults = [];
        return;
      }

      timeoutId = setTimeout(async () => {
        try {
          const { data } = await api.get<SearchResponse>(
            `/search/movie?query=${state.searchTerm}`
          );

          state.searchResults = data.results;
        } catch (error) {
          console.error(error);
        }
      }, 500);
    };

    const getPosterPath = (movie: SearchResult) => {
      if (movie.poster_path) {
        return `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      }

      return posterPlaceholder;
    };

    const clearSearch = () => {
      state.searchTerm = '';
      state.searchResults = [];
    };

    return {
      ...toRefs(state),
      debounceSearch,
      getPosterPath,
      clearSearch,
    };
  },
});
</script>
