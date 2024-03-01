<template>
  <section class="main-slider-area rel z-1">
    <div class="main-slider">
      <Swiper
        :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
        :navigation="{
          nextEl: '.main-slider-next',
          prevEl: '.main-slider-prev',
        }"
      >
        <SwiperSlide
          class="slider-item"
          style="background-image: url(assets/images/slider/slide1.jpg)"
        >
          <div class="container">
            <div class="slide-content">
              <span class="sub-title">Marketing Agency</span>
              <h2>
                <span>Perfect Marketing</span><br />
                For Growth Your Dream Business
              </h2>
              <hr />
              <div class="ratting-btns">
                <div class="quyality-ratting">
                  <span>Quality Service</span>
                  <div class="ratting">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
                <NuxtLink href="contact" class="theme-btn style-two"
                  >Get Started Now <i class="far fa-arrow-right"></i
                ></NuxtLink>
                <NuxtLink class="read-more" href="projects"
                  >How We Works <i class="far fa-arrow-right"></i
                ></NuxtLink>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          class="slider-item"
          style="background-image: url(assets/images/slider/slide2.jpg)"
        >
          <div class="container">
            <div class="slide-content">
              <span class="sub-title">Marketing Agency</span>
              <h2>
                <span>Perfect Marketing</span><br />
                For Growth Your Dream Business
              </h2>
              <hr />
              <div class="ratting-btns">
                <div class="quyality-ratting">
                  <span>Quality Service</span>
                  <div class="ratting">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
                <NuxtLink href="contact" class="theme-btn style-two"
                  >Get Started Now <i class="far fa-arrow-right"></i
                ></NuxtLink>
                <NuxtLink class="read-more" href="projects"
                  >How We Works <i class="far fa-arrow-right"></i
                ></NuxtLink>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="main-slider-controls">
      <div class="container">
        <div class="main-slider-arrows">
          <button class="main-slider-prev">
            <i class="fal fa-long-arrow-left"></i> prev
          </button>
          <button class="main-slider-next">
            next <i class="fal fa-long-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero5",
};
</script>
