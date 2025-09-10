import React from "react";

const Templates = ({ data = {} }) => {
  return (
    <div style={{ fontFamily: "Arial", padding: "20px", lineHeight: "1.6" }}>
      <h1>{data.name || "Your Name"}</h1>
      <p>{data.email || "your@email.com"} | {data.phone || "123-456-7890"}</p>
      <hr />

      <h2>Skills</h2>
      <ul>
        {data.skills
          ? data.skills.split(",").map((skill, i) => <li key={i}>{skill.trim()}</li>)
          : <li>Add your skills</li>}
      </ul>

      <h2>Experience</h2>
      <p>{data.experience || "Add your work experience"}</p>

      <h2>Education</h2>
      <p>{data.education || "Add your education details"}</p>

      <h2>Projects</h2>
      <p>{data.projects || "Add your projects"}</p>
    </div>
  );
};

export default Templates;
