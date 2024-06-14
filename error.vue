<template>
    <div class="page-wrapper">
		<!-- main header -->
		<header class="main-header menu-absolute">
			<!--Header-Upper-->
			<div class="header-upper">
				<div class="container clearfix">
					<div class="header-inner rel d-flex justify-content-between align-items-center">
						<div class="logo-outer">
							<div class="logo">
								<NuxtLink href="/">
									<img src="/assets/images/logos/logo-small.svg" alt="Logo" width="100" height="46" />
								</NuxtLink>
							</div>
						</div>

						<div class="nav-outer ms-lgauto clearfix">
							<!-- Main Menu -->
							<nav class="main-menu navbar-expand-lg">
								<div class="navbar-header">
									<div class="mobile-logo">
										<NuxtLink href="/">
											<img src="/assets/images/logos/logo-small.svg" alt="Logo" width="100" height="46" />
										</NuxtLink>
									</div>

									<!-- Toggle Button -->
									<button type="button" class="navbar-toggle" data-bs-toggle="collapse"
										@click="toggleSidebar2()" data-bs-target=".navbar-collapse">
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
									</button>
								</div>

								<div class="navbar-collapse collapse clearfix">
									<Nav /> <!-- v-else -->
								</div>
							</nav>
							<!-- Main Menu End-->
						</div>

						<!-- Menu Button -->
						<div class="menu-btns">
							<!-- menu sidbar -->
							<div class="menu-sidebar">
								<a href="#" class="theme-btn" @click="toggleSidebar()">Get a Quote</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--End Header Upper-->
		</header>

		<HeadersSidebar />

		<HeadersMenuSidebars />

		<!-- 404 Error Section Start -->
		<section class="error-section d-flex justify-content-center align-items-center rel z-1">
			<div class="container">
				<div class="error-content row justify-content-between align-items-center text-center text-lg-start">
					<div class="col-lg-6 order-2 order-lg-1">
						<div class="rmb-55" data-aos="fade-right" data-aos-delay="200">
							<div class="section-title mb-50 rmb-35">
								<h1>Accept our appologies!</h1>
								<p class="mt-20">The page you were looking for doesn't exist. You may have misstyped the address or the page may have moved.</p>
							</div>
							<NuxtLink href="/" class="theme-btn">Go to Home page<i class="far fa-arrow-right"></i></NuxtLink>
						</div>
					</div>
					<div class="col-lg-6 order-1 order-lg-2 text-center text-lg-end">
						<h2>404</h2>
					</div>
				</div>
			</div>
		</section>
		<!-- 404 Error Section End -->
	</div>
</template>

<script setup>
	import Nav from '~/components/headers/Nav.vue'

	useSeoMeta({
		title: 'Page Not Found',
		ogTitle: 'Page Not Found',
		twitterTitle: 'Page Not Found',
	})

	const toggleSidebar = () => {
		document.querySelector("body").classList.add("side-content-visible");
	};

	const toggleSidebar2 = () => {
		document.querySelector("body").classList.add("side-content-visible-nav");
	};
</script>