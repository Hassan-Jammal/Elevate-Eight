<template>
  
    <!-- <PageBanner :pageName="'Expert Team'" /> -->

    <!-- Page Banner Section Start -->
		<section class="page-banner d-flex align-items-center rel z-1"
			style="background: url(assets/images/shapes/Group.svg) center no-repeat; background-position: left;">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<nav aria-label="breadcrumb">
							<ol class="breadcrumb wow fadeInUp delay-0-4s">
								<li class="breadcrumb-item">
									<NuxtLink href="/">Home</NuxtLink>
								</li>
								<li class="breadcrumb-item active">Our Team</li>
							</ol>
						</nav>
						<h1 class="hero-title wow fadeInUp delay-0-2s text-center">
							Meet the Professionals
						</h1>
					</div>
				</div>
			</div>
		</section>
		<!-- Page Banner Section End -->

    <!-- Skill Area start -->
    <!-- <section class="skill-area py-130 rpt-100 rpb-60 rel z-1">
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
    </section> -->
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
                  src="/assets/images/team/member-two1.jpeg"
                  alt="Team Member"
                />
              </div>
              <div class="content">
                <h4>Patrick V. Schroeder</h4>
                <span>UI/UX Designer</span>
              </div>
              <div class="btn-social">
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
                  src="/assets/images/team/member-two1.jpeg"
                  alt="Team Member"
                />
              </div>
              <div class="content">
                <h4>Patrick V. Schroeder</h4>
                <span>UI/UX Designer</span>
              </div>
              <div class="btn-social">
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
                  src="/assets/images/team/member-two1.jpeg"
                  alt="Team Member"
                />
              </div>
              <div class="content">
                <h4>Patrick V. Schroeder</h4>
                <span>UI/UX Designer</span>
              </div>
              <div class="btn-social">
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
  
</template>

<script setup>

  useSeoMeta({
		title: 'About Us',
		description: 'Elevate 8 is a team ...',
		
		ogTitle: 'About Us — Experienced Product Design Team | Elevate 8',
		ogDescription: 'Elevate 8 is a team ...',
		ogImage: 'https://example.com/image.png',
		
		twitterTitle: 'About Us — Experienced Product Design Team | Elevate 8',
		twitterDescription: 'Elevate 8 is a team ...',
		twitterCard: 'summary_large_image',
	})

</script>
