<template>
	<!--Form Back Drop-->
	<div class="form-back-drop" @click="toggleSidebar()"></div>

	<!-- Hidden Sidebar -->
	<section class="hidden-bar">
		<div class="container">
			<div class="inner-box text-center">
				<div class="cross-icon" @click="toggleSidebar()">
					<span class="fa fa-times"></span>
				</div>
				<div class="title">
					<h4>Experience real results</h4>
				</div>

				<!--Appointment Form-->
				<div class="appointment-form">
					<form id="getQuoteForm" class="getQuoteForm" method="post" @submit.prevent="submitForm">
						<div class="form-group">
							<input v-model="form.full_name" type="text" id="full_name" name="full_name" placeholder="Full Name" data-error="Please enter your full name" />
							<div v-if="errors.full_name" class="error-message">{{ errors.full_name }}</div>
							<div class="help-block with-errors"></div>
						</div>
						<div class="form-group">
							<input v-model="form.email" type="text" id="email" name="email" placeholder="Email Address" data-error="Please enter your Email Address" />
							<div v-if="errors.email" class="error-message">{{ errors.email }}</div>
							<div class="help-block with-errors"></div>
						</div>
						<div class="form-group">
							<input v-model="form.phone_number" type="text" id="phone_number" name="phone_number" placeholder="Phone Number" data-error="Please enter your Number" />
							<div v-if="errors.phone_number" class="error-message">{{ errors.phone_number }}</div>
							<div class="help-block with-errors"></div>
						</div>
						<div class="form-group">
							<input v-model="form.company_name" type="text" id="company_name" name="company_name" placeholder="Company Name (optional)" />
							<div class="help-block with-errors"></div>
						</div>
						<div class="form-group">
							<VaSelect
								v-model="value"
								placeholder="Choose Services"
								:options="options"
								multiple
								color="#7f4EFF"
								class="w-100"
							>
								<template v-slot:content="{ value }">
									<VaChip
										v-for="chip in value"
										color="#7f4EFF"
										:key="chip"
										size="small"
										class="mr-1 my-1"
										closeable
										@update:modelValue="deleteChip(chip)"
									>
									{{ chip }}
									</VaChip>
								</template>
							</VaSelect>
							<div v-if="errors.services" class="error-message">{{ errors.services }}</div>
							<div class="help-block with-errors"></div>
						</div>
						<div class="form-group">
							<VaSelect
								v-model="value2"
								placeholder="Choose Timeline Preference"
								:options="options2"
								color="#7f4EFF"
								class="w-100"
							>
							</VaSelect>
							<div v-if="errors.timeline" class="error-message">{{ errors.timeline }}</div>
							<div class="help-block with-errors"></div>
						</div>
						<div class="form-group">
							<textarea v-model="form.message" id="message" name="message" placeholder="Tell us about your business" rows="5" data-error="Please enter your message"></textarea>
							<div v-if="errors.message" class="error-message">{{ errors.message }}</div>
							<div class="help-block with-errors"></div>
						</div>
						<div class="form-group">
							<button type="submit" class="theme-btn" :disabled="isFormSubmitted">Send My Free Proposal <i class="far fa-arrow-right"></i></button>
							<div id="msgSubmit" class="hidden"></div>
						</div>
						<div v-if="submissionMessage" class="text-xs">{{ submissionMessage }}</div>
					</form>
				</div>

				<!--Social Icons-->
				<div class="social-style-one">
					<a href="https://www.instagram.com/elevate8agency/" target="_blank" rel="noopener noreferrer" aria-label="Visit Instagram"><i class="fab fa-instagram"></i></a>
					<a href="https://www.linkedin.com/company/elevateeight" target="_blank" rel="noopener noreferrer" aria-label="Visit Linkedin"><i class="fab fa-linkedin-in"></i></a>
					<a href="https://www.facebook.com/elevateight" target="_blank" rel="noopener noreferrer" aria-label="Visit Facebook"><i class="fab fa-facebook-f"></i></a>
				</div>
			</div>
		</div>
	</section>
	<!--End Hidden Sidebar -->
</template>

<script setup>
	const toggleSidebar = () => {
		document.querySelector("body").classList.remove("side-content-visible");
	};

	const options = [
		"Web Development",
		"App Development",
		"E-commerce Website",
		"Search Engine Optimization",
		"Branding",
		"UX/UI Design",
		"Hosting Plans",
		"Logo Design",
		"Social Media Management",
		"Maintenance & Support",
	];

	const options2 = [
		"As Soon As Possible",
		"Within the Next Few Days",
		"Within the Next Few Weeks",
		"Within the Next 1-3 months",
		"Within the Next 3-6 months",
	];

	const value = ref([]);

	const deleteChip = (chip) => {
		value.value = value.value.filter((v) => v !== chip);
	};

	const value2 = ref(null);

	const form = ref({
		full_name: '',
		email: '',
		phone_number: '',
		company_name: '',
		message: ''
	});

	const isFormSubmitted = ref(false);
	const submissionMessage = ref('');
	
	// Define reactive variables for validation messages
	const errors = ref({
        full_name: '',
        email: '',
        phone_number: '',
        services: '',
        timeline: '',
        message: '',
    });

	const validationRules = {
		full_name: {
			required: 'Please enter your full name',
			safe: 'Your full name has invalid value'
		},
		email: {
			required: 'Please enter your email address',
			email: 'Please enter a valid email address',
			safe: 'Your email has invalid value'
		},
		phone_number: {
			required: 'Please enter your mobile number',
			numeric: 'Please enter a valid numeric phone number',
			length: 'Please enter a valid phone number',
			safe: 'Your mobile number has invalid value'
		},
		services: {
			required: 'Please choose at least one service',
			safe: 'Your services has invalid value'
		},
		timeline: {
			required: 'Please choose your timeline preference',
			safe: 'Your timeline preference has invalid value'
		},
		message: {
			required: 'Please leave us a message',
			safe: 'Your message has invalid value'
		},
	};

	const submitForm = async () => {
		const selectedServices = value.value.join(', '); 
		const selectedTimeline = value2.value; 

		form.value.services = selectedServices; // Append selected services to form object
		form.value.timeline = selectedTimeline;

		if (validateForm(form, errors, validationRules)) {
			isFormSubmitted.value = true;
			try {	
				const API_ENDPOINT = 'https://backend.elevate8.co/wp-json/contact-form-7/v1/contact-forms/12/feedback';
				const formData = new FormData();
				formData.append('full-name', form.value.full_name);
				formData.append('email', form.value.email);
				formData.append('phone-number', form.value.phone_number);
				formData.append('company-name', form.value.company_name);
				formData.append('services', selectedServices); // Add chosen services
				formData.append('timeline', selectedTimeline); // Add chosen timeline
				formData.append('message', form.value.message);
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
					submissionMessage.value = "Thank you for reaching out to us. We'll get back to you soon."
				setTimeout(() => {
					resetForm();
					toggleSidebar();
					isFormSubmitted.value = false;
				}, 3000);
			} catch (error) {
				// console.error("Form submission error:", error);
				submissionMessage.value = "Error in submitting your message."
				setTimeout(() => {
					resetForm();
					isFormSubmitted.value = false;
				}, 3000);
			}
		}
    };

    const resetForm = () => {
        form.value.full_name="";
        form.value.email="";
        form.value.phone_number="";
        form.value.company_name="";
        value.value=[];
        value2.value="";
        form.value.message="";
		submissionMessage.value="";
    }
</script>