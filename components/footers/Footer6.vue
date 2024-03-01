<template>
  <footer class="main-footer footer-six pt-80">
    <div class="container">
      <div class="row gap-80 justify-content-between">
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="footer-widget newsletter-widget wow fadeInUp delay-0-2s">
            <div class="footer-logo mb-20">
              <NuxtLink href="/"
                ><img src="/assets/images/logos/footer-logo.png" alt="Logo"
              /></NuxtLink>
            </div>
            <div class="text mb-25">
              Ut enim ad minima veniam nostrum exercitationem ullam corporise
            </div>
            <form @submit.prevent="" class="footer-newsletter" action="#">
              <input type="email" placeholder="Email Address" required />
              <button type="submit">
                <i class="far fa-long-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-3 col-6">
          <div class="footer-widget footer-links wow fadeInUp delay-0-3s">
            <h5 class="footer-title">Products</h5>
            <div class="footer-widget widget_nav_menu">
              <ul class="list-style-two">
                <li><a href="#">Spectra</a></li>
                <li><a href="#">MemberPress</a></li>
                <li><a href="#">WPforms</a></li>
                <li><a href="#">AIOSEO</a></li>
                <li><a href="#">Wordfence</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-3 col-6">
          <div class="footer-widget footer-links wow fadeInUp delay-0-4s">
            <h5 class="footer-title">Resources</h5>
            <div class="footer-widget widget_nav_menu">
              <ul class="list-style-two">
                <li><a href="#">About Us</a></li>
                <li><a href="#">My account</a></li>
                <li><a href="#">Themes</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Checkout</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-lg-3 col-sm-6">
          <div class="footer-widget footer-links wow fadeInUp delay-0-5s">
            <h5 class="footer-title">Supports</h5>
            <div class="footer-widget widget_nav_menu">
              <ul class="list-style-two">
                <li><a href="#">Terms of Services</a></li>
                <li><a href="#">Support Ticket</a></li>
                <li><a href="#">Refund Policy</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Video Tutorials</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-sm-6">
          <div class="footer-widget footer-info wow fadeInUp delay-0-6s">
            <h5 class="footer-title">Contact</h5>
            <ul class="list-style-two">
              <li>
                <i class="far fa-map-marker-alt"></i>
                <span>Baird House, 15-17 St Cross StLondon EC1N 8UW</span>
              </li>
              <li>
                <i class="far fa-envelope"></i>
                <a href="mailto:support@gmail.com">support@gmail.com</a>
              </li>
              <li>
                <i class="far fa-phone"></i>
                <a href="callto:+000(123)45688">+000 (123) 456 88</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="copyright-area rel mt-25 pt-35 pb-25">
        <div class="row">
          <div class="col-lg-6">
            <div class="footer-copyright-text wow fadeInUp delay-0-2s">
              <p>
                Copyright @{{ new Date().getFullYear() }},
                <a href="index.html">Ygency</a> All Rights Reserved
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div
              class="footer-bottom-social text-lg-end wow fadeInRight delay-0-2s"
            >
              <div class="social-style-two">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-pinterest-p"></i></a>
              </div>
            </div>
          </div>
        </div>
        <!--  -->
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer6",
};
</script>
