function About() {
  return (
    <div
      id="About"
      className="border-t border-gray-800 bg-[#0d0d0d] px-6 py-24 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        About <span className="text-blue-400">Me</span>
      </h2>

      <div className="max-w-4xl mx-auto bg-[#141414] border border-gray-800 p-6 md:p-10 rounded-2xl shadow-lg">
        <p className="text-gray-300 leading-7 text-sm md:text-base">
          I am a Software Engineering student passionate about{" "}
          <span className="text-blue-400 font-semibold">
            Generative AI and AI Application Development.
          </span>{" "}
          During my AI internship at KEENU, I learned about Large Language
          Models (LLMs), Retrieval-Augmented Generation (RAG), and modern AI
          development techniques.
        </p>

        <p className="text-gray-400 mt-5 text-sm md:text-base leading-7">
          My learning includes{" "}
          <span className="text-blue-400">
            Python, FastAPI, LangChain, LangGraph, RAG pipelines, AI agents, and
            workflow automation.
          </span>{" "}
          I am interested in connecting AI models with documents, databases, and
          APIs to build useful and intelligent applications.
        </p>

        <p className="text-gray-400 mt-5 text-sm md:text-base leading-7">
          I am continuously improving my skills by developing AI-powered
          projects and exploring agentic workflows, with the goal of building
          reliable AI solutions that solve real-world problems.
        </p>
      </div>
    </div>
  );
}

export default About;
