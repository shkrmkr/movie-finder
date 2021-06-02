<template>
  <div
    class="fixed top-0 left-0 z-50 flex flex-col items-center justify-center w-full h-screen gap-10 overflow-y-auto bg-black  bg-opacity-90"
    tabindex="0"
    v-show="isOpen"
    @click.self="close"
  >
    <div class="w-11/12 md:w-3/5">
      <div v-if="isYoutubeModal" class="aspect-w-16 aspect-h-9">
        <iframe
          allow="autoplay; encrypted-media"
          allowfullscreen
          :src="mediaURL"
        ></iframe>
      </div>
      <img v-else :src="mediaURL" alt="" />
    </div>

    <button @click="close" @keydown.enter="close" class="hover:text-gray-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MediaModal',
  emits: {
    closeModal: () => true,
  },
  props: {
    mediaURL: {
      type: String,
      required: true,
    },
    isOpen: {
      type: Boolean,
      required: true,
    },
    isYoutubeModal: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    const close = () => emit('closeModal');

    return {
      close,
    };
  },
});
</script>
