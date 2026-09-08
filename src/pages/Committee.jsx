import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { steeringCommittee } from '../data/constants';

export default function Committee() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            <div className="flex-1 min-w-0">
              <div className="mb-4 sm:mb-6 lg:mb-8">
                <h1 className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-4 sm:mb-6 border-b-2 border-gray-300 pb-1">
                  People
                </h1>
                <div className="border border-gray-300 overflow-x-auto">
                  <table className="w-full min-w-[640px]">
                    <thead>
                      <tr className="bg-blue-200">
                        <th className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-semibold text-blue-900 text-left whitespace-nowrap min-w-[150px]">
                          Designation
                        </th>
                        <th className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-semibold text-blue-900 text-left min-w-[300px]">
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-yellow-50">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-900">
                          Patron
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm">
                          <div className="space-y-1">
                            <div className="font-semibold text-blue-700">
                              Prof. C. J. Hwang
                            </div>
                            <div className="text-gray-900 font-medium">
                              Asia Regional Contest Director
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-yellow-100">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-900">
                          Regional Contest Director and Director, ICPC Asia WC Super Region
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm">
                          <div className="space-y-1">
                            <div className="font-semibold text-blue-700">
                              Prof. Phalguni Gupta
                            </div>
                            <div className="text-gray-900 font-medium">
                              Chancellor's Advisor
                            </div>
                            <div className="text-gray-900">
                              GLA University, Mathura, Mathura-281406 India
                            </div>
                            <div className="text-blue-600">
                              E-mail:{" "}
                              <a
                                href="mailto:pg@gla.ac.in"
                                className="underline"
                              >
                                pg@gla.ac.in
                              </a>
                            </div>
                            <div className="text-blue-600">
                              URL:{" "}
                              <a
                                href="https://wc.indiaicpc.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                              >
                                https://wc.indiaicpc.in/
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-yellow-50">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-900">
                          Secretary &amp; Associate Director ICPC Asia WC Super Region
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm">
                          <div className="space-y-1">
                            <div className="font-semibold text-blue-700">
                              Professor Abul L Haque
                            </div>
                            <div className="text-gray-900">
                              Jaatri University, Dhaka, Bangladesh
                            </div>
                            <div className="text-blue-600">
                              E-mail:{" "}
                              <a
                                href="mailto:abul.haque@gmail.com"
                                className="underline"
                              >
                                abul.haque@gmail.com
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mb-4 sm:mb-6 lg:mb-8">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-red-800 mb-4 sm:mb-6">
                  ICPC AWC Steering Committee
                </h2>
                <div className="border border-gray-300 overflow-x-auto">
                  <table className="w-full min-w-[640px]">
                    <thead>
                      <tr className="bg-blue-200">
                        <th className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-semibold text-blue-900 text-left whitespace-nowrap min-w-[150px]">
                          Name
                        </th>
                        <th className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-semibold text-blue-900 text-left min-w-[300px]">
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {steeringCommittee.map((member, idx) => (
                        <tr
                          key={idx}
                          className={idx % 2 === 0 ? "bg-white" : "bg-blue-50"}
                        >
                          <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-900">
                            {member.name}
                          </td>
                          <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm">
                            <div className="space-y-1">
                              <div className="text-gray-900 font-medium">
                                {member.affiliation}
                              </div>
                              {member.role && (
                                <div className="text-gray-900 font-medium">
                                  {member.role}
                                </div>
                              )}
                              <div className="text-blue-600">
                                E-mail:{" "}
                                <a
                                  href={`mailto:${member.email}`}
                                  className="underline"
                                >
                                  {member.email}
                                </a>
                              </div>
                              <div className="text-blue-600">
                                URL:{" "}
                                <a
                                  href={member.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="underline"
                                >
                                  {member.url}
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

