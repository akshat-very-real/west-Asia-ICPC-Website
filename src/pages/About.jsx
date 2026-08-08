import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  const teamMembers = [
    {
      name: "Anshuman Tiwari",
      role: "Frontend Engineer",
      email: "anshuman.tiwari_cs.aiml25@gla.ac.in",
      desc: "Passionate cybersecurity specialist and part-time frontend engineer with expertise in system security, React, and securing websites.",
      skills: ["Cloud", "React", "HTML", "JavaScript"]
    },
    {
      name: "Akshat Pratap Singh Gaur",
      role: "Frontend Developer & Architect",
      email: "akshat.gaur_cs.aiml25@gla.ac.in",
      desc: "Lead developer, partially skilled in frontend and backend engineering, system optimization, and UI design.",
      skills: ["React", "JavaScript", "UI/UX", "Vibe Coding"]
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Development Team
              </h2>
              <p className="text-xl text-gray-600">
                The talented developers behind the ICPC Asia West platform
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-20 h-20 bg-indigo-600 text-white font-bold text-2xl rounded-full flex items-center justify-center mb-6 shadow-md">
                      {member.name.charAt(0)}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-indigo-600 font-semibold mb-2">
                      {member.role}
                    </p>
                    <p className="text-blue-600 text-sm mb-4">
                      <a href={`mailto:${member.email}`} className="underline hover:text-blue-800 font-medium">
                        {member.email}
                      </a>
                    </p>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                      {member.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                    {member.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="bg-indigo-50 text-indigo-700 text-xs px-3 py-1 rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

