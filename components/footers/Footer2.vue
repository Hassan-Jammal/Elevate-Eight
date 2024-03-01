<template>
  <footer
    class="main-footer footer-two pt-100 pb-50 rpb-20 rel z-1"
    style="background-image: url(assets/images/footer/footer-bg-shape.png)"
  >
    <div class="container container-1290">
      <div class="row gp-100 pb-20 align-items-center justify-content-between">
        <div class="col-xl-6 col-lg-7">
          <div class="footer-left-title mb-35 wow fadeInLeft delay-0-2s">
            Get Ready to Build Your Website
          </div>
        </div>
        <div
          class="col-lg-5 col-sm-7 col-6 col-small wow fadeInRight delay-0-2s"
        >
          <div class="footer-right-btn mb-35 text-lg-end">
            <NuxtLink class="explore-more text-start" href="contact"
              ><i class="fas fa-arrow-right"></i>
              <span>Send Us Message</span></NuxtLink
            >
          </div>
        </div>
        <div class="col-lg-3 col-6 col-small order-lg-3">
          <div class="footer-widget footer-text wow fadeInUp delay-0-4s">
            <h5 class="footer-title">Get In Touch</h5>
            <div class="text">
              <p>55 Main Street, 2nd block Malborne, Australia</p>
              <a href="mailto:support@gmail.com">support@gmail.com</a><br />
              <a href="callto:+000(123)45688">+000 (123) 456 88</a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 order-lg-4 col-sm-6">
          <div class="footer-widget footer-links wow fadeInUp delay-0-6s">
            <h5 class="footer-title">Links</h5>
            <div class="footer-widget widget_nav_menu">
              <ul class="list-style-two">
                <li><NuxtLink href="/">Home</NuxtLink></li>
                <li><NuxtLink href="about">About</NuxtLink></li>
                <li><NuxtLink href="services">Services</NuxtLink></li>
                <li><NuxtLink href="contact">Career ?</NuxtLink></li>
                <li><NuxtLink href="faqs">FAQs</NuxtLink></li>
              </ul>
              <ul class="list-style-two">
                <li><NuxtLink href="about">Setting</NuxtLink></li>
                <li><NuxtLink href="about">Privacy Policy</NuxtLink></li>
                <li><NuxtLink href="contact">Contact Us</NuxtLink></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-5 me-auto order-lg-2 align-self-center">
          <div class="footer-widget newsletter-widget wow fadeInUp delay-0-2s">
            <form @submit.prevent="" class="footer-newsletter" action="#">
              <input type="email" placeholder="Email Address" required />
              <button type="submit"><i class="fas fa-arrow-right"></i></button>
            </form>
            <p>
              Copyright @{{ new Date().getFullYear() }},
              <NuxtLink href="/">Ygency</NuxtLink> All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer2",
};
</script>
