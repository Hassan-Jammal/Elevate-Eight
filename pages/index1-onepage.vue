<template>
  <NuxtLayout name="ygency" :header="1" :footer="1" :singlePage="true">
    <!-- Hero Section Start -->
    <section class="hero-area pt-185 rpt-150 rel z-1">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="hero-content wow fadeInLeft delay-0-2s">
              <h1>Web <span>Design</span> <i>Agency</i></h1>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="hero-right-image mt-20 wow fadeInUp delay-0-4s">
              <img src="/assets/images/hero/hero-right.png" alt="Hero" />
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="hero-bottom-image">
          <img src="/assets/images/hero/hero.jpg" alt="Hero" />
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
        </div>
      </div>
      <div class="hero-bg">
        <img src="/assets/images/hero/hero-bg.png" alt="lines" />
      </div>
    </section>
    <!-- Hero Section End -->

    <!-- About Us Area start -->
    <section class="about-area pt-130 rpt-100 rel z-1">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-xl-5 col-lg-3">
            <div class="about-image rmb-45 wow fadeInUp delay-0-2s">
              <img
                src="/assets/images/about/circle-text.svg"
                alt="Circle Text"
              />
            </div>
          </div>
          <div class="col-xl-7 col-lg-9">
            <div class="about-content wow fadeInUp delay-0-4s">
              <div class="section-title mb-40">
                <span class="sub-title mb-15">About Company</span>
                <h2>Our Main Goal to Satisficed Local & Global Clients</h2>
              </div>
              <div class="content">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam aperiam eaque quae
                  abillo inventore veritatisey et quasi architecto beatae vitae
                  dictasunt explicabo voluptatem.
                </p>
                <NuxtLink class="read-more mt-10" href="about"
                  >Read More <i class="far fa-arrow-right"></i
                ></NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- About Us Area end -->

    <!-- Headline area start -->
    <div class="headline-area pt-90 rpt-85 rel z-1">
      <div class="container-fluid">
        <div class="headline-text marquee">
          <span>Web <span>Design</span> Agency</span>
        </div>
      </div>
    </div>
    <!-- Headline Area end -->

    <!-- What We Do start -->
    <section class="what-we-do-area pt-90 rpt-80 rel z-1">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-xl-5 col-lg-8">
            <div class="what-we-do-content mb-55">
              <div class="section-title mb-60 wow fadeInUp delay-0-2s">
                <span class="sub-title mb-15">What We Do</span>
                <h2>Latest Way to Get Web Solutions & Business Growth</h2>
              </div>
              <div class="what-we-do-item wow fadeInUp delay-0-3s">
                <div class="number">
                  <span>01</span>
                </div>
                <div class="content">
                  <h5>Mobile Solutions</h5>
                  <p>
                    Sed ut perspiciatis unde omnis natus error voluptatem
                    accusantium doloremque
                  </p>
                  <NuxtLink class="read-more style-two" href="service-details"
                    ><span>Read More</span> <i class="far fa-arrow-right"></i
                  ></NuxtLink>
                </div>
              </div>
              <div class="what-we-do-item wow fadeInUp delay-0-5s">
                <div class="number">
                  <span>02</span>
                </div>
                <div class="content">
                  <h5>Web Solutions</h5>
                  <p>
                    Quis autem veleum iure reprehe nderitecy quie voluptate
                    velit esse quam nihile
                  </p>
                  <NuxtLink class="read-more style-two" href="service-details"
                    ><span>Read More</span> <i class="far fa-arrow-right"></i
                  ></NuxtLink>
                </div>
              </div>
              <div class="what-we-do-item wow fadeInUp delay-0-7s">
                <div class="number">
                  <span>03</span>
                </div>
                <div class="content">
                  <h5>Custome Solutions</h5>
                  <p>
                    We denounce with righteous indignation and dislike beguiled
                    demoralized charms
                  </p>
                  <NuxtLink class="read-more style-two" href="service-details"
                    ><span>Read More</span> <i class="far fa-arrow-right"></i
                  ></NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="what-we-do-image mb-55 wow fadeInRight delay-0-2s">
              <img
                src="/assets/images/services/what-we-do.jpg"
                alt="What We Do"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- What We Do end -->

    <!-- Statistics Area start -->
    <div class="statistics-area pt-75 rpt-45 rel z-1">
      <div class="container">
        <CountersCounter />
      </div>
    </div>
    <!-- Statistics Area end -->

    <!-- Service Style Three start -->
    <section class="service-three-area pt-70 rpt-40 rel z-1">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7">
            <div
              class="section-title text-center mb-60 wow fadeInUp delay-0-2s"
            >
              <span class="sub-title mb-20">Popular Services</span>
              <h2>We Provide Amazing Web Design Solutions</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="service-three-item wow fadeInUp delay-0-2s">
              <div class="title-icon">
                <h5>
                  <NuxtLink href="service-details"
                    >Web Design From Figma</NuxtLink
                  >
                </h5>
                <img src="/assets/images/services/icon1.png" alt="Icon" />
              </div>
              <div class="content">
                <p>We denounce with righteous indignation dislike beguile</p>
                <NuxtLink class="read-more style-two" href="service-details"
                  ><span>Read More</span> <i class="far fa-arrow-right"></i
                ></NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="service-three-item wow fadeInDown delay-0-2s">
              <div class="title-icon">
                <h5>
                  <NuxtLink href="service-details"
                    >PSD, Figma, XD to HTML Convert</NuxtLink
                  >
                </h5>
                <img src="/assets/images/services/icon2.png" alt="Icon" />
              </div>
              <div class="content">
                <p>At vero eos et accusamus et dignissim ducimbl ditiis</p>
                <NuxtLink class="read-more style-two" href="service-details"
                  ><span>Read More</span> <i class="far fa-arrow-right"></i
                ></NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="service-three-item wow fadeInUp delay-0-2s">
              <div class="title-icon">
                <h5>
                  <NuxtLink href="service-details"
                    >WordPress Development</NuxtLink
                  >
                </h5>
                <img src="/assets/images/services/icon3.png" alt="Icon" />
              </div>
              <div class="content">
                <p>To take trivial example which ever undertakes laborious</p>
                <NuxtLink class="read-more style-two" href="service-details"
                  ><span>Read More</span> <i class="far fa-arrow-right"></i
                ></NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="service-three-item wow fadeInDown delay-0-2s">
              <div class="title-icon">
                <h5>
                  <NuxtLink href="service-details">React Development</NuxtLink>
                </h5>
                <img src="/assets/images/services/icon4.png" alt="Icon" />
              </div>
              <div class="content">
                <p>Sed persiciatis unde omnisey natus error voluptatem</p>
                <NuxtLink class="read-more style-two" href="service-details"
                  ><span>Read More</span> <i class="far fa-arrow-right"></i
                ></NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Service Style Three end -->

    <!-- Headline area start -->
    <div class="headline-area pt-65 rpt-60 rel z-1">
      <div class="container-fluid">
        <div class="headline-text marquee">
          <span><span>Digital</span> solutions</span>
        </div>
      </div>
    </div>
    <!-- Headline Area end -->

    <!-- Project Timeline Area start -->
    <section class="project-timeline-area pt-90 rpt-75 rel z-1">
      <div class="container container-1290">
        <div class="row justify-content-between align-items-center pb-25">
          <div class="col-xl-6 col-lg-8">
            <div class="section-title mb-30 wow fadeInLeft delay-0-2s">
              <span class="sub-title mb-15">Recent Works Gallery</span>
              <h2>Lat’s Look Our Recent Project Gallery</h2>
            </div>
          </div>
          <div class="col-lg-4 text-lg-end">
            <NuxtLink
              href="projects"
              class="theme-btn mb-25 wow fadeInRight delay-0-2s"
              >View More Projects <i class="far fa-arrow-right"></i
            ></NuxtLink>
          </div>
        </div>

        <div class="project-timeline wow fadeInUp delay-0-2s">
          <div class="content">
            <span class="serial-number">01</span>
            <h4>
              <NuxtLink href="project-details"
                >Business Task Management Dashboard Design</NuxtLink
              >
            </h4>
          </div>
          <div class="image">
            <img
              src="/assets/images/projects/project-timeline1.jpg"
              alt="Project TimeLine Image"
            />
          </div>
          <div class="right-btn">
            <NuxtLink class="details-btn" href="project-details"
              ><i class="fal fa-long-arrow-right"></i
            ></NuxtLink>
          </div>
        </div>
        <div class="project-timeline wow fadeInUp delay-0-2s">
          <div class="content">
            <span class="serial-number">02</span>
            <h4>
              <NuxtLink href="project-details"
                >PSD, Figma & XD to HTML Design & Development</NuxtLink
              >
            </h4>
          </div>
          <div class="image">
            <img
              src="/assets/images/projects/project-timeline2.jpg"
              alt="Project TimeLine Image"
            />
          </div>
          <div class="right-btn">
            <NuxtLink class="details-btn" href="project-details"
              ><i class="fal fa-long-arrow-right"></i
            ></NuxtLink>
          </div>
        </div>
        <div class="project-timeline wow fadeInUp delay-0-2s">
          <div class="content">
            <span class="serial-number">03</span>
            <h4>
              <NuxtLink href="project-details"
                >Mobile Application Design & Development</NuxtLink
              >
            </h4>
          </div>
          <div class="image">
            <img
              src="/assets/images/projects/project-timeline3.jpg"
              alt="Project TimeLine Image"
            />
          </div>
          <div class="right-btn">
            <NuxtLink class="details-btn" href="project-details"
              ><i class="fal fa-long-arrow-right"></i
            ></NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <!-- Project Timeline Area end -->

    <!-- Team Area start -->
    <section class="team-area pt-70 rpt-40">
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
      <div class="container-fluid">
        <div
          class="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center"
        >
          <div class="col">
            <div class="team-member wow fadeInUp delay-0-2s">
              <div class="image">
                <img src="/assets/images/team/member1.jpg" alt="Team Member" />
              </div>
              <div class="content">
                <h4>Patrick V. Schroeder</h4>
                <span>UI/UX Designer</span>
                <NuxtLink class="read-more" href="team-details"
                  ><i class="far fa-arrow-right"></i
                ></NuxtLink>
              </div>
              <div class="btn-social">
                <NuxtLink class="read-more" href="team-details"
                  ><span>View Details</span> <i class="far fa-arrow-right"></i
                ></NuxtLink>
                <div class="social-style-two">
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                  <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="team-member wow fadeInUp delay-0-3s">
              <div class="image">
                <img src="/assets/images/team/member2.jpg" alt="Team Member" />
              </div>
              <div class="content">
                <h4>Michael A. Braun</h4>
                <span>UI/UX Designer</span>
                <NuxtLink class="read-more" href="team-details"
                  ><i class="far fa-arrow-right"></i
                ></NuxtLink>
              </div>
              <div class="btn-social">
                <NuxtLink class="read-more" href="team-details"
                  ><span>View Details</span> <i class="far fa-arrow-right"></i
                ></NuxtLink>
                <div class="social-style-two">
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                  <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="team-member wow fadeInUp delay-0-4s">
              <div class="image">
                <img src="/assets/images/team/member3.jpg" alt="Team Member" />
              </div>
              <div class="content">
                <h4>James V. Decastro</h4>
                <span>Senior Marketer</span>
                <NuxtLink class="read-more" href="team-details"
                  ><i class="far fa-arrow-right"></i
                ></NuxtLink>
              </div>
              <div class="btn-social">
                <NuxtLink class="read-more" href="team-details"
                  ><span>View Details</span> <i class="far fa-arrow-right"></i
                ></NuxtLink>
                <div class="social-style-two">
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                  <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="team-member wow fadeInUp delay-0-5s">
              <div class="image">
                <img src="/assets/images/team/member4.jpg" alt="Team Member" />
              </div>
              <div class="content">
                <h4>Troy V. Richardson</h4>
                <span>Web Designer</span>
                <NuxtLink class="read-more" href="team-details"
                  ><i class="far fa-arrow-right"></i
                ></NuxtLink>
              </div>
              <div class="btn-social">
                <NuxtLink class="read-more" href="team-details"
                  ><span>View Details</span> <i class="far fa-arrow-right"></i
                ></NuxtLink>
                <div class="social-style-two">
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                  <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="team-member wow fadeInUp delay-0-6s">
              <div class="image">
                <img src="/assets/images/team/member5.jpg" alt="Team Member" />
              </div>
              <div class="content">
                <h4>Michael A. Braun</h4>
                <span>Apps Designer</span>
                <NuxtLink class="read-more" href="team-details"
                  ><i class="far fa-arrow-right"></i
                ></NuxtLink>
              </div>
              <div class="btn-social">
                <NuxtLink class="read-more" href="team-details"
                  ><span>View Details</span> <i class="far fa-arrow-right"></i
                ></NuxtLink>
                <div class="social-style-two">
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                  <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Team Area end -->

    <!-- Headline area start -->
    <div class="headline-area pt-65 rpt-55 rel z-1">
      <div class="container-fluid">
        <div class="headline-text marquee">
          <span>pricing <span>Package</span></span>
        </div>
      </div>
    </div>
    <!-- Headline Area end -->

    <!-- Pricing style three start -->
    <section class="pricing-area-three pt-85">
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
          <div class="col-xl-4 col-md-6 wow fadeInUp delay-0-2s">
            <div
              class="pricing-banner"
              style="
                background-image: url(assets/images/background/pricing-banner-bg.jpg);
              "
            >
              <span class="join-us">Join With Us</span>
              <h4>Amazing Pricing For Growth Business</h4>
              <NuxtLink class="details-btn" href="pricing"
                ><i class="far fa-arrow-right"></i
              ></NuxtLink>
              <div class="hand-shape">
                <img
                  src="/assets/images/shapes/pricing-banner-hand-shape.png"
                  alt="Pricing Banner Shape"
                />
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 wow fadeInUp delay-0-4s">
            <div
              class="pricing-plan-item style-three"
              style="
                background-image: url(assets/images/shapes/pricing-plan-bg.png);
              "
            >
              <div class="icon-title">
                <div class="icon">
                  <img src="/assets/images/icons/price.svg" alt="Icon" />
                </div>
                <h5>Monthly Package</h5>
              </div>
              <p>
                We denounce with righteous indignation dislike beguiled and
                demoralize
              </p>
              <ul class="list-style-one">
                <li>Landing Page Design</li>
                <li>Web Development</li>
                <li>SEO Optimizations</li>
                <li>Mobile Applications Design</li>
                <li>Quality Assurance</li>
                <li>Customs Services</li>
              </ul>
              <div class="price-offer">
                <span class="price-text"
                  ><span class="before">$</span
                  ><span class="price">18.3</span></span
                >
                <img src="/assets/images/shapes/right-arrow.png" alt="Arrow" />
                <span class="offer-text">Save 15%</span>
              </div>
              <NuxtLink href="pricing" class="theme-btn w-100"
                >Choose Package <i class="far fa-arrow-right"></i
              ></NuxtLink>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 wow fadeInUp delay-0-6s">
            <div
              class="pricing-plan-item style-three"
              style="
                background-image: url(assets/images/shapes/pricing-plan-bg.png);
              "
            >
              <div class="icon-title">
                <div class="icon">
                  <img src="/assets/images/icons/price.svg" alt="Icon" />
                </div>
                <h5>Yearly Package</h5>
              </div>
              <p>
                We denounce with righteous indignation dislike beguiled and
                demoralize
              </p>
              <ul class="list-style-one">
                <li>Landing Page Design</li>
                <li>Web Development</li>
                <li>SEO Optimizations</li>
                <li>Mobile Applications Design</li>
                <li>Quality Assurance</li>
                <li>Customs Services</li>
              </ul>
              <div class="price-offer">
                <span class="price-text"
                  ><span class="before">$</span
                  ><span class="price">18.3</span></span
                >
                <img src="/assets/images/shapes/right-arrow.png" alt="Arrow" />
                <span class="offer-text">Save 15%</span>
              </div>
              <NuxtLink href="pricing" class="theme-btn w-100"
                >Choose Package <i class="far fa-arrow-right"></i
              ></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Pricing style three end -->

    <!-- Why Choose Us Area start -->
    <section class="why-choose-area pt-90 rpt-60 rel z-1">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-7">
            <div class="why-choose-left-image mb-40 wow fadeInLeft delay-0-2s">
              <img
                src="/assets/images/services/why-choose-left.jpg"
                alt="Why Choose Left Image"
              />
            </div>
          </div>
          <div class="col-xl-5">
            <div class="why-choose-two-wrap">
              <div class="section-title mb-55 wow fadeInUp delay-0-2s">
                <span class="sub-title mb-15">Why Choose Us</span>
                <h2>We Provide Services In One Places</h2>
              </div>
              <div class="why-choose-item-two wow fadeInUp delay-0-3s">
                <div class="icon">
                  <i class="fas fa-check"></i>
                  <span class="icon-bottom-shape"></span>
                </div>
                <div class="content">
                  <h4>
                    <NuxtLink href="service-details"
                      >Competitive Rates</NuxtLink
                    >
                  </h4>
                  <p>
                    We denounce with righteous indignation and dislike beguiled
                    demoralized charms
                  </p>
                </div>
              </div>
              <div class="why-choose-item-two wow fadeInUp delay-0-5s">
                <div class="icon">
                  <i class="fas fa-check"></i>
                  <span class="icon-bottom-shape"></span>
                </div>
                <div class="content">
                  <h4>
                    <NuxtLink href="service-details"
                      >No Contracts Needed</NuxtLink
                    >
                  </h4>
                  <p>
                    To take trivial example, which eundertakes laborious
                    physical exercise except
                  </p>
                </div>
              </div>
              <div class="why-choose-item-two wow fadeInUp delay-0-7s">
                <div class="icon">
                  <i class="fas fa-check"></i>
                </div>
                <div class="content">
                  <h4>
                    <NuxtLink href="service-details"
                      >Powerful Terminal Lines</NuxtLink
                    >
                  </h4>
                  <p>
                    At vero eos et accusamus eto dignissimos duc blanditiis
                    praesentium volupta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Why Choose Us Area end -->

    <!-- Headline area start -->
    <div class="headline-area pt-60 rpt-50 rel z-1">
      <div class="container-fluid">
        <div class="headline-text marquee">
          <span><span>clients</span> Say’s</span>
        </div>
      </div>
    </div>
    <!-- Headline Area end -->

    <!-- Testimonial Area start -->
    <SlidersTestimonial />
    <!-- Testimonial Area end -->

    <!-- Blog Style Two start -->
    <section class="blog-area-two pt-125 rpt-100 pb-70 rpb-40">
      <div class="container container-1290">
        <div class="row justify-content-center">
          <div class="col-xl-8 col-lg-10">
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
            <div class="blog-item wow fadeInUp delay-0-2s">
              <div class="image">
                <img src="/assets/images/blog/blog1.jpg" alt="Blog" />
              </div>
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
              <hr />
              <h4>
                <NuxtLink href="blog-details"
                  >Voice Skills For Google Assistant And Amazon Alexa</NuxtLink
                >
              </h4>
              <NuxtLink class="read-more" href="blog-details"
                >Read More <i class="far fa-arrow-right"></i
              ></NuxtLink>
            </div>
          </div>
          <div class="col-xl-4 col-md-6">
            <div class="blog-item wow fadeInUp delay-0-4s">
              <div class="image">
                <img src="/assets/images/blog/blog2.jpg" alt="Blog" />
              </div>
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
              <hr />
              <h4>
                <NuxtLink href="blog-details"
                  >Inclusive Design And Accessibility Stream Heydon
                  Pickering</NuxtLink
                >
              </h4>
              <NuxtLink class="read-more" href="blog-details"
                >Read More <i class="far fa-arrow-right"></i
              ></NuxtLink>
            </div>
          </div>
          <div class="col-xl-4 col-md-6">
            <div class="blog-item wow fadeInUp delay-0-6s">
              <div class="image">
                <img src="/assets/images/blog/blog3.jpg" alt="Blog" />
              </div>
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
              <hr />
              <h4>
                <NuxtLink href="blog-details"
                  >Creating Online Environments The Work Well For Older
                  Users</NuxtLink
                >
              </h4>
              <NuxtLink class="read-more" href="blog-details"
                >Read More <i class="far fa-arrow-right"></i
              ></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Blog Style Two end -->
  </NuxtLayout>
</template>

<script>
import { ygencyUtilits } from "~/utilits";

export default {
  name: "index",
  mounted() {
    ygencyUtilits.counterUp();
  },
};
</script>

<script setup>
definePageMeta({
  layout: false,
});
</script>
