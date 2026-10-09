/* TAILWIND THEME — brand colours + fonts live here. After editing run: npm run build
   Spacing: only even Tailwind steps are used (2=8px, 4=16px, 6=24px, 8=32px, 12=48px, 24=96px) = 8px system. */
module.exports = {
  content: ['./*.html', './js/*.js'],
  theme: { extend: {
    colors: {
      ink: '#02040a',    // black
      navy: '#06165c',   // deep blue
      royal: '#0b35c4',  // bright brand blue (backgrounds)
      volt: '#1f6bff',   // buttons / accents
      aqua: '#38c6ff',   // highlight blue
      sky: '#9cc4ff',    // light blue text on dark
      ice: '#eef5ff'     // light section background
    },
    fontFamily: {
      display: ['Unbounded', 'system-ui', 'sans-serif'],   // headings
      body: ['Figtree', 'system-ui', 'sans-serif']         // body copy
    }
  } }
};
