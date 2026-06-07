# Kaushalya Portfolio — React + Tailwind CSS

## Project Structure
```
kaushalya-portfolio/
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── index.html
├── src/
│   ├── main.jsx
│   ├── index.css
│   ├── App.jsx
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Skills.jsx
│       ├── Experience.jsx
│       ├── Projects.jsx
│       ├── Certifications.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
```

## Setup Instructions
```bash
npm create vite@latest kaushalya-portfolio -- --template react
cd kaushalya-portfolio
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
# Replace files with the code below
npm run dev
```
