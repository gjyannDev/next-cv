export default function InputFields({
  labelName,
  inputType,
  name,
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
          {withLabel && <label htmlFor={name}>{labelName}</label>}
          <input type={inputType} name={name}/>
        </div>
      )}
    </>
  );
}
