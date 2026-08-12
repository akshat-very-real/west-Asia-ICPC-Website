import { Link } from "react-router-dom";
import jetbrainsImg from "../../asset/jetbrains.webp";
import jane4Img from "../../asset/jane-4.webp";

const sidebarLinks = [
  {
    title: "DIRECTOR'S REPORT",
    desc: "AWC 2026-2027",
    href: "/documents/DIRECTOR_REPORT.pdf",
    isNew: true,
    color: "indigo",
  },
  {
    title: "Programme Schedule",
    desc: "AWC 2026-2027",
    href: "/documents/Anoun2026.pdf",
    isNew: true,
    color: "indigo",
  },
  {
    title: "AWC Result",
    desc: "Asia West Championship (2026-2027)",
    href: "/results/awc-2026-27",
    isNew: false,
    color: "emerald",
  },
  {
    title: "Problem Set",
    desc: "AWC Problem Set 2026-2027",
    href: "/documents/PROBLEM_SET26.pdf",
    isNew: true,
    color: "indigo",
  },
  {
    title: "Selected Team for AWC 2026-27",
    desc: "",
    href: "/teams/awc-2026-27",
    isNew: true,
    color: "indigo",
  },
  {
    title: "Contest Rules",
    desc: "AWC 2026-2027",
    href: "/documents/Asia-West_Rules.pdf",
    isNew: false,
    color: "emerald",
  },
  {
    title: "🏆 AWC Problem Set (2026-27)",
    desc: "",
    href: "/documents/problem_set_2024_25.pdf",
    isNew: false,
    color: "slate",
  },
  {
    title: "List of Selected Teams for AWC 2026-27",
    desc: "",
    href: "/teams/awc-2026-27",
    isNew: false,
    color: "slate",
  },
  {
    title: "ICPC Global",
    desc: "ICPC Asia Blog",
    href: "https://icpcasia.wp.txstate.edu/",
    isNew: false,
    color: "blue",
  },
];

const colorMap = {
  indigo: "border-l-indigo-500 hover:bg-indigo-50",
  emerald: "border-l-emerald-500 hover:bg-emerald-50",
  slate: "border-l-slate-400 hover:bg-slate-50",
  blue: "border-l-blue-500 hover:bg-blue-50",
};

const textMap = {
  indigo: "text-indigo-700",
  emerald: "text-emerald-700",
  slate: "text-slate-700",
  blue: "text-blue-700",
};

export default function Sidebar() {
  return (
    <div className="w-full lg:w-80 lg:sticky lg:top-24 lg:self-start mt-6">
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col divide-y divide-slate-200">
        <div className="bg-slate-50 px-4 py-3 border-b border-slate-200">
          <h2 className="font-bold text-slate-900 tracking-tight">
            Quick Links
          </h2>
        </div>

        {sidebarLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`block p-4 border-l-4 transition-all duration-200 ${colorMap[link.color]} group`}
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3
                  className={`font-bold text-sm ${textMap[link.color]} group-hover:underline decoration-2 underline-offset-2 mb-1`}
                >
                  {link.title}
                </h3>
                {link.desc && (
                  <div className="text-slate-600 text-xs font-medium">
                    {link.desc}
                  </div>
                )}
              </div>
            </div>
          </a>
        ))}

        <div className="bg-amber-50 p-4 border-l-4 border-l-amber-400">
          <h3 className="font-semibold text-amber-800 text-xs leading-relaxed">
            Asia West Championship 2026-27 will be held at Greater Noida, Dhaka, Topi,
            and Tehran on March 20-21, 2027.
          </h3>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {/* Sponsors - light background to preserve original logo colors since they are not inverted */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center justify-center shadow-sm">
          <a
            href="https://www.jetbrains.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-1 w-full"
          >
            <img
              alt="JetBrains"
              width="200"
              height="64"
              className="h-12 sm:h-14 w-auto object-contain mb-3 opacity-90 group-hover:opacity-100 transition-opacity"
              src={jetbrainsImg}
            />
            <div className="text-center text-xs font-medium text-slate-600">
              ICPC Global Programming Tools Sponsor
            </div>
          </a>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center justify-center shadow-sm">
          <a
            href="https://www.janestreet.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-1 w-full"
          >
            <img
              alt="Jane Street"
              width="220"
              height="64"
              className="h-12 sm:h-14 w-auto object-contain mb-3 opacity-90 group-hover:opacity-100 transition-opacity"
              src={jane4Img}
            />
            <div className="text-center text-xs font-medium text-slate-600">
              ICPC Titanium Multi-Regional Sponsor
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
