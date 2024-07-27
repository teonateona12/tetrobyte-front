import axios from "axios";

export const fetchStudents = async () => {
  const response = await axios.get("http://localhost:5000/api/students");
  return response.data;
};
