<template>
  <footer
    class="main-footer footer-four pt-100 rel bgs-cover z-1"
    style="
      background-image: url(assets/images/footer/footer-bg-shape-three.png);
    "
  >
    <div class="container container-1290 pb-40">
      <div class="row justify-content-between">
        <div class="col-lg-5">
          <div class="footer-widget footer-about wow fadeInUp delay-0-2s">
            <div class="section-title mb-30">
              <h2>Awards Winning Web Developer</h2>
            </div>
            <ul class="social-style-four">
              <li><NuxtLink href="/">Home</NuxtLink></li>
              <li><NuxtLink href="about">About</NuxtLink></li>
              <li><NuxtLink href="services">Services</NuxtLink></li>
              <li><a href="#">Career ?</a></li>
              <li><NuxtLink href="faqs">FAQs</NuxtLink></li>
            </ul>
          </div>
        </div>
        <div class="col-xl-2 col-lg-3 col-sm-4">
          <div class="footer-widget footer-links wow fadeInUp delay-0-4s">
            <h5 class="footer-title">Follow Me</h5>
            <div class="footer-widget widget_nav_menu">
              <ul class="list-style-two">
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-8">
          <div class="footer-widget newsletter-widget wow fadeInUp delay-0-6s">
            <h5 class="footer-title">Newsletter</h5>
            <form @submit.prevent="" class="footer-newsletter" action="#">
              <input type="email" placeholder="Email Address" required />
              <button type="submit"><i class="fas fa-arrow-right"></i></button>
            </form>
            <div class="footer-logo pt-15">
              <NuxtLink href="/"
                ><img src="/assets/images/logos/footer-logo.png" alt="Logo"
              /></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright-area text-center pt-25 pb-15 wow fadeInUp delay-0-2s">
      <div class="container">
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
  name: "Footer4",
};
</script>
