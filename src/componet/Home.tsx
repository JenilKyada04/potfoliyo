import { Link } from "react-router-dom";
import NotificationPanel from "./NotificationPanel";


const Home = () => {
  return (
    <main className="bg-[#020617] text-white overflow-hidden scroll-smooth ">

      <section className="relative min-h-screen flex items-center px-6 md:px-16">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-yellow-400/10 blur-3xl" />
        {/* NOTIFICATION PANEL */}
        <div className="fixed top-6 right-6 z-50">
          <NotificationPanel />
        </div>

        <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <div className="space-y-6 mt-20 md:mt-0">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs text-indigo-300 bg-white/5">
              <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_#22c55e]" />
              Portfolio Home
            </span>

            <Link to="/Sociallink">
              <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-gray-100 via-indigo-300 to-yellow-300 bg-clip-text text-transparent hover:scale-[1.02] transition">
                Jenil Kyada
              </h1>
            </Link>

            <h2 className="text-indigo-400 font-medium text-lg">
              Developer
            </h2>

            <p className="text-gray-400 max-w-lg leading-relaxed">
              I build fast, modern, and scalable web applications using React,
              Tailwind CSS, and JavaScript with a strong focus on UI, UX, and
              performance.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/Assignments"
                className="px-7 py-3 rounded-full font-semibold text-[#020617]
                bg-gradient-to-r from-indigo-500 via-purple-500 to-yellow-400
                hover:scale-105 hover:shadow-xl transition"
              >
                View Work
              </Link>

              <Link
                to="/LoginPage"
                className="px-7 py-3 rounded-full border border-white/20
                text-gray-200 hover:text-indigo-400 hover:border-indigo-400 transition"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* RIGHT CARD */}
          <Link to="/Assignments" aria-label="View assignments">
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-sm rounded-2xl p-6 bg-[#0a0f1c]
                shadow-2xl hover:scale-105 transition">

                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full p-[2px]
                    bg-gradient-to-tr from-indigo-500 via-purple-500 to-yellow-400">
                    <div className="w-full h-full rounded-full bg-[#020617]
                      flex items-center justify-center font-bold text-lg">
                      J
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold text-sm hover:text-indigo-400 transition">
                      Jenil Kyada
                    </p>
                    <p className="text-gray-400 text-xs">
                      Developer · Student
                    </p>
                  </div>

                  <span className="ml-auto text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-300">
                    Online
                  </span>
                </div>

                <p className="text-gray-400 text-sm mb-6">
                  A modern developer portfolio built with React and Tailwind CSS.
                </p>

                <div className="flex justify-between text-sm text-gray-400">
                  <div>
                    <p className="text-white font-bold text-lg">5+</p>
                    Projects
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">3+</p>
                    Skills
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">100%</p>
                    Passion
                  </div>
                </div>

                <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/30 blur-3xl rounded-full" />
              </div>
            </div>
          </Link>
        </div>

      </section>

      <footer className="relative mt-20 border-t border-white/10  bg-[#030712]">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-yellow-400/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-16 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-yellow-300 bg-clip-text text-transparent">
                Jenil Kyada
              </h3>
              <p className="text-gray-400 text-sm mt-2 max-w-xs">
                Developer crafting modern, fast, and
                user-friendly web experiences.
              </p>
            </div>

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

          <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Jenil Kyada. All rights reserved.
          </div>
        </div>
      </footer>



    </main>
  );
};

export default Home;
