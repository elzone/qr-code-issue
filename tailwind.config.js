/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'green-200': '#D1F2F4',
        'green-800': '#07d300',
        'gray-500': '#8D909B',
        'gray-300': '#C8CED6',
        'gray-200': '#E8EAED',
        'gray-100': '#F5F5F6',
        'error-red-800': '#D3004C',
        'error-red-200': '#FFE1E1',
        border: 'var(--ion-border-color)',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'var(--ion-background-color)',
        foreground: 'var(--ion-text-color)',
        primary: {
          DEFAULT: '#07b6c1',
          foreground: 'var(--ion-color-primary-tint)',
        },
        secondary: {
          DEFAULT: '#a3e03f',
          foreground: 'var(--ion-color-secondary-contrast)',
        },
        tertiary: {
          DEFAULT: 'var(--ion-color-tertiary)',
          foreground: 'var(--ion-color-tertiary-contrast)',
        },
        success: {
          DEFAULT: 'var(--ion-color-success)',
          foreground: 'var(--ion-color-success-contrast)',
        },
        destructive: {
          DEFAULT: 'var(--ion-color-danger)',
          foreground: 'var(--ion-color-danger-contrast)',
        },
        warning: {
          DEFAULT: 'var(--ion-color-warning)',
          foreground: 'var(--ion-color-warning-contrast)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'var(--ion-card-background)',
          foreground: 'var(--ion-card-foreground)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 0.125rem)',
        sm: 'calc(var(--radius) - 0.25rem)',
        xs: 'calc(var(--radius) - 0.375rem)',
      },
      fontSize: {
        'accent-big': '1.875rem',
        button: '1.125rem',
        h1: '1.625rem',
        h2: '1.375rem',
        h3: '1.25',
        p1: '1.625rem',
        p3: '0.625rem',
        p4: '0.5rem',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0px' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0px' },
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
};
