import React, { useEffect, useState } from "react";
import API from "../utils/axios";

const Dashboard = () => {
  const [resumes, setResumes] = useState([]);
  const [title, setTitle] = useState("");

  const fetchResumes = async () => {
    try {
      const { data } = await API.get("/resume");
      setResumes(data);
    } catch (err) {
      console.error(err);
    }
  };

  const createResume = async () => {
    try {
      await API.post("/resume", { title, experience: [], skills: [] });
      setTitle("");
      fetchResumes();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchResumes();
  }, []);

  return (
    <div>
      <h2>Your Resumes</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Resume Title"
      />
      <button onClick={createResume}>Create</button>

      <ul>
        {resumes.map((r) => (
          <li key={r._id}>{r.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
