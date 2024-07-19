"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 12,
    title: "Language Learning",
    description: "Next.js, React, PostgresDB, Stripe",
    image: "https://s2.loli.net/2024/07/17/JKOau4VkUQs9HNf.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EthanCh30/Language-Learning-SaaS",
    previewUrl: "https://lingo-six6.vercel.app",
  },
  {
    id: 11,
    title: "Blog",
    description: "MongoDB, Express, React, Tailwind and Node.js",
    image: "https://s2.loli.net/2024/07/17/uiHtK13chOBP8EM.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EthanCh30/Mern-Blog",
    previewUrl: "https://mern-blog-m3yk.onrender.com/",
  },
  {
    id: 10,
    title: "Hotel Booking",
    description: "React, Tailwind, Prisma, MongoDB, and NextAuth",
    image: "https://s2.loli.net/2024/07/17/wDQr3nXAOUqvR84.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EthanCh30/AirHotel",
    previewUrl: "https://renthotel.vercel.app/",
  },
  {
    id: 9,
    title: "Music Streming",
    description: "Next.js, React, Tailwind CSS, Supabase, PostgreSQL, and Stripe",
    image: "https://s2.loli.net/2024/07/17/ryf59MueiTqSmGb.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EthanCh30/MusicGo",
    previewUrl: "https://musicgo-git-main-ethanch30s-projects.vercel.app/",
  },
  {
    id: 8,
    title: "Movie Streming",
    description: "React, Tailwind CSS, Next.js, Prisma, MongoDB, and NextAuth",
    image: "https://s2.loli.net/2024/07/17/vlrB1cSHy6Ee4XR.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EthanCh30/Netflix-Clone",
    previewUrl: "https://netflix-clone-tau-pink.vercel.app/",
  },
  {
    id: 7,
    title: "Social Media",
    description: "Connect to the world",
    image: "https://camo.githubusercontent.com/4716bd14a028583c0ff984b372ad79b6e81854c9b96852badeba7f999c92ac01/68747470733a2f2f73322e6c6f6c692e6e65742f323032342f30372f31392f7a4c4b7542375a6f564d6c785138642e706e67",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EthanCh30/SocialMedia",
    previewUrl: "https://social-media-chi-brown.vercel.app/",
  },
  {
    id: 6,
    title: "FreeScribe",
    description: "A speech recognition translation App",
    image: "https://camo.githubusercontent.com/db6506e1a6c4a450c245d602e9966b6796781c57dc7de5c9e4a0902f5cd4c334/68747470733a2f2f73322e6c6f6c692e6e65742f323032342f30372f31372f6e395436486471655a625234314a6b2e706e67",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EthanCh30/FreeScribe",
    previewUrl: "https://freescribetranslate.netlify.app/",
  },
  {
    id: 5,
    title: "Gym Heaven",
    description: "A training plan generator",
    image: "https://camo.githubusercontent.com/3ac46f8ec044249fe4ea735576906749062131b45df6e7552aeed38a6ec86494/68747470733a2f2f73322e6c6f6c692e6e65742f323032342f30372f31372f717969554d774c436636335a3253342e706e67",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EthanCh30/Gym_App",
    previewUrl: "https://gymheaven.netlify.app/",
  },
  {
    id: 4,
    title: "Daily Wallpaper",
    description: "Latest wallpapers from NASA",
    image: "https://camo.githubusercontent.com/9040b0ae209992ecbe167468edcca6c6db552c3ff3d86f59994397813150064f/68747470733a2f2f73322e6c6f6c692e6e65742f323032342f30372f31372f6b525346766155364e78654962746f2e706e67",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EthanCh30/Daily_Wallpaper",
    previewUrl: "https://dailywallpaperfromnasa.netlify.app/",
  },
  {
    id: 3,
    title: "Sushi Restaurant",
    description: "Takeaway booking platform",
    image: "https://s2.loli.net/2024/07/17/g6AasxcfMGC7Q1t.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EthanCh30/sushi-restaurant",
    previewUrl: "https://ethanch30.github.io/sushi-restaurant/",
  },
  {
    id: 2,
    title: "Random Quote",
    description: "Randomly generate famous quotes",
    image: "https://s2.loli.net/2024/07/17/HoxdZUsBGqf7yFm.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EthanCh30/Random-Quote",
    previewUrl: "https://ethanch30.github.io/Random-Quote/",
  },
  {
    id: 1,
    title: "Calculator",
    description: "Normal but beautiful calculator",
    image: "https://s2.loli.net/2024/07/17/5YuQlShKNwfJZmM.png",
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
