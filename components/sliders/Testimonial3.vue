<template>
  <section class="testimonials-two-area pt-70 rpt-50">
    <div class="container">
      <div class="testimonial-two-part">
        <div class="circle-text text-center mb-75">
          <img
            src="/assets/images/testimonials/circle-text.png"
            alt="Circle Text"
          />
        </div>
        <div class="testimonials-two-active">
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
              el: '.t2-dot',
            }"
          >
            <SwiperSlide class="testimonial-item style-two">
              <div class="author-speech">
                <p>
                  <span class="quote">“</span> On the other hand we denounce
                  with righteous indignation and dislike men beguiled
                  demoralized charms offset pleasure moments line desire that
                  they cannot foresee pain and trouble that boon<span
                    class="quote right-quote"
                    >“</span
                  >
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
            <SwiperSlide class="testimonial-item style-two">
              <div class="author-speech">
                <p>
                  <span class="quote">“</span> On the other hand we denounce
                  with righteous indignation and dislike men beguiled
                  demoralized charms offset pleasure moments line desire that
                  they cannot foresee pain and trouble that boon
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
            <SwiperSlide class="testimonial-item style-two">
              <div class="author-speech">
                <p>
                  <span class="quote">“</span> On the other hand we denounce
                  with righteous indignation and dislike men beguiled
                  demoralized charms offset pleasure moments line desire that
                  they cannot foresee pain and trouble that boon
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
            <SwiperSlide class="testimonial-item style-two">
              <div class="author-speech">
                <p>
                  <span class="quote">“</span> On the other hand we denounce
                  with righteous indignation and dislike men beguiled
                  demoralized charms offset pleasure moments line desire that
                  they cannot foresee pain and trouble that boon
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
                </div></div></SwiperSlide
          ></Swiper>
        </div>
        <div class="testimonial-controls justify-content-center mt-100 rmt-50">
          <div class="testimonial-two-dots">
            <div class="slick-dots t2-dot"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Testimonial3",
};
</script>
