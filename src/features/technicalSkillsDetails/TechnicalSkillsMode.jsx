import { useState } from "react";
import InputFields from "../../components/utils/InputField";

export default function TechnicalSkillsMode() {
  const [selectedMode, setSelectedMode] = useState("language");

  const select_values = [
    { value: "language", label: "Programming Language"},
    { value: "frameworks", label: "Frameworks, Libraries, and Databases"},
    { value: "tools", label: "Tools & Other Technologies"}
  ]

  return (
    <div className="skills__details--container">
      <h1>Technical Skills</h1>
      <div className="drop__down--container">
        <InputFields
          labelName={""}
          inputType={"select"}
          name={"skill"}
          withLabel={false}
          options={select_values}
        />
      </div>
    </div>
  );
}
