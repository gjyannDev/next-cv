import { useEffect, useState } from "react";
import { addToolsSkills } from "../../../services/api/cvService";
import TechnicalSkillsDynamicForm from "./TechnicalSkillsDynamicForm";
import FetchData from "../../../services/cv/FetchData";

export default function ToolsSkillsForm() {
  const [tools, setTools] = useState(["", ""]);
  const { fetchedToolsSkills } = FetchData();

  useEffect(() => {
    setTools([...fetchedToolsSkills]);
  }, [fetchedToolsSkills]);

  function handleAddMoreSkills() {
    setTools([...tools, ""]);
  }

  function handleOnChange(e) {
    const { value } = e.target;
    const index = parseInt(e.target.dataset.index, 10);

    setTools((preValues) => {
      const updated_value = [...preValues];

      updated_value[index] = value;

      return updated_value;
    });
  }

  function handleRemoveSkills(e) {
    const index = parseInt(e.target.dataset.index, 10);

    setTools((preValues) => {
      const updated_value = [...preValues];

      updated_value.splice(index, 1);

      addToolsSkills(updated_value);

      return updated_value;
    });
  }

  function handleDataSave() {
    addToolsSkills(tools);
  }

  return (
    <div className="language__form--container">
      <TechnicalSkillsDynamicForm
        formLabel={"Tools & Other Technologies"}
        skillData={tools}
        onChange={handleOnChange}
        onBlur={handleDataSave}
        handleRemoveSkills={handleRemoveSkills}
        handleAddSkills={handleAddMoreSkills}
      />
    </div>
  );
}
