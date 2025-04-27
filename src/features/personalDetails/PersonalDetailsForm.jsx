import InputFields from "../../components/utils/InputField";

export default function PersonalDetailsForm({ inputDetails = [], getPersonalDetails}) {
  function handleOnSubmit(e) {
    e.preventDefault()

    const form_data = new FormData(e.target)
    const data = Object.fromEntries(form_data.entries());

    getPersonalDetails(data)

    //TODO: Save the data to the fire store database
  }

  return (
    <>
      {
        <form onSubmit={handleOnSubmit}>
          {inputDetails.map((details) => (
            <InputFields
              labelName={details.labelName}
              inputType={details.inputType}
              name={details.name}
            />
          ))}

          <button
            type="submit"
            className="btn--primary"
          >
            {/*//TODO: Change to edit if the edit state is set to to edit if not then save*/}
            Save
          </button>
        </form>
      }
    </>
  );
}
