import TechnicalSkillsDynamicForm from "../technicalSkillsDetails/forms/TechnicalSkillsDynamicForm";
import { useEffect, useState } from "react";
import FetchData from "../../services/cv/FetchData";

export default function EducationDescriptionForm({
  getEducationDescription,
  educationCardId,
}) {
  const [educationDescription, setEducationDescription] = useState(["", ""]);
  const { fetchedAllEducationDetails } = FetchData();

  useEffect(() => {
    const education = fetchedAllEducationDetails.find(
      (edu) => edu.id === educationCardId
    );

    if (education) {
      setEducationDescription(education.description);
    }
  }, [educationCardId, fetchedAllEducationDetails]);

  useEffect(() => {
    getEducationDescription(educationDescription);
  }, [getEducationDescription, educationDescription]);

  function handleAddMoreDescription() {
    setEducationDescription([...educationDescription, ""]);
  }

  function handleOnChange(e) {
    const { value } = e.target;
    const index = parseInt(e.target.dataset.index, 10);

    setEducationDescription((preValues) => {
      const updated_value = [...preValues];

      updated_value[index] = value;

      return updated_value;
    });
  }

  function handleRemoveSkills(e) {
    const index = parseInt(e.target.dataset.index, 10);

    setEducationDescription((preValues) => {
      const updated_value = [...preValues];

      updated_value.splice(index, 1);

      // addLanguageSkill(updated_value);

      return updated_value;
    });
  }

  return (
    <div className="education__description--container">
      <h3>Additional Info (ex. awards, thesis project)</h3>
      <TechnicalSkillsDynamicForm
        skillData={educationDescription}
        onChange={handleOnChange}
        handleRemoveSkills={handleRemoveSkills}
        handleAddSkills={handleAddMoreDescription}
      />
    </div>
  );
}
