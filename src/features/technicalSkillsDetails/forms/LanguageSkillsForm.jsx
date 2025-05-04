import { useEffect, useState } from "react";
import { addLanguageSkill } from "../../../services/api/cvService";
import BulletPointsListForm from "../../../components/common/BulletPointsListForm";
import FetchData from "../../../services/cv/FetchData";

export default function LanguageSkillsForm() {
  const [languageInputs, setLanguageInputs] = useState(["", ""]);
  const { fetchedLanguagesSkills } = FetchData();

  useEffect(() => {
    setLanguageInputs([...fetchedLanguagesSkills]);
  }, [fetchedLanguagesSkills]);

  function handleAddMoreSkills() {
    setLanguageInputs([...languageInputs, ""]);
  }

  function handleOnChange(e) {
    const { value } = e.target;
    const index = parseInt(e.target.dataset.index, 10);

    setLanguageInputs((preValues) => {
      const updated_value = [...preValues];

      updated_value[index] = value;

      return updated_value;
    });
  }

  function handleRemoveSkills(e) {
    const index = parseInt(e.target.dataset.index, 10);

    setLanguageInputs((preValues) => {
      const updated_value = [...preValues];

      updated_value.splice(index, 1);

      addLanguageSkill(updated_value);

      return updated_value;
    });
  }

  function handleDataSave() {
    addLanguageSkill(languageInputs);
  }

  return (
    <div className="language__form--container">
      <BulletPointsListForm
        formLabel={"Programming Languages"}
        skillData={languageInputs}
        onChange={handleOnChange}
        onBlur={handleDataSave}
        handleRemoveSkills={handleRemoveSkills}
        handleAddSkills={handleAddMoreSkills}
      />
    </div>
  );
}
