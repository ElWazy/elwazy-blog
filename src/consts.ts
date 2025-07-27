import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "ElWazy Blog",
  EMAIL: "santiago.fierro4@outlook.cl",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 2,
};

export const HOME: Metadata = {
  TITLE: "Inicio",
  DESCRIPTION: "Dios le dá los peores shows a sus mejores payasos",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "El aprendizaje forzado no funciona",
};

export const WORK: Metadata = {
  TITLE: "Trabajo",
  DESCRIPTION: "Cosas que he hecho",
};

export const PROJECTS: Metadata = {
  TITLE: "Projectos",
  DESCRIPTION: "Lo que he hago en mi tiempo libre",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/elcazy",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/ElWazy"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/elwazy/",
  }
];
