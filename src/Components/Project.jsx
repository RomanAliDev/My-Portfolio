import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Project() {
  const projects = [
    {
      title: "AI RAG Chatbot",
      techStack: [
        "React",
        "FastAPI",
        "Python",
        "LangChain",
        "Gemini",
        "PostgreSQL",
        "pgvector",
      ],
      link: "https://ai-rag-chatbot-indol.vercel.app",
      github: "https://github.com/RomanAliDev/AI-RAG-Chatbot",
      description:
        "An AI-powered chatbot that answers questions using uploaded documents through Retrieval-Augmented Generation (RAG) and large language models.",
      image: null,
      category: "GENERATIVE AI",
    },
    {
      title: "AI Resume Screening Platform",
      techStack: ["Python", "FastAPI", "PostgreSQL", "LLMs"],
      link: "https://ai-resume-screening-platform-sigma.vercel.app",
      github: "https://github.com/RomanAliDev/AI-Resume-Screening-Platform",
      description:
        "An AI-powered recruitment platform designed to analyze resumes against job descriptions and help recruiters evaluate candidate relevance.",
      image: null,
      category: "AI APPLICATION",
    },
    {
      title: "AI Document Workflow Platform",
      techStack: ["Python", "FastAPI", "PostgreSQL", "LLMs", "RAG"],
      link: "https://ai-document-workflow-platform.vercel.app",
      github: "https://github.com/RomanAliDev/AI-Document-Workflow-Platform",
      description:
        "An AI document processing platform focused on extracting information from documents, organizing structured data, and enabling intelligent document search.",
      image: null,
      category: "AI AUTOMATION",
    },
  ];

  return (
    <section
      id="Projects"
      className="border-t border-gray-800 py-20 px-4 sm:px-6 md:px-12 bg-[#0d0d0d]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        My <span className="text-blue-400">Projects</span>
      </h2>

      <p className="text-gray-400 text-sm sm:text-base text-center max-w-2xl mx-auto mb-12">
        A selection of my AI-powered applications and full-stack development
        projects.
      </p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-[#141414] border border-gray-800 rounded-xl overflow-hidden flex flex-col hover:border-blue-500 hover:-translate-y-1 transition-all duration-300">
            {/* Project Preview */}
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-56 sm:h-60 object-cover object-top"
              />
            ) : (
              <div className="h-52 bg-gradient-to-br from-[#101827] via-[#111111] to-[#172554] flex flex-col items-center justify-center gap-3 border-b border-gray-800">
                <span className="text-blue-400 text-xs tracking-[0.25em] font-semibold">
                  {project.category}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold text-white text-center px-4">
                  {project.title}
                </h3>

                <div className="flex gap-2 text-blue-300 text-xs">
                  <span className="border border-blue-400/30 rounded-full px-3 py-1">
                    AI Powered
                  </span>
                  <span className="border border-blue-400/30 rounded-full px-3 py-1">
                    Web App
                  </span>
                </div>
              </div>
            )}

            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-bold text-blue-400">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-6 mt-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-gray-300 bg-black border border-gray-700 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-auto pt-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                  Live Demo <FaExternalLinkAlt />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
                  <FaGithub /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
