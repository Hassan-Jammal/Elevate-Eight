<template>
	<NuxtLayout name="elevate8">
		<!-- Page Banner Section Start -->
		<section class="page-banner pt-210 rpt-150 pb-45 rpb-50 rel z-1"
			style="background: url(assets/images/shapes/Group.svg) center no-repeat; background-position: left;">
			<div class="container">
				<div class="row">
					<div class="col-lg-12 text-center text-md-start">
						<nav aria-label="breadcrumb">
							<ol class="breadcrumb wow fadeInUp delay-0-4s">
								<li class="breadcrumb-item">
									<NuxtLink href="/">Home</NuxtLink>
								</li>
								<li class="breadcrumb-item active">Our Services</li>
							</ol>
						</nav>
						
						<h1 class="hero-title mb-100 rmb-50 wow fadeInUp delay-0-2s ">
							This Is What 
							We Do Best
							<!-- <img class="mxw-10 leaf" src="/assets/images/banner/leaf.png" alt="Leaf" /> -->
						</h1>
					</div>
				</div>
			</div>
		</section>
		<!-- Page Banner Section End -->

		<!-- Feature Three Area start -->
		<section class="feature-three-area pb-50 rpb-20 rel z-1">
			<div class="container container-1290">

				<h2 class="section-title mb-60">
					<span class="sub-title">What We Offer</span>
				</h2>
				
				<div class="row gap-130">
					<div v-for="(service, index) in services" :key="index" class="col-md-6">
						<div class="feature-item-three wow fadeInUp delay-0-2s">
							<div class="top-part">
								<span class="serial-number">{{ service.id < 10 ? '0' + service.id : service.id }}</span>
							</div>
							<div class="content">
								<h4>{{ service.name }}</h4>
								<p>{{ service.description }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Feature Three Area end -->

		<!-- Headline Area start -->
		<div class="headline-area bgc-primary pt-80 pb-65">
			<div class="container-fluid">
				<div class="services-wrap">
					<template v-for="(service, index) in services" :key="index">
						<span class="services-item" ref="service">
							<i class="fas fa-star-of-life"></i>
							{{ service.name }}
						</span>
					</template>
					<template v-for="(service, index) in services" :key="index">
						<span class="services-item" ref="service">
							<i class="fas fa-star-of-life"></i>
							{{ service.name }}
						</span>
					</template>
				</div>
			</div>
		</div>
		<!-- Headline Area end -->
	</NuxtLayout>
</template>

<script setup>
	const services = [
		{
			id: 1,
			name: 'Website Development',
			description: 'From online platforms to corporate portals, Elevate Eight handles end-to-end web design and development. Our custom solutions are powered by technology tailored to your specific needs, ensuring scalability and top-notch performance.',
		},
		{
			id: 2,
			name: 'Mobile App Development',
			description: 'Elevate Eight crafts custom mobile apps for iOS and Android, focusing on seamless UX/UI Design. Our solutions span tech startups, education, healthcare, and general use, adhering to Apple\'s App Store and Google\'s Play Store guidelines.',
		},
		{
			id: 3,
			name: 'E-commerce Wesbites',
			description: 'Transform your online business with Elevate Eight\'s e-commerce solutions. From intuitive storefronts to secure payment gateways, we optimize your digital shop for success.',
		},
		{
			id: 4,
			name: 'Search Engine Optimization',
			description: 'Optimize your online visibility with Elevate Eight\'s technical SEO solutions. From site audits to strategic optimizations, we enhance your website\'s performance and search engine rankings.',
		},
		{
			id: 5,
			name: 'Branding',
			description: 'Build a distinctive brand identity with Elevate Eight\'s branding services. From logos to messaging, we create a cohesive brand image that resonates with your audience.',
		},
		{
			id: 6,
			name: 'UX/UI Design',
			description: 'Elevate user experiences with Elevate Eight\'s tailored UX/UI designs, ensuring seamless interaction and engaging interfaces for your digital platforms.',
		},
		{
			id: 7,
			name: 'Hosting Plans',
			description: 'Reliable and scalable hosting solutions by Elevate Eight. Experience seamless performance and 24/7 support to keep your website running at its best.',
		},
		{
			id: 8,
			name: 'Logo Design',
			description: 'Make a lasting impression with Elevate Eight\'s logo design expertise. Our creative designs capture the essence of your brand, leaving a memorable mark.',
		},
		{
			id: 9,
			name: 'Social Media Marketing',
			description: 'Amplify your online presence with Elevate Eight\'s Social Media Marketing expertise. Elevate engagement, drive brand awareness, and foster meaningful connections as we craft compelling strategies tailored to your unique brand identity.',
		},
		{
			id: 10,
			name: 'Maintenance & Support',
			description: 'Ensure your digital presence is always at its prime with Elevate Eight\'s maintenance and support services. We handle the technicalities, so you can focus on your business.',
		},
	]

	const serviceRef = ref([]);

	onMounted(() => {
		// Ensure testRef is populated with references to the test elements
		serviceRef.value = Array.from(document.querySelectorAll('.services-item'));
		
		// Check if there are elements in testRef before accessing the clientWidth
		if (serviceRef.value.length > 0) {
			const serviceWidth = serviceRef.value[0].clientWidth;
			document.documentElement.style.setProperty('--service-width', `${serviceWidth}px`);
		}
	});
</script>


<style scoped>
	
	
	
</style>