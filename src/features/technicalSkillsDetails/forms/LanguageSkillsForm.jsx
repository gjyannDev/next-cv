import { useState } from "react";
import InputFields from "../../../components/utils/InputField";

export default function LanguageSkillsForm() {
  const [languageInputs, setLanguageInputs] = useState(["", ""]);

  function handleAddMoreSkills() {
    setLanguageInputs([...languageInputs, ""]);
  }

  function handleOnChange(e) {
    const { value } = e.target;
    const index = parseInt(e.target.dataset.index, 10);

    setLanguageInputs((preValues) => {
      const updated_value = [...preValues];

      updated_value[index] = value;

      return updated_value
    })
  }

  function handleRemoveSkills(e) {
    const index = parseInt(e.target.dataset.index, 10);

    setLanguageInputs((preValues) => {
      const updated_value = [...preValues];

      updated_value.splice(index, 1)

      return updated_value
    })
  }

  return (
    <div className="language__form--container">
      <h3 className="form__title">{"Programming Languages"}</h3>
      <div className="language__form--contents">
        {languageInputs.map((language, index) => (
          <div
            className={`language__input${index + 1} language__input--container`}
          >
            <h3>{index + 1}</h3>
            <InputFields
              labelName={""}
              name={"language"}
              inputType={"input"}
              onChange={handleOnChange}
              value={languageInputs[index]}
              withLabel={false}
              index={index}
            />
            <button
              type="button"
              className="btn__remove btn--primary"
              onClick={handleRemoveSkills}
              data-index={index}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          className="btn__black--outline add__more--btn"
          onClick={handleAddMoreSkills}
        >
          Add more
        </button>
      </div>
    </div>
  );
}
