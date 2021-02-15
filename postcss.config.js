const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./**/*.html"],
  defaultExtractor: content => content.match(/[\w-/:]*[\w-/:]/g) || []
  // UNCOMMENT the following to add avoid purgecss from extracting dynamically added styles
  // e.g., .medium-widget styles are added dynamically by the widget's JavaScript
  // whitelistPatterns: [/^medium\-widget/],
  // whitelistPatternsChildren: [/^medium\-widget/]
});

module.exports = api => {
  return {
    plugins: [
      require("postcss-import"),
      require("postcss-preset-env"),
      require("postcss-nesting"),
      require("tailwindcss"),
      require("autoprefixer"),
      ...(api.mode === "production" ? [purgecss] : []),
      ...(api.mode === "production"
        ? [require("cssnano")({ preset: "default" })]
        : [])
    ]
  };
};
