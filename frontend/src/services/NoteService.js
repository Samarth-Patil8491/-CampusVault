import axios from "axios";

const API = "http://localhost:8080/api/notes";

export const getAllNotes = () => axios.get(API);

export const searchNotes = (department, semester, subject) =>
  axios.get(API + "/search", {
    params: {
      department,
      semester,
      subject,
    },
  });

export const uploadNote = (formData) =>
  axios.post(API + "/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });