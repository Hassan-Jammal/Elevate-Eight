<template>
  <Footer1 v-if="footer == 1" />
  <Footer2 v-else-if="footer == 2" />
  <Footer3 v-else-if="footer == 3" />
  <Footer4 v-else-if="footer == 4" />
  <Footer5 v-else-if="footer == 5" />
  <Footer6 v-else-if="footer == 6" />
  <Footer1 v-else />
</template>

<script>
import Footer1 from "./Footer1.vue";
import Footer2 from "./Footer2.vue";
import Footer3 from "./Footer3.vue";
import Footer4 from "./Footer4.vue";
import Footer5 from "./Footer5.vue";
import Footer6 from "./Footer6.vue";

export default {
  name: "Footer",
  components: { Footer1, Footer2, Footer3, Footer4, Footer5, Footer6 },
  props: {
    footer: {
      type: Number,
      default: 1,
    },
  },
};
</script>
