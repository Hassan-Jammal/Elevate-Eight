<template>
	<ul class="navigation clearfix">
		<li>
			<NuxtLink href="/about-us" @click="closeSidebar()">About Us</NuxtLink>
		</li>
		<li>
			<NuxtLink href="/services" @click="closeSidebar()">Services</NuxtLink>
		</li>
		<li>
			<NuxtLink href="/work" @click="closeSidebar()">Work</NuxtLink>
		</li>
		<!-- <li>
			<NuxtLink href="/team" @click="closeSidebar()">Team</NuxtLink>
		</li> -->
		<li>
			<NuxtLink href="/contact-us" @click="closeSidebar()">Contact Us</NuxtLink>
		</li>
		<li class="d-lg-none d-block">
			<a href="#" class="theme-btn" @click="toggleSidebar()">
				Get a Quote
			</a>
		</li>
	</ul>
</template>

<script setup>
	const dropdown = ref('<div class="dropdown-btn"><span class="far fa-plus"></span></div>');

	const toggleSidebar = () => {
		document.querySelector("body").classList.add("side-content-visible");
		document.querySelector("body").classList.remove("side-content-visible-nav");
	};

	const closeSidebar = () => {
		document.querySelector("body").classList.remove("side-content-visible-nav");
	};
</script>
