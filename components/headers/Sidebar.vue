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
							<div class="country-phone-container">
								<div class="country-dropdown-container">
									<div @click="toggleDropdown" class="custom-dropdown">
										<div id="selected-country" class="selected-country">
											<img class="country-flag" :src="`/assets/images/flags/${selectedCountry.iso2 || 'LB' }.svg`" :alt="selectedCountry.name || 'Lebanon'" width="20" height="20">
											<span class="country-code">+{{ selectedCountry.code || '961' }}</span>
										</div>
										<!-- Add icon for dropdown if needed -->
									</div>
									<input v-model="form.code" type="hidden" id="code" class="country-code-input">
									<div v-if="errors.code" class="error-message">{{ errors.code }}</div>
								</div>

								<ul v-if="showDropdown" ref="dropdownContainer" @scroll="handleScroll" class="country-list dropdown-container">
									<input v-model="searchQuery" type="text" id="search" placeholder="Search" class="country-search-input">
									<template v-for="country in filteredCountries">
										<li v-if="country.status == 1" :key="country.id" @click="selectCountry(country)" class="country-list-item">
											<img class="country-flag" :src="`/assets/images/flags/${country.iso2}.svg`" :alt="country.name" width="20" height="20" />
											<span class="country-code">(+{{ country.code }})</span>
											<span class="country-name">{{ country.name }}</span>
										</li>
									</template>
								</ul>

								<div class="phone-number-container">
									<input v-model="form.phone_number" type="text" id="phone_number" placeholder="Phone Number" class="phone-number-input">
									<div v-if="errors.phone_number" class="error-message">{{ errors.phone_number }}</div>
								</div>
							</div>
						</div>
					
						<!-- <div class="form-group">
							<input v-model="form.phone_number" type="text" id="phone_number" name="phone_number" placeholder="Phone Number" data-error="Please enter your Number" />
							<div v-if="errors.phone_number" class="error-message">{{ errors.phone_number }}</div>
							<div class="help-block with-errors"></div>
						</div> -->
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
	import { useCountry } from '~/composables/useCountry';
	const { selectedCountry, detectCountry, countriesData } = useCountry();
	const emit = defineEmits();

	// Country-related State
    const countries = ref([]);
    const showDropdown = ref(false);
    const placeholder = 'Code';
    const filteredCountries = ref([]);
    const searchQuery = ref('');
    const dropdownContainer = ref(null);
    const lastLoadedIndex = ref(0);
    const searchFlag = ref(false);
    const initialCode = ref(''); // Store initial value

	onMounted(async () => {
		// Load initial countries in the country code dropdown
        loadInitialCountries();

		// Detect country immediately on component mount and assign it to form.value.code
		detectCountry().then(() => {
			initialCode.value = selectedCountry.value.code
			form.value.code = selectedCountry.value.code;
		});
	});

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

	const isFormSubmitted = ref(false);
	const submissionMessage = ref('');

	const form = ref({
		full_name: '',
		email: '',
		code: '',
		phone_number: '',
		company_name: '',
		services: '',
        timeline: '',
		message: ''
	});
	
	// Define reactive variables for validation messages
	const errors = ref({
        full_name: '',
        email: '',
		code: '',
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
		code: {
            required: 'Please choose your country code',
            code: 'Please enter a valid country code',
            safe: 'Your input has invalid value'
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
		isFormSubmitted.value = true;

		const selectedServices = value.value.join(', '); 
		const selectedTimeline = value2.value; 

		form.value.services = selectedServices; // Append selected services to form object
		form.value.timeline = selectedTimeline;

        const isFormValid = validateForm(form, errors, validationRules);

        if (!isFormValid) {
			isFormSubmitted.value = false; // Re-enable the button
            return; // Stop submission if form or file validation fails
		}

		try {	
			const API_ENDPOINT = 'https://backend.elevate8.co/wp-json/contact-form-7/v1/contact-forms/12/feedback';
			const formData = new FormData();
			formData.append('full-name', form.value.full_name);
			formData.append('email', form.value.email);
			formData.append('code', "+" + form.value.code);
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

			if(data.status == 'validation_failed'){
				submissionMessage.value = "Error in submitting your message. Please try again later";
				// Clear error message after 2 seconds
				setTimeout(() => {
					submissionMessage.value = "";
				}, 2000);
				throw new Error('Validation Error');
			}
			
			submissionMessage.value = "Thank you for reaching out to us. We'll get back to you soon."
			setTimeout(() => {
				resetForm();
				toggleSidebar();
			}, 3000);
		} catch (error) {
			// console.error("Form submission error:", error);
			submissionMessage.value = "Error in submitting your message. Please try again later"
			setTimeout(() => {
				resetForm();
			}, 3000);
		} finally {
			// Re-enable the submit button
			isFormSubmitted.value = false;
		}
    };

	// Resetting the form
    const resetForm = () => {
        form.value = {
			full_name: '',
			email: '',
			code: selectedCountry.value ? selectedCountry.value.code : initialCode.value,
			phone_number: '',
			company_name: '',
			services: '',
			timeline: '',
			message: ''
        };
        errors.value = {
            full_name: '',
			email: '',
			code: '',
			phone_number: '',
			company_name: '',
			services: '',
			timeline: '',
			message: ''
        };
    };

	// Choosing Country
    const toggleDropdown = () => {
        showDropdown.value = !showDropdown.value;

        // Reset country list and lastLoadedIndex when closing the dropdown
        if (!showDropdown.value) {
            resetDropdown();
        }
    };

    const resetDropdown = () => {
        countries.value = [];
        lastLoadedIndex.value = 0;
        filteredCountries.value = [];
        searchFlag.value = false
        searchQuery.value = ''
        loadInitialCountries();
    };

    const closeDropdown = () => {
        loadInitialCountries();
    };

    const selectCountry = (country) => {
        selectedCountry.value = country;
        form.value.code = country.code;
        emit('select', country);
        showDropdown.value = false;
        resetDropdown()
    };

    const loadInitialCountries = () => {
        loadNextCountries();
    };

    const loadNextCountries = () => {
        const batchSize = 10;
        const startIndex = lastLoadedIndex.value;
        const endIndex = startIndex + batchSize;
        const nextBatch = countriesData.slice(startIndex, endIndex);

        countries.value = [...countries.value, ...nextBatch];
        lastLoadedIndex.value = endIndex;
        filteredCountries.value = countries.value;
    };

    const handleScroll = () => {
        const container = dropdownContainer.value;
        if (searchQuery.value === '' && container.scrollTop + container.clientHeight >= container.scrollHeight - 20) {
            if (!searchFlag.value) {
                loadNextCountries();
            }
        }
    };

    const searchCountries = () => {
        const searchResults = countriesData.filter((country) =>
            country.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
        if (searchQuery.value != '') {
            filteredCountries.value = searchResults;
            searchFlag.value = true
        }
        else {
            resetDropdown();
        }
    };

    watch(searchQuery, searchCountries);

    // const resetForm = () => {
    //     form.value.full_name="";
    //     form.value.email="";
    //     form.value.phone_number="";
    //     form.value.company_name="";
    //     value.value=[];
    //     value2.value="";
    //     form.value.message="";
	// 	submissionMessage.value="";
    // }
</script>

<style scoped>
/* .custom-dropdown{
	position: relative;
    display: block;
    width: 100%;
    line-height: 23px;
    padding: 10px 18px !important;
    font-size: 16px;
    background-color: transparent;
    -webkit-transition: .3s;
    -o-transition: .3s;
    transition: .3s;
    border: 1px solid var(--e8-border-color);;
    width: 100%;
    height: auto;
    border-radius: 5px;
    padding: 15px 30px;
    border: 1px solid var(--e8-border-color);
	cursor: pointer
}

.form-group {
} */

/* Flex container for country dropdown and phone number */
.country-phone-container {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}

/* Country dropdown container */
.country-dropdown-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 160px;
}

/* Custom dropdown trigger */
.custom-dropdown {
	position: relative;
    display: block;
    width: 100%;
	height: auto;
    padding: 10px 18px !important;
    color: #fff;
    font-size: 16px;
    background: 0 0;
	border: 1px solid #1a1a1d;
    border-radius: 5px; 
    line-height: 23px;
    transition: 0.3s;
	-webkit-transition: 0.3s;
    -o-transition: 0.3s;
	cursor: pointer;
}

/* Selected country display */
.selected-country {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
	line-height: 23px;
}

/* Country flag styling */
.country-flag {
    width: auto;
}

/* Country code styling */
.country-code {
    font-size: 16px;
    color: #000;
}

/* Hidden input for storing the country code */
.country-code-input {
    /* You can hide this element */
    display: none;
}

/* Country list dropdown container */
.country-list {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    max-height: 200px;
    border-radius: 20px;
    /* background-color: white; */
    background: #000000;
    overflow: auto;
    z-index: 50;
    margin-top: 0.5rem;
}

/* Search input inside dropdown */
.country-search-input {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
	border: 0;
    border-bottom: 1px solid #1a1a1d !important;
	border-radius: 0;
    background-color: white;
    color: #73788b;
    padding: 10px;
    z-index: 10;
    outline: none;
}

/* Each country list item */
.country-list-item {
    display: flex;
    gap: 0.5rem;
    padding: 10px;
    color: #000;
    cursor: pointer;
}

/* Hover effect on country list items */
.country-list-item:hover {
    background-color: #101010;
}

/* Country code in dropdown list */
.country-code {
    font-size: 16px;
    color: #FFFFFF;
}

/* Country name in dropdown list */
.country-name {
    font-size: 12px;
    color: #73788b;
}

/* Phone number input container */
.phone-number-container {
    width: 100%;
}

/* Phone number input styling */
.phone-number-input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #1a1a1d;
    outline: none;
}

/* Error message styling */
.error-message {
    color: red;
    font-size: 12px;
    margin-top: 0.5rem;
}

/* Help block (optional styling) */
.help-block {
    font-size: 12px;
    color: #73788b;
}

</style>