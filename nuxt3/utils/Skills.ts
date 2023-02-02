const javaScriptIcon = "skill-icons:javascript";

export const useSkills = () => [
    {
        icon: javaScriptIcon,
        tech: "JavaScript",
        description: "It's used to create interactive front-end web experiences. It's also used on the server-side through technologies such as Node.js.",
        yearStarted: 2017,
        tools: [
            {
                icon: "logos:vue",
                text: "Vue",
                description: `Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members. <a href="https://vuejs.org/" target="_blank" alt="Go To VueJS">Go To VueJS</a>`,
            },
            {
                icon: "logos:nuxt-icon",
                text: "Nuxt JS",
                description: `Build your next Vue.js application with confidence using NuxtJS. An open source framework making web development simple and powerful. <a href="https://nuxtjs.org/" target="_blank" alt="go to Nuxtjs">Go To NuxtJS</a>`,
            },
            {
                icon: "logos:nodejs-icon",
                text: "NodeJs",
                description: `Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.`,
            },
            {
                icon: "skill-icons:typescript",
                text: "TypeScript",
                description: `Its actually like javascript but focuses more on types, this was created to be useful on IDEs like VS Code, and also help lower type errors in the future, specially as the project grows. <a href="https://www.typescriptlang.org/">To Know More Click Here</a>`,
            },
        ],
    },
    {
        icon: "skill-icons:html",
        tech: "HTML/CSS",
        description: "For creating the structure, design and layout of web pages. It uses a system of tags and attributes to define the various elements on a web page.",
        yearStarted: 2016,
        tools: [
            {
                icon: "logos:tailwindcss-icon",
                text: "tailwindcss",
                description: `A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.`,
            },
            {
                icon: "logos:windi-css",
                svg: true,
                text: "windicss",
                description: `If you are already familiar with Tailwind CSS, think about Windi CSS as an on-demand alternative to Tailwind, which provides faster load times, fully compatible with Tailwind v2.0 and with a bunch of additional cool features.`,
            },
            {
                icon: "skill-icons:sass",
                text: "SASS",
                description: `CSS with superpowers. Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.`,
            },
            {
                icon: "skill-icons:html",
                text: "html5",
                description: `HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and last major HTML version that is a World Wide Web Consortium recommendation. The current specification is known as the HTML Living Standard.`,
            },
        ],
    },
    {
        icon: "logos:php",
        tech: "PHP",
        description:
            "Server-side scripting language primarily used for web development. Also commonly used with the MySQL database, and is supported by many web servers and operating systems.",
        yearStarted: 2017,
        tools: [
            {
                icon: "logos:codeigniter-icon",
                teny: true,
                text: "CodeIgniter",
                description:
                    "CodeIgniter is a powerful PHP framework with a very small footprint, built for developers who need a simple and elegant toolkit to create full-featured web applications.",
            },
            {
                icon: "logos:laravel",
                teny: true,
                text: "laravel/Lumen",
                description:
                    "<a href='https://laravel.com/' target='_blank' alt='Go to Laravel'>Laravel</a> is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony. Laravel <a href='https://lumen.laravel.com/' target='_blank' alt='Go to lumen'>Lumen</a> is a stunningly fast PHP micro-framework for building web applications with expressive, elegant syntax.",
            },
        ],
    },
    {
        icon: "skill-icons:rails",
        tech: "Rails",
        description:
            "Written in the Ruby and follows the Model-View-Controller (MVC) architectural pattern and emphasizes the use of convention over configuration, which allows developers to create web applications quickly and efficiently.",
        yearStarted: 2019,
        tools: [
            {
                icon: "skill-icons:rails",
                text: "Ruby on Rails",
                description:
                    "Ruby on Rails, or Rails, is a server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller framework, providing default structures for a database, a web service, and web pages.",
            },
        ],
    },
    {
        icon: "ri:layout-3-fill",
        tech: "UI Design",
        description:
            "UI designers are responsible for creating a seamless and intuitive experience for users by making the interface easy to use, visually appealing and accessible.",
        yearStarted: 2021,
        tools: [
            {
                icon: "logos:figma",
                text: `Figma`,
                description: `As a developer that also works with frontend development, I started to learn and gain experience in UX designing because I want it to be User Friendly. Figma is great for creating designs and is what I use.`,
            },
        ],
    },
];
