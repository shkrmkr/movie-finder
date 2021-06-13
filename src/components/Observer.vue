<template>
  <div ref="observerRef" />
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue';

export default defineComponent({
  name: 'Observer',
  emits: {
    intersect: () => true,
  },
  setup(_, { emit }) {
    const observer = ref<IntersectionObserver | null>(null);
    const observerRef = ref<HTMLDivElement | null>(null);

    onMounted(() => {
      observer.value = new IntersectionObserver((entries) => {
        if (entries[0]?.isIntersecting) {
          emit('intersect');
        }
      });

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      observer.value.observe(observerRef.value!);
    });

    onUnmounted(() => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      observer.value!.disconnect();
    });

    return {
      observerRef,
    };
  },
});
</script>
