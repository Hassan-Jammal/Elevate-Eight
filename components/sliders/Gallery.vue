<template>
  <section class="project-slider-section pt-100 rpt-70">
    <div class="container">
      <div class="row justify-content-between align-items-end pb-45 rpb-25">
        <div class="col-xl-6 col-lg-8">
          <div class="section-title style-two mb-25 wow fadeInRight delay-0-2s">
            <span class="sub-title mb-15">Project Gallery</span>
            <h2>Let’s Take A Look Popular Digital Projects <i>Gallery</i></h2>
          </div>
        </div>
        <div class="col-lg-4">
          <div
            class="slider-arrow-btns mb-35 text-lg-end wow fadeInLeft delay-0-2s"
          >
            <button class="project-prev slick-arrow">
              <i class="far fa-arrow-left"></i>
            </button>
            <button class="project-next slick-arrow">
              <i class="far fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="project-slider-active">
        <Swiper
          :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]"
          :slides-per-view="1"
          :loop="true"
          :autoplay="{
            delay: 8000,
            disableOnInteraction: true,
          }"
          :navigation="{
            nextEl: '.project-next',
            prevEl: '.project-prev',
          }"
          :breakpoints="{
            1200: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }"
        >
          <SwiperSlide class="project-item style-three wow fadeInUp delay-0-2s">
            <div class="image">
              <img
                src="/assets/images/projects/project-slider1.jpg"
                alt="Project Slider"
              />
            </div>
            <div class="content">
              <NuxtLink href="projects" class="category"
                >Creative Work</NuxtLink
              >
              <h4>
                <NuxtLink href="project-details"
                  >Task Management <i>Dashboard</i></NuxtLink
                >
              </h4>
              <NuxtLink class="read-more" href="project-details"
                >Project Details <i class="far fa-arrow-right"></i
              ></NuxtLink>
            </div>
          </SwiperSlide>
          <SwiperSlide class="project-item style-three wow fadeInUp delay-0-4s">
            <div class="image">
              <img
                src="/assets/images/projects/project-slider2.jpg"
                alt="Project Slider"
              />
            </div>
            <div class="content">
              <NuxtLink href="projects" class="category"
                >Digital Product</NuxtLink
              >
              <h4>
                <NuxtLink href="project-details"
                  >Mobile Application <i>Development</i></NuxtLink
                >
              </h4>
              <NuxtLink class="read-more" href="project-details"
                >Project Details <i class="far fa-arrow-right"></i
              ></NuxtLink>
            </div>
          </SwiperSlide>
          <SwiperSlide class="project-item style-three wow fadeInUp delay-0-2s">
            <div class="image">
              <img
                src="/assets/images/projects/project-slider1.jpg"
                alt="Project Slider"
              />
            </div>
            <div class="content">
              <NuxtLink href="projects" class="category"
                >Creative Work</NuxtLink
              >
              <h4>
                <NuxtLink href="project-details"
                  >Task Management <i>Dashboard</i></NuxtLink
                >
              </h4>
              <NuxtLink class="read-more" href="project-details"
                >Project Details <i class="far fa-arrow-right"></i
              ></NuxtLink>
            </div>
          </SwiperSlide>
          <SwiperSlide class="project-item style-three wow fadeInUp delay-0-2s">
            <div class="image">
              <img
                src="/assets/images/projects/project-slider2.jpg"
                alt="Project Slider"
              />
            </div>
            <div class="content">
              <NuxtLink href="projects" class="category"
                >Digital Product</NuxtLink
              >
              <h4>
                <NuxtLink href="project-details"
                  >Mobile Application <i>Development</i></NuxtLink
                >
              </h4>
              <NuxtLink class="read-more" href="project-details"
                >Project Details <i class="far fa-arrow-right"></i
              ></NuxtLink>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Gallery",
};
</script>
