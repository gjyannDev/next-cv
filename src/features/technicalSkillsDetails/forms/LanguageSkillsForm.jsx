import { useState } from "react";
import InputFields from "../../../components/utils/InputField";

export default function LanguageSkillsForm() {
  const [languageInputs, setLanguageInputs] = useState([]);

  function handleAddMoreSkills() {
    setLanguageInputs([...languageInputs, ""]);
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
              value={""}
              withLabel={false}
            />
            <button
              type="button"
              className="btn__remove btn--primary"
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
