import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Anamcara",
    description:
      "A web application linking to the Anamcara Discord server to automate the application process based on your discord server roles and track daily missions in the Lost Ark game.",
    tools: [
      "Laravel",
      "React",
      "React Redux",
      "MySQL",
      "Discord API",
      "OAuth2",
    ],
    role: "Full-Stack Developer",
    code: "https://github.com/Yorften/Anamcara",
    demo: "https://anamcara-front.vercel.app",
    image: crefin,
  },
  {
    id: 2,
    name: "Internship project Ecospare",
    description:
      "I have reconstructed the EcoSpare.fr website, a platform specializing in the purchase, sale, dismantling, and repair of used industrial machines. I redeveloped the site using modern technologies to enhance performance, improve SEO, and boost user engagement. The new design ensures a seamless user experience and aligns with current web standards. The project involved optimizing the platform's structure for better search engine visibility and implementing user-focused features to support its business goals.",
    tools: [
      "NextJS",
      "Tailwind CSS",
      "Nodemailer",
      "Prisma",
      "TypeScript",
      "PostgreSQL",
      "Vercel",
      "Vercel Blob",
      "React Pdf",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "https://eco-spare-test.vercel.app/en",
    image: travel,
  },
  {
    id: 3,
    name: "Farm Management API",
    description:
      "Citronix, an API designed to streamline farm management for lemon producers. This application helps farmers track farms, fields, trees, harvests, and sales, ensuring optimized productivity and seamless operations.",
    tools: [
      "Java 8",
      "Spring Boot",
      "JUnit & Mockito",
      "Liquibase",
      "PostgreSQL",
      "H2",
      "SwaggerUI",
      "Github Actions",
    ],
    code: "https://github.com/Yorften/Citronix",
    role: "Backend Developer",
    demo: "",
    image: realEstate,
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
