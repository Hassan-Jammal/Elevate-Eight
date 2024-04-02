<template>
	<footer class="main-footer footer-one rel z-1" style="background-image: url(assets/images/shapes/Grou1.svg)">
		<div class="container container-1290">
			<!-- <div class="footer-top pt-80 pb-60">
				<div class="row align-items-center">
					<div class="col-lg-4">
						<div class="footer-logo mb-20 wow fadeInRight delay-0-2s">
							<NuxtLink href="/"><img src="/assets/images/logos/footer-logo.png" alt="Logo" /></NuxtLink>
						</div>
					</div>
					<div class="col-lg-8 text-lg-end">
						<div class="social-style-four mb-20 wow fadeInLeft delay-0-2s">
							<a href="#"><i class="fab fa-facebook-f"></i> <span>Facebook</span></a>
							<a href="#"><i class="fab fa-linkedin-in"></i> <span>Linkedin</span></a>
							<a href="#"><i class="fab fa-instagram"></i> <span>Instagram</span></a>
						</div>
					</div>
				</div>
			</div> -->
			<div class="row align-items-center">
				<div class="col-lg-7">
					<div class="footer-left-content">
						<div class="lets-work mt-50 mb-50 wow fadeInUp delay-0-2s">
							<img src="/assets/images/logos/logo.svg" alt="Logo" />
							<!-- <img src="/assets/images/footer/lets-work.png" alt="Let's Work Man" /> -->
							<span>Let’s Work Together</span>
						</div>
						<div class="footer-contact-info wow fadeInUp delay-0-3s">
							<a class="theme-btn" href="mailto:info@elevate8.co" rel="noopener noreferrer">Email Us <i class="far fa-arrow-right"></i></a>
							<a class="theme-btn" href="tel:+9613011568">Call Us <i class="far fa-arrow-right"></i></a>
						</div>
					</div>
				</div>
				<div class="col-lg-5">
					<div class="footer-right-content">

						<h4 class="footer-title wow fadeInUp delay-0-2s">Company</h4>
						<div class="footer-widget widget_nav_menu gap-3">
							<ul class="list-style-two wow fadeInUp delay-0-3s">
								<li>
									<NuxtLink to="/about-us">About Us</NuxtLink>
								</li>
								<li>
									<NuxtLink to="/portfolio">Portfolio</NuxtLink>
								</li>
								<li>
									<NuxtLink to="/team">Team</NuxtLink>
								</li>
							</ul>
							<ul class="list-style-two wow fadeInUp delay-0-3s">
								<li>
									<NuxtLink to="/contact-us">Contact Us</NuxtLink>
								</li>
								<li>
									<a href="#" @click="toggleSidebar()">Get a Quote</a>
								</li>
							</ul>
						</div>
						
						<h4 class="footer-title wow fadeInUp delay-0-2s"><NuxtLink to="/services">Services</NuxtLink></h4>
						<div class="footer-widget widget_nav_menu gap-3 mb-0">
							<ul class="list-style-two wow fadeInUp delay-0-3s">
								<li>
									<NuxtLink to="/services">Web Development</NuxtLink>
								</li>
								<li>
									<NuxtLink to="/services">Mobile App Development</NuxtLink>
								</li>
								<li>
									<NuxtLink to="/services">E-commerce Websites</NuxtLink>
								</li>
								<li>
									<NuxtLink to="/services">SEO</NuxtLink>
								</li>
								<li>
									<NuxtLink to="/services">Branding</NuxtLink>
								</li>
								
							</ul>
							<ul class="list-style-two wow fadeInUp delay-0-3s">
								<li>
									<NuxtLink to="/services">UX/UI</NuxtLink>
								</li>
								<li>
									<NuxtLink to="/services">Hosing Plans</NuxtLink>
								</li>
								<li>
									<NuxtLink to="/services">Logo Design</NuxtLink>
								</li>
								<li>
									<NuxtLink to="/services">Social Media Management</NuxtLink>
								</li>
								<li>
									<NuxtLink to="/services">Maintenance & Support</NuxtLink>
								</li>
							</ul>
						</div>

					</div>
				</div>
			</div>
			<div class="footer-bottom">
				<div class="row align-items-center">
					<div class="col-xl-7 col-lg-6">
						<div class="footer-bottom-menu pt-40 pb-35 rpb-0 wow fadeInRight delay-0-2s">
							<div class="social-style-four mb20 wow fadeInLeft delay-0-2s">
								<a href="https://www.instagram.com/elevateeight_/"><i class="fab fa-instagram" rel="noopener noreferrer"></i> <span>Instagram</span></a>
								<a href="https://www.linkedin.com/company/elevateeight"><i class="fab fa-linkedin-in" rel="noopener noreferrer"></i> <span>Linkedin</span></a>
								<a href="" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i> <span>Facebook</span></a>
							</div>
						</div>
					</div>
					<div class="col-xl-5 col-lg-6">
						<div class="copyright-text text-lg-end pt-40 pb-35 rpt-10 wow fadeInLeft delay-0-2s">
							<p>
								Copyright @{{ new Date().getFullYear() }}, <span>Elevate 8</span> All Rights Reserved
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup>
  const toggleSidebar = () => {
    document.querySelector("body").classList.add("side-content-visible");
  };
</script>

