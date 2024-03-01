<template>
  <NuxtLayout name="ygency">
    <PageBanner :pageName="'Expert Team'" />
    <!-- Skill Area start -->
    <section class="skill-area py-130 rpt-100 rpb-60 rel z-1">
      <div class="container container-1210">
        <div class="row gap-120 align-items-center justify-content-between">
          <div class="col-lg-5">
            <div class="skill-image wow fadeInUp delay-0-2s">
              <img src="/assets/images/team/skill-left.png" alt="Skill" />
            </div>
          </div>
          <div class="col-lg-7">
            <div class="skill-content pt-40 rpt-60 wow fadeInUp delay-0-4s">
              <div class="section-title mb-40">
                <span class="sub-title mb-15">Best Skills</span>
                <h2>We Have Lot’s Experience and Professionals</h2>
              </div>
              <p>
                Similique sunin culpa qui officia deserunt mollitia animi est
                laborum et dolorum fuga. Et harum quidem rerum facilis esty
                expedita distinctioam nobis est eligendi optio cumquey
              </p>
              <div class="row pt-35 justify-content-between">
                <div class="col-xl-3 col-sm-4">
                  <div class="circle-progress-item">
                    <div class="progress-content one">
                      <ProgressBar :value="89" />
                      <h5>Web Design</h5>
                      <span class="counting">89%</span>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-4">
                  <div class="circle-progress-item">
                    <div class="progress-content two">
                      <ProgressBar :value="93" />
                      <h5>Development</h5>
                      <span class="counting">93%</span>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-4">
                  <div class="circle-progress-item">
                    <div class="progress-content three">
                      <ProgressBar :value="75" />
                      <h5>Marketing</h5>
                      <span class="counting">75%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Skill Area end -->

    <!-- Team Area start -->
    <section
      class="team-page-area pt-130 rpt-100 pb-70 rpb-40 rel"
      style="background-image: url(assets/images/hero/hero-two-bg.png)"
    >
      <div class="container container-1290">
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
        <div class="row justify-content-center">
          <div class="col-lg-4 col-sm-6">
            <div class="team-member style-two wow fadeInUp delay-0-2s">
              <div class="image">
                <img
                  src="/assets/images/team/member-two1.jpg"
                  alt="Team Member"
                />
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
          <div class="col-lg-4 col-sm-6">
            <div class="team-member style-two wow fadeInUp delay-0-4s">
              <div class="image">
                <img
                  src="/assets/images/team/member-two2.jpg"
                  alt="Team Member"
                />
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
          <div class="col-lg-4 col-sm-6">
            <div class="team-member style-two wow fadeInUp delay-0-6s">
              <div class="image">
                <img
                  src="/assets/images/team/member-two3.jpg"
                  alt="Team Member"
                />
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
          <div class="col-lg-4 col-sm-6">
            <div class="team-member style-two wow fadeInUp delay-0-2s">
              <div class="image">
                <img
                  src="/assets/images/team/member-two4.jpg"
                  alt="Team Member"
                />
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
          <div class="col-lg-4 col-sm-6">
            <div class="team-member style-two wow fadeInUp delay-0-4s">
              <div class="image">
                <img
                  src="/assets/images/team/member-two5.jpg"
                  alt="Team Member"
                />
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
          <div class="col-lg-4 col-sm-6">
            <div class="team-member style-two wow fadeInUp delay-0-6s">
              <div class="image">
                <img
                  src="/assets/images/team/member-two6.jpg"
                  alt="Team Member"
                />
              </div>
              <div class="content">
                <h4>Charles L. Durbin</h4>
                <span>Senior Manager</span>
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
          <div class="col-lg-4 col-sm-6">
            <div class="team-member style-two wow fadeInUp delay-0-2s">
              <div class="image">
                <img
                  src="/assets/images/team/member-two7.jpg"
                  alt="Team Member"
                />
              </div>
              <div class="content">
                <h4>Lewis J. Manley</h4>
                <span>Product Designer</span>
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
          <div class="col-lg-4 col-sm-6">
            <div class="team-member style-two wow fadeInUp delay-0-4s">
              <div class="image">
                <img
                  src="/assets/images/team/member-two8.jpg"
                  alt="Team Member"
                />
              </div>
              <div class="content">
                <h4>Matthew A. Kurtz</h4>
                <span>Web Developer</span>
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
          <div class="col-lg-4 col-sm-6">
            <div class="team-member style-two wow fadeInUp delay-0-6s">
              <div class="image">
                <img
                  src="/assets/images/team/member-two9.jpg"
                  alt="Team Member"
                />
              </div>
              <div class="content">
                <h4>Douglas L. Mahon</h4>
                <span>Senior Manager</span>
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
  name: "team",
};
</script>
