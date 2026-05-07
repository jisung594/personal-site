console.log('Building design tokens from Figma...');

// Build tokens using the config
const { execSync } = require('child_process');
execSync('npx style-dictionary build --config ./style-dictionary.config.js', { stdio: 'inherit' });

console.log('Design tokens built successfully!');
console.log('Generated files:');
console.log('   - src/styles/tokens.css (CSS variables)');
console.log('   - tailwind-tokens.json (Tailwind-compatible JSON)');
