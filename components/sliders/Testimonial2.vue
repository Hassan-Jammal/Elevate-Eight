<template>
  <section class="testimonial-section pt-130 rpt-90" :class="extraClass">
    <div class="container container-1210">
      <div class="row">
        <div class="col-lg-6">
          <div class="image-border-shape rmb-20 wow fadeInRight delay-0-2s">
            <img
              src="/assets/images/testimonials/testimonials-four.jpg"
              alt="Testimonial Left Image"
            />
            <div class="bottom-border"></div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="testimonial-one-right-part">
            <div class="testimonials-active wow fadeInUp delay-0-2s">
              <Swiper
                :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]"
                :slides-per-view="1"
                :loop="true"
                :autoplay="{
                  delay: 8000,
                  disableOnInteraction: true,
                }"
                :navigation="{
                  nextEl: '.testimonial-next',
                  prevEl: '.testimonial-prev',
                }"
                :pagination="{
                  el: '.t-dot',
                }"
              >
                <SwiperSlide class="testimonial-item">
                  <div class="author-speech">
                    <p>
                      <span class="quote">“</span> On the other hand we denounce
                      with see righteous indignation and dislike men who are
                      beguiled and demoralized by the charms offset pleasure
                      moments line desire that they cannot foresee pain and
                      trouble that are bound ensue and equal blame belongs their
                      duty <span class="quote right-quote">“</span>
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
                      <span class="quote">“</span> On the other hand we denounce
                      with see righteous indignation and dislike men who are
                      beguiled and demoralized by the charms offset pleasure
                      moments line desire that they cannot foresee pain and
                      trouble that are bound ensue and equal blame belongs their
                      duty <span class="quote right-quote">“</span>
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
                      <span class="quote">“</span> On the other hand we denounce
                      with see righteous indignation and dislike men who are
                      beguiled and demoralized by the charms offset pleasure
                      moments line desire that they cannot foresee pain and
                      trouble that are bound ensue and equal blame belongs their
                      duty <span class="quote right-quote">“</span>
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
                      <span class="quote">“</span> On the other hand we denounce
                      with see righteous indignation and dislike men who are
                      beguiled and demoralized by the charms offset pleasure
                      moments line desire that they cannot foresee pain and
                      trouble that are bound ensue and equal blame belongs their
                      duty <span class="quote right-quote">“</span>
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
            <div
              class="testimonial-controls mt-75 rmt-40 wow fadeInUp delay-0-2s"
            >
              <button class="testimonial-prev slick-arrow">
                <i class="far fa-chevron-left"></i>
              </button>
              <div class="testimonial-dots">
                <div class="slick-dots t-dot"></div>
              </div>
              <button class="testimonial-next slick-arrow">
                <i class="far fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Testimonial2",
  props: {
    extraClass: {
      type: String,
      default: "",
    },
  },
};
</script>
