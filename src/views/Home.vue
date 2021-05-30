<template>
  <PopularMovies />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PopularMovies from '@/components/PopularMovies.vue';

export default defineComponent({
  name: 'Home',
  components: {
    PopularMovies,
  },
});
</script>
