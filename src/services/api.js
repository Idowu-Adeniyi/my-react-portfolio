import axios from "axios";

const API_URL = "https://express-portfolio-admin.onrender.com";

export const getProjects = async () => {
  const response = await axios.get(`${API_URL}/projects`);
  return response.data;
};

export const getSkills = async () => {
  const response = await axios.get(`${API_URL}/skills`);
  return response.data;
};

export const addProject = async (projectData) => {
  const formData = new FormData();
  for (const key in projectData) {
    formData.append(key, projectData[key]);
  }
  const response = await axios.post(`${API_URL}/projects/add`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const addSkill = async (skillData) => {
  const response = await axios.post(`${API_URL}/skills/add`, skillData);
  return response.data;
};
