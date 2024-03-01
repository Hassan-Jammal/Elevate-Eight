<template>
  <NuxtLayout name="ygency" :footer="6" :singlePage="true">
    <!-- Hero Section Start -->
    <section class="hero-area-six pt-185 rpt-150 pb-130 rpb-100 rel z-1">
      <div class="container container-1620">
        <div class="hero-six-wrapper">
          <div class="hero-social">
            <a href="#"
              ><i class="fab fa-facebook-f"></i> <span>Facebook</span></a
            >
            <a href="#"><i class="fab fa-twitter"></i> <span>Twitter</span></a>
            <a href="#"
              ><i class="fab fa-dribbble"></i> <span>Dribbble</span></a
            >
            <a href="#"><i class="fab fa-behance"></i> <span>Behance</span></a>
          </div>
          <div class="row no-gap">
            <div class="col-xl-4">
              <div class="left-image">
                <img src="/assets/images/hero/hero-six1.png" alt="Hero" />
              </div>
            </div>
            <div class="col-xl-4">
              <div class="hero-six-content">
                <h1>Creative Digital Agency</h1>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium doloremque laudantium totam aperiam eaque
                </p>
                <NuxtLink href="services" class="theme-btn style-two"
                  >Explore Services <i class="far fa-arrow-right"></i
                ></NuxtLink>
              </div>
            </div>
            <div class="col-xl-4 align-self-end">
              <div class="right-image">
                <img src="/assets/images/hero/hero-six2.png" alt="Hero" />
              </div>
            </div>
          </div>
          <div class="down-arrow">
            <a href="#services"
              >Scroll Down <i class="fal fa-arrow-down"></i
            ></a>
          </div>
        </div>
      </div>
      <div class="bg-lines">
        <span></span><span></span> <span></span><span></span>
      </div>
    </section>
    <!-- Hero Section End -->

    <!-- Services area start -->
    <div id="services" class="services-area-five bgc-primary pt-80 pb-50">
      <div class="container">
        <div class="services-five-wrapper">
          <NuxtLink class="service-five-item" href="service-details">
            <span>Web Design</span>
            <i class="flaticon-star-symbol"></i>
            <div class="image">
              <img
                src="/assets/images/services/service-five.png"
                alt="Service"
              />
            </div>
          </NuxtLink>
          <NuxtLink class="service-five-item" href="service-details">
            <span>Digital Marketing</span>
            <i class="flaticon-star-symbol"></i>
            <div class="image">
              <img
                src="/assets/images/services/service-five.png"
                alt="Service"
              />
            </div>
          </NuxtLink>
          <NuxtLink class="service-five-item" href="service-details">
            <span>Mobile App</span>
            <i class="flaticon-star-symbol"></i>
            <div class="image">
              <img
                src="/assets/images/services/service-five.png"
                alt="Service"
              />
            </div>
          </NuxtLink>
          <NuxtLink class="service-five-item" href="service-details">
            <span>Custom Service</span>
            <i class="flaticon-star-symbol"></i>
            <div class="image">
              <img
                src="/assets/images/services/service-five.png"
                alt="Service"
              />
            </div>
          </NuxtLink>
          <NuxtLink class="service-five-item" href="service-details">
            <span>Web Development</span>
            <i class="flaticon-star-symbol"></i>
            <div class="image">
              <img
                src="/assets/images/services/service-five.png"
                alt="Service"
              />
            </div>
          </NuxtLink>
          <NuxtLink class="service-five-item" href="service-details">
            <span>SEO</span>
            <i class="flaticon-star-symbol"></i>
            <div class="image">
              <img
                src="/assets/images/services/service-five.png"
                alt="Service"
              />
            </div>
          </NuxtLink>
          <NuxtLink class="service-five-item" href="service-details">
            <span>Graphics Design</span>
            <i class="flaticon-star-symbol"></i>
            <div class="image">
              <img
                src="/assets/images/services/service-five.png"
                alt="Service"
              />
            </div>
          </NuxtLink>
          <NuxtLink class="service-five-item" href="service-details">
            <span>3D Animation</span>
            <i class="flaticon-star-symbol"></i>
            <div class="image">
              <img
                src="/assets/images/services/service-five.png"
                alt="Service"
              />
            </div>
          </NuxtLink>
          <NuxtLink class="service-five-item" href="service-details">
            <span>Branding</span>
            <i class="flaticon-star-symbol"></i>
            <div class="image">
              <img
                src="/assets/images/services/service-five.png"
                alt="Service"
              />
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <!-- Services Area end -->

    <!-- About Us Area start -->
    <section class="about-area-six pt-130 rpt-100 pb-80 rpb-50 rel z-1">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-4 col-md-6">
            <div class="about-content-six mb-40 wow fadeInUp delay-0-2s">
              <div class="about-logo mb-50">
                <img
                  src="/assets/images/about/circle-text-six.svg"
                  alt="Logo"
                />
              </div>
              <div class="section-title">
                <span class="sub-title mb-15">About Company</span>
                <h2>Our Main Goal to Satisficed Local & Global Clients</h2>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6">
            <div class="about-image-six mb-50 wow fadeInUp delay-0-4s">
              <img src="/assets/images/about/about-six.jpg" alt="About" />
            </div>
          </div>
          <div class="col-xl-4 col-md-6">
            <div class="about-features mb-50 wow fadeInUp delay-0-4s">
              <div class="feature-six-item">
                <div class="icon">
                  <i class="far fa-rocket-launch"></i>
                </div>
                <div class="content">
                  <h5>Company Mission</h5>
                  <p>
                    Our mission is to empower businesses with cutting-edge
                    digital solutions
                  </p>
                  <NuxtLink class="read-more" href="service-details"
                    ><span>Read More</span> <i class="far fa-arrow-right"></i
                  ></NuxtLink>
                </div>
              </div>
              <div class="feature-six-item">
                <div class="icon">
                  <i class="far fa-bullseye-arrow"></i>
                </div>
                <div class="content">
                  <h5>Company Vision & Goals</h5>
                  <p>
                    We are dedicated to crafting digitals experiences that
                    seamlessly
                  </p>
                  <NuxtLink class="read-more" href="service-details"
                    ><span>Read More</span> <i class="far fa-arrow-right"></i
                  ></NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-lines">
        <span></span><span></span> <span></span><span></span>
      </div>
    </section>
    <!-- About Us Area end -->

    <!-- Services Area start -->
    <section class="services-area-six pb-100 rpb-70 rel z-1">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-6 col-lg-8">
            <div
              class="section-title text-center mb-70 rmb-50 wow fadeInUp delay-0-2s"
            >
              <span class="sub-title mb-15">Popular Services</span>
              <h2>We Provide Amazing Web Design Solutions</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="service-six-item wow fadeInUp delay-0-2s">
              <div class="icon"><i class="fal fa-bezier-curve"></i></div>
              <div class="content">
                <h5>
                  <NuxtLink href="service-details">Website Design</NuxtLink>
                </h5>
                <p>We denounce with righteous indignation</p>
              </div>
              <a class="details-btn" href="#"
                ><i class="far fa-arrow-right"></i
              ></a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="service-six-item wow fadeInUp delay-0-4s">
              <div class="icon"><i class="fal fa-telescope"></i></div>
              <div class="content">
                <h5>
                  <NuxtLink href="service-details">Digital Marketing</NuxtLink>
                </h5>
                <p>We denounce with righteous indignation</p>
              </div>
              <a class="details-btn" href="#"
                ><i class="far fa-arrow-right"></i
              ></a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="service-six-item wow fadeInUp delay-0-2s">
              <div class="icon"><i class="fal fa-telescope"></i></div>
              <div class="content">
                <h5>
                  <NuxtLink href="service-details">Mobile Apps Design</NuxtLink>
                </h5>
                <p>We denounce with righteous indignation</p>
              </div>
              <a class="details-btn" href="#"
                ><i class="far fa-arrow-right"></i
              ></a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="service-six-item wow fadeInUp delay-0-4s">
              <div class="icon"><i class="fal fa-laptop-code"></i></div>
              <div class="content">
                <h5>
                  <NuxtLink href="service-details">Web Development</NuxtLink>
                </h5>
                <p>We denounce with righteous indignation</p>
              </div>
              <a class="details-btn" href="#"
                ><i class="far fa-arrow-right"></i
              ></a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="service-six-item wow fadeInUp delay-0-2s">
              <div class="icon"><i class="fal fa-mail-bulk"></i></div>
              <div class="content">
                <h5>
                  <NuxtLink href="service-details"
                    >Email & Content Marketing</NuxtLink
                  >
                </h5>
                <p>We denounce with righteous indignation</p>
              </div>
              <a class="details-btn" href="#"
                ><i class="far fa-arrow-right"></i
              ></a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="service-six-item wow fadeInUp delay-0-4s">
              <div class="icon"><i class="fal fa-file-contract"></i></div>
              <div class="content">
                <h5>
                  <NuxtLink href="service-details">Design & Branding</NuxtLink>
                </h5>
                <p>We denounce with righteous indignation</p>
              </div>
              <a class="details-btn" href="#"
                ><i class="far fa-arrow-right"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-lines">
        <span></span><span></span> <span></span><span></span>
      </div>
    </section>
    <!-- Services Area end -->

    <!-- Video Area start -->
    <div
      class="video-area-six pt-175 rpt-125 pb-185 rpb-135 bgs-cover"
      style="background-image: url(assets/images/background/video-bg.jpg)"
    >
      <div class="container">
        <div class="video-six-content wow fadeInUp delay-0-2s">
          <span class="video-title mb-20 rmb-0">Co-working</span>
          <div class="row align-items-center justify-content-center">
            <div class="col-xl-3 col-lg-4">
              <div class="text mt-35">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque
              </div>
            </div>
            <div class="col-xl-2 col-lg-3 text-center">
              <a
                href="https://www.youtube.com/embed/9Y7ma241N8k"
                class="mfp-iframe video-play mt-35"
                ><img src="/assets/images/icons/play-icon.png" alt="Play"
              /></a>
            </div>
            <div class="col-xl-3 col-lg-4">
              <span class="video-text text-lg-start text-center mt-35"
                >Video</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Video Area end -->

    <!-- Team Area start -->
    <section class="team-area pt-130 rpt-100 pb-100 rpb-70 rel z-1">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9">
            <div
              class="section-title text-center mb-55 wow fadeInUp delay-0-2s"
            >
              <span class="sub-title mb-20">Team Members</span>
              <h2>Meet Our Professionals Team</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8">
            <div class="team-member style-four wow fadeInUp delay-0-2s">
              <div class="image">
                <img
                  src="/assets/images/team/member-six1.jpg"
                  alt="Team Member"
                />
              </div>
              <div class="content">
                <h5>Patrick V. Schroeder</h5>
                <span>UI/UX Designer</span>
                <div class="team-social">
                  <div class="social-style-two">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                  </div>
                  <button><i class="far fa-plus"></i></button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8">
            <div class="team-member style-four wow fadeInUp delay-0-4s">
              <div class="image">
                <img
                  src="/assets/images/team/member-six2.jpg"
                  alt="Team Member"
                />
              </div>
              <div class="content">
                <h5>Jonathan S. Wilcox</h5>
                <span>Senior Manager</span>
                <div class="team-social">
                  <div class="social-style-two">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                  </div>
                  <button><i class="far fa-plus"></i></button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8">
            <div class="team-member style-four wow fadeInUp delay-0-6s">
              <div class="image">
                <img
                  src="/assets/images/team/member-six3.jpg"
                  alt="Team Member"
                />
              </div>
              <div class="content">
                <h5>Steven G. Seman</h5>
                <span>Web Developer</span>
                <div class="team-social">
                  <div class="social-style-two">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                  </div>
                  <button><i class="far fa-plus"></i></button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8">
            <div class="team-member style-four wow fadeInUp delay-0-8s">
              <div class="image">
                <img
                  src="/assets/images/team/member-six4.jpg"
                  alt="Team Member"
                />
              </div>
              <div class="content">
                <h5>Troy V. Richardson</h5>
                <span>Digital Marketer</span>
                <div class="team-social">
                  <div class="social-style-two">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                  </div>
                  <button><i class="far fa-plus"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-lines">
        <span></span><span></span> <span></span><span></span>
      </div>
    </section>
    <!-- Team Area end -->

    <!-- Why Choose Us start -->
    <section class="demo-area pb-60 rel z-1">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-6 col-lg-8">
            <div class="why-choose-us-content pb-30">
              <div class="section-title mb-60 wow fadeInUp delay-0-2s">
                <span class="sub-title mb-15">Why Choose Us</span>
                <h2>Web Design Company That You Can Trust</h2>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div
                    class="why-choose-item style-three wow fadeInUp delay-0-2s"
                  >
                    <div class="why-choose-header">
                      <i class="far fa-chevron-right"></i>
                      <h5>Competitive rates</h5>
                    </div>
                    <p>
                      We are strategic marketing the have proven programming
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div
                    class="why-choose-item style-three wow fadeInUp delay-0-3s"
                  >
                    <div class="why-choose-header">
                      <i class="far fa-chevron-right"></i>
                      <h5>Premium Development</h5>
                    </div>
                    <p>
                      We are strategic marketing the have proven programming
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div
                    class="why-choose-item style-three wow fadeInUp delay-0-2s"
                  >
                    <div class="why-choose-header">
                      <i class="far fa-chevron-right"></i>
                      <h5>No contracts needed</h5>
                    </div>
                    <p>
                      We are strategic marketing the have proven programming
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div
                    class="why-choose-item style-three wow fadeInUp delay-0-3s"
                  >
                    <div class="why-choose-header">
                      <i class="far fa-chevron-right"></i>
                      <h5>Retina & Flexible</h5>
                    </div>
                    <p>
                      We are strategic marketing the have proven programming
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div
              class="why-choose-right mb-60 style-two style-three wow fadeInLeft delay-0-2s"
            >
              <div class="image-one mb-30">
                <img
                  src="/assets/images/services/why-choose1.jpg"
                  alt="Why Choose"
                />
              </div>
              <div class="image-two">
                <img
                  src="/assets/images/services/why-choose2.jpg"
                  alt="Why Choose"
                />
              </div>
              <div class="why-choose-border-shape"></div>
              <div class="text-shape">
                <img
                  class="text"
                  src="/assets/images/services/web-design-text.svg"
                  alt="Web Design Text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-lines">
        <span></span><span></span> <span></span><span></span>
      </div>
    </section>
    <!-- Why Choose Us end -->

    <!-- Headline area start -->
    <div class="headline-six-wrapper rel z-1 py-60 rpy-30">
      <div class="headline-area-six bgc-primary py-20 rpy-10">
        <div class="container-fluid">
          <div class="headline-wrap-two style-two">
            <span class="marquee-wrap">
              <span class="marquee-inner left">
                <span class="marquee-item"
                  ><i class="flaticon-star-symbol"></i
                  ><b>Digital Marketing</b></span
                >
                <span class="marquee-item"
                  ><i class="flaticon-star-symbol"></i
                  ><b>Product Design</b></span
                >
                <span class="marquee-item"
                  ><i class="flaticon-star-symbol"></i
                  ><b>Mobile Apps Design</b></span
                >
                <span class="marquee-item"
                  ><i class="flaticon-star-symbol"></i
                  ><b>Branding Identity</b></span
                >
                <span class="marquee-item"
                  ><i class="flaticon-star-symbol"></i
                  ><b>Web Optimizations</b></span
                >
                <span class="marquee-item"
                  ><i class="flaticon-star-symbol"></i
                  ><b>Email Marketing</b></span
                >
              </span>
              <span class="marquee-inner left">
                <span class="marquee-item"
                  ><i class="flaticon-star-symbol"></i
                  ><b>Digital Marketing</b></span
                >
                <span class="marquee-item"
                  ><i class="flaticon-star-symbol"></i
                  ><b>Product Design</b></span
                >
                <span class="marquee-item"
                  ><i class="flaticon-star-symbol"></i
                  ><b>Mobile Apps Design</b></span
                >
                <span class="marquee-item"
                  ><i class="flaticon-star-symbol"></i
                  ><b>Branding Identity</b></span
                >
                <span class="marquee-item"
                  ><i class="flaticon-star-symbol"></i
                  ><b>Web Optimizations</b></span
                >
                <span class="marquee-item"
                  ><i class="flaticon-star-symbol"></i
                  ><b>Email Marketing</b></span
                >
              </span>
              <span class="marquee-inner left">
                <span class="marquee-item"
                  ><i class="flaticon-star-symbol"></i
                  ><b>Digital Marketing</b></span
                >
                <span class="marquee-item"
                  ><i class="flaticon-star-symbol"></i
                  ><b>Product Design</b></span
                >
                <span class="marquee-item"
                  ><i class="flaticon-star-symbol"></i
                  ><b>Mobile Apps Design</b></span
                >
                <span class="marquee-item"
                  ><i class="flaticon-star-symbol"></i
                  ><b>Branding Identity</b></span
                >
                <span class="marquee-item"
                  ><i class="flaticon-star-symbol"></i
                  ><b>Web Optimizations</b></span
                >
                <span class="marquee-item"
                  ><i class="flaticon-star-symbol"></i
                  ><b>Email Marketing</b></span
                >
              </span>
            </span>
          </div>
        </div>
      </div>
      <div class="bg-lines">
        <span></span><span></span> <span></span><span></span>
      </div>
    </div>
    <!-- Headline Area end -->

    <!-- Projects Area start -->
    <section class="project-area-six pt-100 rpt-70 rel z-1">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div
              class="section-title text-center mb-60 wow fadeInUp delay-0-2s"
            >
              <span class="sub-title mb-20">Recent Works Gallery</span>
              <h2>Lat’s Look Our Recent Project Gallery</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1">
        <div class="col">
          <div class="project-item style-five wow fadeInUp delay-0-2s">
            <div class="image">
              <img
                src="/assets/images/projects/project-six1.jpg"
                alt="Project"
              />
            </div>
            <div class="content">
              <h4>
                <NuxtLink href="project-details">Product Design</NuxtLink>
              </h4>
              <NuxtLink href="projects" class="category"
                >Design, Branding</NuxtLink
              >
            </div>
          </div>
        </div>
        <div class="col">
          <div class="project-item style-five wow fadeInUp delay-0-3s">
            <div class="image">
              <img
                src="/assets/images/projects/project-six2.jpg"
                alt="Project"
              />
            </div>
            <div class="content">
              <h4>
                <NuxtLink href="project-details">Product Design</NuxtLink>
              </h4>
              <NuxtLink href="projects" class="category"
                >Design, Branding</NuxtLink
              >
            </div>
          </div>
        </div>
        <div class="col">
          <div class="project-item style-five wow fadeInUp delay-0-4s">
            <div class="image">
              <img
                src="/assets/images/projects/project-six3.jpg"
                alt="Project"
              />
            </div>
            <div class="content">
              <h4>
                <NuxtLink href="project-details">Product Design</NuxtLink>
              </h4>
              <NuxtLink href="projects" class="category"
                >Design, Branding</NuxtLink
              >
            </div>
          </div>
        </div>
        <div class="col">
          <div class="project-item style-five wow fadeInUp delay-0-5s">
            <div class="image">
              <img
                src="/assets/images/projects/project-six4.jpg"
                alt="Project"
              />
            </div>
            <div class="content">
              <h4>
                <NuxtLink href="project-details">Product Design</NuxtLink>
              </h4>
              <NuxtLink href="projects" class="category"
                >Design, Branding</NuxtLink
              >
            </div>
          </div>
        </div>
        <div class="col">
          <div class="project-item style-five wow fadeInUp delay-0-6s">
            <div class="image">
              <img
                src="/assets/images/projects/project-six5.jpg"
                alt="Project"
              />
            </div>
            <div class="content">
              <h4>
                <NuxtLink href="project-details">Product Design</NuxtLink>
              </h4>
              <NuxtLink href="projects" class="category"
                >Design, Branding</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
      <div class="bg-lines">
        <span></span><span></span> <span></span><span></span>
      </div>
    </section>
    <!-- Projects Area end -->

    <!-- Statistics Area start -->
    <div class="statistics-area pt-100 rpt-70 pb-70 rpb-40 rel z-1">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-xl-2 col-lg-3 col-6">
            <div class="counter-item counter-text-wrap wow fadeInUp delay-0-2s">
              <i class="fal fa-check-circle"></i>
              <span class="count-text" data-speed="3000" data-stop="25">0</span>
              <span class="counter-title">Years Of Experience</span>
            </div>
          </div>
          <div class="col-xl-2 col-lg-3 col-6">
            <div class="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
              <i class="fal fa-check-circle"></i>
              <span class="count-text k" data-speed="3000" data-stop="3"
                >0</span
              >
              <span class="counter-title">Project’s Complete</span>
            </div>
          </div>
          <div class="col-xl-2 col-lg-3 col-6">
            <div class="counter-item counter-text-wrap wow fadeInUp delay-0-4s">
              <i class="fal fa-check-circle"></i>
              <span class="count-text" data-speed="3000" data-stop="48">0</span>
              <span class="counter-title">Professionals Team Member</span>
            </div>
          </div>
          <div class="col-xl-2 col-lg-3 col-6">
            <div class="counter-item counter-text-wrap wow fadeInUp delay-0-5s">
              <i class="fal fa-check-circle"></i>
              <span class="count-text" data-speed="3000" data-stop="92">0</span>
              <span class="counter-title">Awards Winning</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-lines">
        <span></span><span></span> <span></span><span></span>
      </div>
    </div>
    <!-- Statistics Area end -->

    <!-- Testimonial Area start -->
    <SlidersTestimonial4 />
    <!-- Testimonial Area end -->

    <!-- Blog Style Two start -->
    <section class="blog-area-two pt-125 rpt-100 pb-70 rpb-40 rel z-1">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-7 col-lg-9 col-md-11">
            <div
              class="section-title text-center mb-60 wow fadeInUp delay-0-2s"
            >
              <span class="sub-title mb-20">Blog & News</span>
              <h2>Read Our Latest News & Blog Get Every Updates</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-4 col-md-6">
            <div class="blog-item style-five wow fadeInUp delay-0-2s">
              <div class="image">
                <img src="/assets/images/blog/blog-six1.jpg" alt="Blog" />
              </div>
              <div class="content">
                <ul class="blog-meta">
                  <li>
                    <i class="far fa-calendar-alt"></i>
                    <a href="#">February 18, 2023</a>
                  </li>
                </ul>
                <hr />
                <h5>
                  <NuxtLink href="blog-details"
                    >Voice Skills For Google Assistant And Amazon
                    Alexa</NuxtLink
                  >
                </h5>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6">
            <div class="blog-item style-five wow fadeInUp delay-0-4s">
              <div class="image">
                <img src="/assets/images/blog/blog-six2.jpg" alt="Blog" />
              </div>
              <div class="content">
                <ul class="blog-meta">
                  <li>
                    <i class="far fa-calendar-alt"></i>
                    <a href="#">February 18, 2023</a>
                  </li>
                </ul>
                <hr />
                <h5>
                  <NuxtLink href="blog-details"
                    >Voice Skills For Google Assistant And Amazon
                    Alexa</NuxtLink
                  >
                </h5>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6">
            <div class="blog-item style-five wow fadeInUp delay-0-6s">
              <div class="image">
                <img src="/assets/images/blog/blog-six3.jpg" alt="Blog" />
              </div>
              <div class="content">
                <ul class="blog-meta">
                  <li>
                    <i class="far fa-calendar-alt"></i>
                    <a href="#">February 18, 2023</a>
                  </li>
                </ul>
                <hr />
                <h5>
                  <NuxtLink href="blog-details"
                    >Voice Skills For Google Assistant And Amazon
                    Alexa</NuxtLink
                  >
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-lines">
        <span></span><span></span> <span></span><span></span>
      </div>
    </section>
    <!-- Blog Style Two end -->

    <!-- Client Logo Two start -->
    <div class="client-logo-area pb-90 rpb-70 rel z-1">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-8 col-md-10">
            <div class="section-title mb-60 wow fadeInUp delay-0-2s">
              <span class="sub-title mb-20">Global Clients</span>
              <h2>I’ve 1253+ Global Clients & lot’s of Project Complete</h2>
            </div>
          </div>
        </div>
        <div class="client-logo-wrap-two">
          <NuxtLink
            class="client-logo-item wow fadeInUp delay-0-2s"
            href="contact"
          >
            <img
              src="/assets/images/client-logos/client-logo-six1.png"
              alt="Client Logo"
            />
          </NuxtLink>
          <NuxtLink
            class="client-logo-item wow fadeInUp delay-0-3s"
            href="contact"
          >
            <img
              src="/assets/images/client-logos/client-logo-six2.png"
              alt="Client Logo"
            />
          </NuxtLink>
          <NuxtLink
            class="client-logo-item wow fadeInUp delay-0-4s"
            href="contact"
          >
            <img
              src="/assets/images/client-logos/client-logo-six3.png"
              alt="Client Logo"
            />
          </NuxtLink>
          <NuxtLink
            class="client-logo-item wow fadeInUp delay-0-5s"
            href="contact"
          >
            <img
              src="/assets/images/client-logos/client-logo-six4.png"
              alt="Client Logo"
            />
          </NuxtLink>
          <NuxtLink
            class="client-logo-item wow fadeInUp delay-0-6s"
            href="contact"
          >
            <img
              src="/assets/images/client-logos/client-logo-six5.png"
              alt="Client Logo"
            />
          </NuxtLink>
          <NuxtLink
            class="client-logo-item wow fadeInUp delay-0-2s"
            href="contact"
          >
            <img
              src="/assets/images/client-logos/client-logo-six6.png"
              alt="Client Logo"
            />
          </NuxtLink>
          <NuxtLink
            class="client-logo-item wow fadeInUp delay-0-3s"
            href="contact"
          >
            <img
              src="/assets/images/client-logos/client-logo-six7.png"
              alt="Client Logo"
            />
          </NuxtLink>
          <NuxtLink
            class="client-logo-item wow fadeInUp delay-0-4s"
            href="contact"
          >
            <img
              src="/assets/images/client-logos/client-logo-six8.png"
              alt="Client Logo"
            />
          </NuxtLink>
          <NuxtLink
            class="client-logo-item wow fadeInUp delay-0-5s"
            href="contact"
          >
            <img
              src="/assets/images/client-logos/client-logo-six9.png"
              alt="Client Logo"
            />
          </NuxtLink>
          <NuxtLink
            class="client-logo-item wow fadeInUp delay-0-6s"
            href="contact"
          >
            <img
              src="/assets/images/client-logos/client-logo-six10.png"
              alt="Client Logo"
            />
          </NuxtLink>
        </div>
      </div>
      <div class="bg-lines">
        <span></span><span></span> <span></span><span></span>
      </div>
    </div>
  </NuxtLayout>
</template>

<script>
import { ygencyUtilits } from "~/utilits";

export default {
  name: "index6",
  mounted() {
    ygencyUtilits.counterUp();
  },
};
</script>
