<template>
  <footer class="main-footer footer-five pt-100">
    <div class="container container-1290 pb-40">
      <div class="row justify-content-between">
        <div class="col-lg-4">
          <div class="footer-widget footer-about wow fadeInUp delay-0-2s">
            <div class="footer-logo mb-25">
              <NuxtLink href="/"
                ><img src="/assets/images/logos/logo.png" alt="Logo"
              /></NuxtLink>
            </div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error voluptatem
              accusantium totam reme
            </p>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="footer-widget footer-info wow fadeInUp delay-0-4s">
            <ul class="list-style-two">
              <li>
                <i class="far fa-envelope"></i>
                <a href="mailto:support@gmail.com">support@gmail.com</a>
              </li>
              <li>
                <i class="far fa-phone"></i>
                <a href="callto:+000(123)45688">+000 (123) 456 88</a>
              </li>
              <li>
                <i class="far fa-clock"></i>
                <span>Monday - Friday, 10am - 5pm</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="footer-widget newsletter-widget wow fadeInUp delay-0-6s">
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
    </div>
    <div class="copyright-area pt-25 pb-15">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="footer-copyright-text wow fadeInUp delay-0-2s">
              <p>
                Copyright @{{ new Date().getFullYear() }},
                <NuxtLink href="/">Ygency</NuxtLink> All Rights Reserved
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div
              class="footer-bottom-menu text-lg-end wow fadeInRight delay-0-2s"
            >
              <ul>
                <li><NuxtLink href="/">Home</NuxtLink></li>
                <li><NuxtLink href="about">About</NuxtLink></li>
                <li><NuxtLink href="services">Services</NuxtLink></li>
                <li><NuxtLink href="about">Career ?</NuxtLink></li>
                <li><NuxtLink href="faqs">Faqs</NuxtLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer5",
};
</script>
