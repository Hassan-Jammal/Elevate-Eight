<template>
	<ul class="navigation clearfix">
		<li class="wow fadeInUp delay-0-4s">
			<NuxtLink href="/about" @click="closeSidebar()">About Us</NuxtLink>
		</li>
		<li class="wow fadeInUp delay-0-5s">
			<NuxtLink href="/services" @click="closeSidebar()">Services</NuxtLink>
		</li>
		<li class="wow fadeInUp delay-0-6s">
			<NuxtLink href="/projects" @click="closeSidebar()">Work</NuxtLink>
		</li>
		<li class="wow fadeInUp delay-0-7s">
			<NuxtLink href="/team" @click="closeSidebar()">Team</NuxtLink>
		</li>
		<li class="wow fadeInUp delay-0-8s">
			<NuxtLink href="/contact" @click="closeSidebar()">Contact Us</NuxtLink>
		</li>
		<li class="d-lg-none d-block wow fadeInUp delay-0-9s">
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
