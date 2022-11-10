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
      backgroundImage: {
        // frameFlower: "url('../public/assets/flowerframe.jpg')",
        frameFlower: "url('../public/assets/bg_wed_mid1-rev2.svg')",
        // frameFlower: "url('../public/assets/bg_wed_mid2-01.svg')",
        bgFooter: "url('../public/assets/bg_wed_mid.svg')"
      },
      backgroundColor: {
        'custom-overlay': 'rgba(48, 66, 33, 0.3)',
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
        }
      },
      animation: {
        'scaleUpCenter': 'scaleUpCenter .4s ease-out both',
        'moveToBottom': 'moveToBottom .8s ease both',
        'moveToTop': 'moveToTop .8s ease both',
        'scaleUp': 'scaleUp .7s ease both'
      }
    },
  },
  plugins: [],
}
