const postcssFix = require('postcss-100vh-fix');

module.exports = {
  plugins: [
    postcssFix,
    // require(tailwindcss),
    require('autoprefixer'),
  ],
}
