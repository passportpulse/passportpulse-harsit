"use client";

import { createContext, useState, useEffect, useContext, useCallback } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);
      const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false); 
      const router = useRouter();
      const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

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
                  console.error("Failed to fetch user data:", error);
                  // If database API fails, try mock token
                  if (token === "mock_access_token_12345") {
                        const mockAdminUser = {
                              _id: "mock_admin_id_12345",
                              name: "Admin User",
                              email: "admin@passportpulse.com",
                              role: "SUPER_ADMIN",
                              createdAt: new Date(),
                              updatedAt: new Date()
                        };
                        setUser(mockAdminUser);
                  } else {
                        localStorage.removeItem("accessToken");
                        setUser(null);
                  }
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
                        console.warn('Authentication taking too long, forcing stop');
                        setLoading(false);
                  }
            }, 5000); // 5 second timeout

            return () => clearTimeout(timeout);
      }, [loading]);

      const login = async (email, password) => {
            setLoading(true);
            
            // Try database login first
            try {
                  const response = await axios.post('/api/auth-db', {
                        email,
                        password,
                  });
                  
                  if (response.data.success) {
                        const token = response.data.data.accessToken;
                        localStorage.setItem("accessToken", token);
                        setUser(response.data.data.user);
                        
                        const userRole = response.data.data.user.role;
                        if (userRole === "SUPER_ADMIN" || userRole === "ADMIN") {
                              router.push("/admin");
                        } else {
                              router.push("/");
                        }
                        
                        return response.data;
                  }
            } catch (dbError) {
                  console.log('Database login failed, trying mock login...');
            }
            
            // Fallback to mock admin login
            if (email === "admin@passportpulse.com" && password === "admin123456") {
                  const mockAdminUser = {
                        _id: "mock_admin_id_12345",
                        name: "Admin User",
                        email: "admin@passportpulse.com",
                        role: "SUPER_ADMIN",
                        createdAt: new Date(),
                        updatedAt: new Date()
                  };
                  const mockToken = "mock_access_token_12345";
                  
                  localStorage.setItem("accessToken", mockToken);
                  setUser(mockAdminUser);
                  setLoading(false);
                  router.push("/admin");
                  return { success: true, data: { user: mockAdminUser, accessToken: mockToken } };
            }
            
            setLoading(false);
            return { success: false, message: "Login failed" };
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
                  console.error("Registration error:", error);
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