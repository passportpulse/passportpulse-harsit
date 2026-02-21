"use client";

import { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { FaUser, FaEnvelope, FaBuilding, FaMapMarkerAlt, FaPhone, FaRegCheckCircle, FaSearch, FaTimes } from 'react-icons/fa';

export const dynamic = 'force-dynamic';

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

      const fetchQueries = async () => {
            setLoading(true);
            try {
                  const response = await axios.get('/api/admin/queries-db');
                  if (response.data.success) {
                        setQueries(response.data.data);
                  } else {
                        console.error("Failed to fetch queries");
                  }
            } catch (error) {
                  console.error("Error fetching queries:", error);
            } finally {
                  setLoading(false);
            }
      };

      useEffect(() => {
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

      const handleStatusChange = async (queryId, newStatus) => {
            try {
                  const response = await axios.put(`/api/admin/queries-db/${queryId}`, {
                        status: newStatus
                  });
                  
                  if (response.data.success) {
                        // Update local state
                        setQueries(prevQueries => 
                              prevQueries.map(query => 
                                    query._id === queryId 
                                          ? { ...query, status: newStatus, updatedAt: new Date() }
                                          : query
                              )
                        );
                  } else {
                        console.error("Failed to update status");
                  }
            } catch (error) {
                  console.error("Error updating status:", error);
            }
      };

      const getStatusColor = (status) => {
            switch (status) {
                  case 'ACTIVE':
                        return 'bg-blue-100 text-blue-800';
                  case 'CONNECTED':
                        return 'bg-green-100 text-green-800';
                  case 'LOST':
                        return 'bg-red-100 text-red-800';
                  case 'CONVERT':
                        return 'bg-purple-100 text-purple-800';
                  default:
                        return 'bg-gray-100 text-gray-800';
            }
      };

      return (
            <div>
                  <div className="mb-6 flex items-center justify-between">
                        <h1 className="text-4xl font-bold mb-2">Queries</h1>
                        <button
                              onClick={fetchQueries}
                              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                              Refresh Data
                        </button>
                  </div>

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
                                                            <th className="p-4">Message</th>
                                                            <th className="p-4">Status</th>
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
                                                                        <div className="max-w-xs truncate" title={query.message}>
                                                                              {query.message || 'No message'}
                                                                        </div>
                                                                  </td>
                                                                  <td className="p-4">
                                                                        <select
                                                                              value={query.status || 'pending'}
                                                                              onChange={(e) => handleStatusChange(query._id, e.target.value)}
                                                                              className={`px-3 py-1 rounded-full text-xs font-semibold border-0 cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-[var(--neon-cyan)] ${getStatusColor(query.status || 'pending')}`}
                                                                        >
                                                                              <option value="pending">Pending</option>
                                                                              <option value="ACTIVE">Active</option>
                                                                              <option value="CONNECTED">Connected</option>
                                                                              <option value="LOST">Lost</option>
                                                                              <option value="CONVERT">Convert</option>
                                                                        </select>
                                                                  </td>
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
                                                                  <td colSpan="8" className="p-4 text-center text-gray-500">
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