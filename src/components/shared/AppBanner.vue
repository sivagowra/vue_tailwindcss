<script>
import feather from 'feather-icons';

export default {
	name: 'Home',
	data: () => {
		return {
			theme: '',
		};
	},
	created() {
		this.theme = localStorage.getItem('theme') || 'light';
	},
	mounted() {
		feather.replace();
		this.theme = localStorage.getItem('theme') || 'light';
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<section
		class="flex flex-col lg:justify-between items-center lg:flex-row mt-16 sm:mt-20 lg:mt-24 animate-fade-in"
	>
		<!-- Banner left contents -->
		<div class="w-full lg:w-1/2 text-left animate-slide-up">
			<h1
				class="heading-display text-center lg:text-left"
			>
				<span class="gradient-text">Hi, I'm</span>
				<br />
				<span class="text-black-primary">Stoman</span>
			</h1>
			<p
				class="body-large mt-8 text-center lg:text-left text-black-body"
			>
				A <span class="text-accent-600 dark:text-accent-400 font-display-semibold">Full-Stack Developer</span> & 
				<span class="text-purple-600 dark:text-purple-400 font-display-semibold">Design Enthusiast</span>
			</p>
			<p class="body-medium mt-6 text-center lg:text-left text-black-muted">
				Creating beautiful, functional, and user-centered digital experiences that make a difference.
			</p>
			<div class="flex justify-center lg:justify-start mt-10">
				<a
					download="Stoman-Resume.pdf"
					href="/files/Stoman-Resume.pdf"
					class="group flex items-center px-8 py-4 text-lg font-body-medium bg-gradient-to-r from-accent-500 to-purple-500 hover:from-accent-600 hover:to-purple-600 text-black rounded-2xl shadow-soft hover:shadow-glow-lg hover-lift focus-ring border-gradient-light"
					aria-label="Download Resume"
				>
					<i
						data-feather="arrow-down-circle"
						class="mr-3 w-6 h-6 group-hover:animate-bounce"
					></i>
					<span>Download CV</span>
				</a>
			</div>
		</div>

		<!-- Banner right illustration -->
		<div class="w-full lg:w-1/2 text-center lg:text-right mt-12 lg:mt-0 animate-float">
			<div class="relative inline-block">
				<div class="absolute inset-0 bg-gradient-to-r from-accent-400 to-purple-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
				<img
					v-if="theme === 'light'"
					src="@/assets/images/developer.svg"
					alt="Developer"
					class="relative z-10 w-full max-w-md lg:max-w-lg xl:max-w-xl mx-auto lg:mx-0"
				/>
				<img
					v-else
					src="@/assets/images/developer-dark.svg"
					alt="Developer"
					class="relative z-10 w-full max-w-md lg:max-w-lg xl:max-w-xl mx-auto lg:mx-0"
				/>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
