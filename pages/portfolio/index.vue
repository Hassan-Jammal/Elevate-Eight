<template>
	<NuxtLayout name="elevate8">
		<!-- <PageBanner :pageName="'Project Grid'" /> -->

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
								<li class="breadcrumb-item active">Portfolio</li>
							</ol>
						</nav>
						<h1 class="hero-title mb-100 rmb-50 wow fadeInUp delay-0-2s ">
							Turning Ideas into Digital Reality
						</h1>
					</div>
				</div>
			</div>
		</section>
		<!-- Page Banner Section End -->
		
		<!-- Project Grid Area start -->
		<section class="project-grid-area pt-130 rpt-100 pb-10 rpb-25">
			<div class="container container-1210">

				<h2 class="section-title mb-60">
					<span class="sub-title">Our Works</span>
				</h2>
				
				<div class="row gap-110">
					<div v-for="(project, index) in projects" :key="index" class="col-lg-6">
						<div class="project-item">
							<div class="image wow fadeInUp delay-0-2s">
								<img :src="project.image" :alt="'Project ' + (index + 1)" />
								<NuxtLink :to="`/projects/${project.slug}`" class="project-btn">
									<i class="far fa-arrow-right"></i>
								</NuxtLink>
							</div>
							<div class="content wow fadeInUp delay-0-2s">
								<NuxtLink :to="`/projects/${project.slug}`" class="category">{{ project.category }}</NuxtLink>
								<h2>
									<NuxtLink :to="`/projects/${project.slug}`">{{ project.name }}</NuxtLink>
								</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Project Grid Area end -->

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
		
		<!-- Work With Area start -->
		<section class="work-with-area pt-130 rpt-100 pb-150 rpb-145 rel z-1">
			<div class="container">
				<div class="row justify-content-center pb-45 rpb-25">
				<div class="col-xl-7 col-lg-9">
					<div class="section-title text-center wow fadeInUp delay-0-2s">
					<span class="sub-title mb-15">Partner with Us</span>
					<h2>Got a Project in Mind? Let's Make it Happen!</h2>
					<a href="#" @click="toggleSidebar()" class="theme-btn text-start mt-30">Get a Quote</a>
					</div>
				</div>
				</div>
			</div>
			<span class="big-text light-opacity">Let’s Work Together</span>
		</section>
		<!-- Work With Area end -->
	</NuxtLayout>
</template>

<script setup>
	import { projectsData } from '~/data/work-data'; // Adjust the path accordingly

	const projects = ref([]);
	
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
			name: 'Social Media Management',
			description: 'Amplify your online presence with Elevate Eight\'s Social Media Management expertise. Elevate engagement, drive brand awareness, and foster meaningful connections as we craft compelling strategies tailored to your unique brand identity.',
		},
		{
			id: 10,
			name: 'Maintenance & Support',
			description: 'Ensure your digital presence is always at its prime with Elevate Eight\'s maintenance and support services. We handle the technicalities, so you can focus on your business.',
		},
	]

	const serviceRef = ref([]);

	const fetchData = () => {
		projects.value = projectsData.map(project => ({
			...project,
		}));
	};


	const toggleSidebar = () => {
		document.querySelector("body").classList.add("side-content-visible");
	};
	
	onMounted(() => {

		fetchData();

		// Ensure testRef is populated with references to the test elements
		serviceRef.value = Array.from(document.querySelectorAll('.services-item'));
		
		// Check if there are elements in testRef before accessing the clientWidth
		if (serviceRef.value.length > 0) {
			const serviceWidth = serviceRef.value[0].clientWidth;
			document.documentElement.style.setProperty('--service-width', `${serviceWidth}px`);
		}
	});
</script>
