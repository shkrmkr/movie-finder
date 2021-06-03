<template>
  <div>
    <h2 class="mb-5 text-xl font-semibold text-yellow-500 uppercase">
      Popular Actors
    </h2>

    <div
      class="grid grid-cols-2 gap-5  sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7"
    >
      <ActorItem v-for="actor in actors" :key="actor.id" :actor="actor" />
    </div>
  </div>
</template>

<script lang="ts">
import api from '@/api';
import ActorItem from '@/components/ActorItem.vue';
import { PopularActor, PopularActorsResponse } from '@/types';
import { defineComponent, onMounted, reactive, toRefs } from 'vue';

export default defineComponent({
  name: 'Actors',
  components: {
    ActorItem,
  },
  setup() {
    const state = reactive({
      actors: [] as PopularActor[],
    });

    const getActors = async (page: number) => {
      try {
        const { data } = await api.get<PopularActorsResponse>(
          `/person/popular?page=${page}`
        );
        state.actors = data.results;
        console.log(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(() => {
      getActors(1);
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>
