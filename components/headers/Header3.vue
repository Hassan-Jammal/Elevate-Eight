<template>
  <header class="main-header menu-absolute header-two">
    <div class="header-top bgc-primary">
      <div class="container container-1620">
        <div class="row align-items-center">
          <div class="col-lg-7">
            <ul class="top-left">
              <li>
                <i class="far fa-map-marker-alt"></i> 963 main Street,
                Melbourne, Australia
              </li>
              <li><i class="far fa-clock"></i> Monday - Friday, 10am - 5pm</li>
            </ul>
          </div>
          <div class="col-lg-5">
            <div class="top-right">
              <div class="lang-select">
                <select name="language" id="language">
                  <option value="English">English</option>
                  <option value="Arabic">Arabic</option>
                  <option value="Bangla">Bangla</option>
                  <option value="Hindi">Hindi</option>
                </select>
              </div>
              <div class="social-style-two">
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-pinterest-p"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Header-Upper-->
    <div class="header-upper">
      <div class="container container-1620 clearfix">
        <div class="header-inner rpy-10 rel d-flex align-items-center">
          <div class="logo-outer">
            <div class="logo">
              <NuxtLink href="/"
                ><img
                  src="/assets/images/logos/logo.png"
                  alt="Logo"
                  title="Logo"
              /></NuxtLink>
            </div>
          </div>

          <div class="nav-outer mx-lg-auto clearfix">
            <!-- Main Menu -->
            <nav class="main-menu navbar-expand-lg">
              <div class="navbar-header py-10">
                <div class="mobile-logo">
                  <NuxtLink href="/">
                    <img
                      src="/assets/images/logos/logo.png"
                      alt="Logo"
                      title="Logo"
                    />
                  </NuxtLink>
                </div>

                <!-- Toggle Button -->
                <button
                  type="button"
                  class="navbar-toggle"
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse"
                >
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>

              <div class="navbar-collapse collapse clearfix">
                <ul
                  class="navigation onepage clearfix"
                  v-if="singlePage == true"
                >
                  <li><a href="#home">Home</a></li>
                  <li><a href="#services">services</a></li>
                  <li><a href="#about">about</a></li>
                  <li><a href="#projects">project</a></li>
                  <li><a href="#team">team</a></li>
                  <li><a href="#blog">blog</a></li>
                </ul>
                <HeadersNav v-else />
              </div>
            </nav>
            <!-- Main Menu End-->
          </div>

          <!-- Nav Search -->
          <HeadersSearch />

          <!-- Menu Button -->
          <div class="menu-btns">
            <button><i class="far fa-shopping-basket"></i></button>

            <div class="call-anytime">
              <div class="icon"><i class="fas fa-comments-alt"></i></div>
              <div class="content">
                <span>Call Anytime</span>
                <a href="callto:985236425288">98 523 642 5288</a>
              </div>
            </div>

            <!-- menu sidbar -->
            <div class="menu-sidebar">
              <button @click="toggleSidebar()">
                <img
                  src="/assets/images/icons/toggler-white.svg"
                  alt="Toggler"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--End Header Upper-->
  </header>
  <HeadersSidebar />
</template>

<script>
export default {
  name: "Header3",
  props: {
    singlePage: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleSidebar() {
      document.querySelector("body").classList.add("side-content-visible");
    },
  },
};
</script>
