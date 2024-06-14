<template>
	<div class="preloader" v-if="preloader == true">
		<div class="custom-loader"></div>
	</div>
</template>

<script setup>
	// Define reactive state using ref
	const preloader = ref(true);

	// Use onMounted hook to execute code after component mount
	onMounted(() => {
		setTimeout(() => {
			// Update preloader state after 1000ms (1 second)
			preloader.value = false;
		}, 1000);
	});
</script>
