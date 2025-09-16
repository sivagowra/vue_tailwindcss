<script>
export default {
	data: () => {
		return {
			copyrightDate: new Date().getFullYear(),
			projectName: 'Vue.js & Tailwind CSS Portfolio',
			author: 'Stoman',
		};
	},
};
</script>

<template>
	<div class="flex justify-center items-center text-center">
		<div
			class="body-medium text-black-muted"
		>
			&copy; {{ copyrightDate }}.
			<a
				href="https://github.com/realstoman/vuejs-tailwindcss-portfolio"
				target="__blank"
				class="font-body-medium hover:underline hover:text-accent-600 dark:hover:text-accent-400 duration-300 transition-colors"
			>
				{{ projectName }}
			</a>
			. Developed by
			<a
				href="https://stoman.me"
				target="__blank"
				class="font-body-medium text-black-secondary uppercase hover:underline hover:text-accent-600 dark:hover:text-accent-400 duration-300 transition-colors"
				>{{ author }}</a
			>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
