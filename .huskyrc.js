module.exports = {
  hooks: {
    // git commit 前的钩子
    "pre-commit": "echo 'husky' && npm run lint",
  },
};