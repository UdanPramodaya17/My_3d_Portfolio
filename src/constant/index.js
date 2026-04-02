import { meta, shopify, starbucks, tesla } from "../assets/images";
import slt from "../assets/images/slt.png";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,

} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    // {
    //     imageUrl: motion,
    //     name: "postgresql",
    //     type: "Animation",
    // },
    // {
    //     imageUrl: mui,
    //     name: "Material-UI",
    //     type: "Frontend",
    // },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    // {
    //     title: "React.js Developer",
    //     company_name: "Starbucks",
    //     icon: starbucks,
    //     iconBg: "#accbe1",
    //     date: "March 2020 - April 2021",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "React Native Developer",
    //     company_name: "Tesla",
    //     icon: tesla,
    //     iconBg: "#fbc3bc",
    //     date: "Jan 2021 - Feb 2022",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    {
        title: "Full stack Developer",
        company_name: "Sri Lanka Telecom (Training)",
        icon: slt,
        iconBg: "#d1e6fa",
        date: " Sep 2025 - March 2026",
        points: [
            "Developing and maintaining full stack web applications using Next.js for both frontend and backend development.",
            "Building and integrating RESTful APIs, handling server-side logic, and managing application performance.",
            "Working with PostgreSQL for database design, queries, and data management.",
            "Creating responsive and user-friendly interfaces while ensuring cross-browser compatibility.",
            "Collaborating with team members to deliver efficient and scalable solutions.",
        ],
    }, {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "April 2026 - Present",
        points: [
            "Developing full stack web applications using the MERN stack and Next.js.",
            "Building RESTful APIs and handling backend logic using Node.js and Express.",
            "Designing and managing databases using MongoDB and PostgreSQL.",
            "Creating responsive and user-friendly interfaces with React and Next.js.",
            "Integrating frontend and backend systems to deliver scalable and efficient applications.",
        ],
    },

];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/UdanPramodaya17',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://linkedin.com/in/udanapramodaya',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'I Love It E-Commerce WebApp',
        description: 'Developed a full-stack e-commerce web application that enables users to seamlessly browse products, manage their shopping carts, and securely complete purchases using integrated payment gateways, providing a comprehensive online shopping experience',
        link: 'https://github.com/UdanPramodaya17/I_Love_IT-_E-Commerce_WebApp.git',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'FitZone Gym WebApp',
        description: 'Developed FitZone, a full-stack gym management system featuring role-based access control for Admins, Managers, and Customers to streamline gym operations and user engagement. Implemented secure authentication, dynamic nutrition/meal plan modules, and an administrative dashboard for member and appointment management using PHP and MySQL',
        link: 'https://github.com/UdanPramodaya17/FitZone_Gym_WebApp.git',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Yamu Travels - AI Trip Planner WebApp',
        description: 'AI Trip Planner WebApp is an intelligent travel planning tool that generates personalized itineraries based on user preferences using the OpenAI API. Built with React and Node.js, the app allows users to input destinations, travel dates, and interests to receive customized day-by-day plans, making trip planning smarter and faster.',
        link: 'https://github.com/UdanPramodaya17/Yamu_Travels_AI_Trip_Planner_WebApp.git',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: ' Drevenge E-Commerce WebApp',
        description: 'Developed Drevenge, a full-stack e-commerce platform featuring a modern React frontend and integrated Google OAuth, enabling users to browse curated collections, manage a persistent shopping cart, and track real-time order statuses.',
        link: 'https://github.com/UdanPramodaya17/Drevenge_E-Commerce_web.git',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Pharmacy Management System',
        description: 'Developed a multi-tier Pharmacy Management System using C# ASP.NET, enabling efficient coordination between pharmacies, manufacturing plants, and suppliers. Implemented centralized web services for tender processing, order management, and real-time inventory tracking, along with role-based desktop interfaces for secure and efficient data handling.',
        link: 'https://github.com/UdanPramodaya17/Pharmacy_Management_System.git',
    },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];