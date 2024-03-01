<template>
  <div>
    <!-- Add this line for debugging -->
    <Header1Vue :singlePage="singlePage" v-if="header === 1" />
    <Header2Vue :singlePage="singlePage" v-else-if="header === 2" />
    <Header3Vue :singlePage="singlePage" v-else-if="header === 3" />
    <Header1Vue :singlePage="singlePage" v-else />
  </div>
</template>

<script>
import { ygencyUtilits } from "~/utilits";
import Header1Vue from "./Header1.vue";
import Header2Vue from "./Header2.vue";
import Header3Vue from "./Header3.vue";
export default {
  name: "Header",
  components: {
    Header1Vue,
    Header3Vue,
    Header2Vue,
  },
  props: {
    header: {
      type: Number,
      default: 1,
    },
    singlePage: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    ygencyUtilits.stickyNav();
  },
};
</script>
