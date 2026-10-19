import { FaReact, FaPython, FaGithub, FaRobot, FaBrain } from "react-icons/fa";

import {
  SiTailwindcss,
  SiFastapi,
  SiLangchain,
  SiDocker,
  SiAmazonwebservices,
} from "react-icons/si";

function Skill() {
  const skills = [
    { name: "React JS", icon: <FaReact className="text-blue-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Python", icon: <FaPython className="text-yellow-400" /> },
    { name: "FastAPI", icon: <SiFastapi className="text-teal-400" /> },
    { name: "LLMs", icon: <FaBrain className="text-purple-400" /> },
    { name: "RAG", icon: <FaRobot className="text-blue-400" /> },
    { name: "LangChain", icon: <SiLangchain className="text-green-400" /> },
    { name: "LangGraph", icon: <FaBrain className="text-indigo-400" /> },
    { name: "AI Automation", icon: <FaRobot className="text-cyan-400" /> },
    { name: "Git & GitHub", icon: <FaGithub className="text-white" /> },
    { name: "AWS", icon: <SiAmazonwebservices className="text-orange-400" /> },
    { name: "Docker", icon: <SiDocker className="text-sky-400" /> },
  ];

  return (
    <section
      id="Skills"
      className="py-20 border-t border-gray-800 px-4 sm:px-6 md:px-12 bg-black">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        My <span className="text-blue-400">Skills</span>
      </h2>

      <p className="text-gray-400 text-sm sm:text-base text-center max-w-xl mx-auto mb-10">
        Technologies I use to build modern web applications and AI-powered
        solutions.
      </p>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="min-h-28 bg-[#141414] border border-gray-800 p-5 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl sm:text-4xl">{skill.icon}</div>

            <p className="text-gray-300 text-sm sm:text-base font-medium text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;
