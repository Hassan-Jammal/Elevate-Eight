<template>
	<NuxtLayout name="elevate8">
		<PageBanner :pageName="'Project Grid'" />
		<!-- Project Grid Area start -->
		<section class="project-grid-area pt-130 rpt-100 pb-10 rpb-25">
			<div class="container container-1210">
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

		<!-- Work With Area start -->
		<section class="work-with-area pb-150 rpb-145 rel z-1">
			<div class="container">
				<div class="row justify-content-center pb-45 rpb-25">
					<div class="col-xl-7 col-lg-9">
						<div class="section-title text-center wow fadeInUp delay-0-2s">
							<span class="sub-title mb-15">Work With Us</span>
							<h2>Have Any Projects On Minds! Feel Free to Contact Us</h2>
							<NuxtLink class="explore-more text-start mt-30" href="contact"><i
									class="fas fa-arrow-right"></i>
								<span>Explore more</span>
							</NuxtLink>
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

	const fetchData = () => {
		projects.value = projectsData.map(project => ({
			...project,
		}));
	};

	onMounted(fetchData);
</script>
