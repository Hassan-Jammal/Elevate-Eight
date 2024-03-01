<template>
  <MfpPopup />
  <div class="page-wrapper">
    <Header :header="header" :singlePage="singlePage" />
    <slot />
    <Footer :footer="footer" />
    <ScrollTop />
  </div>
</template>

<script>
import niceSelect from "react-nice-select";
import Footer from "~/components/footers/Footer.vue";
import { ygencyUtilits } from "~/utilits";
import Header from "../components/headers/Header";

export default {
  name: "YgencyLayout",
  props: {
    header: {
      type: Number,
      default: 1,
    },
    footer: {
      type: Number,
      default: 1,
    },
    singlePage: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Header,
    Footer,
  },
  mounted() {
    ygencyUtilits.wowjs();
    niceSelect();
  },
};
</script>
