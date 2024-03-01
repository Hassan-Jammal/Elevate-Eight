<template>
  <section class="testimonials-three-area pt-95 rpt-70">
    <div class="container container-1260">
      <div class="row gap-120 align-items-center">
        <div class="col-lg-6">
          <div class="testimonial-one-right-part rmb-75">
            <div class="testimonials-three-active wow fadeInUp delay-0-2s">
              <Swiper
                :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]"
                :slides-per-view="1"
                :loop="true"
                :autoplay="{
                  delay: 8000,
                  disableOnInteraction: true,
                }"
                :navigation="{
                  nextEl: '.testimonial-three-next',
                  prevEl: '.testimonial-three-prev',
                }"
                :pagination="{
                  el: '.testimonial-three-dots',
                }"
              >
                <SwiperSlide class="testimonial-item style-three">
                  <div class="ratting style-two">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                  <div class="author-speech">
                    <p>
                      On the other hand we denounce see with righteous
                      indignation and dislike men who are so beguiled
                      demoralized by the charms pleasure moment
                    </p>
                  </div>
                  <div class="middle-quote">
                    <div class="icon">
                      <i class="flaticon-right-quote"></i>
                    </div>
                  </div>
                  <div class="testimonial-footer">
                    <div class="testimonial-author">
                      <div class="author-info">
                        <h4>Richard S. Robertson</h4>
                        <span class="designation">CEO & Founder</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide class="testimonial-item style-three">
                  <div class="ratting style-two">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                  <div class="author-speech">
                    <p>
                      On the other hand we denounce see with righteous
                      indignation and dislike men who are so beguiled
                      demoralized by the charms pleasure moment
                    </p>
                  </div>
                  <div class="middle-quote">
                    <div class="icon">
                      <i class="flaticon-right-quote"></i>
                    </div>
                  </div>
                  <div class="testimonial-footer">
                    <div class="testimonial-author">
                      <div class="author-info">
                        <h4>Richard S. Robertson</h4>
                        <span class="designation">CEO & Founder</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide class="testimonial-item style-three">
                  <div class="ratting style-two">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                  <div class="author-speech">
                    <p>
                      On the other hand we denounce see with righteous
                      indignation and dislike men who are so beguiled
                      demoralized by the charms pleasure moment
                    </p>
                  </div>
                  <div class="middle-quote">
                    <div class="icon">
                      <i class="flaticon-right-quote"></i>
                    </div>
                  </div>
                  <div class="testimonial-footer">
                    <div class="testimonial-author">
                      <div class="author-info">
                        <h4>Richard S. Robertson</h4>
                        <span class="designation">CEO & Founder</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide class="testimonial-item style-three">
                  <div class="ratting style-two">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                  <div class="author-speech">
                    <p>
                      On the other hand we denounce see with righteous
                      indignation and dislike men who are so beguiled
                      demoralized by the charms pleasure moment
                    </p>
                  </div>
                  <div class="middle-quote">
                    <div class="icon">
                      <i class="flaticon-right-quote"></i>
                    </div>
                  </div>
                  <div class="testimonial-footer">
                    <div class="testimonial-author">
                      <div class="author-info">
                        <h4>Richard S. Robertson</h4>
                        <span class="designation">CEO & Founder</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div
              class="testimonial-controls style-three mt-65 rmt-40 wow fadeInUp delay-0-3s"
            >
              <button class="testimonial-three-prev slick-arrow">
                <i class="far fa-long-arrow-left"></i>
              </button>
              <div class="testimonial-three-dots slick-dots"></div>
              <button class="testimonial-three-next slick-arrow">
                <i class="far fa-long-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="testimonials-three-image wow fadeInRight delay-0-2s">
            <img
              src="/assets/images/testimonials/testimonials-three.jpg"
              alt="Testimonials"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Testimonial",
};
</script>
