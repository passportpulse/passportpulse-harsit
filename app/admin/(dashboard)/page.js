"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEnvelopeOpenText, FaUsers, FaChartLine, FaClock, FaSync } from 'react-icons/fa';

export const dynamic = 'force-dynamic';

const StatsCard = ({ icon: Icon, title, value, color, trend }) => (
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${color}`}>
                        <Icon className="text-2xl text-white" />
                  </div>
                  {trend && (
                        <span className={`text-sm font-medium ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {trend > 0 ? '+' : ''}{trend}%
                        </span>
                  )}
            </div>
            <div>
                  <p className="text-gray-500 text-sm font-medium mb-1">{title}</p>
                  <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
            </div>
      </div>
);

const RecentActivity = ({ activities }) => (
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-3">
                  {activities.length > 0 ? activities.map((activity, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                              <div className={`w-2 h-2 rounded-full ${activity.type === 'contact' ? 'bg-blue-500' : 'bg-green-500'}`}></div>
                              <div className="flex-1">
                                    <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                                    <p className="text-xs text-gray-500">{activity.time}</p>
                              </div>
                        </div>
                  )) : (
                        <p className="text-gray-500 text-sm">No recent activity</p>
                  )}
            </div>
      </div>
);

export default function AdminDashboard() {
      const [stats, setStats] = useState({
            totalContacts: 0,
            totalQueries: 0,
            newContacts: 0,
            newQueries: 0
      });
      const [recentActivities, setRecentActivities] = useState([]);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
            const fetchDashboardData = async () => {
                  try {
                        
                        const [contactsRes, queriesRes] = await Promise.all([
                              axios.get('/api/admin/contacts-db'),
                              axios.get('/api/admin/queries-db')
                        ]);


                        const contactsData = contactsRes.data.data || [];
                        const queriesData = queriesRes.data.data || [];
                        const contactsStats = contactsRes.data.stats || {};
                        const queriesStats = queriesRes.data.stats || {};

                     

                        // Combine recent activities
                        const allActivities = [
                              ...contactsData.slice(0, 3).map(c => ({
                                    type: 'contact',
                                    title: `New contact from ${c.name}`,
                                    time: new Date(c.createdAt).toLocaleString()
                              })),
                              ...queriesData.slice(0, 3).map(q => ({
                                    type: 'query',
                                    title: `New query: ${q.subject || q.interested_in}`,
                                    time: new Date(q.createdAt).toLocaleString()
                              }))
                        ].sort((a, b) => new Date(b.time) - new Date(a.time)).slice(0, 5);

                        const newStats = {
                              totalContacts: contactsData.length,
                              totalQueries: queriesData.length,
                              newContacts: contactsStats.new || 0,
                              newQueries: queriesStats.pending || 0
                        };


                        setStats(newStats);
                        setRecentActivities(allActivities);
                  } catch (error) {
                  } finally {
                        setLoading(false);
                  }
            };

            fetchDashboardData();
      }, []);

      const handleRefresh = async () => {
            setLoading(true);
            await fetchDashboardData();
      };

      if (loading) {
            return (
                  <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                              {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                                          <div className="animate-pulse">
                                                <div className="w-14 h-14 bg-gray-200 rounded-xl mb-4"></div>
                                                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                                                <div className="h-8 bg-gray-200 rounded"></div>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </div>
            );
      }

      return (
            <div className="p-6">
                  <div className="mb-8 flex items-center justify-between">
                        <div>
                              <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
                              <p className="text-gray-600">Welcome back! Here's what's happening with your business.</p>
                        </div>
                        <button
                              onClick={handleRefresh}
                              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                              <FaSync className={loading ? 'animate-spin' : ''} />
                              Refresh
                        </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <StatsCard 
                              icon={FaUsers} 
                              title="Total Contacts" 
                              value={stats.totalContacts} 
                              color="bg-blue-500"
                              trend={12}
                        />
                        <StatsCard 
                              icon={FaEnvelopeOpenText} 
                              title="Total Queries" 
                              value={stats.totalQueries} 
                              color="bg-green-500"
                              trend={8}
                        />
                        <StatsCard 
                              icon={FaClock} 
                              title="New Contacts" 
                              value={stats.newContacts} 
                              color="bg-orange-500"
                        />
                        <StatsCard 
                              icon={FaChartLine} 
                              title="Pending Queries" 
                              value={stats.newQueries} 
                              color="bg-purple-500"
                        />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <RecentActivity activities={recentActivities} />
                        
                        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
                              <div className="space-y-3">
                                    <a 
                                          href="/admin/contacts" 
                                          className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                                    >
                                          <div className="flex items-center gap-3">
                                                <FaUsers className="text-blue-600" />
                                                <div>
                                                      <p className="font-medium text-gray-900">View All Contacts</p>
                                                      <p className="text-sm text-gray-500">Manage contact submissions</p>
                                                </div>
                                          </div>
                                    </a>
                                    <a 
                                          href="/admin/queries" 
                                          className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                                    >
                                          <div className="flex items-center gap-3">
                                                <FaEnvelopeOpenText className="text-green-600" />
                                                <div>
                                                      <p className="font-medium text-gray-900">View All Queries</p>
                                                      <p className="text-sm text-gray-500">Manage user queries</p>
                                                </div>
                                          </div>
                                    </a>
                              </div>
                        </div>
                  </div>
            </div>
      );
}