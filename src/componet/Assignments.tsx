import { Download, FileText } from "lucide-react";

const Assignments = () => {
  const assignments = [
    {
      title: "IOT Assignment",
      tag: "Jenil Kyada",
      description: "Learn properly after writing your Assignment.",
      fileUrl: "/pdfs/Jenil-Kyada-Iot-Assignment-1,2,3,4.pdf",
    },
    {
      title: "Java Assignment",
      tag: "Jenil Kyada",
      description: "Learn properly after writing your Assignment.",
      fileUrl: "/pdfs/Jenil Kyada Java Assignment 1,2,3,4",
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#030712] flex flex-col items-center px-6 md:px-16 py-20 overflow-hidden">

      <div className="absolute top-0 right-0 w-125 h-125 bg-indigo-600/10 rounded-full blur-[120px] z-[-1]" />

      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] z-[-1]" />

      <div className="absolute top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2 
        w-[500px] h-[500px] 
        bg-blue-500/10 rounded-full blur-[120px] z-[-1]" />

      <div className="max-w-5xl w-full text-center mb-16 relative z-10">
        <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
            Assignment
          </span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Access curated assignments and practice files.
          These resources are designed to help you.
        </p>
      </div>

      {/* ===== CARDS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl relative z-10">
        {assignments.map((assignment, index) => (
          <div
            key={index}
            className="group relative bg-[#0a0f1c]/60 backdrop-blur-xl
            border border-white/5 p-8 rounded-3xl overflow-hidden
            transition-all duration-500 hover:border-indigo-500/50 hover:-translate-y-2"
          >
            {/* Card Hover Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r
              from-indigo-500 to-purple-600 rounded-3xl blur
              opacity-0 group-hover:opacity-10 transition duration-500" />

            <div className="relative flex flex-col h-full">

              {/* Icon & Tag */}
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400
                  group-hover:scale-110 transition-transform duration-500">
                  <FileText size={28} />
                </div>

                <span className="text-[10px] uppercase tracking-widest font-bold
                  px-3 py-1 rounded-full border border-white/10
                  text-gray-400 bg-white/5">
                  {assignment.tag}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-white mb-3
                group-hover:text-indigo-300 transition-colors">
                {assignment.title}
              </h2>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {assignment.description}
              </p>

              {/* Download Button */}
              <a
                href={assignment.fileUrl}
                download
                className="group/btn flex items-center justify-center gap-2
                w-full py-4 rounded-xl font-bold text-white
                border border-white/10 bg-white/5
                transition-all duration-300
                hover:bg-indigo-600 hover:border-indigo-600 shadow-lg"
              >
                <Download size={18} className="group-hover/btn:animate-bounce" />
                Download PDF
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* ===== GRID BACKGROUND ===== */}
      <div
        className="absolute inset-0 z-[-1] opacity-20
        [mask-image:radial-gradient(ellipse_at_center,black,transparent)]"
        style={{
          backgroundImage: `radial-gradient(#4f46e5 0.5px, transparent 0.5px)`,
          backgroundSize: "30px 30px",
        }}
      />
    </section>
  );
};

export default Assignments;
