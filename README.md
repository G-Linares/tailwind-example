#Email Subscription Template

## How to Run

### `npx create-react-app my-project`
### `cd my-project`

## Then install tailwindcss and its peer dependencies via npm
### `npm install -D tailwindcss postcss autoprefixer`

This will create the config files
### `npx tailwindcss init -p`

## Configure template paths with the following
```
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
## Create index.css and import it to the main index with the proper layers
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## All done
