<template>
  <div class="py-5">
    <h3 class="text-3xl font-thin tracking-wider">Images</h3>

    <div
      class="grid grid-cols-1 gap-5 mt-5  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <div
        v-for="image in images.backdrops"
        :key="image.file_path"
        class="cursor-pointer aspect-w-16 aspect-h-9"
        @click="handleImageClick(image.file_path)"
      >
        <img
          :src="`https://image.tmdb.org/t/p/original${image.file_path}`"
          class="object-cover transition-opacity duration-150 ease-in  hover:opacity-50"
          :alt="`image from ${movieTitle}`"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Images } from '@/types';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'MovieImages',
  props: {
    images: {
      type: Object as PropType<Images>,
      required: true,
    },
    movieTitle: {
      type: String,
      required: true,
    },
  },
  emits: {
    imageClicked: (filePath: string) => filePath.length > 0,
  },
  setup(_, { emit }) {
    const handleImageClick = (filePath: string) => {
      emit('imageClicked', filePath);
    };

    return {
      handleImageClick,
    };
  },
});
</script>
