"use client";

import { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { FaUser, FaEnvelope, FaBuilding, FaMapMarkerAlt, FaPhone, FaRegCheckCircle, FaSearch, FaTimes } from 'react-icons/fa';
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";

export const dynamic = 'force-dynamic';

const ContactModal = ({ contact, onClose }) => (
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
                        {contact.interested_in}
                  </h3>

                  <div className="space-y-3">
                        <p className="flex items-center gap-2"><FaUser className="text-gray-400" /> <strong>Name:</strong> {contact.name}</p>
                        <p className="flex items-center gap-2"><FaEnvelope className="text-gray-400" /> <strong>Email:</strong> {contact.email}</p>
                        {contact.contact && <p className="flex items-center gap-2"><FaPhone className="text-gray-400" /> <strong>Contact:</strong> {contact.contact}</p>}
                        {contact.company && <p className="flex items-center gap-2"><FaBuilding className="text-gray-400" /> <strong>Company:</strong> {contact.company}</p>}
                        {contact.address && <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-gray-400" /> <strong>Address:</strong> {contact.address}</p>}

                        <p className="text-xs text-gray-500 pt-2 border-t border-gray-200">
                              Received: {new Date(contact.createdAt).toLocaleString()}
                        </p>
                  </div>
            </div>
      </div>
);

export default function ContactsPage() {
      const { user, loading } = useAuth();
      const router = useRouter();
      const [contacts, setContacts] = useState([]);
      const [searchTerm, setSearchTerm] = useState('');
      const [currentPage, setCurrentPage] = useState(1);
      const [selectedContact, setSelectedContact] = useState(null);
      const [loadingContacts, setLoadingContacts] = useState(true);
      const [statusFilter, setStatusFilter] = useState("all");

      const itemsPerPage = 10;

    useEffect(() => {
    
        
        if (!loading && !user) {
            router.push('/login');
        } else if (!loading && user && user.role !== "ADMIN" && user.role !== "SUPER_ADMIN") {
            router.push('/');
        }
    }, [user, loading, router]);

    useEffect(() => {
        if (user && (user.role === "ADMIN" || user.role === "SUPER_ADMIN")) {
            fetchContacts();
        }
    }, [user]);

    const fetchContacts = async () => {
            setLoadingContacts(true);
            try {
                  const response = await axios.get('/api/admin/contacts-db');
                  if (response.data.success) {
                        setContacts(response.data.data);
                  } else {
                  }
            } catch (error) {
            } finally {
                  setLoadingContacts(false);
            }
      };

    const filteredContacts = useMemo(() => {
            return contacts.filter(contact => {
                  const matchesSearch = 
                        (contact.name?.toLowerCase().includes(searchTerm.toLowerCase())) ||
                        (contact.email?.toLowerCase().includes(searchTerm.toLowerCase())) ||
                        (contact.company?.toLowerCase().includes(searchTerm.toLowerCase())) ||
                        (contact.interested_in?.toLowerCase().includes(searchTerm.toLowerCase())) ||
                        (contact.contact?.toLowerCase().includes(searchTerm.toLowerCase()));
                  
                  const matchesStatus = statusFilter === "all" || contact.status === statusFilter;
                  
                  return matchesSearch && matchesStatus;
            });
      }, [contacts, searchTerm, statusFilter]);

      const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const displayedContacts = filteredContacts.slice(startIndex, endIndex);

      const handlePageChange = (page) => {
            if (page >= 1 && page <= totalPages) {
                  setCurrentPage(page);
            }
      };

    const updateContactStatus = async (contactId, newStatus) => {
            try {
                  const response = await axios.put(`/api/admin/contacts-db/${contactId}`, {
                        status: newStatus
                  });
                  
                  if (response.data.success) {
                        setContacts(prevContacts => 
                              prevContacts.map(contact => 
                                    contact.id === contactId 
                                          ? { ...contact, status: newStatus, updatedAt: new Date() }
                                          : contact
                              )
                        );
                  } else {
                  }
            } catch (error) {
            }
      };

    const deleteContact = async (contactId) => {
            if (window.confirm('Are you sure you want to delete this contact?')) {
                  try {
                        const response = await axios.delete(`/api/admin/contacts-db/${contactId}`);
                        if (response.data.success) {
                              setContacts(prevContacts => 
                                    prevContacts.filter(contact => contact.id !== contactId)
                              );
                        } else {
                              alert('Failed to delete contact');
                        }
                  } catch (error) {
                        alert('Error deleting contact');
                  }
            }
      };

    const getStatusColor = (status) => {
            switch (status) {
                  case 'new':
                        return `bg-blue-100 text-blue-800`;
                  case 'contacted':
                        return `bg-yellow-100 text-yellow-800`;
                  case 'qualified':
                        return `bg-green-100 text-green-800`;
                  case 'converted':
                        return `bg-purple-100 text-purple-800`;
                  case 'lost':
                        return `bg-red-100 text-red-800`;
                  default:
                        return `bg-gray-100 text-gray-800`;
            }
      };

    if (loading || !user) {
            return (
                  <div className="flex items-center justify-center min-h-screen bg-white">
                        <p className="text-gray-900">Loading...</p>
                  </div>
            );
      }

      if (user.role !== "ADMIN" && user.role !== "SUPER_ADMIN") {
            return (
                  <div className="flex items-center justify-center min-h-screen bg-white">
                        <p className="text-gray-900">Access denied. Redirecting...</p>
                  </div>
            );
      }

    return (
            <div className="w-full">
                  <div className="mb-6 flex items-center justify-between">
                        <h1 className="text-4xl font-bold mb-2">Contacts</h1>
                        <div className="flex items-center gap-4">
                              <select
                                    value={statusFilter}
                                    onChange={(e) => {
                                          setStatusFilter(e.target.value);
                                          setCurrentPage(1);
                                    }}
                                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--neon-cyan)]"
                              >
                                    <option value="all">All Status</option>
                                    <option value="new">New</option>
                                    <option value="contacted">Contacted</option>
                                    <option value="qualified">Qualified</option>
                                    <option value="converted">Converted</option>
                                    <option value="lost">Lost</option>
                              </select>
                              <button
                                    onClick={fetchContacts}
                                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                              >
                                    Refresh Data
                              </button>
                        </div>
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

                  {loadingContacts ? (
                        <p>Loading contacts...</p>
                  ) : (
                        <>
                              <div className="bg-white shadow-md rounded-lg">
                                    <div className="overflow-x-auto">
                                          <table className="w-full min-w-[1000px] text-left text-gray-700">
                                                <thead className="bg-gray-50 border-b border-gray-200">
                                                      <tr>
                                                            <th className="p-4">Date</th>
                                                            <th className="p-4">Name</th>
                                                             <th className="p-4">Address</th>
                                                            <th className="p-4">Email</th>
                                                            <th className="p-4">Contact</th>
                                                            <th className="p-4">Company</th>
                                                            <th className="p-4">Service</th>
                                                            <th className="p-4">Status</th>
                                                            <th className="p-4">Actions</th>
                                                      </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                      {displayedContacts.length > 0 ? displayedContacts.map(contact => (
                                                            <tr key={contact.id} className="hover:bg-gray-50">
                                                                  <td className="p-4 text-sm text-gray-500 ">
                                                                        {new Date(contact.createdAt).toLocaleDateString()}
                                                                  </td>
                                                                  <td className="p-4 font-semibold text-gray-900 whitespace-nowrap">
                                                                        <div>
                                                                              <div>{contact.name}</div>
                                                                              
                                                                        </div>
                                                                  </td>
                                                                  <td className="p-4 text-gray-600 whitespace-nowrap">{contact.address && <div className="text-xs text-gray-500">{contact.address}</div>}</td>
                                                                  <td className="p-4 text-gray-600 whitespace-nowrap">{contact.email}</td>
                                                                  <td className="p-4 text-gray-600 whitespace-nowrap">{contact.contact || 'N/A'}</td>
                                                                  <td className="p-4 text-gray-600 whitespace-nowrap">{contact.company || 'N/A'}</td>
                                                                  <td className="p-4 text-gray-600 whitespace-nowrap">{contact.interested_in}</td>
                                                                  <td className="p-4">
                                                                        <select
                                                                              value={contact.status || 'new'}
                                                                              onChange={(e) => updateContactStatus(contact.id, e.target.value)}
                                                                              className={`px-3 py-1 rounded-full text-xs font-semibold border-0 cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-[var(--neon-cyan)] ${getStatusColor(contact.status || 'new')}`}
                                                                        >
                                                                              <option value="new">New</option>
                                                                              <option value="contacted">Contacted</option>
                                                                              <option value="qualified">Qualified</option>
                                                                              <option value="converted">Converted</option>
                                                                              <option value="lost">Lost</option>
                                                                        </select>
                                                                  </td>
                                                                  <td className=" flex gap-2 p-4">
                                                                        <button
                                                                              onClick={() => setSelectedContact(contact)}
                                                                              className="px-3 py-1 bg-[var(--neon-cyan)] text-black text-sm font-semibold rounded-md hover:bg-opacity-80 transition-colors mr-2"
                                                                        >
                                                                              View
                                                                        </button>
                                                                        <button
                                                                              onClick={() => deleteContact(contact.id)}
                                                                              className="px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded-md hover:bg-red-600 transition-colors"
                                                                        >
                                                                              Delete
                                                                        </button>
                                                                  </td>
                                                            </tr>
                                                      )) : (
                                                            <tr>
                                                                  <td colSpan="8" className="p-8 text-center text-gray-500">
                                                                        No contacts found matching your criteria.
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

                  {selectedContact && (
                        <ContactModal contact={selectedContact} onClose={() => setSelectedContact(null)} />
                  )}
            </div>
    );
}
