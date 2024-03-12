<template>
  <MfpPopup />
  <div class="page-wrapper">
    <div class="position-fixed top-0 start-0 d-flex justify-content-center align-items-center w-100 vh-100">
      <div class="circle" style="width: 500px; height: 500px; background-color: var(--e8-primary-purple); border-radius: 50%; filter: blur(300px); opacity: 0.2;"></div>
    </div>
    <Header :header="header" :singlePage="singlePage" />
    <slot />
    <Footer :footer="footer" />
    <ScrollTop />
  </div>
</template>

<script>
import niceSelect from "react-nice-select";
import Footer from "~/components/footers/Footer.vue";
import { e8Utilits } from "~/utilits";
import Header from "../components/headers/Header";

export default {
  name: "e8Layout",
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
    e8Utilits.wowjs();
    niceSelect();
  },
};
</script>
