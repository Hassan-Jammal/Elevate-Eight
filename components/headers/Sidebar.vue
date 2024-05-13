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
					<h4>Experience Real Results</h4>
				</div>

				<!--Appointment Form-->
				<div class="appointment-form">
					<form id="getQuoteForm" class="getQuoteForm" method="post" @submit.prevent="submitForm">
						<div class="form-group">
							<input v-model="formValues.full_name" type="text" id="full_name" name="full_name" placeholder="Full Name" required data-error="Please enter your name" />
							<div class="help-block with-errors"></div>
						</div>
						<div class="form-group">
							<input v-model="formValues.email" type="email" id="email" name="email" placeholder="Email Address" required data-error="Please enter your Email Address" />
							<div class="help-block with-errors"></div>
						</div>
						<div class="form-group">
							<input v-model="formValues.phone_number" type="text" id="phone_number" name="phone_number" placeholder="Phone" required data-error="Please enter your Number" />
							<div class="help-block with-errors"></div>
						</div>
						<div class="form-group">
							<input v-model="formValues.company_name" type="text" id="company_name" name="company_name" placeholder="Company Name (optional)" />
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
							<div class="help-block with-errors"></div>
						</div>
						<div class="form-group">
							<textarea v-model="formValues.message" id="message" name="message" placeholder="Tell us about your business" rows="5"></textarea>
							<div class="help-block with-errors"></div>
						</div>
						<div class="form-group">
							<button type="submit" class="theme-btn" :disabled="isFormSubmitted">Send My Free Proposal <i class="far fa-arrow-right"></i></button>
							<div id="msgSubmit" class="hidden"></div>
						</div>
						<div v-if="submissionMessage">{{ submissionMessage }}</div>
					</form>
				</div>

				<!--Social Icons-->
				<div class="social-style-one">
					<a href="https://www.instagram.com/elevateeight_/" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
					<a href="https://www.linkedin.com/company/elevateeight" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
					<a href="" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
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
		"UI/UX Design",
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

	const formValues = ref({
		full_name: '',
		email: '',
		phone_number: '',
		company_name: '',
		message: ''
	});

	const isFormSubmitted = ref(false);
	const submissionMessage = ref('');

	const submitForm = async () => {
		isFormSubmitted.value = true;
		
		try {	
			const API_ENDPOINT = 'https://backend.elevate8.co/wp-json/contact-form-7/v1/contact-forms/12/feedback';
			const formData = new FormData();
			formData.append('full-name', formValues.value.full_name);
			formData.append('email', formValues.value.email);
			formData.append('phone-number', formValues.value.phone_number);
			formData.append('company-name', formValues.value.company_name);
			formData.append('services', value.value.join(', ')); // Add chosen services
			formData.append('timeline', value2.value); // Add chosen timeline
			formData.append('message', formValues.value.message);
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
				submissionMessage.value = "Thank you for your message."
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
    };

    const resetForm = () => {
        formValues.value.full_name="";
        formValues.value.email="";
        formValues.value.phone_number="";
        formValues.value.company_name="";
        value.value=[];
        value2.value="";
        formValues.value.message="";
		submissionMessage.value="";
    }
</script>