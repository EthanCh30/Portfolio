"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Airbnb Clone",
    description: "React, Tailwind, Prisma, MongoDB, and NextAuth",
    image: "/images/projects/Airbnb.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EthanCh30/Airbnb-Clone",
    previewUrl: "https://renthotel.vercel.app/",
  },
  {
    id: 2,
    title: "Spotify Clone",
    description: "Next.js, React, Tailwind CSS, Supabase, PostgreSQL, and Stripe",
    image: "/images/projects/Spotify.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EthanCh30/Spotify-Clone",
    previewUrl: "https://spotify-clone-one-wine.vercel.app/",
  },
  {
    id: 3,
    title: "Netflix Clone",
    description: "React, Tailwind CSS, Next.js, Prisma, MongoDB, and NextAuth",
    image: "/images/projects/Netflix.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EthanCh30/Netflix-Clone",
    previewUrl: "https://netflix-clone-tau-pink.vercel.app/",
  },
  {
    id: 4,
    title: "Sushi Restaurant",
    description: "HTML, CSS, JavaScript",
    image: "/images/projects/Sushi.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EthanCh30/sushi-restaurant",
    previewUrl: "https://ethanch30.github.io/sushi-restaurant/",
  },
  {
    id: 5,
    title: "Random Quote",
    description: "HTML, CSS, JavaScript",
    image: "/images/projects/Random-Quote.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EthanCh30/Random-Quote",
    previewUrl: "https://ethanch30.github.io/Random-Quote/",
  },
  {
    id: 6,
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