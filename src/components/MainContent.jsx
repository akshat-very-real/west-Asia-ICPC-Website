import {
  directors,
  importantDates,
  teamSelectionRules,
} from "../data/constants";

// ─── Shared table cell classes ────────────────────────────────────────────────
const th =
  "px-4 py-3 text-xs sm:text-sm font-extrabold text-slate-900 text-left uppercase tracking-wider border-b-2 border-amber-200 bg-amber-100";
const td =
  "px-4 py-3 text-sm text-slate-900 border-b border-slate-200 font-semibold bg-white";

export default function MainContent() {
  return (
    <div className="flex-1 max-w-4xl min-w-0">
      {/* Intro paragraph */}
      <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4 sm:mb-6 lg:mb-8 text-justify">
        <span className="text-indigo-700 font-bold">
          The International Collegiate Programming Contest
        </span>{" "}
        (ICPC) is the largest computer programming contest in the world. The
        ICPC is an activity that provides college students with an opportunity
        to demonstrate and sharpen their problem-solving and computing skills.
        The contest is considered to be the "Olympics of Computer Programming".
        The ICPC Asia Regional Contests invite Asian students to meet, establish
        friendships and promote fair competition in programming.{" "}
        <span className="font-semibold italic">ICPC Foundation</span> is the
        Global Sponsor of this event whereas{" "}
        <span className="font-semibold italic">JetBrains</span> is the ICPC
        Global Programming Tools Sponsor.
      </p>

      {/* About Section */}
      <div className="mb-4 sm:mb-6 lg:mb-8 bg-white/80 backdrop-blur-md border border-amber-200 rounded-xl shadow-sm p-4 sm:p-6 lg:p-8">
        <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight mb-4 sm:mb-6">
          A Little About Us
        </h2>
        <div className="text-sm sm:text-base text-slate-600 space-y-3 text-justify">
          <p>
            It is a two tier contest. The world is divided into six regions and
            Asia is a region. In Asia there are many host sites and{" "}
            <span className="font-semibold">
              Asia West Continent Championship
            </span>{" "}
            is one of them. Each site selects one team as winner of the site and
            will be eligible to participate in the world finals. The winning
            team of each site is eligible to participate to the world finals.
          </p>
          <p className="text-justify">
            Teams for{" "}
            <span className="font-semibold">
              Asia West Continent Championship
            </span>{" "}
            will be selected on the basis of their performance in the Regional
            Rounds of all the sites in Asia West Region. Top few teams from all
            the regional sites of Asia West region (i.e.{" "}
            <span className="italic">
              Amritapuri, Chennai, Dhaka, Kabul, Kanpur, Tehran
            </span>{" "}
            and <span className="italic">Topi</span>) are eligible to
            participate in this contest. This contest will be held on{" "}
            <span className="font-semibold">20-21 March 2027</span>. This year
            Asia West Continent Championship will be a multi-site contest and
            will be held at Greater Noida, Dhaka, Topi and Tehran.
          </p>
        </div>
      </div>

      {/* Regional Contest Directors Table */}
      <div className="mb-4 sm:mb-6 lg:mb-8 bg-white/80 backdrop-blur-md border border-amber-200 rounded-xl shadow-sm overflow-hidden p-4 sm:p-6 lg:p-8">
        <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight mb-4 sm:mb-6">
          ICPC Asia West Regional Contest Directors
        </h2>
        <div className="bg-white border border-amber-200 rounded-xl shadow-md overflow-hidden overflow-x-auto mb-6">
          <table className="w-full min-w-[800px] border-collapse bg-white">
            <thead>
              <tr>
                <th className={`${th} whitespace-nowrap min-w-[80px]`}>
                  Country
                </th>
                <th className={`${th} whitespace-nowrap min-w-[100px]`}>
                  Site
                </th>
                <th className={`${th} min-w-[200px]`}>
                  Regional Contest Director
                </th>
                <th className={`${th} min-w-[150px]`}>Email</th>
                <th className={`${th} whitespace-nowrap min-w-[100px]`}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {directors.map((row, idx) => (
                <tr
                  key={`${row.country}-${row.site}`}
                  className="hover:bg-amber-50/50 transition-colors"
                >
                  <td className={td}>{row.country}</td>
                  <td className={td}>{row.site}</td>
                  <td className={td}>{row.director}</td>
                  <td className={td}>{row.email}</td>
                  <td className="px-4 py-3 text-xs sm:text-sm border-b border-amber-100">
                    <a
                      href={row.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-indigo-50 text-indigo-600 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-indigo-100 hover:text-indigo-700 transition-colors shadow-sm"
                    >
                      Visit Website
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Important Dates Table */}
      <div className="mb-4 sm:mb-6 lg:mb-8 bg-white/80 backdrop-blur-md border border-amber-200 rounded-xl shadow-sm overflow-hidden p-4 sm:p-6 lg:p-8">
        <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight mb-4 sm:mb-6">
          Important Dates
        </h2>
        <div className="bg-white border border-amber-200 rounded-xl shadow-md overflow-hidden overflow-x-auto mb-6">
          <table className="w-full min-w-[600px] border-collapse bg-white">
            <thead>
              <tr>
                <th className={`${th} whitespace-nowrap min-w-[100px]`}>
                  Country
                </th>
                <th className={`${th} whitespace-nowrap min-w-[100px]`}>
                  Site
                </th>
                <th className={`${th} whitespace-nowrap min-w-[140px]`}>
                  Registration Open
                </th>
                <th className={`${th} whitespace-nowrap min-w-[140px]`}>
                  Online Contest Date
                </th>
                <th className={`${th} min-w-[150px]`}>Onsite Contest Date</th>
              </tr>
            </thead>
            <tbody>
              {importantDates.map((row, idx) => (
                <tr
                  key={`${row.country}-${row.site}`}
                  className="hover:bg-amber-50/50 transition-colors"
                >
                  <td className={td}>{row.country}</td>
                  <td className={td}>{row.site}</td>
                  <td className={td}>{row.regDate || 'TBA'}</td>
                  <td className={td}>{row.onlineDate || 'TBA'}</td>
                  <td className={td}>{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Note for Indian Regional Sites */}
      <div className="mb-4 sm:mb-6 bg-amber-50/80 backdrop-blur-md border border-amber-200 rounded-xl p-4 sm:p-6 shadow-sm text-slate-700 text-sm sm:text-base leading-relaxed">
        <p className="text-justify">
          <span className="font-bold text-slate-900">
            Note (for teams participating in Indian Regional Sites):
          </span>{" "}
          There will be a single Preliminary Online Contest for all four
          Regional Sites Of India (i.e., Kanpur,{" "}
          <span className="italic">Amritapuri</span>,{" "}
          <span className="italic">Chennai</span>, and{" "}
          <span className="italic">Mathura</span>). Each regional site will
          prepare its own rank list based on the teams registered for that site
          from the Preliminary Online Contest rankings. Teams participating in
          multiple regional sites are requested to keep the same team members
          for each Regional Site.
        </p>
      </div>

      {/* Team Selection Rules */}
      <div className="mb-4 sm:mb-6 lg:mb-8 text-justify bg-white/80 backdrop-blur-md border border-amber-200 rounded-xl shadow-sm p-4 sm:p-6 lg:p-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-indigo-700 tracking-tight mb-4 sm:mb-6">
          Asia West Continent Championship: 20-21 March 2027
        </h2>
        <div className="mb-4">
          <h3 className="text-lg font-bold text-slate-900 mb-4">
            Team Selection Process:
          </h3>
          <ol className="text-sm sm:text-base text-slate-600 mb-4 list-decimal pl-5 space-y-3 marker:text-indigo-600 marker:font-bold">
            {teamSelectionRules.map((rule, idx) => (
              <li key={idx}>{rule}</li>
            ))}
          </ol>
        </div>
        <div className="text-sm sm:text-base text-gray-700 space-y-3" />
      </div>
    </div>
  );
}
