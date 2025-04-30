export default function InputFields({
  labelName,
  inputType,
  name,
  value,
  onChange = () => {},
  options = [],
  withLabel = true,
  index = null
}) {
  return (
    <>
      {inputType === "select" ? (
        <div className="input__container">
          {withLabel && (
            <label
              htmlFor={name}
              className="input__label"
            >
              {labelName}
            </label>
          )}
          <select
            name={name}
            id="select"
            className="select"
            onChange={(e) => onChange(e.target.value)}
          >
            {options.map((option, index) => (
              <option
                key={index}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>
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
            data-index={index}
          />
        </div>
      )}
    </>
  );
}
