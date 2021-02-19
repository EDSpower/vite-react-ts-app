module.exports = {
  'src/**/*.{js,jsx,tsx}': ['eslint --fix', 'git add'],
  'src/**/*.{jsx,tsx,html,css,scss,sass}': ['stylelint --fix', 'git add'],
  'src/**/*.{js,jsx,tsx,html,css,scss,sass}': ['prettier-eslint --write', 'git add'],
};
