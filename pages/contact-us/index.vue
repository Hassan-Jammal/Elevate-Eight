<template>
	<NuxtLayout name="elevate8">
		<!-- <PageBanner :pageName="'Contact'" /> -->

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
								<li class="breadcrumb-item active">Contact Us</li>
							</ol>
						</nav>
						<h1 class="hero-title mb-100 rmb-50 wow fadeInUp delay-0-2s">Partner with us</h1>
					</div>
				</div>
			</div>
		</section>
		<!-- Page Banner Section End -->

		<!-- Contact Form Area start -->
		<section class="contact-page-area py-130 rpy-100 rel z-1">
			<div class="container">
				<div class="row justify-content-between">
					<div class="col-lg-6">
						<div class="our-location-part rmb-55 wow fadeInUp delay-0-2s">
							<div class="row">
								<div class="col-xl-10">
									<div class="section-title mb-60">
										<span class="sub-title mb-15">Contact Information</span>
										<h2>Have a question or idea? Reach us</h2>
									</div>
								</div>
							</div>
							<div class="row gap-80 pb-30">
								<div class="col-sm-6">
									<div class="our-location-address mb-40">
										<h5>Lebanon</h5>
										<p>Hamra, Beirut</p>
										<a class="callto" href="callto:++9613011568"><i class="fas fa-phone"></i>+961
											3011 568</a>
									</div>
								</div>
								<div class="col-sm-6">
									<div class="our-location-address mb-40">
										<h5>Qatar</h5>
										<p>Doha</p>

										<a class="callto" href="callto:+00012345688"><i class="fas fa-phone"></i>
											+000(123) 456 88</a>
									</div>
								</div>
								<a class="mailto" href="mailto:info@elevate8.co">info@elevate8.co</a>
							</div>
							<h4>Follow Us</h4>
							<div class="social-style-two pt-15">
								<a href="https://www.instagram.com/elevateeight_/" rel="noopener noreferrer"><i
										class="fab fa-instagram"></i></a>
								<a href="https://www.linkedin.com/company/elevateeight" rel="noopener noreferrer"><i
										class="fab fa-linkedin-in"></i></a>
								<a href="" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
							</div>
						</div>
					</div>
					<div class="col-xl-5 col-lg-6">
						<div class="contact-page-form form-style-one wow fadeInUp delay-0-2s">
							<!-- <div class="section-title mb-35">
								<h3 class="sub-title mb-15">Get in touch!</h3>
							</div> -->
							<form id="contactForm" class="contactForm" @submit.prevent="">
								<div class="row gap-60 pt-15">
									<div class="col-md-12">
										<div class="form-group">
											<label for="name"><i class="far fa-user"></i></label>
											<input type="text" id="name" name="name" class="form-control" value=""
												placeholder="Full Name" required data-error="Please enter your name" />
											<div class="help-block with-errors"></div>
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<label for="phone_number"><i class="far fa-phone"></i></label>
											<input type="text" id="phone_number" name="phone_number"
												class="form-control" value="" placeholder="Phone" required
												data-error="Please enter your Number" />
											<div class="help-block with-errors"></div>
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<label for="email"><i class="far fa-envelope"></i></label>
											<input type="email" id="email" name="email" class="form-control" value=""
												placeholder="Email Address" required
												data-error="Please enter your Email Address" />
											<div class="help-block with-errors"></div>
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<label for="message"><i class="far fa-pencil"></i></label>
											<textarea name="message" id="message" class="form-control" rows="2"
												placeholder="Message" required
												data-error="Please enter your Message"></textarea>
											<div class="help-block with-errors"></div>
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group pt-5 mb-0">
											<button type="submit" class="theme-btn w-100">
												Send Message <i class="far fa-arrow-right"></i>
											</button>
											<div id="msgSubmit" class="hidden"></div>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Contact Form Area end -->

		<!-- FAQ's Area start -->
		<section class="faq-area rel z-1">
			<div class="container">
				<h2 class="text-center mb-100 rmb-50">Frequently Asked Questions</h2>
				<div v-for="(category, index) in faqs" :key="index" class="pb-105 rpb-75">
					<div class="row align-item-center gap-100">
						<!-- Left-aligned image for even-indexed categories -->
						<div class="col-lg-5" :class="index % 2 === 0 ? 'order-1 order-md-0' : 'order-1 order-md-1'">
							<div class="faq-image-part rmb-55 wow fadeInLeft delay-0-2s">
								<img :src="category.image" alt="FAQs" class="image-rounded" />
							</div>
						</div>
						<div class="col-lg-7" :class="index % 2 === 0 ? 'order-1 order-md-1' : 'order-1 order-md-0'">
							<div class="faq-content-part wow fadeInRight delay-0-2s">
								<div class="section-title mb-30">
									<h2 class="sub-title mb-15">{{ category.category }}</h2>
								</div>
								<div class="accordion" :id="'faq-accordion-' + index">
									<!-- Loop through each question in the category -->
									<div v-for="(question, qIndex) in category.questions" :key="qIndex" class="accordion-item">
										<h5 class="accordion-header">
											<button class="accordion-button collapsed gap-1 justify-content-between" :data-bs-toggle="'collapse'"
												:data-bs-target="'#collapse-' + index + '-' + qIndex">
												{{ question.question }}
											</button>
										</h5>
										<div :id="'collapse-' + index + '-' + qIndex" class="accordion-collapse collapse"
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

		<!-- Location Map Area Start -->
		<!-- <div class="contact-page-map mb-120 rpb-90 wow fadeInUp delay-0-2s">
			<div class="container-fluid">
				<div class="our-location">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m12!1m10!1m3!1d142190.2862584524!2d-74.01298319978558!3d40.721725351435126!2m1!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1663473911885!5m2!1sen!2sbd"
						style="border: 0; width: 100%" allowfullscreen="" loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"></iframe>
				</div>
			</div>
		</div> -->
		<!-- Location Map Area End -->
	</NuxtLayout>
</template>

<script setup>

	useSeoMeta({
		title: 'Contact Us — Questions and Project Inquiries to Dedicated Design & Development team',
		description: 'Got a project? Our team will carefully study your task and suggest on the best solution for your business. Tell us more about your idea: info@elevate8.co',
		
		ogTitle: 'Contact Us — Questions and Project Inquiries to Dedicated Design & Development team',
		ogDescription: 'Got a project? Our team will carefully study your task and suggest on the best solution for your business. Tell us more about your idea: info@elevate8.co',
		ogImage: 'https://example.com/image.png',
		
		twitterTitle: 'Contact Us — Questions and Project Inquiries to Dedicated Design & Development team',
		twitterDescription: 'Got a project? Our team will carefully study your task and suggest on the best solution for your business. Tell us more about your idea: info@elevate8.co',
		twitterCard: 'summary_large_image',
	})

const faqs = [
	{
		category: "Development",
		image: "/assets/images/faqs/development.png",
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
		image: "/assets/images/faqs/branding.png",
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
			{
				question: "Do you offer revisions if I'm not satisfied with the initial designs?",
				answer: "Definitely! We design logos that are versatile and suitable for various applications, whether it’s digital platforms, print materials, or signage. We consider the necessary factors to ensure the logo looks great in both digital and physical formats."
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
</script>
