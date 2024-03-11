<template>
	<!--Form Back Drop-->
	<div class="form-back-drop-nav" @click="toggleSidebar()"></div>

	<!-- Hidden Sidebar -->
	<section class="hidden-bar-nav">
		<div class="container">
			<div class="main-menu d-flex justify-content-between align-items-center py-15">
				<div class="mobile-logo">
					<NuxtLink href="/">
						<img src="/assets/images/logos/logo.png" alt="Logo" title="Logo" />
					</NuxtLink>
				</div>
				<div class="cross-icon" @click="toggleSidebar()">
					<span class="fa fa-times"></span>
				</div>
			</div>
			<div class="inner-box text-center">
				<Nav />
			</div>
		</div>
	</section>
	<!--End Hidden Sidebar -->
</template>

<script setup>
	import Nav from './Nav.vue';
	const toggleSidebar = () => {
		document.querySelector("body").classList.remove("side-content-visible-nav");
	};
</script>
