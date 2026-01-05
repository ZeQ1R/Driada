/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			cream: '#f5f0e6',
  			forest: {
  				DEFAULT: '#1a3c34',
  				light: '#2d5a4a'
  			},
  			charcoal: '#2d2d2d',
  			wood: '#8b6914',
  			amber: {
  				400: '#d4a12a',
  				500: '#c49420',
  				600: '#a67c00',
  				700: '#8b6914'
  			}
  		},
  		fontFamily: {
  			serif: ['Playfair Display', 'Georgia', 'serif'],
  			sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
  		},
  		keyframes: {
  			'accordion-down': {
  				from: { height: '0' },
  				to: { height: 'var(--radix-accordion-content-height)' }
  			},
  			'accordion-up': {
  				from: { height: 'var(--radix-accordion-content-height)' },
  				to: { height: '0' }
  			},
  			'fade-in': {
  				from: { opacity: '0' },
  				to: { opacity: '1' }
  			},
  			'fade-in-up': {
  				from: { opacity: '0', transform: 'translateY(30px)' },
  				to: { opacity: '1', transform: 'translateY(0)' }
  			},
  			'fade-in-left': {
  				from: { opacity: '0', transform: 'translateX(-30px)' },
  				to: { opacity: '1', transform: 'translateX(0)' }
  			},
  			'fade-in-right': {
  				from: { opacity: '0', transform: 'translateX(30px)' },
  				to: { opacity: '1', transform: 'translateX(0)' }
  			},
  			'slow-zoom': {
  				from: { transform: 'scale(1)' },
  				to: { transform: 'scale(1.1)' }
  			},
  			'scale-in': {
  				from: { opacity: '0', transform: 'scale(0.9)' },
  				to: { opacity: '1', transform: 'scale(1)' }
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'fade-in': 'fade-in 0.6s ease-out forwards',
  			'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
  			'fade-in-left': 'fade-in-left 0.8s ease-out forwards',
  			'fade-in-right': 'fade-in-right 0.8s ease-out forwards',
  			'slow-zoom': 'slow-zoom 20s ease-in-out infinite alternate',
  			'scale-in': 'scale-in 0.4s ease-out forwards'
  		},
  		transitionDuration: {
  			'2000': '2000ms'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};