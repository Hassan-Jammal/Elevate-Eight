<template>
	<!-- Page Banner Section Start -->
	<section class="page-banner d-flex align-items-center rel z-1">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb" data-aos="fade-up" data-aos-delay="400">
							<li class="breadcrumb-item">
								<NuxtLink href="/">Home</NuxtLink>
							</li>
							<li class="breadcrumb-item active">Work</li>
						</ol>
					</nav>
					<h1 class="hero-title text-center" data-aos="fade-up" data-aos-delay="200">
						We turn ideas into digital reality
					</h1>
				</div>
			</div>
		</div>
	</section>
	<!-- Page Banner Section End -->
	
	<!-- Project Grid Area start -->
	<section class="project-grid-area pt-130 rpt-100 pb-10 rpb-25">
		<div class="container-sm">

			<!-- <div class="section-title mb-40">
				<h2 class="sub-title">Our Work</h2>
			</div> -->
			<div class="row gap-45">
				<div v-for="(project, index) in projects" :key="index" class="project-wrapper col-xl-4 col-md-6">
					<template v-if="project.link">
						<a :href="project.link" target="_blank" rel="noopener noreferrer" aria-label="Visit Website">
							<div class="project-item">
								<div class="image" data-aos="fade-up" data-aos-delay="200">
									<img :src="project.image1" :alt="project.name" width="1920" height="2352" class="w-full image-rounded" />
									<img :src="project.image2" :alt="project.name" width="1920" height="2352" class="w-full image-rounded position-absolute top-0 start-0" />
								</div>
								<div class="content mt-25" data-aos="fade-up" data-aos-delay="200">
									<h4>{{ project.name }}</h4>
									<p class="description">{{ project.description }}</p>
									<div class="category">
										<template v-for="(cat, index) in project.category" :key="index" >
										<span>{{ cat }}</span>
										</template>
									</div>
								</div>
							</div>
						</a>
					</template>
					<template v-else>
						<div class="project-item">
							<div class="image" data-aos="fade-up" data-aos-delay="200">
								<img :src="project.image1" :alt="project.name" width="1920" height="2352" class="w-full image-rounded" />
								<img :src="project.image2" :alt="project.name" width="1920" height="2352" class="w-full image-rounded position-absolute top-0 start-0" />
							</div>
								<div class="content mt-25" data-aos="fade-up" data-aos-delay="200">
								<h4>{{ project.name }}</h4>
								<p class="description">{{ project.description }}</p>
								<div class="category">
									<template v-for="(cat, index) in project.category" :key="index" >
										<span>{{ cat }}</span>
									</template>
								</div>
							</div>
						</div>
					</template>
				</div>
			</div>
		</div>
	</section>
	<!-- Project Grid Area end -->

	<!-- Headline Area start -->
	<section class="headline-area bgc-primary pt-80 pb-65">
		<div class="container">
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
	</section>
	<!-- Headline Area end -->
	
	<!-- Work With Area start -->
	<section class="work-with-area pt-130 rpt-100 pb-150 rpb-145 rel z-1">
		<div class="container">
			<div class="row justify-content-center pb-45 rpb-25">
			<div class="col-xl-7 col-lg-9">
				<div class="section-title text-center" data-aos="fade-up" data-aos-delay="200">
				<span class="sub-title mb-15">Partner with Us</span>
				<h2>Got a Project in Mind? Let's Make it Happen!</h2>
				<a href="#" @click="toggleSidebar()" class="theme-btn text-start mt-30">Get a Quote</a>
				</div>
			</div>
			</div>
		</div>
		<span class="big-text light-opacity">Let's Work Together</span>
	</section>
	<!-- Work With Area end -->
</template>

<script setup>
	import { projectsData } from '~/data/work-data'; // Adjust the path accordingly

	useSeoMeta({
		title: 'Our Work — Branding, Design and Development',
		description: 'View all our past projects in Branding, Design and Development.',
		
		ogTitle: 'Our Work — Branding, Design and Development',
		ogDescription: 'View all our past projects in Branding, Design and Development.',
		ogImage: '/assets/images/share-image-work.webp',
		
		twitterTitle: 'Our Work — Branding, Design and Development',
		twitterDescription: 'View all our past projects in Branding, Design and Development.',
		twitterCard: 'summary_large_image',
	})

	const projects = ref([]);

	const services = [
		{
			id: 1,
			name: 'Website Development',
			description: 'From online platforms to corporate portals, Elevate8 handles end-to-end web design and development. Our custom solutions are powered by technology tailored to your specific needs, ensuring scalability and top-notch performance.',
			icon: 'website-development',
			featured: false
		},
		{
			id: 2,
			name: 'Mobile App Development',
			description: 'Elevate8 crafts custom mobile apps for iOS and Android, focusing on seamless UX/UI Design. Our solutions span tech startups, education, healthcare, and general use, adhering to Apple\'s App Store and Google\'s Play Store guidelines.',
			icon: 'mobile-app-development',
			featured: false
		},
		{
			id: 3,
			name: 'E-commerce Websites',
			description: 'Transform your online business with Elevate8\'s e-commerce solutions. From intuitive storefronts to secure payment gateways, we optimize your digital shop for success.',
			icon: 'e-commerce-websites',
			featured: false
		},
		{
			id: 4,
			name: 'Search Engine Optimization',
			description: 'Optimize your online visibility with Elevate8\'s technical SEO solutions. From site audits to strategic optimizations, we enhance your website\'s performance and search engine rankings.',
			icon: 'search-engine-optimization',
			featured: false
		},
		{
			id: 5,
			name: 'Branding',
			description: 'Build a distinctive brand identity with Elevate8\'s branding services. From logos to messaging, we create a cohesive brand image that resonates with your audience.',
			icon: 'branding',
			featured: true
		},
		{
			id: 6,
			name: 'UX/UI Design',
			description: 'Elevate user experiences with Elevate8\'s tailored UX/UI designs, ensuring seamless interaction and engaging interfaces for your digital platforms.',
			icon: 'ui-ux-design',
			featured: true
		},
		{
			id: 7,
			name: 'Hosting Plans',
			description: 'Reliable and scalable hosting solutions by Elevate8. Experience seamless performance and 24/7 support to keep your website running at its best.',
			icon: 'hosting-plans',
			featured: false
		},
		{
			id: 8,
			name: 'Logo Design',
			description: 'Make a lasting impression with Elevate8\'s logo design expertise. Our creative designs capture the essence of your brand, leaving a memorable mark.',
			icon: 'logo-design',
			featured: true
		},
		{
			id: 9,
			name: 'Social Media Management',
			description: 'Amplify your online presence with Elevate8\'s Social Media Management expertise. Elevate engagement, drive brand awareness, and foster meaningful connections as we craft compelling strategies tailored to your unique brand identity.',
			icon: 'social-media-marketing',
			featured: true
		},
		{
			id: 10,
			name: 'Maintenance & Support',
			description: 'Ensure your digital presence is always at its prime with Elevate8\'s maintenance and support services. We handle the technicalities, so you can focus on your business.',
			icon: 'maintenance-support',
			featured: false
		},
	];


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