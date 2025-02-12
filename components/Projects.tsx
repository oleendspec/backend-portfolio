import React from "react";

const projects = [
  {
    title: "E-commerce with Django",
    description:
      "I have created a fully functional e-commerce website using Django, a powerful web framework known for its efficiency and scalability. The site has a user-friendly interface that allows customers to browse products, add items to their cart, and complete their purchases seamlessly.",
    technologies: ["E-commerce", "Django", "MongoDB"],
    role: "Full Stack Developer",
    date: "January 2023 - May 2023",
    githubLink: "https://github.com/oleendspec/e-commerce-django",
    liveLink: "",
    images: ["images/ecommerce-django.png"],
  },
  {
    title: "Online-Bookstore with Django",
    description:
      "I developed an online bookstore using Django, a versatile web framework that allows for rapid development and clean design. The website provides a smooth shopping experience for book lovers.",
    technologies: ["E-commerce", "Django", "PostgreSQL", "CSS"],
    role: "Full Stack Developer",
    date: "February 2024 - March 2024",
    githubLink: "https://github.com/oleendspec/django-e-commerce-book-store",
    liveLink: "",
    images: ["images/online-book-store.png"],
  },
  {
    title: "Next.js Dashboard",
    description:
      "I created our admin dashboard template using Next.js. The template is designed to provide a sleek and intuitive interface for managing your application and data efficiently.",
    technologies: ["Next.js", "Tailwind CSS"],
    role: "Front End Developer",
    date: "October 2022 - December 2022",
    githubLink: "https://github.com/oleendspec/next-dashboard",
    liveLink: "",
    images: ["images/tailadmin-nextjs.jpg"],
  },
  {
    title: "React.js Stripe",
    description:
      "I have built a payment gateway integration using Stripe in my React.js application. The implementation includes features like payment form processing, user input validation, and payment confirmation management.",
    technologies: ["Next.js", "Tailwind CSS"],
    role: "Front End Developer",
    date: "April 2024 - May 2024",
    githubLink: "https://github.com/oleendspec/react-stripe",
    liveLink: "",
    images: ["images/react-stripe.png"],
  },
];

const Projects: React.FC = () => {
  return (
    <div id="projects" className="py-1 mb-5">
      <div data-aos="fade-up" className="text-center">
        <h1 className="text-3xl font-semibold my-10">Projects</h1>
      </div>
      <div className="max-w-auto mx-auto px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            data-aos="fade-up"
            key={index}
            className="bg-gray-200 p-3 dark:bg-gray-900 rounded-lg shadow-lg flex flex-col"
          >
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="p-3 flex flex-col flex-grow">
              <h2 data-aos="fade-up" className="text-xl font-bold mb-2">
                {project.title}
              </h2>
              <p
                data-aos="fade-up"
                className="text-gray-700 dark:text-gray-400 mb-4 flex-grow"
              >
                {project.description}
              </p>
              <div data-aos="fade-up" className="mb-4">
                <span className="text-gray-600 dark:text-gray-400 font-semibold">
                  Technologies:
                </span>
                <div data-aos="fade-up" className="flex flex-wrap mt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-200 text-blue-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div
                data-aos="fade-up"
                className="flex justify-between items-center mt-2"
              >
                <a
                  href={project.githubLink}
                  className="text-blue-500 hover:bg-blue-600 dark:text-white hover:text-white hover:p-1 hover:rounded-md duration-300 hover:scale-105"
                >
                  GitHub
                </a>
                {project.liveLink !== "#" && (
                  <a
                    href={project.liveLink}
                    className="text-purple-500 dark:text-white hover:bg-purple-600 hover:text-white hover:p-1 hover:rounded-md duration-300 hover:scale-105"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
