<template>
  <div>
    <h2 class="mb-5 text-xl font-semibold text-yellow-500 uppercase">
      Popular Actors
    </h2>

    <div
      class="grid grid-cols-2 gap-5  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
    >
      <ActorItem v-for="actor in actors" :key="actor.id" :actor="actor" />
      <Observer @intersect="loadMoreActors" />
    </div>

    <div v-if="showSpinner" class="flex justify-center">
      <svg
        class="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        data-darkreader-inline-fill=""
        style="--darkreader-inline-fill: none"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
          data-darkreader-inline-stroke=""
          style="--darkreader-inline-stroke: currentColor"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          data-darkreader-inline-fill=""
          style="--darkreader-inline-fill: currentColor"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import api from '@/api';
import ActorItem from '@/components/ActorItem.vue';
import Observer from '@/components/Observer.vue';
import { PopularActor, PopularActorsResponse } from '@/types';
import { defineComponent, onMounted, reactive, toRefs } from 'vue';

export default defineComponent({
  name: 'Actors',
  components: {
    ActorItem,
    Observer,
  },
  setup() {
    const state = reactive({
      actors: [] as PopularActor[],
      page: 1,
      showSpinner: true,
    });

    const getActors = async (page: number) => {
      try {
        const { data } = await api.get<PopularActorsResponse>(
          `/person/popular?page=${page}`
        );
        state.actors.push(...data.results);
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(async () => {
      await getActors(state.page);
      state.showSpinner = false;
    });

    const loadMoreActors = async () => {
      state.showSpinner = true;
      state.page += 1;
      await getActors(state.page);
      state.showSpinner = false;
    };

    return {
      ...toRefs(state),
      loadMoreActors,
    };
  },
});
</script>
