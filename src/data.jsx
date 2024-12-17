import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  }, {
    id: nanoid(),
    title: "Mern stack",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Skilled in building dynamic and scalable full-stack applications using the MERN stack , with expertise in designing interactive user interfaces, managing server-side logic, and ensuring smooth data flow between the client and server.",
  }
];

export const projects = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
   github: "https://github.com/Prashu26",
    title: "Movie Review website",
    text: "I built a movie review website using React and Spring Boot. Through this website, you can watch trailers of upcoming movies and write reviews for movies you have already seen.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/Prashu26/Final_Project",
    title: "Home rental website",
    text: " Built a home rental website that allows users to search for houses to rent, sort listings based on their preferences, and enables tenants to upload their rental properties to the platform.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
   github: "https://github.com/Prashu26/hack1",
    title: "Fitness website",
    text: "Built a fitness website that allows users to track their progress and select exercises they want to perform. The platform includes a community page where users can join specific groups and ask questions anonymously. Additionally, it features an admin dashboard to manage communities and oversee other platform activities.",
  },
];
