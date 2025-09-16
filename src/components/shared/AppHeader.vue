<script>
import ThemeSwitcher from '../ThemeSwitcher';
import HireMeModal from '../HireMeModal.vue';
import feather from 'feather-icons';
import AppHeaderLinks from './AppHeaderLinks.vue';
import Button from '../reusable/Button.vue';

export default {
	components: {
		ThemeSwitcher,
		HireMeModal,
		AppHeaderLinks,
		Button,
	},
	data() {
		return {
			isOpen: false,
			theme: '',
			modal: false,
			categories: [
				{
					id: 1,
					value: 'web',
					name: 'Web Application',
				},
				{
					id: 2,
					value: 'mobile',
					name: 'Mobile Application',
				},
				{
					id: 3,
					value: 'ui-ux',
					name: 'UI/UX Design',
				},
				{
					id: 4,
					value: 'branding',
					name: 'Branding & Anim',
				},
			],
		};
	},

	created() {
		this.theme = localStorage.getItem('theme') || 'light';
	},
	mounted() {
		feather.replace();
		this.theme = localStorage.getItem('theme') || 'light';
	},
	methods: {
		updateTheme(theme) {
			this.theme = theme;
		},
		showModal() {
			if (this.modal) {
				// Stop screen scrolling
				document
					.getElementsByTagName('html')[0]
					.classList.remove('overflow-y-hidden');
				this.modal = false;
			} else {
				document
					.getElementsByTagName('html')[0]
					.classList.add('overflow-y-hidden');
				this.modal = true;
			}
		},
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<nav id="nav" class="sm:container sm:mx-auto">
		<!-- Header start -->
		<div
			class="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-8"
		>
			<!-- Header menu links and small screen hamburger menu -->
			<div class="flex justify-between items-center px-4 sm:px-0">
				<!-- Header logos -->
				<div>
					<router-link to="/" class="group">
						<img
							v-if="theme === 'light'"
							src="@/assets/images/logo-dark.svg"
							class="w-40 group-hover:scale-105 transition-transform duration-300"
							alt="Dark Logo"
						/>
						<img
							v-else
							src="@/assets/images/logo-light.svg"
							class="w-40 group-hover:scale-105 transition-transform duration-300"
							alt="Light Logo"
						/>
					</router-link>
				</div>

				<!-- Theme switcher small screen -->
				<theme-switcher
					:theme="theme"
					@themeChanged="updateTheme"
					class="block sm:hidden glass hover:shadow-glow px-4 py-3 rounded-2xl transition-all duration-300 border-visible"
				/>

				<!-- Small screen hamburger menu -->
				<div class="sm:hidden">
					<button
						@click="isOpen = !isOpen"
						type="button"
						class="focus-ring p-3 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 border-visible"
						aria-label="Hamburger Menu"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							class="h-6 w-6 fill-current text-gray-700 dark:text-gray-300 transition-colors duration-200"
						>
							<path
								v-if="isOpen"
								fill-rule="evenodd"
								d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
								clip-rule="evenodd"
							></path>
							<path
								v-if="!isOpen"
								fill-rule="evenodd"
								d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
							></path>
						</svg>
					</button>
				</div>
			</div>

			<!-- Header links -->
			<AppHeaderLinks :showModal="showModal" :isOpen="isOpen" />

			<!-- Header right section buttons -->
			<div
				class="hidden sm:flex justify-between items-center flex-col md:flex-row gap-4"
			>
				<!-- Hire me button -->
				<div class="hidden md:block">
					<Button
						title="Hire Me"
						class="text-md font-body-medium bg-gradient-to-r from-accent-500 to-purple-500 hover:from-accent-600 hover:to-purple-600 text-black shadow-soft hover:shadow-glow-lg rounded-2xl px-6 py-3 duration-300 hover-lift focus-ring border-gradient-light"
						@click="showModal()"
						aria-label="Hire Me Button"
					/>
				</div>

				<!-- Theme switcher large screen -->
				<theme-switcher
					:theme="theme"
					@themeChanged="updateTheme"
					class="glass hover:shadow-glow px-5 py-3 rounded-2xl cursor-pointer transition-all duration-300 border-visible"
				/>
			</div>
		</div>

		<!-- Hire me modal -->
		<HireMeModal
			:showModal="showModal"
			:modal="modal"
			:categories="categories"
			aria-modal="Hire Me Modal"
		/>
	</nav>
</template>

<style scoped>
#nav a.router-link-exact-active {
	@apply text-accent-600 dark:text-accent-400;
	@apply font-semibold;
}
</style>
