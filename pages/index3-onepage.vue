<template>
  <NuxtLayout name="ygency" :header="2" :footer="3" :singlePage="true">
    <!-- Hero Section Start -->
    <section class="hero-area-three pt-250 rpt-115 rel z-1">
      <div class="container rel z-1">
        <div class="row pt-35">
          <div class="col-lg-8">
            <div class="hero-three-content wow fadeInLeft delay-0-2s">
              <h1>Design & <i>creativity</i></h1>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                emey accusantium doloremque laudantium totam aperiam
              </p>
              <NuxtLink class="read-more" href="contact"
                >Get Stated <i class="far fa-arrow-right"></i
              ></NuxtLink>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 mx-lg-auto">
            <div class="hero-three-image mt-50 wow fadeInRight delay-0-2s">
              <img src="/assets/images/hero/hero-three.jpg" alt="Hero" />
            </div>
          </div>
        </div>
        <div class="hero-three-shape">
          <img src="/assets/images/hero/hero-three-shape.png" alt="Shape" />
        </div>
      </div>
    </section>
    <!-- Hero Section End -->

    <!-- Headline area start -->
    <div class="headline-area pt-110 rpt-85 rel z-1">
      <div class="container-fluid">
        <div class="headline-text marquee pb-20 style-two">
          <span><span>Creative Design Studio</span></span>
        </div>
      </div>
    </div>
    <!-- Headline Area end -->

    <!-- About Us Area start -->
    <section class="about-area-three pt-120 rpt-80 rel z-1">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-lg-10">
            <div
              class="section-title style-two mb-85 rmb-55 wow fadeInUp delay-0-2s"
            >
              <span class="sub-title mb-15">About Agency</span>
              <h2>
                We are Awards Winning & Affordable Website Design and
                Development agency Based on <i>New Work City</i>
              </h2>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-xl-5 col-lg-6 align-self-center">
            <div class="about-three-image rmb-55 wow fadeInLeft delay-0-2s">
              <img
                src="/assets/images/about/about-three.jpg"
                alt="Circle Text"
              />
            </div>
          </div>
          <div class="col-xl-4 col-lg-5 offset-xl-1">
            <div class="about-three-content wow fadeInRight delay-0-2s">
              <img
                src="/assets/images/about/circle-text.svg"
                alt="Circle Text"
              />
              <h4>Agency <i>Mission</i></h4>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sitesy
                voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis architecto beatae
                vitae dicta sunt explicabo
              </p>
              <NuxtLink class="theme-btn style-two mt-35" href="about"
                >Learn More <i class="far fa-arrow-right"></i
              ></NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="about-three-shapes">
        <span class="year">1990</span>
        <img
          class="shape leaf"
          src="/assets/images/about/leaf.png"
          alt="Leaf"
        />
      </div>
    </section>
    <!-- About Us Area end -->

    <!-- What We Provide start -->
    <section class="what-we-provide-area pt-130 rpt-100 rel z-1">
      <div class="container container-1290">
        <div class="row justify-content-center">
          <div class="col-xl-7 col-lg-9 wow fadeInUp delay-0-2s">
            <div class="section-title style-two text-center mb-70">
              <span class="sub-title mb-15">What We Provide</span>
              <h2>Quality Service For Growth Your Branding <i>Identity</i></h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-4 col-md-6">
            <div class="we-provide-item wow fadeInUp delay-0-2s">
              <span class="serial-number">01</span>
              <h3>
                <NuxtLink href="service-details"
                  >Digital Product <span>Design</span></NuxtLink
                >
              </h3>
              <p>
                Sed perspiciatis unde omnis natus error sitesy voluptatem
                accusantium doloremque laudantium totam
              </p>
              <div class="tags">
                <NuxtLink href="services">Website</NuxtLink>
                <NuxtLink href="services">Graphics</NuxtLink>
                <NuxtLink href="services">Logo</NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6">
            <div class="we-provide-item wow fadeInUp delay-0-4s">
              <span class="serial-number">02</span>
              <h3>
                <NuxtLink href="service-details"
                  >Graphics Design & <span>Branding</span></NuxtLink
                >
              </h3>
              <p>
                Quis autem vel eum repreh enderit eui in ea voluptate velit esse
                quame nihil molestiae consequature
              </p>
              <div class="tags">
                <NuxtLink href="services">Website</NuxtLink>
                <NuxtLink href="services">Graphics</NuxtLink>
                <NuxtLink href="services">Logo</NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6">
            <div class="we-provide-item wow fadeInUp delay-0-6s">
              <span class="serial-number">03</span>
              <h3>
                <NuxtLink href="service-details"
                  >Digital Product <span>Development</span></NuxtLink
                >
              </h3>
              <p>
                At vero eos et accusamus et iustoe odioe dignissimos ducimus
                blanditiis praesentium voluptatum delenite
              </p>
              <div class="tags">
                <NuxtLink href="services">Apps</NuxtLink>
                <NuxtLink href="services">Website</NuxtLink>
                <NuxtLink href="services">Graphics</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- What We Provide end -->

    <!-- Project Slider Area start -->
    <SlidersGallery />
    <!-- Project Slider Area end -->

    <!-- Headline area start -->
    <div class="headline-area rel z-1 move-top">
      <div class="container-fluid">
        <div class="headline-text marquee pb-20 style-two">
          <span><span>Our Popular Projects</span></span>
        </div>
      </div>
    </div>
    <!-- Headline Area end -->

    <!-- Work Process Area start -->
    <section class="work-process-three-area pt-115 rpt-80 rel z-1">
      <div class="container container-1290">
        <div class="row justify-content-center pb-45 rpb-25">
          <div class="col-xl-8 col-lg-10">
            <div
              class="section-title style-two text-center mb-25 wow fadeInUp delay-0-2s"
            >
              <span class="sub-title mb-15">Working Process</span>
              <h2>Simple Step Follow To Complete Work, <i>How It Work</i></h2>
            </div>
          </div>
        </div>
        <div class="row gap-70">
          <div class="col-xl-3 col-md-6">
            <div class="work-step-item style-three wow fadeInUp delay-0-2s">
              <span class="step-number">Step 01</span>
              <h4 class="title">Idea Generate</h4>
              <div class="content">
                <p>Vero eos et accusamus iusto odio disimos</p>
              </div>
              <div class="image">
                <img
                  src="/assets/images/about/work-step-image1.jpg"
                  alt="Work Step Image"
                />
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div class="work-step-item bg-shape-none wow fadeInUp delay-0-3s">
              <span class="step-number">Step 02</span>
              <h4 class="title">Plan & Design</h4>
              <div class="content">
                <p>Quis autems eum iures reprehen voluptate</p>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div class="work-step-item style-three wow fadeInUp delay-0-4s">
              <span class="step-number">Step 03</span>
              <h4 class="title">Project Testing</h4>
              <div class="content">
                <p>To take example which ever undertakes</p>
              </div>
              <div class="image">
                <img
                  src="/assets/images/about/work-step-image1.jpg"
                  alt="Work Step Image"
                />
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div
              class="work-step-item bg-shape-none arrow-none wow fadeInUp delay-0-5s"
            >
              <span class="step-number">Step 04</span>
              <h4 class="title">Got Results</h4>
              <div class="content">
                <p>Avoids paine produces resultant pleasure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Work Process Area end -->

    <!-- Video Area start -->
    <section class="video-area pt-100 rpt-70 rel z-1">
      <div class="container-fluid">
        <div class="row gap-60 align-items-center">
          <div class="col-xl-9">
            <div class="video-part mb-55 wow fadeInLeft delay-0-2s">
              <img src="/assets/images/video/video-bg.jpg" alt="Video" />
              <a
                href="https://www.youtube.com/embed/9Y7ma241N8k"
                class="mfp-iframe video-play"
                ><i class="fas fa-play"></i
              ></a>
              <span class="bg-text">Videos</span>
            </div>
          </div>
          <div class="col-xl-3">
            <div
              class="video-content-part mb-55 rel z-3 wow fadeInRight delay-0-2s"
            >
              <div class="section-title mb-45">
                <h2>
                  We design and develop outstanding Digital Products and
                  digital-<i>first Brands.</i>
                </h2>
              </div>
              <p>
                Unde omnis iste natus sitesy voluptat accusantium doloremue
                laudantiu totey rem aperiam eaque abillo inventore
              </p>
              <NuxtLink class="read-more mt-25" href="about"
                >Learn More Us <i class="far fa-arrow-right"></i
              ></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Video Area end -->

    <!-- Statistics Area start -->
    <section class="statistics-area-two pt-75 rpt-45 rel z-1">
      <div class="container container-1290">
        <div class="row justify-content-center pb-45 rpb-25">
          <div class="col-xl-7 col-lg-9">
            <div
              class="section-title style-two text-center mb-25 wow fadeInUp delay-0-2s"
            >
              <span class="sub-title mb-15">Agency Fun Fact</span>
              <h2>Great Achievement For Our Global <i>Contributions</i></h2>
            </div>
          </div>
        </div>
        <div class="row no-gap justify-content-between">
          <div class="col-xl-3 col-sm-6">
            <div
              class="counter-item style-two bordered-top counter-text-wrap wow fadeInUp delay-0-2s"
            >
              <i class="fal fa-check-circle"></i>
              <span class="count-text" data-speed="3000" data-stop="25">0</span>
              <span class="counter-title">Years Of Experience</span>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6">
            <div
              class="counter-item style-two bordered-bottom counter-text-wrap wow fadeInUp delay-0-3s"
            >
              <i class="fal fa-check-circle"></i>
              <span class="count-text k" data-speed="3000" data-stop="3"
                >0</span
              >
              <span class="counter-title">Project’s Complete</span>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6">
            <div
              class="counter-item style-two bordered-top counter-text-wrap wow fadeInUp delay-0-4s"
            >
              <i class="fal fa-check-circle"></i>
              <span class="count-text" data-speed="3000" data-stop="48">0</span>
              <span class="counter-title">Professionals Team Member</span>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6">
            <div
              class="counter-item style-two bordered-bottom bordered-right counter-text-wrap wow fadeInUp delay-0-5s"
            >
              <i class="fal fa-check-circle"></i>
              <span class="count-text" data-speed="3000" data-stop="92">0</span>
              <span class="counter-title">Awards Winning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Statistics Area end -->

    <!-- Pricing style three start -->
    <section class="pricing-area-three pt-80 rpt-50">
      <div class="container container-1290">
        <div class="row justify-content-center">
          <div class="col-xl-8 col-lg-10">
            <div
              class="section-title style-two text-center mb-60 wow fadeInUp delay-0-2s"
            >
              <span class="sub-title mb-20">Pricing Package</span>
              <h2>Best Pricing Package For All Web Design <i>Solutions</i></h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="pricing-plan-item style-two wow fadeInUp delay-0-2s">
              <div class="icon-title-price">
                <div class="icon">
                  <i class="flaticon-abstract"></i>
                </div>
                <div class="right-part">
                  <h5>Regular Package</h5>
                  <span class="price-text"
                    ><span class="before">$</span
                    ><span class="price">18.3</span>
                    <span class="after">/per month</span></span
                  >
                </div>
              </div>
              <ul class="list-style-one two-column">
                <li>Website Design</li>
                <li>Mobile Applications</li>
                <li>Web Development</li>
                <li>Quality Assurance</li>
                <li>SEO Optimizations</li>
                <li>Customs Services</li>
              </ul>
              <NuxtLink href="pricing" class="theme-btn w-100"
                >Choose Package <i class="far fa-arrow-right"></i
              ></NuxtLink>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="pricing-plan-item style-two wow fadeInUp delay-0-4s">
              <span class="badge">
                <i class="fas fa-star-of-life"></i>
                <i class="fas fa-star-of-life"></i>
                popular package
                <i class="fas fa-star-of-life"></i>
                <i class="fas fa-star-of-life"></i>
              </span>
              <div class="icon-title-price">
                <div class="icon">
                  <i class="flaticon-liquid"></i>
                </div>
                <div class="right-part">
                  <h5>Premium Package</h5>
                  <span class="price-text"
                    ><span class="before">$</span
                    ><span class="price">98.3</span>
                    <span class="after">/per month</span></span
                  >
                </div>
              </div>
              <ul class="list-style-one two-column">
                <li>Website Design</li>
                <li>Mobile Applications</li>
                <li>Web Development</li>
                <li>Quality Assurance</li>
                <li>SEO Optimizations</li>
                <li>Customs Services</li>
              </ul>
              <NuxtLink href="pricing" class="theme-btn w-100"
                >Choose Package <i class="far fa-arrow-right"></i
              ></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Pricing style three end -->

    <!-- Headline area start -->
    <div class="headline-area pt-60 rpt-45 rel z-1">
      <div class="container-fluid">
        <div class="headline-text marquee pb-20 style-two">
          <span><span>What Customer Say</span></span>
        </div>
      </div>
    </div>
    <!-- Headline Area end -->

    <!-- Testimonial Two Area start -->
    <SlidersTestimonial3 />
    <!-- Testimonial Two Area end -->

    <!-- Blog Area start -->
    <section class="blog-area-two pt-130 rpt-100">
      <div class="container">
        <div class="row justify-content-between align-items-end pb-40 rpb-25">
          <div class="col-xl-7 col-lg-8">
            <div
              class="section-title style-two mb-25 wow fadeInRight delay-0-2s"
            >
              <span class="sub-title mb-15">Blog & News</span>
              <h2>Read Our Latest News & Blog Get Every <i>Updates</i></h2>
            </div>
          </div>
          <div class="col-lg-4 mb-35 text-lg-end wow fadeInLeft delay-0-2s">
            <NuxtLink href="blog" class="theme-btn"
              >View More News <i class="far fa-arrow-right"></i
            ></NuxtLink>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-4 col-md-6">
            <div class="blog-item style-two wow fadeInUp delay-0-2s">
              <div class="tags">
                <NuxtLink href="blog">Website</NuxtLink>
                <NuxtLink href="blog">Graphics</NuxtLink>
                <NuxtLink href="blog">Logo</NuxtLink>
                <NuxtLink class="more" href="blog-details"
                  ><i class="far fa-arrow-right"></i
                ></NuxtLink>
              </div>
              <div class="image">
                <img src="/assets/images/blog/blog10.jpg" alt="Blog" />
              </div>
              <h4>
                <NuxtLink href="blog-details"
                  >Voice Skills For Google Assistant And Amazon Alexa</NuxtLink
                >
              </h4>
              <hr />
              <ul class="blog-meta">
                <li>
                  <i class="far fa-calendar-alt"></i>
                  <a href="#">February 18, 2023</a>
                </li>
                <li>
                  <i class="far fa-comments"></i>
                  <a href="#">Comment (5)</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-4 col-md-6">
            <div class="blog-item style-two wow fadeInUp delay-0-4s">
              <div class="tags">
                <NuxtLink href="blog">Website</NuxtLink>
                <NuxtLink href="blog">Graphics</NuxtLink>
                <NuxtLink href="blog">Logo</NuxtLink>
                <NuxtLink class="more" href="blog-details"
                  ><i class="far fa-arrow-right"></i
                ></NuxtLink>
              </div>
              <div class="image">
                <img src="/assets/images/blog/blog11.jpg" alt="Blog" />
              </div>
              <h4>
                <NuxtLink href="blog-details"
                  >Inclusive Design And Accessibility Live Stream Heydon
                  Pickering</NuxtLink
                >
              </h4>
              <hr />
              <ul class="blog-meta">
                <li>
                  <i class="far fa-calendar-alt"></i>
                  <a href="#">February 18, 2023</a>
                </li>
                <li>
                  <i class="far fa-comments"></i>
                  <a href="#">Comment (5)</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-4 col-md-6">
            <div class="blog-item style-two wow fadeInUp delay-0-6s">
              <div class="tags">
                <NuxtLink href="blog">Website</NuxtLink>
                <NuxtLink href="blog">Graphics</NuxtLink>
                <NuxtLink href="blog">Logo</NuxtLink>
                <NuxtLink class="more" href="blog-details"
                  ><i class="far fa-arrow-right"></i
                ></NuxtLink>
              </div>
              <div class="image">
                <img src="/assets/images/blog/blog12.jpg" alt="Blog" />
              </div>
              <h4>
                <NuxtLink href="blog-details"
                  >Creating Online Environments The Work Well For Older
                  Users</NuxtLink
                >
              </h4>
              <hr />
              <ul class="blog-meta">
                <li>
                  <i class="far fa-calendar-alt"></i>
                  <a href="#">February 18, 2023</a>
                </li>
                <li>
                  <i class="far fa-comments"></i>
                  <a href="#">Comment (5)</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Blog Area end -->

    <!-- Work With Area start -->
    <section class="work-with-area pt-70 rpt-40 rel z-1">
      <div class="container">
        <div class="row justify-content-center pb-45 rpb-25">
          <div class="col-xl-7 col-lg-9">
            <div
              class="section-title style-two text-center mb-25 wow fadeInUp delay-0-2s"
            >
              <span class="sub-title mb-15">Work With Us</span>
              <h2>
                Have Any Projects On Minds! Feel Free to <i>Contact Us</i>
              </h2>
              <NuxtLink href="contact" class="theme-btn style-two mt-35"
                >Let’s Work Together <i class="far fa-arrow-right"></i
              ></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Work With Area end -->

    <!-- Headline area start -->
    <div class="headline-area rel z-1 move-top pb-120 rpb-80">
      <div class="container-fluid">
        <div class="headline-text marquee pb-20 style-two">
          <span><span>Let’s Work Together</span></span>
        </div>
      </div>
    </div>
    <!-- Headline Area end -->
  </NuxtLayout>
</template>

<script>
import { ygencyUtilits } from "~/utilits";

export default {
  name: "index3",
  mounted() {
    ygencyUtilits.counterUp();
  },
};
</script>
