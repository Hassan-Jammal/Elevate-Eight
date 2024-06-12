<template>
	<!-- Page Banner Section Start -->
	<section class="page-banner d-flex align-items-center rel z-1">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb wow fadeInUp delay-0-4s">
							<li class="breadcrumb-item">
								<NuxtLink href="/">Home</NuxtLink>
							</li>
							<li class="breadcrumb-item active">Contact Us</li>
						</ol>
					</nav>
					<h1 class="hero-title wow fadeInUp delay-0-2s text-center">Partner with us</h1>
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
								<div class="section-title mb-40">
									<h2 class="sub-title mb-15">Contact Information</h2>
									<h3>Have a question or idea?<br />Reach us</h3>
								</div>
							</div>
						</div>
						<div class="row gap-80 pb-30">
							<div class="col-sm-6">
								<div class="our-location-address mb-40">
									<h5>Lebanon</h5>

									<p class="loc"><i class="fas fa-map-marker-alt"></i>Beirut, Lebanon</p><br />
									<a class="mailto mt-5" href="mailto:info@elevate8.co"><i class="fas fa-envelope"></i>info@elevate8.co</a><br />
									<a class="callto mt-5" href="callto:++9613011568"><i class="fas fa-phone"></i>+961 3 011 568</a><br />
								</div>
							</div>
							<!-- <div class="col-sm-6">
								<div class="our-location-address mb-40">
									<h5>Qatar</h5>
									<p>Doha</p>

									<a class="callto" href="callto:+00012345688"><i class="fas fa-phone"></i>
										+000(123) 456 88</a>
								</div>
							</div> -->
							<!-- <a class="mailto" href="mailto:info@elevate8.co">info@elevate8.co</a> -->
						</div>
						<h4>Follow us</h4>
						<div class="social-style-two pt-15">
							<a href="https://www.instagram.com/elevate8agency/" target="_blank" rel="noopener noreferrer" aria-label="Visit Instagram"><i class="fab fa-instagram"></i></a>
							<a href="https://www.linkedin.com/company/elevateeight" target="_blank" rel="noopener noreferrer" aria-label="Visit Linkedin"><i class="fab fa-linkedin-in"></i></a>
							<a href="https://www.facebook.com/elevateight" target="_blank" rel="noopener noreferrer" aria-label="Visit Facebook"><i class="fab fa-facebook-f"></i></a>
						</div>
					</div>
				</div>
				<div class="col-xl-5 col-lg-6">
					<div class="contact-page-form form-style-one wow fadeInUp delay-0-2s">
						<!-- <div class="section-title mb-35">
							<h3 class="sub-title mb-15">Get in touch!</h3>
						</div> -->
						<form id="contactForm" class="contactForm" method="post" @submit.prevent="submitContactForm">
							<div class="row gap-60">
								<div class="col-md-12">
									<div class="form-group">
										<label for="contact_full_name"><i class="far fa-user"></i></label>
										<input v-model="contactForm.contact_full_name" type="text" id="contact_full_name" name="contact_full_name" class="form-control"
											placeholder="Full Name" data-error="Please enter your full name" />
										<div v-if="contactErrors.contact_full_name" class="error-message">{{ contactErrors.contact_full_name }}</div>
										<div class="help-block with-errors"></div>
									</div>
								</div>
								<div class="col-md-12">
									<div class="form-group">
										<label for="contact_email"><i class="far fa-envelope"></i></label>
										<input v-model="contactForm.contact_email" type="text" id="contact_email" name="contact_email" class="form-control"
											placeholder="Email Address"
											data-error="Please enter your email address" />
										<div v-if="contactErrors.contact_email" class="error-message">{{ contactErrors.contact_email }}</div>
										<div class="help-block with-errors"></div>
									</div>
								</div>
								<div class="col-md-12">
									<div class="form-group">
										<label for="contact_subject"><i class="far fa-question"></i></label>
										<input v-model="contactForm.contact_subject" type="text" id="contact_subject" name="contact_subject"
											class="form-control" placeholder="Subject"
											data-error="Please enter your subject" />
										<div v-if="contactErrors.contact_subject" class="error-message">{{ contactErrors.contact_subject }}</div>
										<div class="help-block with-errors"></div>
									</div>
								</div>
								<div class="col-md-12">
									<div class="form-group">
										<label for="contact_message"><i class="far fa-pencil"></i></label>
										<textarea v-model="contactForm.contact_message" name="contact_message" id="contact_message" class="form-control" rows="2"
											placeholder="Message"
											data-error="Please enter your message"></textarea>
										<div v-if="contactErrors.contact_message" class="error-message">{{ contactErrors.contact_message }}</div>
										<div class="help-block with-errors"></div>
									</div>
								</div>
								<div class="col-md-12">
									<div class="form-group pt-5 mb-0">
										<button type="submit" class="theme-btn w-100" :disabled="isContactFormSubmitted">Send Message <i class="far fa-arrow-right"></i></button>
										<div id="msgSubmit" class="hidden"></div>
									</div>
								</div>
								<div v-if="contactSubmissionMessage" class="text-xs">{{ contactSubmissionMessage }}</div>
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
			<h2 class="text-center mb-100 rmb-50">Frequently asked questions</h2>
			<div v-for="(category, index) in faqs" :key="index" class="pb-105 rpb-75">
				<div class="row align-item-center gap-100">
					<!-- Left-aligned image for even-indexed categories -->
					<div class="col-lg-5" :class="index % 2 === 0 ? 'order-1 order-lg-0' : 'order-1 order-lg-1'">
						<div class="faq-image-part rmb-55 wow fadeInLeft delay-0-2s">
							<img :src="`/assets/images/faqs/${category.image}.webp`" :alt="category.category" width="1920" height="2834" class="image-rounded" />
						</div>
					</div>
					<div class="col-lg-7" :class="index % 2 === 0 ? 'order-0 order-lg-1' : 'order-0 order-lg-0'">
						<div class="faq-content-part wow fadeInRight delay-0-2s">
							<div class="section-title mb-30">
								<h2 class="sub-title mb-15">{{ category.category }}</h2>
							</div>
							<div class="accordion" :id="'faq-accordion-' + index">
								<!-- Loop through each question in the category -->
								<div v-for="(question, qIndex) in category.questions" :key="qIndex" class="accordion-item">
									<h5 class="accordion-header">
										<button class="accordion-button collapsed" :data-bs-toggle="'collapse'"
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
</template>

<script setup>
	useSeoMeta({
		title: 'Contact Us — Questions and Project Inquiries to Dedicated Design & Development team',
		description: 'Got a project? Our team will carefully study your task and suggest on the best solution for your business. Tell us more about your idea: info@elevate8.co',
		
		ogTitle: 'Contact Us — Questions and Project Inquiries to Dedicated Design & Development team',
		ogDescription: 'Got a project? Our team will carefully study your task and suggest on the best solution for your business. Tell us more about your idea: info@elevate8.co',
		ogImage: '/assets/images/share-image-contact-us.webp',
		
		twitterTitle: 'Contact Us — Questions and Project Inquiries to Dedicated Design & Development team',
		twitterDescription: 'Got a project? Our team will carefully study your task and suggest on the best solution for your business. Tell us more about your idea: info@elevate8.co',
		twitterCard: 'summary_large_image',
	})

	const contactForm = ref({
		contact_full_name: '',
		contact_subject: '',
		contact_email: '',
		contact_message: ''
	});

	const isContactFormSubmitted = ref(false);
	const contactSubmissionMessage = ref('');

	// Define reactive variables for validation messages
	const contactErrors = ref({
        contact_full_name: '',
        contact_email: '',
        contact_subject: '',
        contact_message: '',
    });

	const contactValidationRules = {
		contact_full_name: {
			required: 'Please enter your full name',
			safe: 'Your input has invalid value'
		},
		contact_email: {
			required: 'Please enter your email address',
			email: 'Please enter a valid email address',
			safe: 'Your input has invalid value'
		},
		contact_subject: {
			required: 'Please enter your full name',
			safe: 'Your input has invalid value'
		},
		contact_message: {
			required: 'Please leave us a message',
			safe: 'Your input has invalid value'
		},
	};

	const submitContactForm = async () => {
		if (validateForm(contactForm, contactErrors, contactValidationRules)) {
			isContactFormSubmitted.value = true;
			try {
				const API_ENDPOINT = 'https://backend.elevate8.co/wp-json/contact-form-7/v1/contact-forms/6/feedback';
				// const API_ENDPOINT = 'https://backend.elevate8.co/wp-json/forminator/v1/form/64/submit';
				const formData = new FormData();
				formData.append('full-name', contactForm.value.contact_full_name);
				formData.append('email', contactForm.value.contact_email);
				formData.append('subject', contactForm.value.contact_subject);
				formData.append('message', contactForm.value.contact_message);
				formData.append('_wpcf7_unit_tag', 'rte');
				// console.log(formData);
				// return;
				const response = await fetch(API_ENDPOINT, {
					method: 'POST',
					body: formData,
				});
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
					contactSubmissionMessage.value = "Thank you for your message."
				setTimeout(() => {
					resetContactForm();
					isContactFormSubmitted.value = false;
				}, 3000);

			} catch (error) {
				// console.error("Form submission error:", error);
					contactSubmissionMessage.value = "Error in submitting your message."
				setTimeout(() => {
					resetContactForm();
					isContactFormSubmitted.value = false;
				}, 3000);
			}
		}
    };

    const resetContactForm = () => {
        contactForm.value.contact_full_name="";
        contactForm.value.contact_email="";
        contactForm.value.contact_subject="";
        contactForm.value.contact_message="";
		contactSubmissionMessage.value="";
    }

	const faqs = [
		{
			category: "Design & Development",
			image: "development",
			questions: [
				{
					question: "How long does it take to design a website/mobile app?",
					answer: "The timeframe for designing a website or mobile application varies depending on the size and complexity of the project. Typically it takes between 4 weeks to 2 months."
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
					question: "How long does it take to develop a website/mobile app?",
					answer: "The timeframe for developing a website or mobile application varies depending on the size and complexity of the project. Typically, it takes between 4 weeks to 2 months."
				},
				{
					question: "Can you help with website/mobile app maintenance and updates?",
					answer: "Absolutely! We provide website and mobile application maintenance and update services."
				},
				{
					question: "Can you optimize my website for search engines (SEO)?",
					answer: "Yes, we use industry best practices to optimize your website for search engines, improving its visibility."
				},
				{
					question: "Do you offer hosting services?",
					answer: "Yes, we provide hosting services for one year as part of our packages. The hosting services are included free of charge for the first year."
				},
				{
					question: "Can you assist with acquiring a domain name?",
					answer: "Absolutely! We can guide you in selecting and registering a relevant and memorable domain name. Additionally, as part of our packages, we offer free domain registration (standard) for the first year."
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
</script>
