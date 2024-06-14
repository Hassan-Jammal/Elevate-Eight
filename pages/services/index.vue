<template>
	<!-- Page Banner Section Start -->
	<section class="page-banner w-100 d-flex align-items-center rel z-1">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb" data-aos="fade-up" data-aos-delay="400">
							<li class="breadcrumb-item">
								<NuxtLink href="/">Home</NuxtLink>
							</li>
							<li class="breadcrumb-item active">Services</li>
						</ol>
					</nav>
					<h1 class="hero-title text-center" data-aos="fade-up" data-aos-delay="200">We've got everything covered</h1>
				</div>
			</div>
		</div>
	</section>
	<!-- Page Banner Section End -->

	<!-- Service Style Three start -->
	<section class="service-three-area pt-130 rpt-100 rel z-1">
		<div class="container">
			<div class="section-title mb-40">
				<h2 class="sub-title">What We Offer</h2>
			</div>
			<div class="row">
				<div v-for="(service, index) in services" :key="index" class="col-md-6">
					<div class="service-three-item" data-aos="fade-up" :data-aos-delay="index * 100">
						<div class="d-flex flex-column">
							<span class="serial-number">{{ service.id < 10 ? '0' + service.id : service.id }}</span>
							<div class="title-icon">
								<h5>{{ service.name }}</h5>
								<img :src="`/assets/images/services/${service.icon}.svg`" :alt="service.name" width="50" height="50" class="w-auto" />
							</div>
						</div>
						<div class="content">
							<p>{{ service.description }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- Service Style Three end -->

	<!-- Work Process Area start -->
	<section class="work-process-area pt-130 rpt-100 rel z-1">
		<div class="container rel z-1">
			<h2 class="text-center mb-100 rmb-50">Core steps</h2>
			<div class="row gap-70">
				<div class="col-lg-4">
					<div class="work-step-item style-two" data-aos="fade-down" data-aos-delay="200">
						<span class="step-number">Step 01</span>
						<h4 class="title">Objectives and Target Audience</h4>
						<div class="content">
							<p>Clearly outline project goals and identify target users.</p>
						</div>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="work-step-item style-two mt-60 rmt-0" data-aos="fade-up" data-aos-delay="200">
						<span class="step-number">Step 02</span>
						<h4 class="title">Design</h4>
						<div class="content">
							<p>Develop the visual and structural aspects of the project.</p>
						</div>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="work-step-item style-two mt-120 rmt-0" data-aos="fade-down" data-aos-delay="200">
						<span class="step-number">Step 03</span>
						<h4 class="title">Development</h4>
						<div class="content">
							<p>Build the project's functional components.</p>
						</div>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="work-step-item style-two rmt-180 rmt-0" data-aos="fade-down" data-aos-delay="200">
						<span class="step-number">Step 04</span>
						<h4 class="title">Testing</h4>
						<div class="content">
							<p>Ensure the project functions correctly through rigorous testing.</p>
						</div>
					</div>
				</div>

				<div class="col-lg-4">
					<div class="work-step-item style-two mt-60 rmt-0" data-aos="fade-up" data-aos-delay="200">
						<span class="step-number">Step 05</span>
						<h4 class="title">Deployment</h4>
						<div class="content">
							<p>Make the project accessible to users.</p>
						</div>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="work-step-item style-two mt-120 rmt-0" data-aos="fade-down" data-aos-delay="200">
						<span class="step-number">Step 06</span>
						<h4 class="title">Maintenance and Updates</h4>
						<div class="content">
							<p>Continuously improve and update the project.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- Work Process Area end -->

	<!-- FAQ's Area start -->
	<section class="faq-area pt-130 rpt-100 rel z-1">
		<div class="container">
			<h2 class="text-center mb-100 rmb-50">Frequently asked questions</h2>
			<div v-for="(category, index) in faqs" :key="index" class="pb-105 rpb-75">
				<div class="row align-item-center gap-100">
					<!-- Left-aligned image for even-indexed categories -->
					<div class="col-lg-5" :class="index % 2 === 0 ? 'order-1 order-lg-0' : 'order-1 order-lg-1'">
						<div class="faq-image-part rmb-55" data-aos="fade-left" data-aos-delay="200">
							<img :src="`/assets/images/faqs/${category.image}.webp`" :alt="category.category" width="1920" height="2834" class="image-rounded" />
						</div>
					</div>
					<div class="col-lg-7" :class="index % 2 === 0 ? 'order-0 order-lg-1' : 'order-0 order-lg-0'">
						<div class="faq-content-part" data-aos="fade-right" data-aos-delay="200">
							<div class="section-title mb-30">
								<h2 class="sub-title mb-15">{{ category.category }}</h2>
							</div>
							<div class="accordion" :id="'faq-accordion-' + index">
								<!-- Loop through each question in the category -->
								<div v-for="(question, qIndex) in category.questions" :key="qIndex"
									class="accordion-item">
									<h5 class="accordion-header">
										<button class="accordion-button collapsed"
											:data-bs-toggle="'collapse'"
											:data-bs-target="'#collapse-' + index + '-' + qIndex">
											{{ question.question }}
										</button>
									</h5>
									<div :id="'collapse-' + index + '-' + qIndex"
										class="accordion-collapse collapse"
										:data-bs-parent="'#faq-accordion-' + index">
										<div class="accordion-body">
											<p>{{ question.answer }}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- FAQ's Area end -->
</template>

<script setup>
	useSeoMeta({
		title: 'Our Services — Services we offer',
		description: 'We provide all the services you need to ship your digital product and reach to your target audience. From analysis to design, development and finally launching.',
		
		ogTitle: 'Our Services — Services we offer',
		ogDescription: 'We provide all the services you need to ship your digital product and reach to your target audience. From analysis to design, development and finally launching.',
		ogImage: '/assets/images/share-image-services.webp',
		
		twitterTitle: 'Our Services — Services we offer',
		twitterDescription: 'We provide all the services you need to ship your digital product and reach to your target audience. From analysis to design, development and finally launching.',
		twitterCard: 'summary_large_image',
	})

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
			name: 'E-commerce Wesbites',
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


	const faqs = [
		{
			category: "Design & Development",
			image: "development",
			questions: [
				{
					question: "How long does it take to design a website or a mobile application?",
					answer: "The timeframe for website or a mobile application design varies, but typically it takes between 3 weeks to 2 months."
				},
				{
					question: "What info do you need from me to start the design process?",
					answer: "We'll need your business details, branding materials, design preferences, and content you want on the website or the mobile application"
				},
				{
					question: "Will my website be mobile-friendly and responsive?",
					answer: "Absolutely! We prioritize creating responsive websites for optimal viewing on desktops, laptops, tablets, and phones."
				},
				{
					question: "Can you help with website maintenance and updates?",
					answer: "Absolutely! We provide website and mobile application maintenance and update services for one year. After the initial year, the cost for maintenance and hosting is $150 to $300, depending on the size and products on your site."
				},
				{
					question: "Can you optimize my website for search engines (SEO)?",
					answer: "Yes, we use industry best practices to optimize your website for search engines, improving its visibility."
				},
				{
					question: "Do you offer hosting services?",
					answer: "Yes, we provide hosting services for one year as part of our packages. The hosting services are included free of charge for the first year. After the first year, there is an additional cost for hosting and maintenance, which ranges from $150 to $300 depending on the size and products on your site."
				},
				{
					question: "Can you assist with acquiring a domain name?",
					answer: "Absolutely! We can guide you in selecting and registering a relevant and memorable domain name. Additionally, as part of our packages, we offer free domain registration (standard) and hosting services for the first year."
				}
			]
		},
		{
			category: "Branding",
			image: "branding",
			questions: [
				{
					question: "How long does it take to design a logo?",
					answer: "The timeframe for logo design varies depending on the complexity and revisions needed. Typically, it takes between 1 to 3 weeks to create a unique and impactful logo."
				},
				{
					question: "What information do you need from me to start the logo design process?",
					answer: "We'll need to understand your business, target audience, brand values, and any specific ideas or preferences you have for your logo. Providing examples of logos you like can also be helpful."
				},
				{
					question: "Will I have ownership rights to the logo design?",
					answer: "Yes, once the design is finalized and payment is completed, you will have full ownership rights to the logo. We transfer all rights and provide the necessary files for you to use the logo across various platforms."
				},
				{
					question: "Can you provide multiple design options to choose from?",
					answer: "Absolutely! We provide initial logo concepts for you to review and provide feedback on. Based on your input, we refine and iterate on the design until we achieve the desired logo for your brand."
				},
				{
					question: "What file formats will I receive for my logo?",
					answer: "Upon completion, we provide your logo in various formats including high-resolution vector files (such as AI, EPS, or SVG) and commonly used raster formats (such as PNG or JPEG). These files ensure versatility and scalability for different applications."
				},
				{
					question: "Can you assist with branding beyond logo design?",
					answer: "Yes, we can help with various aspects of branding including color palettes, typography selection, and brand guidelines to ensure consistency across all your marketing materials."
				},
				{
					question: "Do you offer revisions if I'm not satisfied with the initial designs?",
					answer: "Absolutely! We value your satisfaction and provide a certain number of revisions to ensure we meet your expectations. We work closely with you throughout the design process to refine the logo until it represents your vision."
				},
			]
		},
		// {
		// 	category: "Design",
		// 	image: "",
		// 	questions: [
		// 		{
		// 			question: "",
		// 			answer: ""
		// 		},
		// 		{
		// 			question: "",
		// 			answer: ""
		// 		},
		// 		{
		// 			question: "",
		// 			answer: ""
		// 		},
		// 		{
		// 			question: "",
		// 			answer: ""
		// 		},
		// 		{
		// 			question: "",
		// 			answer: ""
		// 		},
		// 		{
		// 			question: "",
		// 			answer: ""
		// 		}
		// 	]
		// }
	];

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