import InputFields from "../utils/InputField";

export default function FeaturePagesForm({
  handleOnSubmit,
  inputDetails,
  value,
  handleOnChange,
  setStatus,
  status,
}) {
  return (
    <div className="form__container">
      {
        <form onSubmit={handleOnSubmit}>
          {inputDetails.map((input) => (
            <InputFields
              labelName={input.labelName}
              inputType={input.inputType}
              name={input.name}
              value={value[input.name] || ""}
              onChange={handleOnChange}
            />
          ))}

          <div className="grouped__btn--container">
            {status === "edit details" && (
              <button
                type="submit"
                className="btn--primary-2"
                onClick={() => setStatus("card")}
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              className="btn--primary-2"
              onClick={() => setStatus("card")}
            >
              Preview
            </button>
            <button
              type="submit"
              className="btn--primary"
            >
              Save
            </button>
          </div>
        </form>
      }
    </div>
  );
}
