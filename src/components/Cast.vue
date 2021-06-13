<template>
  <div class="py-5 border-b border-gray-600">
    <h3 class="text-3xl font-thin tracking-wider">Cast</h3>

    <div
      class="grid grid-cols-2 gap-5 mt-5  sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6"
    >
      <div v-for="c in cast" :key="c.cast_id" class="flex flex-col">
        <router-link :to="`/actors/${c.id}`">
          <div class="aspect-w-10 aspect-h-13">
            <img
              :src="getProfilePath(c)"
              :alt="c.name"
              class="object-cover transition-opacity duration-150 ease-in  hover:opacity-50"
            />
          </div>
          <p class="mt-2">
            {{ c.name }} <span class="text-gray-400">as {{ c.character }}</span>
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Cast } from '@/types';
import { defineComponent, PropType } from 'vue';
import profilePlaceholder from '@/assets/profile_placeholder.png';

export default defineComponent({
  name: 'Cast',
  props: {
    cast: {
      type: Object as PropType<Cast[]>,
      required: true,
    },
  },
  setup() {
    const getProfilePath = (c: Cast) => {
      if (c.profile_path) {
        return `https://image.tmdb.org/t/p/w300${c.profile_path}`;
      }

      return profilePlaceholder;
    };

    return {
      getProfilePath,
    };
  },
});
</script>
