<template>
  <!-- Testimonial Area start -->
  <section class="testimonial-section-five">
    <div class="container-fluid px-0">
      <div class="row no-gap">
        <div class="col-xl-6 wow fadeInRight delay-0-2s">
          <div
            class="testimonial-five-image"
            style="
              background-image: url(assets/images/testimonials/testimonials-five.jpg);
            "
          ></div>
        </div>
        <div class="col-xl-6 align-self-center">
          <div
            class="testimonial-five-right p-100 py-130 rpy-100 wow fadeInLeft delay-0-2s"
          >
            <div class="circle-logo-text w-50 mb-65 rmb-35">
              <img
                src="/assets/images/about/circle-text.svg"
                alt="Circle Text"
              />
            </div>
            <div class="testimonials-active">
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
                  el: '.t4-dot',
                }"
              >
                <SwiperSlide class="testimonial-item">
                  <div class="author-speech">
                    <p>
                      <span class="quote">“</span> On the other hand denounce
                      with righteous indignation and dislike men beguiled
                      demoralized charms pleasure moments line desire that they
                      foresee pain and trouble that boon
                      <span class="quote right-quote">“</span>
                    </p>
                  </div>
                  <hr />
                  <div class="testimonial-footer">
                    <div class="testimonial-author">
                      <div class="author-image">
                        <img
                          src="/assets/images/testimonials/author1.png"
                          alt="Author Image"
                        />
                      </div>
                      <div class="author-info">
                        <h4>James N. Johnson</h4>
                        <span class="designation">CEO & Founder</span>
                      </div>
                    </div>
                    <div class="ratting style-two">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide class="testimonial-item">
                  <div class="author-speech">
                    <p>
                      <span class="quote">“</span> On the other hand denounce
                      with righteous indignation and dislike men beguiled
                      demoralized charms pleasure moments line desire that they
                      foresee pain and trouble that boon
                      <span class="quote right-quote">“</span>
                    </p>
                  </div>
                  <div class="testimonial-footer">
                    <div class="testimonial-author">
                      <div class="author-image">
                        <img
                          src="/assets/images/testimonials/author1.png"
                          alt="Author Image"
                        />
                      </div>
                      <div class="author-info">
                        <h4>James N. Johnson</h4>
                        <span class="designation">CEO & Founder</span>
                      </div>
                    </div>
                    <div class="ratting style-two">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide class="testimonial-item">
                  <div class="author-speech">
                    <p>
                      <span class="quote">“</span> On the other hand denounce
                      with righteous indignation and dislike men beguiled
                      demoralized charms pleasure moments line desire that they
                      foresee pain and trouble that boon
                      <span class="quote right-quote">“</span>
                    </p>
                  </div>
                  <div class="testimonial-footer">
                    <div class="testimonial-author">
                      <div class="author-image">
                        <img
                          src="/assets/images/testimonials/author1.png"
                          alt="Author Image"
                        />
                      </div>
                      <div class="author-info">
                        <h4>James N. Johnson</h4>
                        <span class="designation">CEO & Founder</span>
                      </div>
                    </div>
                    <div class="ratting style-two">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide class="testimonial-item">
                  <div class="author-speech">
                    <p>
                      <span class="quote">“</span> On the other hand denounce
                      with righteous indignation and dislike men beguiled
                      demoralized charms pleasure moments line desire that they
                      foresee pain and trouble that boon
                      <span class="quote right-quote">“</span>
                    </p>
                  </div>
                  <div class="testimonial-footer">
                    <div class="testimonial-author">
                      <div class="author-image">
                        <img
                          src="/assets/images/testimonials/author1.png"
                          alt="Author Image"
                        />
                      </div>
                      <div class="author-info">
                        <h4>James N. Johnson</h4>
                        <span class="designation">CEO & Founder</span>
                      </div>
                    </div>
                    <div class="ratting style-two">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div class="testimonial-controls mt-105 rmt-50">
              <div class="testimonial-dots mx-0">
                <div class="slick-dots t4-dot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Testimonial Area end -->
</template>

<script>
export default {
  name: "Testimonial4",
};
</script>
