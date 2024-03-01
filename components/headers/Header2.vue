<template>
  <header class="main-header menu-absolute">
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

          <div class="nav-outer ms-lg-auto clearfix">
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
                  <li><a href="#about">about</a></li>
                  <li><a href="#services">services</a></li>
                  <li><a href="#projects">project</a></li>
                  <li><a href="#video">video</a></li>
                  <li><a href="#pricing">pricing</a></li>
                  <li><a href="#news">news</a></li>
                </ul>
                <HeadersNav v-else />
              </div>
            </nav>
            <!-- Main Menu End-->
          </div>

          <!-- Nav Search -->
          <HeadersSearch />

          <!-- Menu Button -->
          <div class="menu-btns ms-lg-auto">
            <NuxtLink href="/contact" class="theme-btn style-two me-4"
              >Let’s Talk <i class="far fa-arrow-right"></i
            ></NuxtLink>
            <!-- menu sidbar -->
            <div class="menu-sidebar">
              <button class="bg-transparent" @click="toggleSidebar()">
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
  name: "Header2",
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
