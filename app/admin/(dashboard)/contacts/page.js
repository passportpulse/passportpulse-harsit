"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function ContactsPage() {
    const { user, loading } = useAuth();
    const router = useRouter();
    const [contacts, setContacts] = useState([]);
    const [loadingContacts, setLoadingContacts] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!loading && (!user || (user.role !== "ADMIN" && user.role !== "SUPER_ADMIN"))) {
            router.push('/login');
        }
    }, [user, loading, router]);

    useEffect(() => {
        if (user && (user.role === "ADMIN" || user.role === "SUPER_ADMIN")) {
            fetchContacts();
        }
    }, [user]);

    const fetchContacts = async () => {
        try {
            const response = await axios.get('/api/admin/contacts-db');
            if (response.data.success) {
                setContacts(response.data.data);
            } else {
                setError("Failed to fetch contacts");
            }
        } catch (error) {
            console.error("Error fetching contacts:", error);
            setError("Error fetching contacts");
        } finally {
            setLoadingContacts(false);
        }
    };

    const updateContactStatus = async (contactId, newStatus) => {
        try {
            const response = await axios.put(`/api/admin/contacts-db/${contactId}`, {
                status: newStatus
            });
            
            if (response.data.success) {
                setContacts(contacts.map(contact => 
                    contact.id === contactId 
                        ? { ...contact, status: newStatus, updatedAt: new Date().toISOString() }
                        : contact
                ));
            } else {
                alert("Failed to update contact status");
            }
        } catch (error) {
            console.error("Error updating contact status:", error);
            alert("Error updating contact status");
        }
    };

    const deleteContact = async (contactId) => {
        if (!confirm("Are you sure you want to delete this contact?")) return;
        
        try {
            const response = await axios.delete(`/api/admin/contacts-db/${contactId}`);
            if (response.data.success) {
                setContacts(contacts.filter(contact => contact.id !== contactId));
            } else {
                alert("Failed to delete contact");
            }
        } catch (error) {
            console.error("Error deleting contact:", error);
            alert("Error deleting contact");
        }
    };

    if (loading || !user || (user.role !== "ADMIN" && user.role !== "SUPER_ADMIN")) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-white">
                <p className="text-gray-900">Loading or redirecting...</p>
            </div>
        );
    }

    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Submissions</h1>
                <p className="text-gray-600">Manage contact form submissions from potential clients</p>
            </div>

            {error && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600">{error}</p>
                </div>
            )}

            <div className="bg-white rounded-lg shadow overflow-hidden">
                {loadingContacts ? (
                    <div className="p-8 text-center">
                        <p className="text-gray-500">Loading contacts...</p>
                    </div>
                ) : contacts.length === 0 ? (
                    <div className="p-8 text-center">
                        <p className="text-gray-500">No contact submissions yet</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Company
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Email
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Contact
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Interested In
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {contacts.map((contact) => (
                                    <tr key={contact.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">{contact.name}</div>
                                            <div className="text-sm text-gray-500">{contact.address}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {contact.company}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {contact.email}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {contact.contact}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {contact.interested_in}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <select
                                                value={contact.status}
                                                onChange={(e) => updateContactStatus(contact.id, e.target.value)}
                                                className="text-sm rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            >
                                                <option value="new">New</option>
                                                <option value="contacted">Contacted</option>
                                                <option value="in-progress">In Progress</option>
                                                <option value="completed">Completed</option>
                                                <option value="closed">Closed</option>
                                            </select>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {new Date(contact.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <button
                                                onClick={() => deleteContact(contact.id)}
                                                className="text-red-600 hover:text-red-900"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            <div className="mt-4 text-sm text-gray-500">
                Total: {contacts.length} contact{contacts.length !== 1 ? 's' : ''}
            </div>
        </div>
    );
}
