<script>
import AppBanner from '@/components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid.vue';
import Button from '../components/reusable/Button.vue';

export default {
	name: 'Home',
	components: {
		AppBanner,
		ProjectsGrid,
		Button,
	},
};
</script>

<template>
	<div class="container mx-auto px-4">
		<!-- Banner -->
		<AppBanner class="mb-12 sm:mb-16" />

		<!-- Projects -->
		<ProjectsGrid />

		<!-- Load more projects button -->
		<div class="mt-20 sm:mt-28 flex justify-center">
			<router-link
				to="/projects"
				class="group flex items-center px-10 py-5 text-lg font-body-medium bg-gradient-to-r from-accent-500 to-purple-500 hover:from-accent-600 hover:to-purple-600 text-black rounded-2xl shadow-soft hover:shadow-glow-lg hover-lift focus-ring border-gradient-light"
				aria-label="More Projects"
			>
				<Button title="More Projects" />
				<i data-feather="arrow-right" class="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300"></i>
			</router-link>
		</div>
	</div>
</template>

<style scoped></style>
