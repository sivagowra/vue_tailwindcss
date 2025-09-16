<script>
export default {
	props: ['project'],
};
</script>

<template>
	<router-link
		to="/projects/single-project"
		class="card card-hover cursor-pointer mb-10 sm:mb-0 bg-white dark:bg-gray-800"
		aria-label="Single Project"
	>
		<div>
			<img
				:src="project.img"
				:alt="project.title"
				class="rounded-t-2xl border-none"
			/>
		</div>
		<div class="text-center px-6 py-8">
			<p
				class="heading-small text-black-primary mb-3"
			>
				{{ project.title }}
			</p>
			<span
				class="body-medium text-black-muted"
				>{{ project.category }}</span
			>
		</div>
	</router-link>
</template>

<style lang="scss" scoped></style>
