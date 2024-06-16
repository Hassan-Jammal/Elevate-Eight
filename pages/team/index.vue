<template>
	<!-- Page Banner Section Start -->
	<section class="page-banner d-flex align-items-center rel z-1">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb" data-aos="fade-up" data-aos-delay="400">
							<li class="breadcrumb-item">
								<NuxtLink href="/">Home</NuxtLink>
							</li>
							<li class="breadcrumb-item active">Our Team</li>
						</ol>
					</nav>
					<h1 class="hero-title text-center" data-aos="fade-up" data-aos-delay="200">
						Meet the Professionals
					</h1>
				</div>
			</div>
		</div>
	</section>
	<!-- Page Banner Section End -->

	<!-- Team Area start -->
	<section class="team-page-area pt-130 rpt-100 pb-70 rpb-40 rel">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-9">
					<div class="section-title text-center mb-55" data-aos="fade-up" data-aos-delay="200">
						<span class="sub-title mb-20">Team Members</span>
						<h2>Meet Our Professionals Team</h2>
					</div>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-lg-4 col-sm-6">
					<div class="team-member style-two" data-aos="fade-up" data-aos-delay="200">
						<div class="image">
							<img src="/assets/images/team/member-two1.jpeg" alt="Team Member" />
						</div>
						<div class="content">
							<h4>Patrick V. Schroeder</h4>
							<span>UX/UI Designer</span>
						</div>
						<div class="btn-social">
							<div class="social-style-two">
								<a href="https://www.instagram.com/elevate8agency/" target="_blank" rel="noopener noreferrer" aria-label="Visit Instagram"><i class="fab fa-instagram"></i></a>
								<a href="https://www.linkedin.com/company/elevateeight" target="_blank" rel="noopener noreferrer" aria-label="Visit Linkedin"><i class="fab fa-linkedin-in"></i></a>
								<a href="https://www.facebook.com/elevateight" target="_blank" rel="noopener noreferrer" aria-label="Visit Facebook"><i class="fab fa-facebook-f"></i></a>
							</div>
						</div>
					</div>
				</div>

				<div class="col-lg-4 col-sm-6">
					<div class="team-member style-two" data-aos="fade-up" data-aos-delay="200">
						<div class="image">
							<img src="/assets/images/team/member-two1.jpeg" alt="Team Member" />
						</div>
						<div class="content">
							<h4>Patrick V. Schroeder</h4>
							<span>UX/UI Designer</span>
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
					<div class="team-member style-two" data-aos="fade-up" data-aos-delay="200">
						<div class="image">
							<img src="/assets/images/team/member-two1.jpeg" alt="Team Member" />
						</div>
						<div class="content">
							<h4>Patrick V. Schroeder</h4>
							<span>UX/UI Designer</span>
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
		description: 'Elevate8 is a team ...',

		ogTitle: 'About Us — Experienced Product Design Team | Elevate8',
		ogDescription: 'Elevate8 is a team ...',
		ogImage: 'https://example.com/image.png',

		twitterTitle: 'About Us — Experienced Product Design Team | Elevate8',
		twitterDescription: 'Elevate8 is a team ...',
		twitterCard: 'summary_large_image',
	})

	useHead({
		meta: [
			{ name: 'keywords', content: '' }
		]
	})
</script>
