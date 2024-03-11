<template>
    <NuxtLayout name="elevate8">
        <!-- Page Banner Section Start -->
        <section class="page-banner pt-210 rpt-150 pb-75 rel z-1"
            style="background-image: url(assets/images/hero/hero-two-bg.png)">
            <div class="container container-1290">
                <div class="row">
                    <div class="col-lg-12">

                        <h1 class="hero-title style-two mt-65 mb-30 wow fadeInUp delay-0-2s">
                            {{ project?.name }}
                            <!-- <img class="mxw-10 leaf" src="/assets/images/banner/leaf-small.png" alt="Leaf" /> -->
                        </h1>
                        <p class="banner-text wow fadeInUp delay-0-3s">
                            {{ project?.description }}
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <!-- Page Banner Section End -->

        <!-- Project Details Image start -->
        <div class="project-details-image rel z-1">
            <div class="container-fluid">
                <div class="image wow fadeInUp delay-0-2s">
                    <img :src="project?.image" alt="Project" />
                </div>
            </div>
        </div>
        <!-- Project Details Image end -->

        <!-- Project Details Content Area start -->
        <section class="project-details-area pt-80 rel z-1">
            <div class="container container-1290">
                <div class="row pb-35 wow fadeInUp delay-0-2s">
                    <div class="col-lg-4">
                        <h3 class="title mb-30">Project Information's</h3>
                    </div>
                    <div class="col-lg-8">
                        <div class="row row-cols-lg-4 row-cols-sm-2 row-cols-1">
                            <div class="col">
                                <h5>Client</h5>
                                <p class="sub-title mb-20">{{ project?.name }}</p>
                            </div>
                            <div class="col">
                                <h5>Category</h5>
                                <p class="sub-title mb-20">{{ project?.category }}</p>
                            </div>
                            <div class="col">
                                <h5>Date</h5>
                                <p class="sub-title mb-20">{{ project?.date }}</p>
                            </div>
                            <div class="col">
                                <h5>Location</h5>
                                <p class="sub-title mb-20">{{ project?.location }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <!-- <div class="row pt-50 pb-70 wow fadeInUp delay-0-2s">
                    <div class="col-lg-4">
                        <h3 class="title mb-30">The Challenge</h3>
                    </div>
                    <div class="col-lg-8">
                        <div class="big-letter text">
                            mAt vero eos et accusamus etiusto odio dignissimos ducimus
                            blanditiis praesentium voluptatum deleniti atque corrupti quos
                            dolores et quas molestias excepturi occaecati cupiditate similique
                            sunin culpa qui officia deserunt mollitia animi est laborum et
                            dolorum fuga. Et harum quidem rerum facilis esty expedita
                            distinctio. Nam libero tempore cum soluta nobis est eligendi optio
                            cumquey nihil impedit quo minus quod maxime placeat facere
                            possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                            Temporibus autem quibusdam et aut officiis debitis aut rerum
                            necessitatibus saepe eveniet ut et voluptates repudiandae sint et
                            molestiae non recusandae. Itaque earume
                        </div>
                    </div>
                </div> -->
                <div class="row">
                    <div class="col-lg-6">
                        <div class="image my-30 wow fadeInUp delay-0-2s">
                            <img src="/assets/images/projects/project-middle1.jpg" alt="Project" />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="image my-30 wow fadeInUp delay-0-4s">
                            <img src="/assets/images/projects/project-middle2.jpg" alt="Project" />
                        </div>
                    </div>
                </div>
                <!-- <div class="row pt-40 pb-105 rpb-80 wow fadeInUp delay-0-2s">
                    <div class="col-lg-4">
                        <h3 class="title mb-30">The Results</h3>
                    </div>
                    <div class="col-lg-8">
                        <div class="text">
                            We denounce with righteous indignation and dislike men who are so
                            beguiled and demoralized by the charms of pleasure of the moment,
                            so blinded by desire, that they cannot foresee the pain and
                            trouble that are bound to ensue; and equal blame belongs to those
                            who fail in their duty through weakness of will, which is the same
                            as saying through shrinking from toil and pain. These cases are
                            perfectly simple and easy to distinguish. In a free hour, when our
                            power of choice is untrammelled and when nothing prevents our
                            being able to do what we like best, every pleasure is to be
                            welcomed and every pain avoided. But in certain circumstances and
                            owing to the claims of duty or the obligations of business it will
                            frequently occur that pleasures have to be repudiated and
                            annoyances accepted. The wise man therefore always holds in these
                            matters to this principle of selection: he rejects pleasures to
                            secure other greater pleasures, or else he endures pains to avoid
                            worse pains.
                        </div>
                    </div>
                </div> -->
                <hr />
            </div>
        </section>
        <!-- Project Details Content Area End -->

        <!-- Next Prev Post Area start -->
        <section class="next-prev-post-area">
            <div class="container container-1290">
                <div class="next-prev-post pt-110 rpt-80 pb-100 rpb-70">
                    <!-- Previous Project -->
                    <div v-if="prevProject" class="prev-post me-auto wow fadeInLeft delay-0-2s">
                        <div class="image">
                            <img :src="prevProject.image" :alt="prevProject.name"/>
                        </div>
                        <div class="content">
                            <h4>
                                <NuxtLink :to="`/projects/${prevProject.slug}`">{{ prevProject.name }}</NuxtLink>
                            </h4>
                            <NuxtLink class="read-more" :to="`/projects/${prevProject.slug}`">Prev <i class="far fa-arrow-left"></i></NuxtLink>
                        </div>
                    </div>

                    <!-- Next Project -->
                    <div v-if="nextProject" class="next-post ms-auto wow fadeInRight delay-0-2s">
                        <div class="content">
                            <h4>
                                <NuxtLink :to="`/projects/${nextProject.slug}`">{{ nextProject.name }}</NuxtLink>
                            </h4>
                            <NuxtLink class="read-more" :to="`/projects/${nextProject.slug}`">Next <i
                                    class="far fa-arrow-right"></i></NuxtLink>
                        </div>
                        <div class="image">
                            <img :src="nextProject.image" :alt="nextProject.name" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Next Prev Post Area end -->
    </NuxtLayout>
</template>

<script setup>
    import { projectsData } from '~/data/work-data'; // Adjust the path accordingly

    const route = useRoute();
    const currentSlug = ref(route.params.slug);
    const currentIndex = computed(() => projectsData.findIndex(p => p.slug === currentSlug.value));

    const project = ref(null);
    const prevProject = ref(null);
    const nextProject = ref(null);

    const fetchProject = async (slug) => {
        return projectsData.find(p => p.slug === slug);
    };

    const updateProjects = async () => {
        project.value = await fetchProject(currentSlug.value);
        prevProject.value = currentIndex.value > 0 ? await fetchProject(projectsData[currentIndex.value - 1].slug) : null;
        nextProject.value = currentIndex.value < projectsData.length - 1 ? await fetchProject(projectsData[currentIndex.value + 1].slug) : null;
    };

    onMounted(updateProjects);

    watch(() => currentSlug.value, updateProjects);
</script>