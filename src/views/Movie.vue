<template>
  <div v-if="movie">
    <div
      class="flex flex-col gap-5 pb-10 border-b border-gray-600  md:gap-10 md:flex-row"
    >
      <div class="w-64 mx-auto md:mx-0">
        <img
          :src="posterPath"
          :alt="`poster of the movie ${movie.title}`"
          class="object-cover"
        />
      </div>

      <div class="flex flex-col flex-1 gap-5">
        <div>
          <h2 class="text-4xl font-semibold">
            {{ movie.title }}
          </h2>

          <div class="flex items-center mt-2">
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
            <span class="px-2 text-sm text-gray-500 border-r border-gray-500">
              {{ movie.vote_average }}/10
            </span>
            <span class="px-2 text-sm text-gray-500 border-r border-gray-500">
              {{ movie.release_date }}
            </span>
            <span class="px-2 text-sm text-gray-500">
              {{ genres }}
            </span>
          </div>
        </div>

        <p>
          {{ movie.overview }}
        </p>

        <div>
          <span class="font-semibold">Top Credits</span>

          <div class="flex flex-col gap-2 mt-1">
            <div class="flex flex-col">
              <span class="text-gray-500">Director</span>
              <span>{{ directors }}</span>
            </div>

            <div class="flex flex-col">
              <span class="text-gray-500">Writers</span>
              <span>{{ writers }}</span>
            </div>
          </div>
        </div>

        <div
          class="flex flex-col w-64 gap-5 mx-auto mt-5  md:mx-0 md:w-auto md:flex-row md:gap-10"
        >
          <button
            @click="openYoutubeModal"
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
          </button>

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

    <Cast :cast="movie.credits.cast" />
    <MovieImages
      :images="movie.images"
      :movieTitle="movie.title"
      @imageClicked="openImageModal"
    />
    <MediaModal
      :isOpen="isModalOpen"
      :mediaURL="mediaURL"
      :isYoutubeModal="isYoutubeModal"
      @closeModal="closeModal"
    />
  </div>
</template>

<script lang="ts">
import api from '@/api';
import Cast from '@/components/Cast.vue';
import MediaModal from '@/components/MediaModal.vue';
import MovieImages from '@/components/MovieImages.vue';
import { MovieDetailsResponse } from '@/types';
import { computed, defineComponent, onMounted, reactive, toRefs } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'Movie',
  components: {
    Cast,
    MovieImages,
    MediaModal,
  },
  setup() {
    const route = useRoute();

    const state = reactive({
      movie: null as MovieDetailsResponse | null,
      isModalOpen: false,
      isYoutubeModal: false,
      mediaURL: '',
    });

    const fetchMovie = async () => {
      const { data } = await api.get<MovieDetailsResponse>(
        `/movie/${route.params.id}?append_to_response=credits,videos,images`
      );
      state.movie = data;
      console.log(data);
    };

    onMounted(() => {
      fetchMovie();
    });

    const openYoutubeModal = () => {
      state.isYoutubeModal = true;
      state.mediaURL = `https://www.youtube.com/embed/${state.movie?.videos.results[0].key}`;
      state.isModalOpen = true;
    };

    const openImageModal = (imagePath: string) => {
      state.isYoutubeModal = false;
      state.mediaURL = `https://image.tmdb.org/t/p/original${imagePath}`;
      state.isModalOpen = true;
    };

    const closeModal = () => {
      state.mediaURL = '';
      state.isModalOpen = false;
    };

    const genres = computed(() => {
      if (state.movie) {
        return state.movie.genres.reduce((acc, cur, index) => {
          if (state.movie?.genres && index === state.movie?.genres.length - 1) {
            return acc + cur.name;
          }

          return acc + `${cur.name}, `;
        }, '');
      }

      return '';
    });

    const posterPath = computed(
      () => `https://image.tmdb.org/t/p/w500${state.movie?.poster_path}`
    );

    const directors = computed(() =>
      state.movie?.credits.crew
        .filter((crew) => crew.job === 'Director')
        .map((director) => director.name)
        .join(', ')
    );

    const writers = computed(() =>
      state.movie?.credits.crew
        .filter(
          (crew) =>
            crew.job === 'Screenplay' ||
            crew.job === 'Novel' ||
            crew.job === 'Story'
        )
        .map((writer) => writer.name)
        .join(', ')
    );

    return {
      ...toRefs(state),
      genres,
      posterPath,
      directors,
      writers,
      openYoutubeModal,
      openImageModal,
      closeModal,
    };
  },
});
</script>
