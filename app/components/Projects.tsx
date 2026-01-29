"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  year: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Plant Care",
    category: "FULL-STACK",
    description: "Helps users manage and track plant care routines with reminders and notes.",
    image: "/assets/images/projects/plantsc.png",
    tech: ["React", "MongoDB", "Firebase", "Node.js"],
    liveUrl: "https://plant-care-tracker-bd.web.app",
    githubUrl: "https://github.com/mehedi-hasan1102/Plant-Care-Client",
    year: "2025",
  },
  {
    id: 2,
    title: "Food Tracker",
    category: "FULL-STACK",
    description: "A production-ready food management app featuring real-time synchronization, JWT authentication, and optimized performance.",
    image: "/assets/images/projects/food.png",
    tech: ["React", "Tailwind CSS", "Firebase", "Express.js"],
    liveUrl: "https://food-garden-bd.web.app",
    githubUrl: "https://github.com/mehedi-hasan1102/Food-Garden-Client",
    year: "2025",
  },
  {
    id: 3,
    title: "Duranta Online",
    category: "FULL-STACK",
    description: "Provides high-speed internet and cable services with responsive UI, support center, and admin dashboard.",
    image: "/assets/images/projects/duranta.png",
    tech: ["Next.js", "TypeScript", "MongoDB", "Node.js"],
    liveUrl: "https://duranta-online.vercel.app/",
    githubUrl: "https://github.com/mehedi-hasan1102/Duranta-Online-Client",
    year: "2024",
  },
  {
    id: 4,
    title: "Task Manager",
    category: "FULL-STACK",
    description: "Responsive Task Management app with real-time updates, optimized state management, and robust validation.",
    image: "/assets/images/projects/task.png",
    tech: ["Next.js", "TypeScript", "MongoDB", "Mongoose", "Express.js", "Zod", "TanStack Query"],
    liveUrl: "https://meheditodo.vercel.app",
    githubUrl: "https://github.com/mehedi-hasan1102/task-manager-client",
    year: "2025",
  },
  {
    id: 5,
    title: "Active Arena",
    category: "FULL-STACK",
    description: "Playground management app with real-time synchronization, JWT authentication, and payment integration.",
    image: "/assets/images/projects/aarena.png",
    tech: ["React", "Stripe", "Firebase", "Tailwind CSS"],
    liveUrl: "https://buildbox-a12.web.app",
    githubUrl: "https://github.com/mehedi-hasan1102/Active-Arena-Client",
    year: "2024",
  },
  {
    id: 6,
    title: "Event Explorer",
    category: "FRONTEND",
    description: "Event booking platform where users can browse and reserve seats for local events.",
    image: "/assets/images/projects/events.png",
    tech: ["React", "Firebase", "Node.js"],
    liveUrl: "https://event-explorer-bd.netlify.app",
    githubUrl: "https://github.com/mehedi-hasan1102/Event-Explorer",
    year: "2024",
  },
  {
    id: 7,
    title: "Phudu Medical Appointment App",
    category: "FRONTEND",
    description: "Modern and responsive medical appointment booking app with smooth animations and booking system.",
    image: "/assets/images/projects/phudu.png",
    tech: ["React", "Tailwind CSS"],
    liveUrl: "https://phudu-medical.netlify.app/",
    githubUrl: "https://github.com/mehedi-hasan1102/Phudu-Medical-Apoinment-App",
    year: "2024",
  },
  {
    id: 8,
    title: "Auction Gallery",
    category: "FRONTEND",
    description: "React-based auction app with real-time bid system.",
    image: "/assets/images/projects/action.png",
    tech: ["React", "Tailwind CSS", "DaisyUI"],
    liveUrl: "https://auctiongallerybd.netlify.app",
    githubUrl: "https://github.com/mehedi-hasan1102/Auction-Gallery",
    year: "2024",
  }
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.set(card, { opacity: 0, y: 100 });

    ScrollTrigger.create({
      trigger: card,
      start: "top 85%",
      onEnter: () => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.1,
        });
      },
    });
  }, [index]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (imageRef.current) {
      const img = imageRef.current.querySelector("img");
      if (img) {
        gsap.to(img, { scale: 1.1, duration: 0.6, ease: "power2.out" });
      }
    }
    if (numberRef.current) {
      gsap.to(numberRef.current, { x: 10, color: "#06B6D4", duration: 0.3 });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (imageRef.current) {
      const img = imageRef.current.querySelector("img");
      if (img) {
        gsap.to(img, { scale: 1, duration: 0.6, ease: "power2.out" });
      }
    }
    if (numberRef.current) {
      gsap.to(numberRef.current, { x: 0, color: "rgba(255,255,255,0.2)", duration: 0.3 });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    gsap.to(cardRef.current, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.5,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  };

  const handleMouseLeaveCard = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, { rotateX: 0, rotateY: 0, duration: 0.5, ease: "power2.out" });
    handleMouseLeave();
  };

  return (
    <div
      ref={cardRef}
      className="project-card"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeaveCard}
    >
      <div className="project-card-inner">
        {/* Project Number */}
        <span ref={numberRef} className="project-number">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Image Container */}
        <div className="project-image-container" ref={imageRef}>
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
          />
          <div className={`project-overlay ${isHovered ? "active" : ""}`}>
            <div className="overlay-content">
              <span className="view-project">VIEW PROJECT</span>
              <div className="overlay-links">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overlay-link"
                >
                  LIVE ↗
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overlay-link"
                >
                  GITHUB ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="project-content">
          <div className="project-header">
            <span className="project-category">{project.category}</span>
            <span className="project-year">{project.year}</span>
          </div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-tech">
            {project.tech.map((tech) => (
              <span key={tech} className="project-tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    const line = lineRef.current;
    if (!header || !line) return;

    gsap.set(header.children, { y: 100, opacity: 0 });
    gsap.set(line, { scaleX: 0 });

    ScrollTrigger.create({
      trigger: header,
      start: "top 80%",
      onEnter: () => {
        gsap.to(header.children, { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" });
        gsap.to(line, { scaleX: 1, duration: 1.2, ease: "power3.inOut", delay: 0.3 });
      },
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <section ref={sectionRef} className="projects-section" id="work">
      <div className="projects-container">
        <div ref={headerRef} className="projects-header">
          <span className="projects-label">FEATURED WORK</span>
          <h2 className="projects-title">
            SELECTED <span className="text-accent">PROJECTS</span>
          </h2>
          <p className="projects-subtitle">
            A collection of projects that showcase my skills and passion for building exceptional digital experiences.
          </p>
        </div>

        <div ref={lineRef} className="projects-line" />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="projects-cta">
          <a
            href="https://github.com/mehedi-hasan1102"
            target="_blank"
            rel="noopener noreferrer"
            className="view-all-btn"
          >
            <span className="btn-text">VIEW ALL PROJECTS ON GITHUB</span>
            <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
