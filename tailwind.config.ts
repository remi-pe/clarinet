import type {Config} from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			inter: [
  				'var(--font-inter)'
  			],
  			prata: [
  				'var(--font-prata)'
  			]
  		},
  		fontSize: {
  			header1: '1.37rem',
  			body: '0.875rem',
  			tag: '0.687rem'
  		},
  		fontWeight: {
  			semibold: '500'
  		},
  		colors: {
  			white: '#FFFFFF',
  			black: '#000000',
  			grey: {
  				'100': '#212121',
  				'200': '#272727',
  				'300': '#353535',
  				'400': '#5B5B5B',
  				'500': '#B5B5B5',
  				'600': '#FFFFFF'
  			},
  			teal: {
  				'100': '#0A4D49',
  				'200': '#137670',
  				'300': '#00EBDD'
  			},
  			red: {
  				'100': '#562716',
  				'200': '#FF4805',
  				'300': '#FF4545',
  				'400': '#FC7070'
  			},
  			blue: {
  				'100': '#0508B3',
  				'200': '#0105F8',
  				'300': '#2554FF'
  			},
  			yellow: {
  				'600': '#FECF00'
  			},
  			orange: {
  				'600': '#FF9B04'
  			},
  			pink: {
  				'500': '#FF007B',
  				'600': '#F025FF'
  			},
  			green: {
  				'600': '#37FF25'
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [],
};

export default config;
