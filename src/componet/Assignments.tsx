import { Download, FileText } from "lucide-react";
// import ProfileMenu from "./ProfileMenu";
import NotificationPanel from "./NotificationPanel";

const Assignments = () => {
  const assignments = [
    {
      title: ".NET Practical Assignment",
      tag: "Jenil Kyada",
      description: "Learn properly after writing your assignment.",
      fileUrl: "/pdfs/Jenil-Kyada-NET-Practical-Assignment.pdf",
    },
    {
      title: "JAVA Practical Assignment",
      tag: "Jenil Kyada",
      description: "Learn properly after writing your assignment.",
      fileUrl: "/pdfs/Jenil-Kyada-Java-Practical-Assignment.pdf",
    },

    {
      title: "IOT Assignment",
      tag: "Jenil Kyada",
      description: "Learn properly after writing your assignment.",
      fileUrl: "/pdfs/Jenil-Kyada-Iot-Assignment-1,2,3,4.pdf",
    },
    {
      title: "Java Assignment",
      tag: "Jenil Kyada",
      description: "Learn properly after writing your assignment.",
      fileUrl: "/pdfs/Jenil-Kyada-Java-Assignment-1,2,3,4.pdf",
    },
    {
      title: "WD2 Assignment",
      tag: "Jenil Kyada",
      description: "Learn properly after writing your assignment.",
      fileUrl: "/pdfs/Jenil-Kyada-WD2-Assignment-1,2,3,4.pdf",
    },
    {
      title: ".NET Assignment",
      tag: "Jenil Kyada",
      description: "Learn properly after writing your assignment.",
      fileUrl: "/pdfs/Jenil-Kyada-Net-Assignment-1,2,3,4.pdf",
    },

  ];

  return (
    <section className="relative min-h-screen bg-[#030712] flex flex-col items-center px-4 sm:px-6 md:px-16 py-14 sm:py-20 overflow-hidden">

      <div className="
  fixed top-6 right-6 z-50
  flex items-center gap-4
  rounded-full
  bg-[#030712] backdrop-blur-md
  
  px-4 py-3
  shadow-lg shadow-black/5
  transition-all duration-300
  hover:shadow-xl hover:bg-white
">
        <NotificationPanel />
        {/* <ProfileMenu /> */}
      </div>


      <div className="absolute top-0 right-0 w-72 h-72 sm:w-125 sm:h-125 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 sm:w-125 sm:h-125bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mt-10 md:mt-0 w-full text-center mb-10 sm:mb-16 relative z-10">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-6">
          <span className="bg-linear-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
            Assignments
          </span>
        </h1>

        <p className="text-gray-400 text-sm sm:text-lg max-w-xl mx-auto">
          Access curated assignments and practice files designed to help you learn effectively.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-6xl relative z-10">
        {assignments.map((assignment, index) => (
          <div
            key={index}
            className="group relative bg-[#0a0f1c]/70 backdrop-blur-xl border border-white/5 rounded-2xl sm:rounded-3xl p-5 sm:p-8 transition-all duration-300 hover:border-indigo-500/50 hover:-translate-y-1"
          >
            <div className="absolute -inset-1 bg-linear-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-0 group-hover:opacity-10 transition pointer-events-none" />

            <div className="relative flex flex-col h-full">
              <div className="flex justify-between items-center mb-4">
                <div className="p-2 sm:p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <FileText size={22} className="sm:hidden" />
                  <FileText size={28} className="hidden sm:block" />
                </div>

                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest font-semibold px-2 sm:px-3 py-1 rounded-full border border-white/10 text-gray-400 bg-white/5">
                  {assignment.tag}
                </span>
              </div>

              <h2 className="text-lg sm:text-2xl font-bold text-white mb-2">
                {assignment.title}
              </h2>

              <p className="text-gray-400 text-xs sm:text-sm mb-6 grow leading-relaxed">
                {assignment.description}
              </p>

              <a
                href={assignment.fileUrl}
                download
                className="flex items-center justify-center gap-2 w-full py-3 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold text-white border border-white/10 bg-white/5 transition-all duration-300 hover:bg-indigo-600 hover:border-indigo-600 active:scale-95"
              >
                <Download size={16} className="sm:hidden" />
                <Download size={18} className="hidden sm:block" />
                Download PDF
              </a>
            </div>
          </div>
        ))}
      </div>

      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(#4f46e5 0.5px, transparent 0.5px)`,
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse at center, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black, transparent)",
        }}
      />
    </section>
  );
};

export default Assignments;
