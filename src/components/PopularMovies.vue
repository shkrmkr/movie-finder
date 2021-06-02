<template>
  <div>
    <h2 class="mb-5 text-xl font-semibold text-yellow-500 uppercase">
      Popular Movies
    </h2>

    <div
      class="grid grid-cols-1  gap-7 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
    >
      <MovieItems
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
        :genres="genres"
      />
    </div>
  </div>
</template>

<script lang="ts">
import api from '@/api';
import { Genre, GenresResponse, Movie, PopularMoviesResponse } from '@/types';
import { defineComponent, onMounted, reactive, toRefs } from 'vue';
import MovieItems from './MovieItem.vue';

export default defineComponent({
  name: 'PopularMovies',
  components: {
    MovieItems,
  },
  setup() {
    const state = reactive({
      movies: [] as Movie[],
      genres: [] as Genre[],
    });

    onMounted(async () => {
      fetchGenres();

      try {
        const { data } = await api.get<PopularMoviesResponse>('/movie/popular');

        state.movies = data.results;
      } catch (error) {
        console.error(error);
      }
    });

    const fetchGenres = async () => {
      try {
        const { data } = await api.get<GenresResponse>('/genre/movie/list');
        state.genres = data.genres;
      } catch (error) {
        console.error(error);
      }
    };

    return {
      ...toRefs(state),
    };
  },
});
</script>
