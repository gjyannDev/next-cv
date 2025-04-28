export default function InputFields({
  labelName,
  inputType,
  name,
  value,
  onChange,
  formType,
  options = [],
  withLabel = true,
}) {
  return (
    <>
      {inputType === "select" ? (
        <select
          name={name}
          id=""
        ></select>
      ) : inputType === "textarea" ? (
        <textarea
          name={name}
          id=""
        ></textarea>
      ) : (
        <div className="input__container">
          {withLabel && (
            <label
              htmlFor={name}
              className="input__label"
            >
              {labelName}
            </label>
          )}
          <input
            type={inputType}
            name={name}
            value={value}
            onChange={onChange}
            className={`${name
              .replace(/\s+/g, "__")
              .toLowerCase()}--input input`}
          />
        </div>
      )}
    </>
  );
}
