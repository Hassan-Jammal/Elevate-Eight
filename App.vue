<template>
    <Preloader />
    <!-- page-wrapper -->
    <div class="page-wrapper">
        <div class="position-fixed top-0 start-0 d-flex justify-content-center align-items-center w-100 vh-100 -z-10">
            <div class="circle"></div>
        </div>
        <Header />
        <NuxtPage />
        <Footer />
        <ScrollTop />
    </div>
</template>
  
<script setup>
    import Header from "~/components/headers/Header.vue";
    import Footer from "~/components/footers/Footer.vue";
    import { e8Utilits } from "~/utilits";
  
    onMounted(() => {
        e8Utilits.aosInit();
    });
</script>

<style scoped lang="css">
    .circle {
        width: 500px;
        height: 500px;
        background-color: var(--e8-primary-purple);
        border-radius: 50%;
        filter: blur(300px);
        opacity: 0.2;
    }
</style>