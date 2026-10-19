import Typed from "typed.js";
import { useEffect, useRef } from "react";

function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const typed = new Typed(ref.current, {
      strings: ["Backend Developer", "AI Application Developer"],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <div
      id="Home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-28">
      <h1 className="text-3xl md:text-6xl font-bold">
        Hi, I'm <span className="text-blue-400">Roman Ali</span>
      </h1>

      <h2 className="text-lg md:text-2xl text-gray-400 mt-4 h-10">
        <span ref={ref}></span>
      </h2>

      <p className="text-gray-500 max-w-xl mt-4 text-sm md:text-base leading-7">
        I develop backend systems and AI-powered applications using Python,
        FastAPI, LLMs, and Retrieval-Augmented Generation (RAG). I enjoy
        building intelligent solutions that connect language models with
        real-world data and practical workflows.
      </p>

      <button
        onClick={() => {
          const link = document.createElement("a");
          link.href = "/Roman%20Ali.pdf";
          link.download = "Roman_Ali_CV.pdf";
          link.click();
        }}
        className="mt-6 bg-blue-500 px-6 py-3 rounded-full hover:scale-105 transition cursor-pointer">
        Download CV
      </button>
    </div>
  );
}

export default Hero;
