import { useState, useEffect } from "react";
import { addFrameWorksSkill } from "../../../services/api/cvService";
import TechnicalSkillsDynamicForm from "./TechnicalSkillsDynamicForm";
import FetchData from "../../../services/cv/FetchData";

export default function FrameworksSkillsForm() {
  const [frameWorks, setFrameWorks] = useState(["", ""]);
  const { fetchedFrameWorksSkills } = FetchData();

  useEffect(() => {
    setFrameWorks([...fetchedFrameWorksSkills]);
  }, [fetchedFrameWorksSkills]);

  function handleAddMoreSkills() {
    setFrameWorks([...frameWorks, ""]);
  }

  function handleOnChange(e) {
    const { value } = e.target;
    const index = parseInt(e.target.dataset.index, 10);

    setFrameWorks((preValues) => {
      const updated_value = [...preValues];

      updated_value[index] = value;

      return updated_value;
    });
  }

  function handleRemoveSkills(e) {
    const index = parseInt(e.target.dataset.index, 10);

    setFrameWorks((preValues) => {
      const updated_value = [...preValues];

      updated_value.splice(index, 1);

      addFrameWorksSkill(updated_value);

      return updated_value;
    });
  }

  function handleDataSave() {
    addFrameWorksSkill(frameWorks);
  }

  return (
    <div className="language__form--container">
      <TechnicalSkillsDynamicForm
        formLabel={"Frameworks, Libraries, and Databases"}
        skillData={frameWorks}
        onChange={handleOnChange}
        onBlur={handleDataSave}
        handleRemoveSkills={handleRemoveSkills}
        handleAddSkills={handleAddMoreSkills}
      />
    </div>
  );
}
