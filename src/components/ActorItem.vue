<template>
  <router-link :to="`/actors/${actor.id}`">
    <img :src="profileImage" :alt="actor.name" />

    <h3>{{ actor.name }}</h3>
    <p class="text-gray-400">{{ knownFor }}</p>
  </router-link>
</template>

<script lang="ts">
import { PopularActor } from '@/types';
import { computed, defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'ActorItem',
  props: {
    actor: {
      type: Object as PropType<PopularActor>,
      required: true,
    },
  },
  setup(props) {
    const profileImage = computed(
      () =>
        `https://image.tmdb.org/t/p/w235_and_h235_face${props.actor.profile_path}`
    );

    const knownFor = computed(() => {
      if (props.actor.known_for[0].media_type === 'movie') {
        return props.actor.known_for[0].title;
      }

      return props.actor.known_for[0].name;
    });

    return {
      profileImage,
      knownFor,
    };
  },
});
</script>
