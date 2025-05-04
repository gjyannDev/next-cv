import InputFields from "../utils/InputField";

export default function BulletPointsListForm({
  formLabel = "",
  skillData,
  onChange,
  onBlur = () => {},
  handleRemoveSkills,
  handleAddSkills,
}) {
  return (
    <>
      <h3 className="form__title">{formLabel}</h3>
      <div className="language__form--contents">
        {skillData.map((language, index) => (
          <div
            className={`language__input${index + 1} language__input--container`}
          >
            <h3>{index + 1}</h3>
            <InputFields
              labelName={""}
              name={"language"}
              inputType={"input"}
              onChange={onChange}
              value={skillData[index]}
              withLabel={false}
              index={index}
              onBlur={onBlur}
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
          onClick={handleAddSkills}
          type="button"
        >
          Add more
        </button>
      </div>
    </>
  );
}
