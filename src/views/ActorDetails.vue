<template>
  <div v-if="actorDetails && knownFor">
    <div>
      <img
        :src="`https://image.tmdb.org/t/p/w200${actorDetails.profile_path}`"
        :alt="actorDetails.name"
      />
      <h2 class="text-5xl">{{ actorDetails.name }}</h2>
      <p>{{ actorDetails.birthday }} ({{ age }})</p>
      <p>{{ actorDetails.biography }}</p>

      <section>
        <h3>Known For</h3>
        <div
          class="grid grid-cols-2 gap-5  sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8"
        >
          <div v-for="movie in knownFor" :key="movie.id">
            <img
              :src="`https://image.tmdb.org/t/p/w185${movie.poster_path}`"
              :alt="`poster of ${movie.title}`"
            />
            <p>{{ movie.title }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import api from '@/api';
import { PersonCreditsResponse, PersonDetailsResponse } from '@/types';
import { computed, defineComponent, onMounted, reactive, toRefs } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'ActorDetails',
  setup() {
    const { params } = useRoute();

    const state = reactive({
      actorDetails: null as PersonDetailsResponse | null,
      knownFor: null as PersonCreditsResponse['cast'] | null,
    });

    onMounted(async () => {
      const { data: actorDetails } = await api.get<PersonDetailsResponse>(
        `/person/${params.id}`
      );
      const { data: knownFor } = await api.get<PersonCreditsResponse>(
        `/person/${params.id}/combined_credits`
      );

      state.knownFor = knownFor.cast.filter((movie, index) => {
        if (index < 5) return true;
        return false;
      });
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
