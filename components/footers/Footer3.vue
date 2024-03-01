<template>
  <footer
    class="main-footer footer-three rel bgs-cover z-1"
    style="background-image: url(assets/images/footer/footer-bg-shape-two.png)"
  >
    <div class="container container-1290">
      <div class="footer-top-two pt-95 pb-55">
        <div class="row align-items-center">
          <div class="col-lg-4">
            <div class="footer-logo mb-20 wow fadeInRight delay-0-2s">
              <NuxtLink href="/"
                ><img src="/assets/images/logos/footer-logo.png" alt="Logo"
              /></NuxtLink>
            </div>
          </div>
          <div class="col-lg-8 text-lg-end">
            <div class="social-style-four mb-20 wow fadeInLeft delay-0-2s">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Dribbble</a>
              <a href="#">Behance</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-between">
        <div class="col-lg-3 col-7 col-small">
          <div class="footer-widget footer-text wow fadeInUp delay-0-2s">
            <h5 class="footer-title">Get In Touch</h5>
            <div class="text">
              <p>55 Main Street, 2nd block Malborne, Australia</p>
              <a href="mailto:support@gmail.com">support@gmail.com</a><br />
              <a href="callto:+000(123)45688">+000 (123) 456 88</a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-5 col-small">
          <div class="footer-widget footer-links wow fadeInUp delay-0-4s">
            <h5 class="footer-title">Menu</h5>
            <div class="footer-widget widget_nav_menu">
              <ul class="list-style-two">
                <li><NuxtLink href="/">Home</NuxtLink></li>
                <li><NuxtLink href="about">About</NuxtLink></li>
                <li><NuxtLink href="services">Services</NuxtLink></li>
                <li><NuxtLink href="contact">Career ?</NuxtLink></li>
                <li><NuxtLink href="faqs">FAQs</NuxtLink></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="footer-widget newsletter-widget wow fadeInUp delay-0-6s">
            <h5 class="footer-title">Newsletter</h5>
            <form @submit.prevent="" class="footer-newsletter" action="#">
              <input type="email" placeholder="Email Address" required />
              <button type="submit"><i class="fas fa-arrow-right"></i></button>
            </form>
            <div class="policy">
              <input id="privacy-policy" type="checkbox" />
              <label for="privacy-policy"
                >I agree to the
                <NuxtLink href="about">Privacy Policy</NuxtLink></label
              >
            </div>
          </div>
        </div>
      </div>
      <div
        class="copyright-area text-center pt-10 pb-80 wow fadeInUp delay-0-2s"
      >
        <p>
          Copyright @{{ new Date().getFullYear() }},
          <NuxtLink href="/">Ygency</NuxtLink> All Rights Reserved
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer3",
};
</script>
