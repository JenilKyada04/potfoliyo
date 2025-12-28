import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

export default function SocialLinks() {
  const socials = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/yourusername",
      color: "hover:bg-gray-700",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://linkedin.com/in/yourusername",
      color: "hover:bg-blue-600",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://instagram.com/jenil_kyada_",
      color: "hover:bg-pink-600",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      link: "mailto:jkyada81@gmail.com",
      color: "hover:bg-indigo-600",
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#030712] text-white flex items-center justify-center px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4
          bg-gradient-to-r from-indigo-400 to-pink-400
          bg-clip-text text-transparent">
          Connect With Me
        </h1>

        <p className="text-gray-400 mb-12 text-center max-w-md">
          Let’s build something amazing together.  
          You can find me on these platforms.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group w-36 h-36 rounded-2xl
                bg-[#020617] border border-white/10
                flex flex-col items-center justify-center gap-3
                transition-all duration-300 ${social.color}
                hover:-translate-y-2 hover:shadow-2xl`}
            >
              <span className="text-4xl text-white/90
                group-hover:scale-110 transition-transform">
                {social.icon}
              </span>
              <span className="text-sm font-medium tracking-wide">
                {social.name}
              </span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <p className="mt-12 text-gray-500 text-sm">
          © {new Date().getFullYear()} Jenil Kyada
        </p>
      </div>
    </section>
  );
}
