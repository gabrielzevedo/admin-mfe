const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');
const { join } = require('path');

module.exports = {
  presets: [
    require('../../tailwind-workspace-preset.js')
  ],
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    './pages/**/*.{js,ts,jsx,tsx}',
    './node_modules/@loja-integrada/admin-components/dist/*.js',
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
