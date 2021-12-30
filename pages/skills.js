import React from "react";
import HeadPage from "./components/head";
import SkillCarousel from "./components/skills/skillsCarousel";
import SkillsHeader from "./components/skills/skillsHeader";
import SkillProgress from "./components/skills/skillsProgress";

const Skills = () => {
  return (
    <>
      <HeadPage title="My Skills" />
      <SkillsHeader />
      <SkillCarousel />
      <SkillProgress />
    </>
  );
};

export default Skills;
