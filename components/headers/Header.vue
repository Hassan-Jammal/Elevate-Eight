<template>
	<div>
		<header class="main-header menu-absolute">
			<!--Header-Upper-->
			<div class="header-upper">
				<div class="container container-1620 clearfix">
					<div class="header-inner rel d-flex justify-content-between align-items-center">
						<div class="logo-outer">
							<div class="logo">
								<NuxtLink href="/">
									<img src="/assets/images/logos/logo-small.svg" alt="Logo" title="Logo" />
								</NuxtLink>
							</div>
						</div>

						<div class="nav-outer ms-lgauto clearfix">
							<!-- Main Menu -->
							<nav class="main-menu navbar-expand-lg">
								<div class="navbar-header">
									<div class="mobile-logo">
										<NuxtLink href="/">
											<img src="/assets/images/logos/logo-small.svg" alt="Logo" title="Logo" />
										</NuxtLink>
									</div>

									<!-- Toggle Button -->
									<button type="button" class="navbar-toggle" data-bs-toggle="collapse"
										@click="toggleSidebar2()" data-bs-target=".navbar-collapse">
										<span class="icon-bar"></span>
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
	</div>
</template>

<script setup>
	import { e8Utilits } from "~/utilits";
	import Nav from './Nav.vue';

	const props = defineProps(["singlePage"]);

	onMounted(() => {
		e8Utilits.stickyNav();
	});

	const toggleSidebar = () => {
		document.querySelector("body").classList.add("side-content-visible");
	};

	const toggleSidebar2 = () => {
		document.querySelector("body").classList.add("side-content-visible-nav");
	};
</script>
