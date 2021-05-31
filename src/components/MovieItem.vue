<template>
  <div class="flex flex-col gap-1">
    <router-link :to="`/movie/${movie.id}`" class="aspect-w-2 aspect-h-3">
      <img
        :src="posterPath"
        :alt="`poster of ${movie.title}`"
        class="
          object-cover
          transition-opacity
          duration-150
          ease-in
          hover:opacity-50
        "
      />
    </router-link>

    <h3>{{ movie.title }}</h3>
    <div class="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5 text-yellow-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
      </svg>
      <span class="px-2 border-r border-gray-500">
        {{ movie.vote_average }}/10
      </span>
      <span class="px-2">
        {{ movie.release_date }}
      </span>
    </div>
    <span class="text-sm text-gray-500">
      {{ genreNames }}
    </span>
  </div>
</template>

<script lang="ts">
import { Genre, Movie } from '@/types';
import { computed, defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    movie: {
      type: Object as PropType<Movie>,
      required: true,
    },
    genres: {
      type: Object as PropType<Genre[]>,
      required: true,
    },
  },
  setup(props) {
    const posterPath = computed(
      () => `https://image.tmdb.org/t/p/w500${props.movie.poster_path}`
    );

    const genreNames = computed(() =>
      props.movie.genre_ids.reduce((acc, cur, index) => {
        const genre = props.genres.find((genre) => genre.id === cur);

        if (!genre) {
          return acc;
        }

        if (index !== props.movie.genre_ids.length - 1) {
          return acc + `${genre.name}, `;
        }

        return acc + `${genre.name}`;
      }, '')
    );

    return {
      posterPath,
      genreNames,
    };
  },
});
</script>
