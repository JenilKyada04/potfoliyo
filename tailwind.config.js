// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        animation: {
          'blob': 'blob 7s infinite',
          'slow-pan': 'pan 30s linear infinite',
          'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
          'float': 'float 6s ease-in-out infinite',
        },
        keyframes: {
          blob: {
            '0%': { transform: 'translate(0px, 0px) scale(1)' },
            '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
            '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
            '100%': { transform: 'translate(0px, 0px) scale(1)' },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-20px)' },
          },
          fadeInUp: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          }
        }
      },
    },
  }