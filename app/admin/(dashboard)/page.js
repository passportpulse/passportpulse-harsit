"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEnvelopeOpenText } from 'react-icons/fa';

const StatsCard = ({ icon: Icon, title, value, color }) => (
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex items-center gap-6">
            <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${color}`}>
                  <Icon className="text-3xl text-white" />
            </div>
            <div>
                  <p className="text-gray-500 text-sm font-semibold">{title}</p>
                  <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
            </div>
      </div>
);

export default function AdminDashboard() {
      const [stats, setStats] = useState({ totalQueries: 0 });
      const [loading, setLoading] = useState(true);

      useEffect(() => {
            const fetchStats = async () => {
                  try {
                        const token = localStorage.getItem('accessToken');
                        const headers = { Authorization: `Bearer ${token}` };

                        const queryRes = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/contacts`, { headers });

                        setStats({
                              totalQueries: queryRes.data.meta.total || 0,
                        });
                  } catch (error) {
                        console.error("Failed to fetch stats:", error);
                  } finally {
                        setLoading(false);
                  }
            };

            fetchStats();
      }, []);

      return (
            <div>
                  <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
                  {loading ? (
                    <p>Loading stats...</p>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                          <StatsCard icon={FaEnvelopeOpenText} title="Total Queries" value={stats.totalQueries} color="bg-blue-500" />
                    </div>
                  )}
            </div>
      );
}