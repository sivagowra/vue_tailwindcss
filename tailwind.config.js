const colors = require('tailwindcss/colors');

module.exports = {
	content: [
		'./src/**/*.vue',
		'./src/**/*.js',
		'./src/**/*.jsx',
		'./src/**/*.html',
		'./src/**/*.md'
	],

	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				// Enhanced color palette
				'primary-light': '#FAFBFC',
				'secondary-light': '#FFFFFF',
				'ternary-light': '#F8FAFC',

				'primary-dark': '#0F172A',
				'secondary-dark': '#1E293B',
				'ternary-dark': '#334155',

				// Modern accent colors
				'accent': {
					50: '#F0F9FF',
					100: '#E0F2FE',
					200: '#BAE6FD',
					300: '#7DD3FC',
					400: '#38BDF8',
					500: '#0EA5E9',
					600: '#0284C7',
					700: '#0369A1',
					800: '#075985',
					900: '#0C4A6E',
				},
				'purple': {
					50: '#FAF5FF',
					100: '#F3E8FF',
					200: '#E9D5FF',
					300: '#D8B4FE',
					400: '#C084FC',
					500: '#A855F7',
					600: '#9333EA',
					700: '#7C3AED',
					800: '#6B21A8',
					900: '#581C87',
				},
				'emerald': {
					50: '#ECFDF5',
					100: '#D1FAE5',
					200: '#A7F3D0',
					300: '#6EE7B7',
					400: '#34D399',
					500: '#10B981',
					600: '#059669',
					700: '#047857',
					800: '#065F46',
					900: '#064E3B',
				},
			},
			container: {
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '4rem',
					xl: '5rem',
					'2xl': '6rem',
				},
			},
			fontFamily: {
				'sans': ['GeneralSans-Variable', 'system-ui', 'sans-serif'],
				'display': ['GeneralSans-Bold', 'system-ui', 'sans-serif'],
			},
			fontSize: {
				'xs': ['0.75rem', { lineHeight: '1rem' }],
				'sm': ['0.875rem', { lineHeight: '1.25rem' }],
				'base': ['1rem', { lineHeight: '1.5rem' }],
				'lg': ['1.125rem', { lineHeight: '1.75rem' }],
				'xl': ['1.25rem', { lineHeight: '1.75rem' }],
				'2xl': ['1.5rem', { lineHeight: '2rem' }],
				'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
				'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
				'5xl': ['3rem', { lineHeight: '1' }],
				'6xl': ['3.75rem', { lineHeight: '1' }],
				'7xl': ['4.5rem', { lineHeight: '1' }],
				'8xl': ['6rem', { lineHeight: '1' }],
				'9xl': ['8rem', { lineHeight: '1' }],
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem',
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-in-out',
				'slide-up': 'slideUp 0.5s ease-out',
				'scale-in': 'scaleIn 0.3s ease-out',
				'float': 'float 6s ease-in-out infinite',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				scaleIn: {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
				},
			},
			backdropBlur: {
				xs: '2px',
			},
			boxShadow: {
				'glow': '0 0 20px rgba(59, 130, 246, 0.15)',
				'glow-lg': '0 0 40px rgba(59, 130, 246, 0.25)',
				'inner-glow': 'inset 0 0 20px rgba(59, 130, 246, 0.1)',
				'border-glow': '0 0 0 1px rgba(59, 130, 246, 0.2), 0 0 20px rgba(59, 130, 246, 0.1)',
				'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
				'soft-lg': '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
			},
			borderRadius: {
				'xl': '0.75rem',
				'2xl': '1rem',
				'3xl': '1.5rem',
				'4xl': '2rem',
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		function({ addUtilities }) {
			const newUtilities = {
				'.glass': {
					background: 'rgba(255, 255, 255, 0.1)',
					backdropFilter: 'blur(10px)',
					border: '1px solid rgba(255, 255, 255, 0.2)',
				},
				'.glass-dark': {
					background: 'rgba(0, 0, 0, 0.1)',
					backdropFilter: 'blur(10px)',
					border: '1px solid rgba(255, 255, 255, 0.1)',
				},
				'.gradient-text': {
					background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
					backgroundClip: 'text',
				},
				'.gradient-bg': {
					background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
				},
				'.border-glow': {
					border: '1px solid rgba(59, 130, 246, 0.3)',
					boxShadow: '0 0 0 1px rgba(59, 130, 246, 0.2), 0 0 20px rgba(59, 130, 246, 0.1)',
				},
				'.border-soft': {
					border: '1px solid rgba(0, 0, 0, 0.05)',
					boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
				},
				'.border-soft-dark': {
					border: '1px solid rgba(255, 255, 255, 0.1)',
					boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
				},
				'.font-display-bold': {
					fontFamily: 'GeneralSans-Bold, system-ui, sans-serif',
					fontWeight: '700',
					letterSpacing: '-0.025em',
				},
				'.font-display-semibold': {
					fontFamily: 'GeneralSans-Semibold, system-ui, sans-serif',
					fontWeight: '600',
					letterSpacing: '-0.025em',
				},
				'.font-body-medium': {
					fontFamily: 'GeneralSans-Medium, system-ui, sans-serif',
					fontWeight: '500',
					letterSpacing: '0',
				},
				'.font-body-regular': {
					fontFamily: 'GeneralSans-Regular, system-ui, sans-serif',
					fontWeight: '400',
					letterSpacing: '0',
				},
			}
			addUtilities(newUtilities)
		}
	],
};
