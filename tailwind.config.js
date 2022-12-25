module.exports = {
  important: true,
  plugins: [
    require('@tailwindcss/forms'),
    require('@neupauer/tailwindcss-plugin-separated')
  ],
  content: ['index.html', './src/**/*.{html,js,jsx,ts,tsx,vue}'],
  safelist: [
    { pattern: /bg-(gray|blue|green|red|indigo|purple|pink|yellow)-100/ },
    { pattern: /text-(gray|blue|green|red|indigo|purple|pink|yellow)-800/ },
    { pattern: /border-(gray|blue|green|red|indigo|purple|pink|yellow)-300/ },
    {
      pattern: /ring-(gray|blue|green|red|indigo|purple|pink|yellow)-300/,
      variants: ['hover', 'group-hover']
    }
  ],
  theme: {
    extend: {
      colors: {
        'dark-hover': '#0000000F',
        blue: {
          50: '#EEF6FF',
          100: '#D8EBFF',
          200: '#BADCFF',
          300: '#8BC8FF',
          400: '#54A8FF',
          500: '#2C84FF',
          600: '#1E69FB',
          700: '#0E4DE7',
          800: '#123EBB',
          900: '#153993'
        }
      },
      fontSize: {
        xxs: '11px'
      }
    }
  }
}
