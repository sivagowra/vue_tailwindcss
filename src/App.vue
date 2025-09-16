<script>
import feather from 'feather-icons';
import AppHeader from './components/shared/AppHeader';
import AppFooter from './components/shared/AppFooter';

export default {
	components: {
		AppHeader,
		AppFooter,
	},
	data: () => {
		return {
			appTheme: localStorage.getItem('theme'),
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<div :class="appTheme" class="min-h-screen bg-gradient-to-br from-primary-light to-ternary-light dark:from-primary-dark dark:to-secondary-dark transition-colors duration-500">
		<!-- App header -->
		<AppHeader />

		<!-- Render active component contents with vue transition -->
		<transition name="fade" mode="out-in">
			<router-view :theme="appTheme" />
		</transition>

		<!-- Scroll to top -->
		<back-to-top
			visibleoffset="500"
			right="30px"
			bottom="20px"
			class="shadow-glow hover:shadow-glow-lg"
		>
			<i data-feather="chevron-up"></i>
		</back-to-top>

		<!-- App footer -->
		<AppFooter />
	</div>
</template>

<style>
#app {
	font-family: 'GeneralSans-Variable', system-ui, -apple-system, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-rendering: optimizeLegibility;
}

.vue-back-to-top {
	@apply p-4 bg-gradient-to-r from-accent-500 to-purple-500 hover:from-accent-600 hover:to-purple-600 text-black transition-all duration-300 ease-out transform hover:-translate-y-2 hover:scale-110 shadow-soft hover:shadow-glow-lg;
	border-radius: 50%;
	font-size: 20px;
	line-height: 20px;
	backdrop-filter: blur(10px);
	border: 2px solid rgba(255, 255, 255, 0.2);
	box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.2), 0 0 20px rgba(59, 130, 246, 0.1);
}

.vue-back-to-top:hover {
	box-shadow: 0 0 30px rgba(59, 130, 246, 0.4);
}

.fade-enter-active {
	animation: slideIn 0.6s cubic-bezier(0.4, 0, 0.2, 1);
	animation-delay: 0.1s;
	opacity: 0;
}

.fade-leave-active {
	animation: slideOut 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideOut {
	from {
		transform: translateX(0) scale(1);
		opacity: 1;
	}
	to {
		transform: translateX(-20px) scale(0.95);
		opacity: 0;
	}
}

@keyframes slideIn {
	from {
		transform: translateX(20px) scale(0.95);
		opacity: 0;
	}
	to {
		transform: translateX(0) scale(1);
		opacity: 1;
	}
}

/* Enhanced focus styles */
*:focus {
	outline: 2px solid transparent;
	outline-offset: 2px;
}

*:focus-visible {
	outline: 2px solid #3b82f6;
	outline-offset: 2px;
}

/* Smooth transitions for theme changes */
* {
	transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
}
</style>
