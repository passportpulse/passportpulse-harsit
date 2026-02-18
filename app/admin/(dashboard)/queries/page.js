"use client";

import { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { FaUser, FaEnvelope, FaBuilding, FaMapMarkerAlt, FaPhone, FaRegCheckCircle, FaSearch, FaTimes } from 'react-icons/fa';

const QueryModal = ({ query, onClose }) => (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full text-gray-900 relative">
                  <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
                        aria-label="Close modal"
                  >
                        <FaTimes size={20} />
                  </button>

                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <FaRegCheckCircle className="text-[var(--neon-cyan)]" />
                        {query.interested_in}
                  </h3>

                  <div className="space-y-3">
                        <p className="flex items-center gap-2"><FaUser className="text-gray-400" /> <strong>From:</strong> {query.name}</p>
                        <p className="flex items-center gap-2"><FaEnvelope className="text-gray-400" /> <strong>Email:</strong> {query.email}</p>
                        {query.contact && <p className="flex items-center gap-2"><FaPhone className="text-gray-400" /> <strong>Contact:</strong> {query.contact}</p>}
                        {query.company && <p className="flex items-center gap-2"><FaBuilding className="text-gray-400" /> <strong>Company:</strong> {query.company}</p>}
                        {query.address && <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-gray-400" /> <strong>Address:</strong> {query.address}</p>}

                        <p className="text-xs text-gray-500 pt-2 border-t border-gray-200">
                              Received: {new Date(query.createdAt).toLocaleString()}
                        </p>

                        {query.message && (
                              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4">
                                    <p className="text-gray-800">{query.message}</p>
                              </div>
                        )}
                  </div>
            </div>
      </div>
);

export default function QueriesPage() {
      const [queries, setQueries] = useState([]);
      const [loading, setLoading] = useState(true);
      const [searchTerm, setSearchTerm] = useState('');
      const [currentPage, setCurrentPage] = useState(1);
      const [selectedQuery, setSelectedQuery] = useState(null);

      const itemsPerPage = 10;

      useEffect(() => {
            const fetchQueries = async () => {
                  setLoading(true);
                  try {
                        const token = localStorage.getItem('accessToken');
                        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/contacts`, {
                              headers: { Authorization: `Bearer ${token}` },
                        });
                        setQueries(response.data.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
                  } catch (error) {
                        console.error("Failed to fetch queries:", error);
                  } finally {
                        setLoading(false);
                  }
            };

            fetchQueries();
      }, []);

      const filteredQueries = useMemo(() => {
            return queries.filter(query =>
                  (query.name?.toLowerCase().includes(searchTerm.toLowerCase())) ||
                  (query.email?.toLowerCase().includes(searchTerm.toLowerCase())) ||
                  (query.company?.toLowerCase().includes(searchTerm.toLowerCase())) ||
                  (query.interested_in?.toLowerCase().includes(searchTerm.toLowerCase())) ||
                  (query.contact?.toLowerCase().includes(searchTerm.toLowerCase()))
            );
      }, [queries, searchTerm]);

      const totalPages = Math.ceil(filteredQueries.length / itemsPerPage);
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const displayedQueries = filteredQueries.slice(startIndex, endIndex);

      const handlePageChange = (page) => {
            if (page >= 1 && page <= totalPages) {
                  setCurrentPage(page);
            }
      };

      return (
            <div>
                  <h1 className="text-4xl font-bold mb-8">Queries</h1>

                  <div className="mb-6 relative">
                        <input
                              type="text"
                              placeholder="Search by name, email, company, service..."
                              className="w-full p-3 pl-10 rounded-lg bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--neon-cyan)]"
                              value={searchTerm}
                              onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1);
                              }}
                        />
                        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>

                  {loading ? (
                        <p>Loading queries...</p>
                  ) : (
                        <>
                              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                                    <div className="overflow-x-auto">
                                          <table className="w-full text-left text-gray-700">
                                                <thead className="bg-gray-50 border-b border-gray-200">
                                                      <tr>
                                                            <th className="p-4">Date</th>
                                                            <th className="p-4">Name</th>
                                                            <th className="p-4">Email</th>
                                                            <th className="p-4">Contact</th>
                                                            <th className="p-4">Service</th>
                                                            <th className="p-4">Actions</th>
                                                      </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                      {displayedQueries.length > 0 ? displayedQueries.map(query => (
                                                            <tr key={query._id} className="hover:bg-gray-50">
                                                                  <td className="p-4 text-sm text-gray-500 whitespace-nowrap">
                                                                        {new Date(query.createdAt).toLocaleDateString()}
                                                                  </td>
                                                                  <td className="p-4 font-semibold text-gray-900 whitespace-nowrap">{query.name}</td>
                                                                  <td className="p-4 text-gray-600 whitespace-nowrap">{query.email}</td>
                                                                  <td className="p-4 text-gray-600 whitespace-nowrap">{query.contact || 'N/A'}</td>
                                                                  <td className="p-4 text-gray-600 whitespace-nowrap">{query.interested_in}</td>
                                                                  <td className="p-4">
                                                                        <button
                                                                              onClick={() => setSelectedQuery(query)}
                                                                              className="px-3 py-1 bg-[var(--neon-cyan)] text-black text-sm font-semibold rounded-md hover:bg-opacity-80 transition-colors"
                                                                        >
                                                                              View
                                                                        </button>
                                                                  </td>
                                                            </tr>
                                                      )) : (
                                                            <tr>
                                                                  <td colSpan="6" className="p-4 text-center text-gray-500">
                                                                        {searchTerm ? 'No queries match your search.' : 'No queries found.'}
                                                                  </td>
                                                            </tr>
                                                      )}
                                                </tbody>
                                          </table>
                                    </div>
                              </div>

                              {totalPages > 1 && (
                                    <div className="flex justify-between items-center mt-6">
                                          <button
                                                onClick={() => handlePageChange(currentPage - 1)}
                                                disabled={currentPage === 1}
                                                className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                                          >
                                                Previous
                                          </button>
                                          <span className="text-sm text-gray-700">
                                                Page {currentPage} of {totalPages}
                                          </span>
                                          <button
                                                onClick={() => handlePageChange(currentPage + 1)}
                                                disabled={currentPage === totalPages}
                                                className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                                          >
                                                Next
                                          </button>
                                    </div>
                              )}
                        </>
                  )}

                  {selectedQuery && (
                        <QueryModal query={selectedQuery} onClose={() => setSelectedQuery(null)} />
                  )}
            </div>
      );
}