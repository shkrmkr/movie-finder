<template>
  <div>
    <h2 class="mb-5 text-xl font-semibold text-yellow-500 uppercase">
      Popular Movies
    </h2>

    <div
      class="grid grid-cols-1  gap-7 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
    >
      <MovieItems />
      <MovieItems />
      <MovieItems />
      <MovieItems />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MovieItems from './MovieItem.vue';

export default defineComponent({
  name: 'PopularMovies',
  components: {
    MovieItems,
  },
});
</script>
