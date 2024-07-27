import axios, { AxiosError } from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const addStudent = async (studentData: any) => {
  try {
    const response = await apiClient.post("/student", studentData);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error("Error response:", error.response?.data);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};

export const fetchStudents = async () => {
  try {
    const response = await apiClient.get("/students");
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error("Error response:", error.response?.data);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};
