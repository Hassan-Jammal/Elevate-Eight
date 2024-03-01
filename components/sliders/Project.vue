<template>
  <section class="work-gallery-area pb-130 rpb-100">
    <div class="container container-1290">
      <div class="row justify-content-center">
        <div class="col-xl-8 col-lg-10">
          <div class="section-title text-center mb-60 wow fadeInUp delay-0-2s">
            <span class="sub-title mb-20">Recent Works Gallery</span>
            <h2>We’ve Complete 1532+ Projects Take A Look Our Work</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="work-gallery-active">
        <Swiper
          :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]"
          :slides-per-view="1"
          :loop="true"
          :autoplay="{
            delay: 8000,
            disableOnInteraction: true,
          }"
          :navigation="{
            nextEl: '.work-gallery-next',
            prevEl: '.work-gallery-prev',
          }"
          :pagination="{
            el: '.p-dot',
            clickable: true,
          }"
          :breakpoints="{
            767: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }"
        >
          <SwiperSlide class="project-item style-four wow fadeInUp delay-0-2s">
            <div class="image">
              <img
                src="/assets/images/projects/work-gallery1.jpg"
                alt="Work Gallery"
              />
              <NuxtLink href="project-details" class="project-btn"
                ><i class="far fa-arrow-right"></i
              ></NuxtLink>
            </div>
            <div class="content">
              <NuxtLink href="projects" class="category"
                >Project Development</NuxtLink
              >
              <h4>
                <NuxtLink href="project-details"
                  >Task Management Dashboard</NuxtLink
                >
              </h4>
            </div>
          </SwiperSlide>
          <SwiperSlide class="project-item style-four wow fadeInUp delay-0-4s">
            <div class="image">
              <img
                src="/assets/images/projects/work-gallery2.jpg"
                alt="Work Gallery"
              />
              <NuxtLink href="project-details" class="project-btn"
                ><i class="far fa-arrow-right"></i
              ></NuxtLink>
            </div>
            <div class="content">
              <NuxtLink href="projects" class="category">UI/UX Design</NuxtLink>
              <h4>
                <NuxtLink href="project-details">Website Development</NuxtLink>
              </h4>
            </div>
          </SwiperSlide>
          <SwiperSlide class="project-item style-four wow fadeInUp delay-0-6s">
            <div class="image">
              <img
                src="/assets/images/projects/work-gallery3.jpg"
                alt="Work Gallery"
              />
              <NuxtLink href="project-details" class="project-btn"
                ><i class="far fa-arrow-right"></i
              ></NuxtLink>
            </div>
            <div class="content">
              <NuxtLink href="projects" class="category"
                >Product Design</NuxtLink
              >
              <h4>
                <NuxtLink href="project-details"
                  >Mobile Application Development</NuxtLink
                >
              </h4>
            </div>
          </SwiperSlide>
          <SwiperSlide class="project-item style-four wow fadeInUp delay-0-2s">
            <div class="image">
              <img
                src="/assets/images/projects/work-gallery1.jpg"
                alt="Work Gallery"
              />
              <NuxtLink href="project-details" class="project-btn"
                ><i class="far fa-arrow-right"></i
              ></NuxtLink>
            </div>
            <div class="content">
              <NuxtLink href="projects" class="category"
                >Project Development</NuxtLink
              >
              <h4>
                <NuxtLink href="project-details"
                  >Task Management Dashboard</NuxtLink
                >
              </h4>
            </div>
          </SwiperSlide>
          <SwiperSlide class="project-item style-four wow fadeInUp delay-0-2s">
            <div class="image">
              <img
                src="/assets/images/projects/work-gallery2.jpg"
                alt="Work Gallery"
              />
              <NuxtLink href="project-details" class="project-btn"
                ><i class="far fa-arrow-right"></i
              ></NuxtLink>
            </div>
            <div class="content">
              <NuxtLink href="projects" class="category">UI/UX Design</NuxtLink>
              <h4>
                <NuxtLink href="project-details">Website Development</NuxtLink>
              </h4>
            </div>
          </SwiperSlide>
          <SwiperSlide class="project-item style-four wow fadeInUp delay-0-2s">
            <div class="image">
              <img
                src="/assets/images/projects/work-gallery3.jpg"
                alt="Work Gallery"
              />
              <NuxtLink href="project-details" class="project-btn"
                ><i class="far fa-arrow-right"></i
              ></NuxtLink>
            </div>
            <div class="content">
              <NuxtLink href="projects" class="category"
                >Product Design</NuxtLink
              >
              <h4>
                <NuxtLink href="project-details"
                  >Mobile Application Development</NuxtLink
                >
              </h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="work-gallery-controls">
        <button class="work-gallery-prev slick-arrow">
          <i class="far fa-chevron-left"></i>
        </button>
        <div class="work-gallery-dots">
          <div class="slick-dots p-dot"></div>
        </div>
        <button class="work-gallery-next slick-arrow">
          <i class="far fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Project",
};
</script>
