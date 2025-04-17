import React, { useEffect, useState } from "react";
import { getSkills } from "../services/api";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    const data = await getSkills();
    setSkills(data);
  };

  return (
    <section id="skills" className="skills">
      <ul id="ulSkills">
        {skills.map((skill, index) => (
          <li key={index}>
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
