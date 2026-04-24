"use client";

import { createContext, useState, useEffect, useContext, useCallback } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);
      const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false); 
      const [lastActivity, setLastActivity] = useState(Date.now());
      const router = useRouter();
      const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

      // Auto-logout after 5 minutes of inactivity
      useEffect(() => {
            const INACTIVITY_TIMEOUT = 5 * 60 * 1000; // 5 minutes in milliseconds

            const checkInactivity = () => {
                  const now = Date.now();
                  if (now - lastActivity > INACTIVITY_TIMEOUT && user) {
                        logout();
                  }
            };

            const updateActivity = () => {
                  setLastActivity(Date.now());
            };

            const interval = setInterval(checkInactivity, 60000); // Check every minute

            // Add event listeners for user activity
            const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
            events.forEach(event => {
                  document.addEventListener(event, updateActivity);
            });

            return () => {
                  clearInterval(interval);
                  events.forEach(event => {
                        document.removeEventListener(event, updateActivity);
                  });
            };
      }, [lastActivity, user]);

      const fetchMe = useCallback(async (token) => {
            setLoading(true);
            try {
                  // Try database API first
                  const response = await axios.get(`/api/auth-db?token=${token}`);
                  
                  if (response.data.success) {
                        setUser(response.data.data);
                  } else {
                        localStorage.removeItem("accessToken");
                        setUser(null);
                  }
            } catch (error) {
                  localStorage.removeItem("accessToken");
                  setUser(null);
            } finally {
                  setLoading(false);
            }
      }, []);

      useEffect(() => {
            const token = localStorage.getItem("accessToken");
            if (token) {
                  fetchMe(token);
            } else {
                  setLoading(false);
            }
      }, [fetchMe]);

      // Add timeout to prevent infinite loading
      useEffect(() => {
            const timeout = setTimeout(() => {
                  if (loading) {
                        setLoading(false);
                  }
            }, 5000); // 5 second timeout

            return () => clearTimeout(timeout);
      }, [loading]);

      const login = async (email, password) => {
            setLoading(true);
            
            // Database-only authentication
            try {
                  const response = await axios.post('/api/auth-db', {
                        email,
                        password,
                  });
                  
                  if (response.data.success) {
                        const token = response.data.data.accessToken;
                        localStorage.setItem("accessToken", token);
                        setUser(response.data.data.user);
                        setLastActivity(Date.now()); // Reset activity timer on login
                        
                        // Check if user has admin role (either ADMIN or SUPER_ADMIN)
                        const userRole = response.data.data.user.role;
                        if (["ADMIN", "SUPER_ADMIN"].includes(userRole)) {
                              router.push("/admin");
                        } else {
                              router.push("/");
                        }
                        
                        return response.data;
                  } else {
                        return { success: false, message: response.data.message };
                  }
            } catch (dbError) {
                  setLoading(false);
                  return { success: false, message: "Login failed - Database error" };
            }
      };

      const register = async (name, email, password) => {
            setLoading(true);
            try {
                  // Use environment variable if available, otherwise use local API
                  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
                  
                  if (BASE_URL) {
                        const response = await axios.post(`${BASE_URL}/api/auth-db/register`, {
                              name,
                              email,
                              password,
                        });
                        if (response.data.success) {
                              await login(email, password);
                        }
                        return response.data;
                  } else {
                        // Use local API route
                        const response = await axios.post('/api/auth-db/register', {
                              name,
                              email,
                              password,
                        });
                        if (response.data.success) {
                              await login(email, password);
                        }
                        return response.data;
                  }
            } catch (error) {
                  setLoading(false);
                  return { success: false, message: error.response?.data?.message || "Registration failed" };
            }
      };

      const logout = () => {
            localStorage.removeItem("accessToken");
            setUser(null);
            router.push("/login");
      };

      return (
            <AuthContext.Provider 
                value={{ 
                    user, 
                    loading, 
                    login, 
                    register, 
                    logout, 
                    fetchMe, 
                    setUser, 
                    isEnquiryModalOpen,       
                    setIsEnquiryModalOpen    
                }}
            >
                  {children}
            </AuthContext.Provider>
      );
};

export const useAuth = () => useContext(AuthContext);