<template>
  <!-- Scroll Top Button -->
  <button class="scroll-top scroll-to-target" @click="scrollTop()">
    <span class="far fa-chevron-double-up"></span>
  </button>
</template>

<script>
import { e8Utilits } from "~/utilits";

export default {
  name: "ScrollTop",
  mounted() {
    e8Utilits.scrollTop();
  },
  methods: {
    scrollTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>
