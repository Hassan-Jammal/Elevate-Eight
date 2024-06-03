<template>
	<footer class="main-footer footer-one rel z-1">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-lg-6">
					<div class="footer-left-content">
						<div class="lets-work mt-50 mb-50 wow fadeInUp delay-0-2s">
							<img src="/assets/images/logos/logo.svg" alt="Logo" width="200" height="92"/>
							<span>Let's Work<br />Together</span>
						</div>
						<div class="footer-contact-info wow fadeInUp delay-0-3s">
							<a class="theme-btn" href="mailto:info@elevate8.co" rel="noopener noreferrer">Email Us <i class="far fa-arrow-right"></i></a>
							<a class="theme-btn" href="tel:+9613011568">Call Us <i class="far fa-arrow-right"></i></a>
						</div>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="footer-right-content">

						<h4 class="footer-title wow fadeInUp delay-0-2s">Company</h4>
						<div class="footer-widget widget_nav_menu gap-3 w-100">
							<ul class="list-style-two wow fadeInUp delay-0-3s flex-grow-1 w-100">
								<li>
									<NuxtLink to="/about">About Us</NuxtLink>
								</li>
								<li class="mt-20">
									<NuxtLink to="/work">Work</NuxtLink>
								</li>
								<!-- <li>
									<NuxtLink to="/team">Team</NuxtLink>
								</li> -->
							</ul>
							<ul class="list-style-two wow fadeInUp delay-0-3s flex-grow-1 w-100">
								<li>
									<NuxtLink to="/contact-us">Contact Us</NuxtLink>
								</li>
								<li class="mt-20">
									<a href="#" @click="toggleSidebar()">Get a Quote</a>
								</li>
							</ul>
						</div>
						
						<h4 class="footer-title wow fadeInUp delay-0-2s"><NuxtLink to="/services">Services</NuxtLink></h4>
						<div class="footer-widget widget_nav_menu gap-3 mb-0 w-100">
							<ul class="list-style-two wow fadeInUp delay-0-3s flex-grow-1 w-100">
								<li>
									<NuxtLink to="/services">Web Development</NuxtLink>
								</li>
								<li class="mt-20">
									<NuxtLink to="/services">Mobile Development</NuxtLink>
								</li>
								<li class="mt-20">
									<NuxtLink to="/services">E-commerce Websites</NuxtLink>
								</li>
								<li class="mt-20">
									<NuxtLink to="/services">Search Engine Optimization</NuxtLink>
								</li>
								<li class="mt-20">
									<NuxtLink to="/services">Branding</NuxtLink>
								</li>
								
							</ul>
							<ul class="list-style-two wow fadeInUp delay-0-3s flex-grow-1 w-100">
								<li>
									<NuxtLink to="/services">UI/UX Design</NuxtLink>
								</li>
								<li class="mt-20">
									<NuxtLink to="/services">Hosting Plans</NuxtLink>
								</li>
								<li class="mt-20">
									<NuxtLink to="/services">Logo Design</NuxtLink>
								</li>
								<li class="mt-20">
									<NuxtLink to="/services">Social Media Management</NuxtLink>
								</li>
								<li class="mt-20">
									<NuxtLink to="/services">Maintenance & Support</NuxtLink>
								</li>
							</ul>
						</div>

					</div>
				</div>
			</div>
			<div class="footer-bottom">
				<div class="row align-items-center">
					<div class="col-lg-6">
						<div class="footer-bottom-menu pt-40 pb-35 rpb-0 wow fadeInRight delay-0-2s">
							<div class="social-style-four justify-content-start gap-4 w-100 wow fadeInLeft delay-0-2s">
								<a href="https://www.instagram.com/elevate8agency/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i> <span>Instagram</span></a>
								<a href="https://www.linkedin.com/company/elevateeight" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i> <span>Linkedin</span></a>
								<a href="https://www.facebook.com/elevateight" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i> <span>Facebook</span></a>
							</div>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="copyright-text pt-40 pb-35 rpt-10 wow fadeInLeft delay-0-2s">
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

