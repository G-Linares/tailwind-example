# Tailwind Examples

This is the template starter branch for a Tailwind + React project, on the other branches you will find snippets and landing pages taken from frontendmentor.io

### Mini Components
- Login Modal
- Newsletter Modal
- Product Details Modal
- Image Gallery
- Pricing Grid

### Landing Pages
- App landing page
- Tech company landing 
- Web App Landing page
- Nice Grid template


### If you want to create a project from scrath do the following. 
```
npx create-react-app my-project
cd my-project
```

### Then install tailwindcss and its peer dependencies via npm
```
npm install -D tailwindcss postcss autoprefixer
```

### This will create the config files
```
npx tailwindcss init -p
```

### Configure template paths with the following
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
### Create index.css and import it to the main index with the proper layers
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### You're all set up.
