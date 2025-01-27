/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3c93ff',  // Azul claro
          DEFAULT: '#0845df', // Azul principal
          dark: '#0066dc',    // Azul oscuro
      },
      secondary: {
          light: '#7FFF00',   // Verde fosforescente suave
          DEFAULT: '#29ff65', // Verde principal
          dark: '#1A5B30',    // Verde oscuro
      },
      neutral: {
          light: '#f3f4f6',   // Gris claro para fondos
          DEFAULT: '#9ca3af',  // Gris medio
          dark: '#4b5563',     // Gris oscuro para textos
      },
      success: '#10b981',    // Verde éxito
      warning: '#f59e0b',    // Amarillo advertencia
      error: '#ef4444',      // Rojo error
      background: '#f9fafb', // Fondo principal
      accent: '#2D2D2D',     // Color de acento para textos
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Fuente principal para textos
        display: ['Poppins', 'sans-serif'], // Fuente para títulos
        poppins: ['Poppins', 'sans-serif']
      },
      fontSize: {
        base: ['16px', '24px'], // Tamaño de texto base
        lg: ['18px', '28px'], // Texto grande
        xl: ['24px', '32px'], // Títulos de nivel 1
        '2xl': ['30px', '36px'], // Títulos de nivel 2
      },
   
      boxShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.05)', // Sombra ligera
        DEFAULT: '0 4px 6px rgba(0, 0, 0, 0.1)', // Sombra media
        lg: '0 10px 15px rgba(0, 0, 0, 0.15)', // Sombra grande
      },
      spacing: {
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '8px',
        lg: '12px',
        xl: '16px',
      },
      backgroundColor: {
        'main-bg': '#FAFBFB',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [
   /*  require('@tailwindcss/forms'), // Mejora estilos de formularios
    require('@tailwindcss/typography'), // Mejora la tipografía para textos largos */
  ],
}

