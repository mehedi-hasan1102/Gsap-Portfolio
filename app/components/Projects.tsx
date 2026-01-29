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
    title: "E-COMMERCE PLATFORM",
    category: "FULL-STACK",
    description:
      "A modern e-commerce solution with real-time inventory, payment integration, and admin dashboard.",
    image: "/projects/project1.webp",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    year: "2025",
  },
  {
    id: 2,
    title: "AI DASHBOARD",
    category: "FRONTEND",
    description:
      "Interactive analytics dashboard with AI-powered insights and real-time data visualization.",
    image: "/projects/project2.webp",
    tech: ["React", "D3.js", "TailwindCSS", "OpenAI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    year: "2025",
  },
  {
    id: 3,
    title: "SOCIAL MEDIA APP",
    category: "FULL-STACK",
    description:
      "Feature-rich social platform with real-time messaging, stories, and content sharing.",
    image: "/projects/project3.webp",
    tech: ["Next.js", "Socket.io", "MongoDB", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    year: "2024",
  },
  {
    id: 4,
    title: "PORTFOLIO GENERATOR",
    category: "SAAS",
    description:
      "Drag-and-drop portfolio builder with custom themes and one-click deployment.",
    image: "/projects/project4.webp",
    tech: ["React", "Node.js", "AWS", "Prisma"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    year: "2024",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
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
      gsap.to(imageRef.current, {
        scale: 1.1,
        duration: 0.6,
        ease: "power2.out",
      });
    }
    if (numberRef.current) {
      gsap.to(numberRef.current, {
        x: 10,
        color: "#ff4d4d",
        duration: 0.3,
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
      });
    }
    if (numberRef.current) {
      gsap.to(numberRef.current, {
        x: 0,
        color: "rgba(255,255,255,0.2)",
        duration: 0.3,
      });
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
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.out",
    });
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
        <div className="project-image-container">
          <div ref={imageRef} className="project-image-wrapper">
            <div className="project-image-placeholder">
              <span className="placeholder-text">{project.title}</span>
            </div>
          </div>
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
        <div ref={contentRef} className="project-content">
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
        gsap.to(header.children, {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
        });
        gsap.to(line, {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.inOut",
          delay: 0.3,
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="projects-section" id="work">
      <div className="projects-container">
        {/* Section Header */}
        <div ref={headerRef} className="projects-header">
          <span className="projects-label">FEATURED WORK</span>
          <h2 className="projects-title">
            SELECTED <span className="text-accent">PROJECTS</span>
          </h2>
          <p className="projects-subtitle">
            A collection of projects that showcase my skills and passion for
            building exceptional digital experiences.
          </p>
        </div>

        <div ref={lineRef} className="projects-line" />

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="projects-cta">
          <a
            href="https://github.com"
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
