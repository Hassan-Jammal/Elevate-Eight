<template>
		<header class="main-header" :class="{ 'active': isScrolledDown, 'background': !isOnTop }">
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
</template>

<script setup>
	import { e8Utilits } from "~/utilits";
	import Nav from './Nav.vue';
	
	const lastScrollPosition = ref(0);
	const isScrolledDown = ref(false);
	const isOnTop = ref(true);
	const scrollThreshold = 200;

	onMounted(() => {
		e8Utilits.stickyNav();
		window.addEventListener('scroll', handleScroll);
		checkScrollPosition();
	});

	const toggleSidebar = () => {
		document.querySelector("body").classList.add("side-content-visible");
	};

	const toggleSidebar2 = () => {
		document.querySelector("body").classList.add("side-content-visible-nav");
	};

	const handleScroll = () => {
		const currentScrollPosition = window.scrollY;
		const scrollDirection = currentScrollPosition > lastScrollPosition.value ? 'down' : 'up';

		// Check if the user has scrolled down more than the threshold
		isScrolledDown.value = scrollDirection === 'down' && currentScrollPosition > scrollThreshold;

		// Check if the user is at the top of the page
		isOnTop.value = currentScrollPosition === 0;

		lastScrollPosition.value = currentScrollPosition;
	};

	const checkScrollPosition = () => {
		// Check if the user is at the top of the page on mount
		isOnTop.value = window.scrollY === 0;
	};
	
</script>