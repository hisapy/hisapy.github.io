# tailwindcss-html

Template repo with a very simple boilerplate to create HTML web pages styled with TailwindCSS.

It's built with Webpack.

- By default, it generates an English **index.html** that can be accessed at "/" path in the browser and another Spanish **index.html** that can be accessed at "/es" with **[HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/)**
- Supports nested CSS with **[postcss-nesting](https://jonneal.dev/postcss-nesting/)**
- Includes support to generate favicon and other icons with **[FaviconsWebpackPlugin](https://github.com/jantimon/favicons-webpack-plugin)**
- Includes a _English/Spanish_ language selector that sets a cookie to "remember" the preferred language.

It's relatively simple so for more info, just see the files in **src/** dir and webpack.\* files.

## Scripts

- Start development server with `yarn dev`
- Build for production with `yarn build:prod`

## Deploy to AWS S3 + CloudFront

1. Build for production with `yarn build:prod`. This command generates the production assets in **dist/** directory.
2. Delete all files from the S3 **website** bucket.
3. Copy all files from **dist/** to the S3 **website** bucket.
4. Invalidate cache in related CloudFront using
   ```
   /*
   /en/*
   ```

**TODO:** create GitHub Actions to automate this deploy process.
