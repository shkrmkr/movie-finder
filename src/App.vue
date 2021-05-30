<template>
  <Navbar />
  <router-view class="container p-5 mx-auto" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '@/components/Navbar.vue';

export default defineComponent({
  name: 'App',
  components: { Navbar },
});
</script>
