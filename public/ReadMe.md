# Public Folder Information

## Overview
The `public` folder is used to store static assets such as images, logos, banners, and other publicly accessible resources that are utilized across the project.

## Folder Structure
```
/public
│── /images
│   │── logo.png       # Project logo
│   │── banner.png     # Homepage banner
│   │── icons/         # Folder containing various icons
│   │── screenshots/   # Screenshots of the application
│
│── /docs
│   │── whitepaper.pdf # Project whitepaper
│   │── terms.pdf      # Terms of service document
```

## Image Guidelines
- **Format:** PNG, JPG, SVG (for scalable vector graphics)
- **Resolution:** Ensure all images are optimized for web usage to improve load times.
- **Naming Conventions:** Use **kebab-case** (e.g., `project-logo.png`, `feature-banner.jpg`)
- **Usage:** Images should be used for branding, documentation, and UI components.

## Adding New Images
1. Place the image inside the `public/images/` directory.
2. Update relevant components or documentation to reference the new image.
3. Optimize images to reduce size while maintaining quality (use tools like TinyPNG or ImageOptim).

## Accessing Images in Code
To reference an image in the project, use the following syntax:
```html
<img src="/public/images/logo.png" alt="Project Logo" />
```
Or in JavaScript/React:
```jsx
<img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="Project Logo" />
```

## License & Usage
All assets within the `public` folder are subject to the project's licensing policies. Ensure that no copyrighted materials are used without permission.

## Contribution
If adding or modifying assets, ensure they adhere to the project’s design guidelines. Submit a pull request for approval.

📢 **For any issues or requests related to images, reach out to the development team.**

