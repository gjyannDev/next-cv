import FetchData from "../../services/cv/FetchData";
import { getYearDate } from "../../services/cv/utils";
import trashIcon from "/src/assets/icons/trash_icon.png";
import { updateEducationDetails } from "../../services/api/cvService";

export default function EducationDetailsCard({
  setStatus,
  setEditEducationData,
  setEducationCardId,
}) {
  const { fetchedAllEducationDetails, setFetchedAllEducationDetails } =
    FetchData();

  function handleCardClick(cardId) {
    const filtered_details = fetchedAllEducationDetails.filter(
      (data) => data.id === cardId
    );

    setEditEducationData(filtered_details);

    setStatus("edit");

    setEducationCardId(cardId);
  }

  function handleRemoveEducationDetails(event, cardId) {
    event.stopPropagation();

    const education_details = [...fetchedAllEducationDetails];

    const filtered_details = education_details.filter(
      (education) => education.id !== cardId
    );

    updateEducationDetails(filtered_details);
    setFetchedAllEducationDetails(filtered_details);
  }

  return (
    <div className="education__details--card">
      {fetchedAllEducationDetails.map((education) => (
        <div
          className="education__card"
          key={education.id}
          onClick={() => handleCardClick(education.id)}
        >
          <div className="education__card--left">
            <h1>{education.school}</h1>
            <h3>{getYearDate(education.start_date, education.end_date)}</h3>
          </div>
          <div className="education__card--right">
            <button
              type="button"
              onClick={(e) => handleRemoveEducationDetails(e, education.id)}
            >
              <img
                src={trashIcon}
                alt="trash icon"
              />
            </button>
          </div>
        </div>
      ))}
      {/*ADD Button to add education if you are on the education details card */}
    </div>
  );
}
