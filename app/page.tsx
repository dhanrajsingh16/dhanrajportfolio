"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentTime, setCurrentTime] = useState("");
  const [showResume, setShowResume] = useState(false);
  const [showMusic, setShowMusic] = useState(false);
  const [showStartMenu, setShowStartMenu] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative font-sans">
      {/* Desktop Icons */}
      <div className="absolute top-10 left-10 space-y-8">
        {/* My Music Icon */}
        <div
          className="flex flex-col items-center cursor-pointer group"
          onClick={() => setShowMusic(true)}
        >
          <Image
            src="/folder-music-fill.png"
            alt="My Music"
            width={64}
            height={64}
            className="group-hover:scale-110 transition-transform"
          />
          <span className="text-white text-sm mt-2 drop-shadow-lg">
            My Music
          </span>
        </div>

        {/* Resume Icon */}
        <div
          className="flex flex-col items-center cursor-pointer group"
          onClick={() => setShowResume(true)}
        >
          <Image
            src="/resume.png"
            alt="Resume"
            width={64}
            height={64}
            className="group-hover:scale-110 transition-transform"
          />
          <span className="text-white text-sm mt-2 drop-shadow-lg">Resume</span>
        </div>

        {/* Project Icons */}
        <div
          className="flex flex-col items-center cursor-pointer group"
          onClick={() =>
            window.open("https://dhanraj-ai.vercel.app/", "_blank")
          }
        >
          <Image
            src="/Dhanraj.AI.png"
            alt="Dhanraj.AI"
            width={64}
            height={64}
            className="group-hover:scale-110 transition-transform rounded-lg"
          />
          <span className="text-white text-sm mt-2 drop-shadow-lg">
            Dhanraj.AI
          </span>
        </div>

        <div
          className="flex flex-col items-center cursor-pointer group"
          onClick={() =>
            window.open(
              "https://www.npmjs.com/package/@dhanraj16/uploadnest-sdk",
              "_blank"
            )
          }
        >
          <Image
            src="/Npm.png"
            alt="Uploadnest SDK"
            width={64}
            height={64}
            className="group-hover:scale-110 transition-transform"
          />
          <span className="text-white text-sm mt-2 drop-shadow-lg">
            Uploadnest SDK
          </span>
        </div>

        <div
          className="flex flex-col items-center cursor-pointer group"
          onClick={() =>
            window.open("https://github.com/dhanrajsingh16/Cryptoverse", "_blank")
          }
        >
          <Image
            src="/Cryptoverse.png"
            alt="Cryptoverse"
            width={64}
            height={64}
            className="group-hover:scale-110 transition-transform"
          />
          <span className="text-white text-sm mt-2 drop-shadow-lg">
            Cryptoverse
          </span>
        </div>

        <div
          className="flex flex-col items-center cursor-pointer group"
          onClick={() =>
            window.open(
              "https://github.com/dhanrajsingh16/Calendar-Scheduling-Platform",
              "_blank"
            )
          }
        >
          <Image
            src="/Calendar Scheduling.png"
            alt="Calendar Scheduling"
            width={64}
            height={64}
            className="group-hover:scale-110 transition-transform"
          />
          <span className="text-white text-sm mt-2 drop-shadow-lg">
            Calendar Scheduling
          </span>
        </div>

        <div
          className="flex flex-col items-center cursor-pointer group"
          onClick={() => window.open("https://chess-go-mu.vercel.app/", "_blank")}
        >
          <Image
            src="/Chess-Go.png"
            alt="Chess-Go"
            width={64}
            height={64}
            className="group-hover:scale-110 transition-transform"
          />
          <span className="text-white text-sm mt-2 drop-shadow-lg">Chess-Go</span>
        </div>

        <div
          className="flex flex-col items-center cursor-pointer group"
          onClick={() =>
            window.open(
              "https://github.com/dhanrajsingh16/ai-financial-saas",
              "_blank"
            )
          }
        >
          <Image
            src="/Financial Saas.png"
            alt="Financial Saas"
            width={64}
            height={64}
            className="group-hover:scale-110 transition-transform"
          />
          <span className="text-white text-sm mt-2 drop-shadow-lg">
            Financial Saas
          </span>
        </div>

        <div
          className="flex flex-col items-center cursor-pointer group"
          onClick={() =>
            window.open(
              "https://code-reviewer-ai-dhanrajsingh16s-projects.vercel.app/",
              "_blank"
            )
          }
        >
          <Image
            src="/Code Reviewer.png"
            alt="Codeify"
            width={64}
            height={64}
            className="group-hover:scale-110 transition-transform rounded-lg"
          />
          <span className="text-white text-sm mt-2 drop-shadow-lg">Codeify</span>
        </div>
      </div>

      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-sm flex items-center px-4">
        {/* Microsoft Logo - Centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
          <Image
            src="/microsoft-fill.png"
            alt="Microsoft"
            width={48}
            height={48}
            className="cursor-pointer hover:opacity-80"
            onClick={() => setShowStartMenu(!showStartMenu)}
          />
        </div>

        {/* Right Section - System Tray */}
        <div className="ml-auto flex items-center space-x-3">
          <Image
            src="/arrow-up-s-line.png"
            alt="Show hidden icons"
            width={24}
            height={24}
            className="cursor-pointer hover:opacity-80"
          />
          <Image
            src="/risk.png"
            alt="Security"
            width={24}
            height={24}
            className="cursor-pointer hover:opacity-80"
          />
          <Image
            src="/english-input.png"
            alt="Language"
            width={24}
            height={24}
            className="cursor-pointer hover:opacity-80"
          />
          <Image
            src="/wifi-line.png"
            alt="WiFi"
            width={24}
            height={24}
            className="cursor-pointer hover:opacity-80"
          />
          <Image
            src="/volume-up-line.png"
            alt="Volume"
            width={24}
            height={24}
            className="cursor-pointer hover:opacity-80"
          />
          <Image
            src="/battery-fill.png"
            alt="Battery"
            width={24}
            height={24}
            className="cursor-pointer hover:opacity-80"
          />
          <Image
            src="/notification-fill.png"
            alt="Notifications"
            width={24}
            height={24}
            className="cursor-pointer hover:opacity-80"
          />
          <span className="text-black text-lg ml-4">{currentTime}</span>
        </div>
      </div>

      {/* Resume Modal */}
      {showResume && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-content bg-gray-200 border-2 border-gray-400 shadow-lg w-11/12 max-w-4xl h-5/6 max-h-screen transition-all duration-300">
            {/* Title Bar */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-2 py-1 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Image src="/resume.png" alt="Resume" width={16} height={16} />
                <span className="text-white text-sm font-bold">
                  Resume - Dhanraj Singh
                </span>
              </div>
              <div className="flex space-x-1">
                <button
                  className="w-5 h-4 bg-gray-300 border border-gray-500 text-xs text-black hover:bg-gray-400"
                  onClick={() => setShowResume(false)}
                >
                  _
                </button>
                <button
                  className="w-5 h-4 bg-gray-300 border border-gray-500 text-xs text-black hover:bg-gray-400"
                  onClick={() => {
                    const modal = document.querySelector(".modal-content");
                    if (modal) modal.classList.toggle("maximized");
                  }}
                >
                  □
                </button>
                <button
                  className="w-5 h-4 bg-red-500 border border-gray-500 text-xs text-white hover:bg-red-600"
                  onClick={() => setShowResume(false)}
                >
                  ×
                </button>
              </div>
            </div>

            {/* Resume Content */}
            <div className="p-8 bg-white h-full overflow-y-auto text-base text-black leading-relaxed">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Dhanraj Singh</h1>

                <div className="text-center mb-8">
                  <div className="flex flex-wrap justify-center gap-6 text-gray-600">
                    <a href="https://github.com/dhanrajsingh16" target="_blank" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                      <span className="text-lg">🐙</span>
                      <span className="underline">GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/dhanraj-singh-b79272221/" target="_blank" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                      <span className="text-lg">💼</span>
                      <span className="underline">LinkedIn</span>
                    </a>
                    <a href="mailto:dhanrajsingh1512@gmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                      <span className="text-lg">📧</span>
                      <span className="underline">dhanrajsingh1512@gmail.com</span>
                    </a>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">📱</span>
                      <span>+91 9313126695</span>
                    </div>
                  </div>
                </div>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-blue-600 border-b-2 border-blue-600 pb-2">Education</h2>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-xl font-medium text-gray-800">Vellore Institute of Technology, Vellore, India</h3>
                    <p className="text-gray-600 mb-2">(2021 - 2025)</p>
                    <p className="font-medium">Bachelor of Technology, Computer Science and Engineering</p>
                    <p className="text-gray-700 mt-2">
                      <strong>Coursework:</strong> Database Systems, Object Oriented Programming, Data Structures and Algorithms,
                      Cryptography, Operating Systems, Computer Networks, Information Security Management
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-blue-600 border-b-2 border-blue-600 pb-2">Projects / Experience</h2>

                  <div className="space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-xl font-medium text-gray-800">Dhanraj.AI</h3>
                      <p className="text-gray-700 mb-2">
                        Built a web app to chat with multiple AI models side by side in real time.
                        Enabled response comparison with a "pick best" option for efficient analysis.
                        Designed a modern, responsive UI with smooth interactions and live updates.
                      </p>
                      <p className="text-gray-600 mb-2">
                        <strong>Tools Used:</strong> React, Next.js, TailwindCSS, Node.js, Express, WebSockets, AI APIs (DeepSeek, Meta, Mistral, Gemini)
                      </p>
                      <div className="flex gap-4">
                        <a href="https://github.com/dhanrajsingh16/Dhanraj.AI" target="_blank" className="text-blue-600 hover:underline">GitHub</a>
                        <a href="https://dhanraj-ai.vercel.app/" target="_blank" className="text-blue-600 hover:underline">Live Demo</a>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-xl font-medium text-gray-800">Uploadnest SDK</h3>
                      <p className="text-gray-700 mb-2">
                        Developed a TypeScript library to upload files seamlessly via the Uploadnest API.
                        Supported multiple environments including Node.js, Next.js, and browsers.
                        Implemented full TypeScript support with error handling and type safety.
                      </p>
                      <p className="text-gray-600 mb-2">
                        <strong>Tools Used:</strong> TypeScript, Node.js, Next.js, Uploadnest API
                      </p>
                      <div className="flex gap-4">
                        <a href="https://github.com/dhanrajsingh16/Uploadnest-npm" target="_blank" className="text-blue-600 hover:underline">GitHub</a>
                        <a href="https://www.npmjs.com/package/@dhanraj16/uploadnest-sdk" target="_blank" className="text-blue-600 hover:underline">NPM Package</a>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-xl font-medium text-gray-800">Cryptoverse</h3>
                      <p className="text-gray-700 mb-2">
                        Created a modern cryptocurrency tracker with real-time price updates and charts.
                        Integrated global crypto stats, search, and filtering functionalities.
                        Managed state efficiently using Redux Toolkit with a responsive design.
                      </p>
                      <p className="text-gray-600 mb-2">
                        <strong>Tools Used:</strong> React, Redux Toolkit, Axios, Chart.js, Recharts, TailwindCSS
                      </p>
                      <a href="https://github.com/dhanrajsingh16/Cryptoverse" target="_blank" className="text-blue-600 hover:underline">GitHub</a>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-xl font-medium text-gray-800">Calendar Scheduling Platform SaaS</h3>
                      <p className="text-gray-700 mb-2">
                        Built a fullstack SaaS platform for booking, managing, and tracking meetings.
                        Integrated Google Calendar/Meet with timezone detection and booking links.
                        Implemented JWT authentication, custom calendar, and event management.
                      </p>
                      <p className="text-gray-600 mb-2">
                        <strong>Tools Used:</strong> Node.js, PostgreSQL, TypeORM, React, Vite, TailwindCSS, Shadcn UI, Supabase, Google Calendar API
                      </p>
                      <a href="https://github.com/dhanrajsingh16/Calendar-Scheduling-Platform" target="_blank" className="text-blue-600 hover:underline">GitHub</a>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-xl font-medium text-gray-800">Chess Go</h3>
                      <p className="text-gray-700 mb-2">
                        Developed a browser-based chess game with standard rules and clean UI.
                        Supported two-player mode with instant restart functionality.
                        Designed for lightweight and responsive in-browser gameplay.
                      </p>
                      <p className="text-gray-600 mb-2">
                        <strong>Tools Used:</strong> TypeScript, React, CSS, Vercel
                      </p>
                      <div className="flex gap-4">
                        <a href="https://github.com/dhanrajsingh16/Chess-Go" target="_blank" className="text-blue-600 hover:underline">GitHub</a>
                        <a href="https://chess-go-mu.vercel.app/" target="_blank" className="text-blue-600 hover:underline">Live Demo</a>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-xl font-medium text-gray-800">AI Financial SaaS Platform</h3>
                      <p className="text-gray-700 mb-2">
                        Designed a scalable AI-powered fintech SaaS with real-time analytics.
                        Implemented secure authentication, billing, and multi-tenant architecture.
                        Added AI-driven insights and portfolio tracking for financial management.
                      </p>
                      <p className="text-gray-600 mb-2">
                        <strong>Tools Used:</strong> MongoDB, Express.js, React, Node.js, Redux, TailwindCSS, TensorFlow.js, OpenAI API, JWT, OAuth
                      </p>
                      <a href="https://github.com/dhanrajsingh16/ai-financial-saas" target="_blank" className="text-blue-600 hover:underline">GitHub</a>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-xl font-medium text-gray-800">AI-Powered Code Reviewer</h3>
                      <p className="text-gray-700 mb-2">
                        Built a web app that reviews code using AI and provides instant feedback.
                        Detects bugs, unused code, and suggests performance optimizations.
                        Features a clean, responsive interface with real-time code analysis.
                      </p>
                      <p className="text-gray-600 mb-2">
                        <strong>Tools Used:</strong> React, TailwindCSS, Vite, Gemini API
                      </p>
                      <div className="flex gap-4">
                        <a href="https://github.com/dhanrajsingh16/Code-Reviewer-AI.git" target="_blank" className="text-blue-600 hover:underline">GitHub</a>
                        <a href="https://code-reviewer-ai-dhanrajsingh16s-projects.vercel.app/" target="_blank" className="text-blue-600 hover:underline">Live Demo</a>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-blue-600 border-b-2 border-blue-600 pb-2">Technical Skills</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium text-gray-800 mb-2">Technologies/Frameworks</h3>
                      <p className="text-gray-700">React, Next.js, Node.js, Express.js, Redux Toolkit, TailwindCSS, Shadcn UI, WebSockets</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium text-gray-800 mb-2">Languages</h3>
                      <p className="text-gray-700">JavaScript, TypeScript, Python, Java, C++, C</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium text-gray-800 mb-2">Databases</h3>
                      <p className="text-gray-700">MongoDB, MySQL, Firebase, Appwrite, Postman, Supabase</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium text-gray-800 mb-2">APIs & Tools</h3>
                      <p className="text-gray-700">OpenAI API, Gemini API, Google Studio, Different AI Agents Used as Requirement, Stripe, Git, NPM</p>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-blue-600 border-b-2 border-blue-600 pb-2">Extracurricular Activities</h2>

                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-xl font-medium text-gray-800">Ashrae Club, VIT Vellore</h3>
                      <p className="text-gray-600 mb-2">Technical Head | Feb 2024 – Feb 2025</p>
                      <p className="text-gray-700 mb-3">
                        Led technical initiatives, mentoring juniors and coordinating innovative projects.
                        Organized multiple workshops/events focused on sustainability and engineering.
                      </p>
                      <a href="/21BCE0736_Technical%20Head_2024.pdf" target="_blank" className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        <span className="text-sm">📄</span>
                        <span>View Certificate</span>
                      </a>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-xl font-medium text-gray-800">C.S.E.D Club, VIT Vellore</h3>
                      <p className="text-gray-600 mb-2">Senior Core Member | Mar 2023 – Feb 2024</p>
                      <p className="text-gray-700">
                        Supported hackathons, coding competitions, and technical events on campus.
                        Guided juniors in project development and contributed to smooth event execution.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Music Modal */}
      {showMusic && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-content bg-gray-200 border-2 border-gray-400 shadow-lg w-11/12 max-w-4xl h-auto transition-all duration-300">
            {/* Title Bar */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-2 py-1 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Image src="/My Music.png" alt="My Music" width={16} height={16} />
                <span className="text-white text-sm font-bold">My Music</span>
              </div>
              <div className="flex space-x-1">
                <button
                  className="w-5 h-4 bg-gray-300 border border-gray-500 text-xs text-black hover:bg-gray-400"
                  onClick={() => setShowMusic(false)}
                >
                  _
                </button>
                <button
                  className="w-5 h-4 bg-gray-300 border border-gray-500 text-xs text-black hover:bg-gray-400"
                  onClick={() => {
                    const modal = document.querySelector(".modal-content");
                    if (modal) modal.classList.toggle("maximized");
                  }}
                >
                  □
                </button>
                <button
                  className="w-5 h-4 bg-red-500 border border-gray-500 text-xs text-white hover:bg-red-600"
                  onClick={() => setShowMusic(false)}
                >
                  ×
                </button>
              </div>
            </div>

            {/* Music Content */}
            <div className="p-8 bg-white h-full flex flex-col">
              <h2 className="text-2xl font-bold text-center mb-8 text-black">
                My Music Platforms
              </h2>
              <div className="grid grid-cols-4 gap-16 max-w-7xl mx-auto justify-items-center flex-1 items-center px-4">
                <div
                  className="flex flex-col items-center cursor-pointer group"
                  onClick={() => window.open("https://open.spotify.com/", "_blank")}
                >
                  <Image
                    src="/Spotify.png"
                    alt="Spotify"
                    width={80}
                    height={80}
                    className="rounded-lg group-hover:scale-110 transition-transform mb-3"
                  />
                  <span className="text-black font-semibold group-hover:text-blue-600 transition-colors">
                    Spotify
                  </span>
                </div>
                <div
                  className="flex flex-col items-center cursor-pointer group"
                  onClick={() =>
                    window.open("https://music.apple.com/us/new", "_blank")
                  }
                >
                  <Image
                    src="/Apple Music.png"
                    alt="Apple Music"
                    width={80}
                    height={80}
                    className="rounded-lg group-hover:scale-110 transition-transform mb-3"
                  />
                  <span className="text-black font-semibold group-hover:text-blue-600 transition-colors">
                    Apple Music
                  </span>
                </div>
                <div
                  className="flex flex-col items-center cursor-pointer group"
                  onClick={() =>
                    window.open("https://music.youtube.com/", "_blank")
                  }
                >
                  <Image
                    src="/YouTube Music.png"
                    alt="YouTube Music"
                    width={80}
                    height={80}
                    className="rounded-lg group-hover:scale-110 transition-transform mb-3"
                  />
                  <span className="text-black font-semibold group-hover:text-blue-600 transition-colors">
                    YouTube Music
                  </span>
                </div>
                <div
                  className="flex flex-col items-center cursor-pointer group"
                  onClick={() =>
                    window.open("https://www.jiosaavn.com/", "_blank")
                  }
                >
                  <Image
                    src="/JioSaavn.png"
                    alt="JioSaavn"
                    width={80}
                    height={80}
                    className="rounded-lg group-hover:scale-110 transition-transform mb-3"
                  />
                  <span className="text-black font-semibold group-hover:text-blue-600 transition-colors">
                    JioSaavan
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Start Menu */}
{showStartMenu && (
  <div
    className="fixed inset-0 z-40"
    onClick={() => setShowStartMenu(false)}
  >
    <div
      className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-50 animate-slide-up"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 backdrop-blur-md border border-gray-200 shadow-2xl rounded-lg w-[720px] h-[900px] overflow-hidden flex flex-col justify-between">
        
        {/* Search Bar */}
        <div className="p-4 border-b border-gray-200/50">
          <div className="flex items-center bg-white/80 rounded-lg px-3 py-2 backdrop-blur-sm">
            <Image
              src="/microsoft-fill.png"
              alt="Search"
              width={16}
              height={16}
              className="mr-2"
            />
            <span className="text-gray-600 text-sm">Type here to search</span>
          </div>
        </div>

        {/* Personal Introduction */}
        <div className="p-8 flex-1 flex flex-col items-center justify-start text-center space-y-4 pt-4">
          <div className="text-4xl animate-bounce">👋</div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hi! I am Dhanraj
          </h2>
          <div className="text-gray-700 space-y-2 text-base max-w-md">
            <p className="flex items-center justify-center gap-2">
              <span className="text-xl">🚀</span>
              I try to make cool stuff
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-xl">💻</span>
              Like this Windows-XP themed portfolio site
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-xl">🎨</span>
              And much more like the ones on the home screen
            </p>
            <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
              💼 Yes, I am looking for a job!
            </div>
            <p className="text-lg font-medium text-gray-800 flex items-center justify-center gap-2">
              Thanks for checking out the website!
              <span className="text-2xl animate-pulse">✨</span>
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-10 mt-12">
              <div
                className="cursor-pointer hover:scale-110 transition-transform"
                onClick={() => window.open('https://github.com/dhanrajsingh16', '_blank')}
              >
                <Image
                  src="/github-fill.png"
                  alt="GitHub"
                  width={56}
                  height={56}
                  className="hover:opacity-80"
                />
              </div>
              <div
                className="cursor-pointer hover:scale-110 transition-transform"
                onClick={() => window.open('https://www.linkedin.com/in/dhanraj-singh-b79272221/', '_blank')}
              >
                <Image
                  src="/linkedin-box-fill.png"
                  alt="LinkedIn"
                  width={56}
                  height={56}
                  className="hover:opacity-80"
                />
              </div>
              <div
                className="cursor-pointer hover:scale-110 transition-transform"
                onClick={() => window.open('mailto:dhanrajsingh1512@gmail.com', '_blank')}
              >
                <Image
                  src="/mail-fill.png"
                  alt="Email"
                  width={56}
                  height={56}
                  className="hover:opacity-80"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer: Profile left, Shut Down right */}
<div className="flex items-center justify-between p-4 border-t border-gray-200">
  {/* Profile Section */}
  <div className="flex items-center">
    <Image
      src="/Profile.png"
      alt="Dhanraj Singh"
      width={70}
      height={70}
      className="rounded-full border-3 border-white shadow-lg"
    />
    <span className="ml-3 text-gray-800 font-medium">Dhanraj Singh</span>
  </div>

  {/* Shut Down Section */}
  <div className="flex items-center cursor-pointer hover:opacity-80 transition">
    <span className="mr-3 text-gray-800 font-medium">Shut Down</span>
    <Image
      src="/shut-down-line.png"
      alt="Shut Down"
      width={50}
      height={50}
      className="rounded-full border-3 border-white shadow-lg"
    />
  </div>
</div>

      </div>
    </div>
  </div>
)}


    </div>
  );
}
