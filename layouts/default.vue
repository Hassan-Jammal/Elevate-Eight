<template>
  <Preloader />
  <slot />
</template>

<script>
import Header from "../components/headers/Header";
export default {
  components: {
    Header,
  },
};
</script>
