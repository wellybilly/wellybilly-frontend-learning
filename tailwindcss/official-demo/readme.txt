##Setting up Tailwind and PostCSS
> npm init -y //create package.json
> npm install tailwindcss postcss-cli autoprefixer@9.0.0
> npx tailwind init //create tailwind config

##notice 
-- Error: PostCSS plugin autoprefixer requires PostCSS 8. So the autoprefixer can't be @10.0.0
-- Tailwind 2.0 is comming with two breaking changes: removeDeprecatedGapUtilities, purgeLayersByDefault