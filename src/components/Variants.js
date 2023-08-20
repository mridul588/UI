// variants.js

export const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2, ease: "easeInOut" } },
  };
  
  export const slideInLeft = {
    hidden: { x: "-100%", opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 2, ease: "easeInOut" } },
  };
  
  export const slideInRight = {
    hidden: { x: "100%", opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 2, ease: "easeInOut" } },
  };

  export const slideInRight1 = {
    hidden: { x: "100%", opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 4, ease: "easeInOut" } },
  };
  export const slideInLeft1 = {
    hidden: { x: "-100%", opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 4, ease: "easeInOut" } },
  };
  