# Benjamin's Professional Portfolio ✨

This repository hosts my modern, responsive personal portfolio website, meticulously crafted to showcase my expertise as a Frontend Developer and Graphic Designer. Built with React and styled with Tailwind CSS, this dynamic platform highlights my diverse projects, skills, and professional journey.

## Features

*   🏡 **Dynamic Routing**: Seamless navigation between Home, About Me, Resume, Portfolio, Testimonials, and Contact pages, powered by `react-router-dom`.
*   🌙 **Dark Mode Toggle**: A user-friendly dark mode feature for enhanced readability and user preference, implemented with React state and local storage.
*   ✨ **Interactive UI/UX**: Engaging animations and transitions across the site, leveraging the power of `Framer Motion` for a smooth and delightful user experience.
*   🎨 **Responsive Design**: A fully responsive layout ensures an optimal viewing experience across a wide range of devices, from desktops to mobile phones, utilizing `Tailwind CSS`.
*   📧 **Integrated Contact Form**: A functional contact form powered by `EmailJS` allows visitors to easily send messages directly from the website.
*   📂 **Comprehensive Portfolio**: Dedicated sections for Web Design projects, featuring project images, live demos, and GitHub repository links where applicable.
*   📄 **Detailed Resume & About Me**: Professional sections outlining my educational background, work experience, and core competencies as a versatile developer and designer.
*   🌐 **Social Media Integration**: Easy access to my professional social profiles, connecting visitors to my online presence.

## Getting Started

Follow these steps to set up and run the project locally on your machine.

### Installation

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/Bensaxxy/My-Portfolio.git
    cd My-Portfolio
    ```

2.  **Install Dependencies**:
    Navigate into the project directory and install the necessary Node.js packages.
    ```bash
    npm install
    # or
    # yarn install
    ```

### Environment Variables

This project utilizes `EmailJS` for the contact form functionality. You need to configure the following environment variables. Although `EmailJS` keys are often used directly in client-side code, for production deployments, it's recommended to secure them appropriately.

Please note that `EmailJS` configuration for public keys (`GAXCU8JPlXM1IbX3s`) is typically handled directly in the `Mail.jsx` component for client-side use. For server-side operations or more sensitive keys, environment variables would be crucial.

For client-side `EmailJS` integration as seen in `src/Components/Pages/Contact/Mail.jsx`, the following values are embedded:

*   **Service ID**: `service_hzp7jdv`
*   **Template ID**: `template_w8mzxpg`
*   **Public Key**: `GAXCU8JPlXM1IbX3s`

No `.env` file or explicit environment variables are strictly *required* for local development based on the current code structure for EmailJS as the keys are hardcoded in `Mail.jsx`. However, for a production setup, consider using a `.env` file and a build process that injects these, or proxying through a backend if security is a major concern.

## Usage

To run the project in development mode:

```bash
npm run dev
# or
# yarn dev
```

This command will start the development server, typically at `http://localhost:5173`. Open your web browser and navigate to this URL to view the application. The page will automatically reload if you make changes to the source code.

To build the project for production:

```bash
npm run build
# or
# yarn build
```

This command compiles the application into static files in the `dist` directory, ready for deployment.

## Technologies Used

| Technology         | Description                                     |
| :----------------- | :---------------------------------------------- |
| ![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=white) | A JavaScript library for building user interfaces. |
| ![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white) | Next-generation frontend tooling for faster development. |
| ![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) | A utility-first CSS framework for rapid UI development. |
| ![Framer Motion](https://img.shields.io/badge/-Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white) | A production-ready animation library for React. |
| ![React Router](https://img.shields.io/badge/-React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white) | Declarative routing for React.js.                 |
| ![EmailJS](https://img.shields.io/badge/-EmailJS-407BFF?style=flat-square&logo=gmail&logoColor=white) | Send emails directly from your client-side JavaScript. |
| ![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white) | Pluggable JavaScript linter.                      |
| ![PostCSS](https://img.shields.io/badge/-PostCSS-DD3A0A?style=flat-square&logo=postcss&logoColor=white) | A tool for transforming CSS with JavaScript.       |
| ![Autoprefixer](https://img.shields.io/badge/-Autoprefixer-DD3A0A?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzM0OThERSIgZD0iTTEyIDBDNS4zNzMgMCAwIDUuMzczIDAgMTJzNS4zNzMgMTIgMTIgMTIgMTItNS4zNzMgMTItMTJTMTguNjI3IDAgMTIgMHptLTUuMzgzIDE3LjQ1OGwtMS41MzMtMS41MzkgNi44OTctNi45LS02Ljg5Ny02LjkwMyAxLjUzMy0xLjUzNCA4LjQzIDguNDM4eiIvPjwvc3ZnPg==&logoColor=white) | Parse CSS and add vendor prefixes.                 |

## Contributing

We welcome contributions to enhance Benjamin's Professional Portfolio! If you have suggestions for improvements, new features, or bug fixes, please follow these guidelines:

*   💡 **Fork the Repository**: Start by forking this repository to your GitHub account.
*   🌿 **Create a New Branch**: Create a new branch for your feature or bug fix (e.g., `feature/add-dark-mode` or `fix/responsive-bug`).
*   💻 **Make Your Changes**: Implement your changes, ensuring code quality and adherence to existing patterns.
*   ✅ **Test Thoroughly**: Test your changes to prevent regressions.
*   ⬆️ **Commit Your Changes**: Write clear and concise commit messages.
*   🚀 **Push to Your Branch**: Push your changes to your forked repository.
*   🤝 **Open a Pull Request**: Submit a pull request to the `main` branch of this repository, describing your changes in detail.

Your contributions are greatly appreciated!

## License

This project currently does not have an explicit license file. Please contact the author for licensing inquiries or usage permissions.

## Author

**Oluwasegun Benjamin**
A passionate Frontend Developer and Graphic Designer dedicated to building intuitive and visually appealing digital experiences.

*   🌐 **LinkedIn**: [Oluwasegun Benjamin](https://www.linkedin.com/in/oluwasegun-benjamin-a80b76252/)
*   🐦 **X (Twitter)**: [@Bensaxxy11](https://x.com/Bensaxxy11)
*   👩‍💻 **Frontend Mentor**: [Bensaxxy](https://www.frontendmentor.io/profile/Bensaxxy)

---

[![Vercel Deployment](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![React](https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/-Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vite](https://img.shields.io/badge/-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

---
[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)