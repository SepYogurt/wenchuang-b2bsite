import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#10131a',
        graphite: '#252934',
        platinum: '#e5e7eb',
        champagne: '#c7a76a',
        mist: '#f5f6f8',
        navy: '#142033'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 18px 50px rgba(16, 19, 26, 0.10)'
      }
    }
  }
}
