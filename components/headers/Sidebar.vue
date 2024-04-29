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
					<form method="post" @submit.prevent="toggleSidebar()">
						<div class="form-group">
							<input type="text" name="full_name" value="" placeholder="Full Name" />
						</div>
						<div class="form-group">
							<input type="text" name="email" value="" placeholder="Email Address" />
						</div>
						<div class="form-group">
							<input type="text" name="mobile" value="" placeholder="Phone Number" />
						</div>
						<div class="form-group">
							<input type="text" name="company_name" value="" placeholder="Company Name (optional)" />
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
						</div>
						<div class="form-group">
							<textarea placeholder="Tell us about your business" rows="5"></textarea>
						</div>
						<div class="form-group">
							<button type="submit" class="theme-btn">Send My Free Proposal</button>
						</div>
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

	import { ref } from 'vue';

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
</script>