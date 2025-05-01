import FetchData from "../../services/cv/FetchData";
import { getYearDate } from "../../services/cv/utils";
import trashIcon from "/src/assets/icons/trash_icon.png";

export default function EducationDetailsCard({
  setStatus,
  setEditEducationData,
  setEducationCardId,
}) {
  const { fetchedAllEducationDetails } = FetchData();

  function handleCardClick(cardId) {
    const filtered_details = fetchedAllEducationDetails.filter(
      (data) => data.id === cardId
    );

    setEditEducationData(filtered_details);

    setStatus("edit education");

    setEducationCardId(cardId);
  }

  function handleRemoveEducationDetails(e) {
    e.stopPropagation();
    alert("Clicked the Button only");
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
              onClick={handleRemoveEducationDetails}
            >
              <img
                src={trashIcon}
                alt="trash icon"
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
