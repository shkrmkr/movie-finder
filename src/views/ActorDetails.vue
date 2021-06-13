<template>
  <div
    v-if="actorDetails && knownFor && externalIds"
    class="flex flex-col gap-10"
  >
    <header class="flex flex-col max-w-5xl gap-5 mx-auto md:flex-row">
      <div class="w-48 mx-auto">
        <img
          :src="`https://image.tmdb.org/t/p/w200${actorDetails.profile_path}`"
          :alt="actorDetails.name"
        />
      </div>

      <div class="flex flex-col flex-1 gap-2">
        <h2 class="text-6xl font-thin text-center md:text-left">
          {{ actorDetails.name }}
        </h2>
        <p
          v-if="actorDetails.birthday"
          class="flex items-center gap-2 text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
            />
          </svg>
          <span> {{ actorDetails.birthday }} ({{ age }}) </span>
        </p>

        <div class="flex gap-2">
          <a
            v-if="externalIds.twitter_id"
            :href="`https://twitter.com/${externalIds.twitter_id}`"
          >
            <svg class="w-8 h-8 text-gray-400" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
              />
            </svg>
          </a>

          <a
            v-if="externalIds.instagram_id"
            :href="`https://www.instagram.com/${externalIds.instagram_id}`"
          >
            <svg class="w-8 h-8 text-gray-400" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
              />
            </svg>
          </a>

          <a
            v-if="externalIds.facebook_id"
            :href="`https://www.facebook.com/${externalIds.facebook_id}`"
          >
            <svg class="w-8 h-8 text-gray-400" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
              />
            </svg>
          </a>
        </div>

        <p>{{ actorDetails.biography }}</p>
      </div>
    </header>

    <section class="pt-5 border-t border-gray-600">
      <h3 class="mb-5 text-2xl">Known For...</h3>
      <div class="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-6">
        <router-link
          v-for="movie in knownFor"
          :key="movie.id"
          class="transition-opacity aspect-w-2 aspect-h-3 hover:opacity-50"
          :to="`/movie/${movie.id}`"
        >
          <img
            class="object-cover"
            :src="`https://image.tmdb.org/t/p/w185${movie.poster_path}`"
            :alt="`poster of ${movie.title}`"
          />
        </router-link>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import api from '@/api';
import {
  PersonCreditsResponse,
  PersonDetailsResponse,
  PersonExternalIdsResponse,
} from '@/types';
import { computed, defineComponent, onMounted, reactive, toRefs } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'ActorDetails',
  setup() {
    const { params } = useRoute();

    const state = reactive({
      actorDetails: null as PersonDetailsResponse | null,
      knownFor: null as PersonCreditsResponse['cast'] | null,
      externalIds: null as PersonExternalIdsResponse | null,
    });

    onMounted(async () => {
      const { data: actorDetails } = await api.get<PersonDetailsResponse>(
        `/person/${params.id}`
      );
      const { data: knownFor } = await api.get<PersonCreditsResponse>(
        `/person/${params.id}/combined_credits`
      );
      const { data: externalIds } = await api.get<PersonExternalIdsResponse>(
        `/person/${params.id}/external_ids`
      );

      state.externalIds = externalIds;
      state.knownFor = knownFor.cast.filter(
        (movie) => movie.poster_path !== null && movie.media_type === 'movie'
      );
      state.actorDetails = actorDetails;
    });

    const age = computed(() => {
      if (state.actorDetails?.birthday) {
        return (
          (Date.now() - Date.parse(state.actorDetails.birthday)) /
          (1000 * 60 * 60 * 24 * 365)
        ).toFixed(0);
      }
      return null;
    });

    return { ...toRefs(state), age };
  },
});
</script>
