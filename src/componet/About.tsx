import { Link } from "react-router-dom";

const About = () => {
    return (
      <>

      <section className="min-h-screen bg-[#020617] flex flex-col items-center px-6 md:px-16 py-16">
        <div className="max-w-5xl w-full text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r
            from-gray-100 via-indigo-200 to-yellow-300 bg-clip-text text-transparent mb-4">
            About Me
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I am Jenil Kyada, a passionate Frontend and Full Stack Developer.
            I love building modern, responsive, and performant web applications
            using React, Tailwind CSS, and JavaScript. I focus on clean UI, great
            user experience, and writing maintainable code.
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl w-full">
          {/* Left - Skills / Experience */}
          <div className="space-y-6">
            <div className="p-6 bg-[#0a0f1c] rounded-2xl shadow-2xl">
              <h2 className="text-xl font-semibold text-white mb-2">Experience</h2>
              <p className="text-gray-400">
                I have worked on multiple web projects, including portfolios,
                e-commerce, and dashboard applications. I focus on building
                reusable components and scalable architectures.
              </p>
            </div>
  
            <div className="p-6 bg-[#0a0f1c] rounded-2xl shadow-2xl">
              <h2 className="text-xl font-semibold text-white mb-2">Skills</h2>
              <ul className="text-gray-400 list-disc list-inside space-y-1">
                <li>React.js / React Router</li>
                <li>JavaScript (ES6+)</li>
                <li>Tailwind CSS / CSS3 / HTML5</li>
                <li>Golang (Backend)</li>
                <li>Git / GitHub</li>
              </ul>
            </div>
  
            <div className="p-6 bg-[#0a0f1c] rounded-2xl shadow-2xl">
              <h2 className="text-xl font-semibold text-white mb-2">Education</h2>
              <p className="text-gray-400">
                Currently pursuing my studies in BCA while working on
                personal projects to strengthen my web development skills.
              </p>
            </div>
          </div>
  
          {/* Right - Profile Card */}
          <div className="flex justify-center md:justify-end relative">
            <div className="relative w-full max-w-sm rounded-2xl p-6 bg-[#0a0f1c] shadow-2xl">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-yellow-400">
                  <div className="w-full h-full rounded-full bg-[#020617] flex items-center justify-center font-bold text-lg text-white">
                    J
                  </div>
                </div>
  
                <div>
                  <p className="text-gray-100 font-semibold text-sm">Jenil Kyada</p>
                  <p className="text-gray-400 text-xs">Developer</p>
                </div>
              </div>
  
              <p className="text-gray-400 text-sm mb-6">
                I specialize in building clean, modern websites and web apps
                with a focus on responsive design and performance.
              </p>
  
              <div className="flex justify-between text-sm text-gray-400">
                <div>
                  <p className="text-gray-100 font-semibold text-lg">5+</p>
                  Projects
                </div>
                <div>
                  <p className="text-gray-100 font-semibold text-lg">3</p>
                  Skills
                </div>
                <div>
                  <p className="text-gray-100 font-semibold text-lg">100%</p>
                  Passion
                </div>
              </div>
  
              {/* Glow */}
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-indigo-500/30 blur-3xl rounded-full" />
            </div>
          </div>
        </div>
      </section>

      <footer className="relative mt-20 border-t border-white/10  bg-[#030712]">
        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-yellow-400/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-16 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

            {/* Left */}
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-yellow-300 bg-clip-text text-transparent">
                Jenil Kyada
              </h3>
              <p className="text-gray-400 text-sm mt-2 max-w-xs">
                Developer crafting modern, fast, and
                user-friendly web experiences.
              </p>
            </div>

            {/* Center Links */}
            <div className="flex justify-center">
              <ul className="flex flex-wrap gap-6 text-sm text-gray-400">
                <li>
                  <Link to="/" className="hover:text-indigo-400 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-indigo-400 transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/Assignments" className="hover:text-indigo-400 transition">
                    Work
                  </Link>
                </li>
                <li>
                  <Link to="/Sociallink" className="hover:text-indigo-400 transition">
                    Social
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-2">
                Let’s build something great
              </p>
              <Link
                to="/LoginPage"
                className="inline-block px-6 py-2 rounded-full text-sm font-semibold
          text-[#020617] bg-gradient-to-r from-indigo-500 via-purple-500 to-yellow-400
          hover:scale-105 transition"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Jenil Kyada. All rights reserved.
          </div>
        </div>
      </footer>
      </>

      
    );
  };
  
  export default About;
  