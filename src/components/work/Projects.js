import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import "./Projects.css";
import sophieBluel from "../../images/sophie-bluel.jpg";
import kasa from "../../images/kasa.jpg";
import ohMyFood from "../../images/oh-my-food.jpg";
import booki from "../../images/booki.webp";
import argentBank from "../../images/argent-bank.jpg";
import events from "../../images/724events.jpg";
import printIt from "../../images/print-it.jpg";
import ninaCarducci from "../../images/nina-carducci.jpg";

export default function Projects() {
  const projects = [
    {
      _id: 0,
      name: "Projet HTML5 & CSS",
      category: "CSS",
      src: ohMyFood,
      description:
        "Integrate the model created by the UI designer in mobilefirst while respecting the graphic and animation constraints, without using JavaScript.",
      link: "https://github.com/FSKN98/Oh-My-Food",
    },
    {
      _id: 1,
      name: "Projet HTML5 & CSS",
      category: "CSS",
      src: booki,
      description:
        "Create a prototype site by integrating the template designed by the designer UI, in HTML and CSS. The site must be responsive.",
      link: "https://github.com/FSKN98/Booki",
    },

    {
      _id: 2,
      name: "Projet JavaScript",
      category: "JS",
      src: sophieBluel,
      description:
        "Development of a JavaScript application interacting with a NodeJS backend.",
      link: "https://github.com/FSKN98/Sophie-Bluel",
    },

    {
      _id: 3,
      name: "Projet JavaScript",
      category: "JS",
      src: printIt,
      description: "Add a carousel to the Print-It site.",
      link: "https://github.com/FSKN98/Print-It-",
    },
    {
      _id: 4,
      name: "Projet React",
      category: "React",
      src: kasa,
      description: "Development of a real estate rental React application.",
      link: "https://github.com/FSKN98/Kasa",
    },
    {
      _id: 5,
      name: "Projet React",
      category: "React",
      src: events,
      description: "Debug the website of an event agency.",
      link: "https://github.com/FSKN98/D-bugger-un-site-React-JS",
    },
    {
      _id: 6,
      name: "Projet React",
      category: "React",
      src: argentBank,
      description:
        "Front-end implementation of a banking application with Redux.",
      link: "https://github.com/FSKN98/Argent-Bank---React-JS",
    },
    {
      _id: 7,
      name: "Projet SEO",
      category: "SEO",
      src: ninaCarducci,
      description: "Bug search and SEO optimization.",
      link: "https://github.com/FSKN98/Nina-Carducci",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("all");
  const [activeProject, setActiveProject] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    const filters = document.querySelectorAll("#filters div");

    for (let filter of filters) {
      filter.addEventListener("click", function () {
        setActiveCategory(this.id);
      });
    }
  }, []);

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) => project.category === activeCategory
      );
      setFilteredProjects(filtered);
    }
  }, [activeCategory]);

  const onHoverProject = (index) => {
    setActiveProject(index);
  };

  const onClearHoverProject = () => {
    setActiveProject(null);
  };

  return (
    <div id="mes-projets" className="projects-container">
      <h1>My projects</h1>
      <section id="filters">
        <div id="all">All</div>
        <div id="React">React</div>
        <div id="JS">JavaScript</div>
        <div id="CSS">HTML5 & CSS</div>
        <div id="SEO">SEO</div>
      </section>
      <div id="gallery">
        {filteredProjects.map((project) => (
          <div
            key={project._id}
            className={`gallery-item ${
              activeProject === project._id ? "active" : "inactive"
            }`}
            onMouseEnter={() => onHoverProject(project._id)}
            onMouseLeave={onClearHoverProject}
          >
            <img src={project.src} alt={project.name} />
            {activeProject === project._id && (
              <Fade duration={700}>
                <div className="overlay-content">
                  <h2>{project.name}</h2>
                  <p className="imgDescription">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github link
                  </a>
                </div>
              </Fade>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
