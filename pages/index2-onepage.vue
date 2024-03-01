<template>
  <NuxtLayout name="ygency" :footer="2" :singlePage="true">
    <!-- Hero Section Start -->
    <section
      class="hero-area-two pt-220 rpt-150 pb-80 rpb-50 rel z-1"
      style="background-image: url(assets/images/hero/hero-two-bg.png)"
    >
      <div class="container">
        <h1 class="hero-title mb-100 rmb-50 wow fadeInUp delay-0-2s">
          Website
          <span class="arrow"
            ><img
              class="wow fadeInLeft delay-0-6s"
              src="/assets/images/hero/title-arrow.png"
              alt="Arrow"
          /></span>
          Develop Agency
        </h1>
        <div class="row align-items-center justify-content-between">
          <div class="col-xl-3 col-lg-4">
            <div class="hero-two-content mb-50 wow fadeInRight delay-0-2s">
              <p>
                Sed ut perspiciatis unde omnis iste natus error voluptatem
                accusantium doloremque laudantium totam reme aperiam eaque
                abillo inventore
              </p>
              <img
                class="mt-20"
                src="/assets/images/hero/arrow.png"
                alt="Arrow"
              />
              <div class="authors-text mt-45">
                <img src="/assets/images/hero/author1.png" alt="Author" />
                <img src="/assets/images/hero/author2.png" alt="Author" />
                <img src="/assets/images/hero/author3.png" alt="Author" />
                <img src="/assets/images/hero/author4.png" alt="Author" />
                <i class="fal fa-plus"></i>
                <span class="text">100+ Popular Clients</span>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="hero-two-image mb-50 wow zoomIn delay-0-2s">
              <img src="/assets/images/hero/hero-two.jpg" alt="Hero" />
            </div>
          </div>
          <div class="col-lg-2">
            <div class="hero-two-btn mb-50 wow fadeInLeft delay-0-2s">
              <NuxtLink class="explore-more" href="about"
                ><i class="fas fa-arrow-right"></i>
                <span>Explore more</span></NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Hero Section End -->

    <!-- Advertise Area Start -->
    <section class="advertise-banner-area rel z-1">
      <div class="container container-1290">
        <div class="row">
          <div class="col-lg-7 wow fadeInUp delay-0-2s">
            <div
              class="advertise-banner style-one bgc-primary"
              style="
                background-image: url(assets/images/banner/add-banner-bg.png);
              "
            >
              <div class="image">
                <img src="/assets/images/banner/add-banner.png" alt="Banner" />
              </div>
              <div class="content mt-20">
                <span class="number">150+</span>
                <h6>Project Complete</h6>
                <hr />
                <p>Quis autem vel eum reprehe voluptate velit esse quam</p>
              </div>
            </div>
          </div>
          <div class="col-lg-5 wow fadeInUp delay-0-4s">
            <div
              class="advertise-banner style-two bg-white"
              style="
                background-image: url(assets/images/banner/star-vector.png);
              "
            >
              <h3>Innovative Web Development Solutions</h3>
              <hr class="mb-35" />
              <div class="authors-text">
                <img src="/assets/images/hero/author1.png" alt="Author" />
                <img src="/assets/images/hero/author2.png" alt="Author" />
                <img src="/assets/images/hero/author3.png" alt="Author" />
                <img src="/assets/images/hero/author4.png" alt="Author" />
                <i class="fal fa-plus"></i>
                <span class="text"
                  >We denounce indignatione dislike mende charms</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Advertise Area End -->

    <!-- Skills Area Start -->
    <section class="skills-area pt-100 rpt-70 rel z-1">
      <div class="container container-1590">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div
              class="section-title text-center mb-60 wow fadeInUp delay-0-2s"
            >
              <h2>Here are Numerous Topics That Will Enhance Your Skills</h2>
            </div>
          </div>
        </div>
        <div class="skills-wrap">
          <div class="skill-item">
            <img src="/assets/images/skills/skill1.png" alt="Skill Icon" />
            <span class="text">Bootstrap</span>
          </div>
          <div class="skill-item">
            <img src="/assets/images/skills/skill2.png" alt="Skill Icon" />
            <span class="text">HTML</span>
          </div>
          <div class="skill-item">
            <img src="/assets/images/skills/skill3.png" alt="Skill Icon" />
            <span class="text">CSS</span>
          </div>
          <div class="skill-item">
            <img src="/assets/images/skills/skill4.png" alt="Skill Icon" />
            <span class="text">javascript</span>
          </div>
          <div class="skill-item">
            <img src="/assets/images/skills/skill5.png" alt="Skill Icon" />
            <span class="text">React</span>
          </div>
          <div class="skill-item">
            <img src="/assets/images/skills/skill6.png" alt="Skill Icon" />
            <span class="text">WordPress</span>
          </div>
          <div class="skill-item">
            <img src="/assets/images/skills/skill7.png" alt="Skill Icon" />
            <span class="text">php</span>
          </div>
          <div class="skill-item">
            <img src="/assets/images/skills/skill8.png" alt="Skill Icon" />
            <span class="text">node.js</span>
          </div>
          <div class="skill-item">
            <img src="/assets/images/skills/skill9.png" alt="Skill Icon" />
            <span class="text">Sass</span>
          </div>
          <div class="skill-item">
            <img src="/assets/images/skills/skill10.png" alt="Skill Icon" />
            <span class="text">Angular</span>
          </div>
          <div class="skill-item">
            <img src="/assets/images/skills/skill11.png" alt="Skill Icon" />
            <span class="text">Shopify</span>
          </div>
          <div class="skill-item">
            <img src="/assets/images/skills/skill12.png" alt="Skill Icon" />
            <span class="text">Elementor</span>
          </div>
          <div class="skill-item">
            <img src="/assets/images/skills/skill13.png" alt="Skill Icon" />
            <span class="text">Vue.js</span>
          </div>
        </div>
      </div>
    </section>
    <!-- Skills Area End -->

    <!-- About Us Area start -->
    <section class="about-area pt-100 rpt-70 rel z-1">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-7">
            <div class="about-content">
              <div class="section-title mb-40 wow fadeInUp delay-0-2s">
                <span class="sub-title mb-15">About Company</span>
                <h2>We’re Award-winning Web Development Agency</h2>
              </div>
              <div class="text-left-border mt-60 mb-65 wow fadeInUp delay-0-2s">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  emey accusantium doloremque laudantium totam aperiam eaque
                  quabillo inventore veritatisey quasi architecto beatae
                  dictasunt
                </p>
              </div>
              <div class="about-counter">
                <div class="row">
                  <div class="col-md-4 col-sm-6">
                    <div
                      class="counter-item-two counter-text-wrap wow fadeInUp delay-0-2s"
                    >
                      <span
                        class="count-text percent"
                        data-speed="3000"
                        data-stop="100"
                        >0</span
                      >
                      <span class="counter-title">Clients Satisfactions</span>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-6">
                    <div
                      class="counter-item-two counter-text-wrap wow fadeInUp delay-0-3s"
                    >
                      <span
                        class="count-text percent"
                        data-speed="3000"
                        data-stop="93"
                        >0</span
                      >
                      <span class="counter-title">Success Rating</span>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-6">
                    <div
                      class="counter-item-two counter-text-wrap wow fadeInUp delay-0-4s"
                    >
                      <span
                        class="count-text plus"
                        data-speed="3000"
                        data-stop="35"
                        >0</span
                      >
                      <span class="counter-title">Project Complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="image-border-shape wow fadeInRight delay-0-2s">
              <img
                src="/assets/images/about/about-image-shape.png"
                alt="About Image Shape"
              />
              <div class="bottom-border"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- About Us Area end -->

    <!-- Service Style Four start -->
    <section
      class="service-area-four pt-110 rpt-85 pb-100 rpb-70"
      style="background-image: url(assets/images/hero/hero-two-bg.png)"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7">
            <div
              class="section-title text-center mb-60 wow fadeInUp delay-0-2s"
            >
              <span class="sub-title mb-15">Popular Services</span>
              <h2>We Provide Amazing Web Design Solutions</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-3 col-lg-4 col-sm-6">
            <div class="service-four-item wow fadeInUp delay-0-2s">
              <div class="content">
                <div class="icon-btn">
                  <i class="flaticon-development"></i>
                  <NuxtLink class="more-btn" href="service-details"
                    ><i class="far fa-arrow-right"></i
                  ></NuxtLink>
                </div>
                <h5>
                  <NuxtLink href="service-details">Web Development</NuxtLink>
                </h5>
              </div>
              <div class="image">
                <img src="/assets/images/services/service1.jpg" alt="Service" />
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-sm-6">
            <div class="service-four-item wow fadeInDown delay-0-2s">
              <div class="content">
                <div class="icon-btn">
                  <i class="flaticon-mobile-development"></i>
                  <NuxtLink class="more-btn" href="service-details"
                    ><i class="far fa-arrow-right"></i
                  ></NuxtLink>
                </div>
                <h5>
                  <NuxtLink href="service-details">Mobile Application</NuxtLink>
                </h5>
              </div>
              <div class="image">
                <img src="/assets/images/services/service2.jpg" alt="Service" />
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-sm-6">
            <div class="service-four-item wow fadeInUp delay-0-2s">
              <div class="content">
                <div class="icon-btn">
                  <i class="flaticon-brainstorming"></i>
                  <NuxtLink class="more-btn" href="service-details"
                    ><i class="far fa-arrow-right"></i
                  ></NuxtLink>
                </div>
                <h5>
                  <NuxtLink href="service-details">Team Agumentation</NuxtLink>
                </h5>
              </div>
              <div class="image">
                <img src="/assets/images/services/service3.jpg" alt="Service" />
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-sm-6">
            <div class="service-four-item wow fadeInDown delay-0-2s">
              <div class="content">
                <div class="icon-btn">
                  <i class="flaticon-brainstorming"></i>
                  <NuxtLink class="more-btn" href="service-details"
                    ><i class="far fa-arrow-right"></i
                  ></NuxtLink>
                </div>
                <h5>
                  <NuxtLink href="service-details">Design & Branding</NuxtLink>
                </h5>
              </div>
              <div class="image">
                <img src="/assets/images/services/service4.jpg" alt="Service" />
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-sm-6">
            <div class="service-four-item wow fadeInUp delay-0-2s">
              <div class="content">
                <div class="icon-btn">
                  <i class="flaticon-abstract"></i>
                  <NuxtLink class="more-btn" href="service-details"
                    ><i class="far fa-arrow-right"></i
                  ></NuxtLink>
                </div>
                <h5>
                  <NuxtLink href="service-details"
                    >React Js Development</NuxtLink
                  >
                </h5>
              </div>
              <div class="image">
                <img src="/assets/images/services/service5.jpg" alt="Service" />
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-sm-6">
            <div class="service-four-item wow fadeInDown delay-0-2s">
              <div class="content">
                <div class="icon-btn">
                  <i class="flaticon-ux"></i>
                  <NuxtLink class="more-btn" href="service-details"
                    ><i class="far fa-arrow-right"></i
                  ></NuxtLink>
                </div>
                <h5>
                  <NuxtLink href="service-details"
                    >Front-end development</NuxtLink
                  >
                </h5>
              </div>
              <div class="image">
                <img src="/assets/images/services/service6.jpg" alt="Service" />
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-sm-6">
            <div class="service-four-item wow fadeInUp delay-0-2s">
              <div class="content">
                <div class="icon-btn">
                  <i class="flaticon-optimization"></i>
                  <NuxtLink class="more-btn" href="service-details"
                    ><i class="far fa-arrow-right"></i
                  ></NuxtLink>
                </div>
                <h5>
                  <NuxtLink href="service-details"
                    >Jamstack Development</NuxtLink
                  >
                </h5>
              </div>
              <div class="image">
                <img src="/assets/images/services/service7.jpg" alt="Service" />
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-sm-6">
            <div class="service-four-item wow fadeInDown delay-0-2s">
              <div class="content">
                <div class="icon-btn">
                  <i class="flaticon-goal"></i>
                  <NuxtLink class="more-btn" href="service-details"
                    ><i class="far fa-arrow-right"></i
                  ></NuxtLink>
                </div>
                <h5>
                  <NuxtLink href="service-details">MVP Development</NuxtLink>
                </h5>
              </div>
              <div class="image">
                <img src="/assets/images/services/service8.jpg" alt="Service" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Service Style Four end -->

    <!-- Headline area start -->
    <div class="headline-area bgc-primary pt-80 pb-65">
      <div class="container-fluid">
        <div class="headline-wrap marquee">
          <span>
            <span class="marquee-item">
              <i class="fas fa-star-of-life"></i>
              <b>Web Design</b>
            </span>
            <span class="marquee-item">
              <i class="fas fa-star-of-life"></i>
              <b>Product Design</b>
            </span>
            <span class="marquee-item">
              <i class="fas fa-star-of-life"></i>
              <b>Web Development</b>
            </span>
            <span class="marquee-item">
              <i class="fas fa-star-of-life"></i>
              <b>SEO Optimization</b>
            </span>
            <span class="marquee-item">
              <i class="fas fa-star-of-life"></i>
              <b>UX/UI Strategy</b>
            </span>
            <span class="marquee-item">
              <i class="fas fa-star-of-life"></i>
              <b>Graphics</b>
            </span>
          </span>
        </div>
      </div>
    </div>
    <!-- Headline Area end -->

    <!-- Project Timeline-two Area start -->
    <section class="project-timeline-two-area pt-130 rpt-100 rel z-1">
      <div class="container container-1290">
        <div class="row">
          <div class="col-xl-6 col-lg-8">
            <div class="section-title mb-70 rmb-30 wow fadeInUp delay-0-2s">
              <span class="sub-title mb-15">Recent Works Gallery</span>
              <h2>Lat’s Look Our Recent Project Gallery</h2>
            </div>
          </div>
          <div class="col-xl-6 col-lg-4 text-lg-end">
            <NuxtLink
              class="explore-more rmb-50 wow fadeInRight delay-0-2s"
              href="projects"
              ><i class="fas fa-arrow-right"></i>
              <span>Explore more</span></NuxtLink
            >
          </div>
        </div>
        <div class="row gap-90">
          <div class="col-lg-6">
            <div class="project-timeline-two wow fadeInUp delay-0-2s">
              <span class="serial-number">01</span>
              <h4>
                <NuxtLink href="project-details"
                  >Business Task Management Dashboard Design</NuxtLink
                >
              </h4>
              <div class="image">
                <img
                  src="/assets/images/projects/project-timeline-two1.jpg"
                  alt="Project TimeLine Image"
                />
              </div>
              <div class="right-btn">
                <a href="#"><i class="fal fa-long-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="project-timeline-two wow fadeInUp delay-0-4s">
              <span class="serial-number">02</span>
              <h4>
                <NuxtLink href="project-details"
                  >PSD, Figma & XD to HTML Design & Development</NuxtLink
                >
              </h4>
              <div class="image">
                <img
                  src="/assets/images/projects/project-timeline-two1.jpg"
                  alt="Project TimeLine Image"
                />
              </div>
              <div class="right-btn">
                <a href="#"><i class="fal fa-long-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="project-timeline-two wow fadeInUp delay-0-2s">
              <span class="serial-number">03</span>
              <h4>
                <NuxtLink href="project-details"
                  >Mobile Application Design & Development</NuxtLink
                >
              </h4>
              <div class="image">
                <img
                  src="/assets/images/projects/project-timeline-two1.jpg"
                  alt="Project TimeLine Image"
                />
              </div>
              <div class="right-btn">
                <a href="#"><i class="fal fa-long-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="project-timeline-two wow fadeInUp delay-0-4s">
              <span class="serial-number">04</span>
              <h4>
                <NuxtLink href="project-details"
                  >Business Development and Marketing Strategy</NuxtLink
                >
              </h4>
              <div class="image">
                <img
                  src="/assets/images/projects/project-timeline-two1.jpg"
                  alt="Project TimeLine Image"
                />
              </div>
              <div class="right-btn">
                <a href="#"><i class="fal fa-long-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="project-timeline-two wow fadeInUp delay-0-2s">
              <span class="serial-number">05</span>
              <h4>
                <NuxtLink href="project-details"
                  >eCommerce React Website Development</NuxtLink
                >
              </h4>
              <div class="image">
                <img
                  src="/assets/images/projects/project-timeline-two1.jpg"
                  alt="Project TimeLine Image"
                />
              </div>
              <div class="right-btn">
                <a href="#"><i class="fal fa-long-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="project-timeline-two wow fadeInUp delay-0-4s">
              <span class="serial-number">06</span>
              <h4>
                <NuxtLink href="project-details"
                  >3D Flat UI UX Landing Page Design & Development</NuxtLink
                >
              </h4>
              <div class="image">
                <img
                  src="/assets/images/projects/project-timeline-two1.jpg"
                  alt="Project TimeLine Image"
                />
              </div>
              <div class="right-btn">
                <a href="#"><i class="fal fa-long-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Project Timeline Two Area end -->

    <!-- Team Area start -->
    <section class="team-area pt-75 rpt-45">
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
                <img src="/assets/images/team/member6.jpg" alt="Team Member" />
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
                <img src="/assets/images/team/member7.jpg" alt="Team Member" />
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
                <img src="/assets/images/team/member8.jpg" alt="Team Member" />
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
                <img src="/assets/images/team/member9.jpg" alt="Team Member" />
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
                <img src="/assets/images/team/member10.jpg" alt="Team Member" />
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

    <!-- Why Choose Us start -->
    <section class="demo-area pt-100 rpt-70 rel z-1">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-8">
            <div class="why-choose-us-content">
              <div class="section-title mb-60 wow fadeInUp delay-0-2s">
                <span class="sub-title mb-15">Why Choose Us</span>
                <h2>Web Design Company That You Can Trust</h2>
              </div>
              <div class="row gap-60">
                <div class="col-md-6">
                  <div class="why-choose-item wow fadeInUp delay-0-2s">
                    <div class="why-choose-header">
                      <i class="far fa-chevron-right"></i>
                      <h5>Competitive rates</h5>
                    </div>
                    <p>
                      We use strategic marketing tactics that have been proven
                      programming
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="why-choose-item wow fadeInUp delay-0-3s">
                    <div class="why-choose-header">
                      <i class="far fa-chevron-right"></i>
                      <h5>Premium Development</h5>
                    </div>
                    <p>
                      Sed perspiciatis unde omnie natue site voluptatem accusan
                      doloremque
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="why-choose-item wow fadeInUp delay-0-2s">
                    <div class="why-choose-header">
                      <i class="far fa-chevron-right"></i>
                      <h5>No contracts needed</h5>
                    </div>
                    <p>
                      You can increase, pause or stop our services at any time
                      leaving
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="why-choose-item wow fadeInUp delay-0-3s">
                    <div class="why-choose-header">
                      <i class="far fa-chevron-right"></i>
                      <h5>Retina Ready & Flexible</h5>
                    </div>
                    <p>
                      Devices show more pixels square inch resulting sharperes
                      images Content
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="why-choose-right wow fadeInLeft delay-0-2s">
              <img
                src="/assets/images/services/why-choose-right.png"
                alt="Why Choose Right"
              />
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
    </section>
    <!-- Why Choose Us end -->

    <!-- Pricing style three start -->
    <section
      class="pricing-area-three pt-75 rpt-100 pb-85 rpb-55"
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
    <div class="headline-area style-two bgc-primary pt-80 pb-65">
      <div class="container-fluid">
        <div class="headline-wrap marquee">
          <span>
            <span class="marquee-item">
              <i class="fas fa-star-of-life"></i>
              <b>Clients Say Us</b>
            </span>
            <span class="marquee-item">
              <i class="fas fa-star-of-life"></i>
              <b>Global Clients</b>
            </span>
            <span class="marquee-item">
              <i class="fas fa-star-of-life"></i>
              <b>Awards Winning</b>
            </span>
            <span class="marquee-item">
              <i class="fas fa-star-of-life"></i>
              <b>Clients Say Us</b>
            </span>
            <span class="marquee-item">
              <i class="fas fa-star-of-life"></i>
              <b>Global Clients</b>
            </span>
            <span class="marquee-item">
              <i class="fas fa-star-of-life"></i>
              <b>Awards Winning</b>
            </span>
          </span>
        </div>
      </div>
    </div>
    <!-- Headline Area end -->

    <!-- Testimonial Area start -->
    <SlidersTestimonial2 />
    <!-- Testimonial Area end -->

    <!-- Blog Style Two start -->
    <section class="blog-area-two pt-125 rpt-100 pb-70 rpb-40">
      <div class="container container-1290">
        <div class="row justify-content-center">
          <div class="col-xl-7 col-lg-9">
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
            <div class="blog-item style-two wow fadeInUp delay-0-2s">
              <div class="image">
                <img src="/assets/images/blog/blog1.jpg" alt="Blog" />
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
              <div class="image">
                <img src="/assets/images/blog/blog2.jpg" alt="Blog" />
              </div>
              <h4>
                <NuxtLink href="blog-details"
                  >Inclusive Design And Accessibility Stream Heydon
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
              <div class="image">
                <img src="/assets/images/blog/blog3.jpg" alt="Blog" />
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
    <!-- Blog Style Two end -->
  </NuxtLayout>
</template>

<script>
import { ygencyUtilits } from "~/utilits";

export default {
  name: "index2",
  mounted() {
    ygencyUtilits.counterUp();
  },
};
</script>
