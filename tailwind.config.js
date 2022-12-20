/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx}",
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0B1A23',
        'secondary': '#'
      },
      backgroundColor: {
        'custom-overlay': 'rgba(11, 26, 35, 0.1)',
        'custom-secondary': 'rgba(152, 182, 110, 0.5)',
        'custom-white-sm': 'rgba(255, 255, 255, 0.1)',
        'custom-white-md': 'rgba(255, 255, 255, 0.3)'
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        waving: {
          '0%': { transform: 'translate(0px, 0px);' },
          '10%': { transform: 'translate(5px, 0px);'},
          '20%': { transform: 'translate(10px, 0px);' },
          '30%': { transform: 'translate(15px, 0px);' },
          '40%': { transform: 'translate(20px, 0px);' },
          '50%': { transform: 'translate(25px, 0px);' },
          '60%': { transform: 'translate(20px, 0px);' },
          '70%': { transform: 'translate(15px, 0px);' },
          '80%': { transform: 'translate(10px, 0px);' },
          '90%': { transform: 'translate(5px, 0px);' },
          '100%': { transform: 'translate(0px, 0px);' },
        },
        scaleUpCenter: {
          'from': { opacity: 0, transform: 'scale(.7)' }
        },
        moveToBottom: {
          'from': { },
	        'to': { transform: 'translateY(100%)' }
        },
        moveToTop: {
          'from': { },
	        'to': { transform: 'translateY(-100%)' }
        },
        scaleUp: {
          'from': { opacity: 0, transform: 'scale(.8)' }
        },
        scalee: {
          'from': { transform: 'scale(1.25)' },
	        'to': { transform: 'scale(1.5)' }
        },
        rotatee: {
          'from': { transform: 'rotate()' },
	        'to': { transform: 'rotate(10deg) scale(1.3)' }
        }
      },
      animation: {
        'waving': 'waving 2s linear infinite',
        'scaleUpCenter': 'scaleUpCenter .4s ease-out both',
        'moveToBottom': 'moveToBottom .8s ease both',
        'moveToTop': 'moveToTop .8s ease both',
        'scaleUp': 'scaleUp .7s ease both',
        'scalee': 'scalee 5s alternate both',
        'rotatee': 'rotatee 4s alternate infinite'
      }
    },
  },
  plugins: [],
}
