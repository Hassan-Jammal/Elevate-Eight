<template>
  <div class="row justify-content-between">
    <div class="col-xl-2 col-lg-3 col-6">
      <div class="counter-item counter-text-wrap" data-aos="fade-up" data-aos-delay="200">
        <i class="fal fa-check-circle"></i>
        <span class="count-text" data-speed="3000" data-stop="25">0</span>
        <span class="counter-title">Years Of Experience</span>
      </div>
    </div>
    <div class="col-xl-2 col-lg-3 col-6">
      <div class="counter-item counter-text-wrap" data-aos="fade-up" data-aos-delay="300">
        <i class="fal fa-check-circle"></i>
        <span class="count-text k" data-speed="3000" data-stop="3">0</span>
        <span class="counter-title">Project’s Complete</span>
      </div>
    </div>
    <div class="col-xl-2 col-lg-3 col-6">
      <div class="counter-item counter-text-wrap" data-aos="fade-up" data-aos-delay="400">
        <i class="fal fa-check-circle"></i>
        <span class="count-text" data-speed="3000" data-stop="48">0</span>
        <span class="counter-title">Professionals Team Member</span>
      </div>
    </div>
    <div class="col-xl-2 col-lg-3 col-6">
      <div class="counter-item counter-text-wrap" data-aos="fade-up" data-aos-delay="500">
        <i class="fal fa-check-circle"></i>
        <span class="count-text" data-speed="3000" data-stop="92">0</span>
        <span class="counter-title">Awards Winning</span>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { e8Utilits } from "~/utilits";

  onMounted(() => {
    e8Utilits.counterUp();
  });
</script>
