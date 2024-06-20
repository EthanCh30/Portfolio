"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 8,
    title: "Language-Learning",
    description: "Next.js, React, PostgresDB, Stripe",
    image: "/images/projects/8.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EthanCh30/Language-Learning-SaaS",
    previewUrl: "https://lingo-alpha-six.vercel.app/",
  },

  {
    id: 7,
    title: "Blog",
    description: "MongoDB, Express, React, Tailwind and Node.js",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EthanCh30/Mern-Blog",
    previewUrl: "https://mern-blog-m3yk.onrender.com/",
  },

  {
    id: 6,
    title: "Hotel Booking",
    description: "React, Tailwind, Prisma, MongoDB, and NextAuth",
    image: "/images/projects/AirHotel.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EthanCh30/AirHotel",
    previewUrl: "https://renthotel.vercel.app/",
  },
  {
    id: 5,
    title: "Music Streming",
    description: "Next.js, React, Tailwind CSS, Supabase, PostgreSQL, and Stripe",
    image: "/images/projects/MusicGo1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EthanCh30/MusicGo",
    previewUrl: "https://musicgo-git-main-ethanch30s-projects.vercel.app/",
  },
  {
    id: 4,
    title: "Movie Streming",
    description: "React, Tailwind CSS, Next.js, Prisma, MongoDB, and NextAuth",
    image: "/images/projects/Netflix.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EthanCh30/Netflix-Clone",
    previewUrl: "https://netflix-clone-tau-pink.vercel.app/",
  },
  {
    id: 3,
    title: "Sushi Restaurant",
    description: "HTML, CSS, JavaScript",
    image: "/images/projects/Sushi.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EthanCh30/sushi-restaurant",
    previewUrl: "https://ethanch30.github.io/sushi-restaurant/",
  },
  {
    id: 2,
    title: "Random Quote",
    description: "HTML, CSS, JavaScript",
    image: "/images/projects/Random-Quote.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EthanCh30/Random-Quote",
    previewUrl: "https://ethanch30.github.io/Random-Quote/",
  },
  {
    id: 1,
    title: "Calculator",
    description: "HTML, CSS, JavaScript",
    image: "/images/projects/Calculator.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EthanCh30/Calculator",
    previewUrl: "https://ethanch30.github.io/Calculator/",
  },

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
