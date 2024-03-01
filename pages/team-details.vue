<template>
  <NuxtLayout name="ygency">
    <!-- Team Profile Area start -->
    <section
      class="team-profile-area pt-220 rpt-150 pb-130 rpb-100 rel"
      style="background-image: url(assets/images/hero/hero-two-bg.png)"
    >
      <div class="container container-1290">
        <div class="row gap-100 align-items-center">
          <div class="col-lg-6">
            <div class="team-profile-image rmb-55 wow fadeInLeft delay-0-2s">
              <img src="/assets/images/team/team-profile.jpg" alt="Team" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="team-profile-content wow fadeInRight delay-0-2s">
              <h2>Joseph E. Curran</h2>
              <span class="designation">Web Developer</span>
              <p>
                On the other hand, we denounce with righteous indignation
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment so blinded by desire that they cannot
                foresee the pain and trouble that are bound to ensue; and equal
                blame belongs those who fail in their duty through weakness of
                wil same
              </p>
              <div class="team-sub-title mt-55 mb-30">
                <h4>Get In Touch</h4>
              </div>
              <div class="contact-info-item">
                <div class="icon">
                  <i class="far fa-map-marker-alt"></i>
                </div>
                <div class="content">
                  <b class="title">Location</b>
                  <span class="text">55 Main Street, Melbourne, Australia</span>
                </div>
              </div>
              <div class="contact-info-item">
                <div class="icon">
                  <i class="far fa-envelope"></i>
                </div>
                <div class="content">
                  <b class="title">Email Address</b>
                  <span class="text"
                    ><a href="mailto:support@gmail.com"
                      >support@gmail.com</a
                    ></span
                  >
                </div>
              </div>
              <div class="contact-info-item">
                <div class="icon">
                  <i class="far fa-phone"></i>
                </div>
                <div class="content">
                  <b class="title">Phone Us</b>
                  <span class="text"
                    ><a href="callto:+00012345688">+000 (123) 456 88</a></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Team Profile Area end -->

    <!-- Skill Area start -->
    <section class="skill-area pt-130 rpt-100 rel z-1">
      <div class="container container-1290">
        <div class="row gap-80">
          <div class="col-lg-6">
            <div class="section-title mb-40 wow fadeInUp delay-0-2s">
              <span class="sub-title mb-15">Best Skills</span>
              <h2>We Have Lot’s Experience and Professionals</h2>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="skill-content wow fadeInUp delay-0-4s">
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

    <!-- Contact Form Area start -->
    <section class="contact-area pt-80 rpt-50 pb-130 rpb-100 rel z-1">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-7 col-lg-9">
            <div
              class="section-title mb-50 text-center wow fadeInUp delay-0-2s"
            >
              <span class="sub-title mb-15">Work Together</span>
              <h2>Let’s Work Together For Your Nest Projects</h2>
            </div>
          </div>
          <div class="col-xl-10 col-lg-11">
            <form
              id="teamForm"
              class="form-style-one z-1 rel wow fadeInUp delay-0-3s"
              @submit.prevent=""
            >
              <div class="row gap-60 pt-15">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="name"><i class="far fa-user"></i></label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="form-control"
                      value=""
                      placeholder="Full Name"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="email"><i class="far fa-envelope"></i></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="form-control"
                      value=""
                      placeholder="Email Address"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="phone"><i class="far fa-phone"></i></label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      class="form-control"
                      value=""
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <div class="col-md-6 mb-50">
                  <div class="form-group">
                    <select name="select-subject" id="select-subject">
                      <option value="default" selected="">Subject</option>
                      <option value="Design">Design</option>
                      <option value="Development">Development</option>
                      <option value="SEO">SEO</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="message"><i class="far fa-pencil"></i></label>
                    <textarea
                      name="message"
                      id="message"
                      class="form-control"
                      rows="4"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group pt-5 mb-0">
                    <button type="submit" class="theme-btn style-two w-100">
                      Send Message us <i class="far fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- Contact Form Area end -->
  </NuxtLayout>
</template>

<script>
export default {
  name: "team-details",
};
</script>
