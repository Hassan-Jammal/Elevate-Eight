<template>
  <NuxtLayout name="ygency">
    <PageBanner :pageName="'Pricing Plan'" />
    <!-- Why Choose start -->
    <section class="why-choose-area pt-130 rpt-100 pb-100 rpb-70">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-5">
            <div class="row">
              <div class="col-xl-11">
                <div
                  class="why-choose-left-content mb-30 rmb-55 wow fadeInLeft delay-0-2s"
                >
                  <div class="section-title mb-50">
                    <span class="sub-title mb-15">Why Choose Us</span>
                    <h2>Benefit Of Working With Us</h2>
                  </div>
                  <h5>Company Mission</h5>
                  <p>
                    On the other hand we denounce with righteous indignation
                    dislike men who are so beguiled and demoralized
                  </p>
                  <br />
                  <h5>Company Vision</h5>
                  <p>
                    Desire that they cannot foresee the pain and trouble that
                    are bound to ensue; and equal blame belongs
                  </p>
                  <NuxtLink class="theme-btn style-two mt-35" href="about"
                    >Learn More <i class="far fa-arrow-right"></i
                  ></NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-7">
            <div class="row">
              <div class="col-md-6">
                <div class="service-item wow fadeInRight delay-0-2s">
                  <div class="icon">
                    <i class="fal fa-bezier-curve"></i>
                  </div>
                  <h5>
                    <NuxtLink href="service-details"
                      >Ontime meeting <br />with experts</NuxtLink
                    >
                  </h5>
                  <p>
                    We denounce with righteous indignatio dislike men who are
                    beguiled and demoralized
                  </p>
                </div>
                <div class="service-item wow fadeInRight delay-0-3s">
                  <div class="icon">
                    <i class="fal fa-cogs"></i>
                  </div>
                  <h5>
                    <NuxtLink href="service-details"
                      >Quality check by <br />expert members</NuxtLink
                    >
                  </h5>
                  <p>
                    Quis autem veleum voluptate velit quam mole conse quatur
                    veillum qui dolorem eum
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="service-item mt-30 wow fadeInRight delay-0-4s">
                  <div class="icon">
                    <i class="fal fa-chart-pie"></i>
                  </div>
                  <h5>
                    <NuxtLink href="service-details"
                      >Detailed report <br />submission</NuxtLink
                    >
                  </h5>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimo ducimus
                    qui blanditiis praesentium
                  </p>
                </div>
                <div class="service-item wow fadeInRight delay-0-5s">
                  <div class="icon">
                    <i class="fal fa-shield-cross"></i>
                  </div>
                  <h5>
                    <NuxtLink href="service-details"
                      >Filtering projects <br />for mass tax</NuxtLink
                    >
                  </h5>
                  <p>
                    To take trivial example which ever under laborious physical
                    exercise to advantage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Why Choose end -->

    <!-- Pricing style three start -->
    <section
      class="pricing-area-three pb-85 rpb-55"
      style="
        background-image: url(assets/images/background/pricing-bg-dot-shape.png);
      "
    >
      <div class="container container-1290">
        <div class="row justify-content-center">
          <div class="col-xl-8 col-lg-10">
            <div
              class="section-title text-center mb-60 wow fadeInUp delay-0-2s"
            >
              <span class="sub-title mb-20">Pricing Package</span>
              <h2>Best Pricing Package For All Web Design Solutions</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-4 col-md-6">
            <div class="pricing-plan-item wow fadeInUp delay-0-2s">
              <div class="icon">
                <i class="flaticon-abstract"></i>
              </div>
              <h5>Regular Package</h5>
              <span class="price-text"
                ><span class="before">$</span><span class="price">18.3</span>
                <span class="after">/per month</span></span
              >
              <ul class="list-style-one">
                <li>Landing Page Design</li>
                <li>Web Development</li>
                <li>SEO Optimizations</li>
                <li>Mobile Applications Design</li>
                <li>Quality Assurance</li>
                <li>Customs Services</li>
              </ul>
              <NuxtLink href="pricing" class="theme-btn w-100"
                >Choose Package <i class="far fa-arrow-right"></i
              ></NuxtLink>
            </div>
          </div>
          <div class="col-xl-4 col-md-6">
            <div class="pricing-plan-item wow fadeInUp delay-0-4s">
              <span class="badge">
                <i class="fas fa-star-of-life"></i>
                <i class="fas fa-star-of-life"></i>
                popular package
                <i class="fas fa-star-of-life"></i>
                <i class="fas fa-star-of-life"></i>
              </span>
              <div class="icon">
                <i class="flaticon-liquid"></i>
              </div>
              <h5>Silver Package</h5>
              <span class="price-text"
                ><span class="before">$</span><span class="price">49.3</span>
                <span class="after">/per month</span></span
              >
              <ul class="list-style-one">
                <li>Landing Page Design</li>
                <li>Web Development</li>
                <li>SEO Optimizations</li>
                <li>Mobile Applications Design</li>
                <li>Quality Assurance</li>
                <li>Customs Services</li>
              </ul>
              <NuxtLink href="pricing" class="theme-btn w-100"
                >Choose Package <i class="far fa-arrow-right"></i
              ></NuxtLink>
            </div>
          </div>
          <div class="col-xl-4 col-md-6">
            <div class="pricing-plan-item wow fadeInUp delay-0-6s">
              <div class="icon">
                <i class="flaticon-petals"></i>
              </div>
              <h5>Golden Package</h5>
              <span class="price-text"
                ><span class="before">$</span><span class="price">98.3</span>
                <span class="after">/per month</span></span
              >
              <ul class="list-style-one">
                <li>Landing Page Design</li>
                <li>Web Development</li>
                <li>SEO Optimizations</li>
                <li>Mobile Applications Design</li>
                <li>Quality Assurance</li>
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
    <div class="headline-area bgc-primary pt-80 pb-65">
      <div class="container-fluid">
        <div class="headline-wrap marquee">
          <span>
            <span class="marquee-item">
              <i class="fas fa-star-of-life"></i>
              <b>Design & Branding</b>
            </span>
            <span class="marquee-item">
              <i class="fas fa-star-of-life"></i>
              <b>Web Development</b>
            </span>
            <span class="marquee-item">
              <i class="fas fa-star-of-life"></i>
              <b>Mobile Apps</b>
            </span>
            <span class="marquee-item">
              <i class="fas fa-star-of-life"></i>
              <b>Design & Branding</b>
            </span>
            <span class="marquee-item">
              <i class="fas fa-star-of-life"></i>
              <b>Web Development</b>
            </span>
            <span class="marquee-item">
              <i class="fas fa-star-of-life"></i>
              <b>Mobile Apps</b>
            </span>
            <span class="marquee-item">
              <i class="fas fa-star-of-life"></i>
              <b>Design & Branding</b>
            </span>
            <span class="marquee-item">
              <i class="fas fa-star-of-life"></i>
              <b>Web Development</b>
            </span>
            <span class="marquee-item">
              <i class="fas fa-star-of-life"></i>
              <b>Mobile Apps</b>
            </span>
          </span>
        </div>
      </div>
    </div>
    <!-- Headline Area end -->

    <!-- Pricing start -->
    <section class="pricing-plan-area pt-130 rpt-100 pb-90 rpb-60 rel z-1">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-7 col-lg-9">
            <div
              class="section-title text-center mb-75 wow fadeInUp delay-0-2s"
            >
              <span class="sub-title mb-15">Pricing Package</span>
              <h2>Best Pricing Package For All Web Design Solutions</h2>
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
    <!-- Pricing end -->

    <!-- Work With Area start -->
    <section class="work-with-area pb-150 rpb-145 rel z-1">
      <div class="container">
        <div class="row justify-content-center pb-45 rpb-25">
          <div class="col-xl-7 col-lg-9">
            <div class="section-title text-center wow fadeInUp delay-0-2s">
              <span class="sub-title mb-15">Work With Us</span>
              <h2>Have Any Projects On Minds! Feel Free to Contact Us</h2>
              <NuxtLink class="explore-more text-start mt-30" href="contact"
                ><i class="fas fa-arrow-right"></i>
                <span>Explore more</span></NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
      <span class="big-text light-opacity">Let’s Work Together</span>
    </section>
    <!-- Work With Area end -->
  </NuxtLayout>
</template>

<script>
export default {
  name: "pricing",
};
</script>
