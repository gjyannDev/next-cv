import BulletPointsListForm from "./BulletPointsListForm";
import { useEffect, useState } from "react";

export default function DescriptionDynamicForm({
  getDescription,
  selectedCardId,
  label = "",
  initialDescriptionValue = [],
  fetchDetails = [],
}) {
  const [descriptionData, setDescriptionData] = useState(
    initialDescriptionValue
  );

  useEffect(() => {
    const education = fetchDetails.find((edu) => edu.id === selectedCardId);

    if (education) {
      setDescriptionData(education.description);
    }
  }, [selectedCardId, fetchDetails]);

  useEffect(() => {
    getDescription(descriptionData);
  }, [getDescription, descriptionData]);

  function handleAddMoreDescription() {
    setDescriptionData([...descriptionData, ""]);
  }

  function handleOnChange(e) {
    const { value } = e.target;
    const index = parseInt(e.target.dataset.index, 10);

    setDescriptionData((preValues) => {
      const updated_value = [...preValues];

      updated_value[index] = value;

      return updated_value;
    });
  }

  function handleRemoveSkills(e) {
    const index = parseInt(e.target.dataset.index, 10);

    setDescriptionData((preValues) => {
      const updated_value = [...preValues];

      updated_value.splice(index, 1);

      // addLanguageSkill(updated_value);

      return updated_value;
    });
  }

  return (
    <div className="education__description--container">
      <h3>{label}</h3>
      <BulletPointsListForm
        skillData={descriptionData}
        onChange={handleOnChange}
        handleRemoveSkills={handleRemoveSkills}
        handleAddSkills={handleAddMoreDescription}
      />
    </div>
  );
}
