import FetchData from "../../services/cv/FetchData";
import { getYearDate } from "../../services/cv/utils";
import trashIcon from "/src/assets/icons/trash_icon.png";
import { updateWorkExperienceDetails } from "../../services/api/cvService";

export default function WorkExperienceCard({
  setStatus,
  setEditWorkData,
  setWorkId,
}) {
  const { fetchedAllWorkExpDetails, setFetchedAllWorkExpDetails } = FetchData();

  function handleCardClick(cardId) {
    const filtered_details = fetchedAllWorkExpDetails.filter(
      (data) => data.id === cardId
    );

    setEditWorkData(filtered_details);

    setStatus("edit");

    setWorkId(cardId);
  }

  function handleRemoveWorkDetails(event, cardId) {
    event.stopPropagation();

    const work_details = [...fetchedAllWorkExpDetails];

    const filtered_details = work_details.filter((work) => work.id !== cardId);

    updateWorkExperienceDetails(filtered_details);
    setFetchedAllWorkExpDetails(filtered_details);
  }

  return (
    <div className="work__details--card">
      {fetchedAllWorkExpDetails.map((work) => (
        <div
          className="work__card"
          key={work.id}
          onClick={() => handleCardClick(work.id)}
        >
          <div className="work__card--left">
            <h1>{work.company_name}</h1>
            <h3>{getYearDate(work.start_date, work.end_date)}</h3>
          </div>
          <div className="work__card--right">
            <button
              type="button"
              onClick={(e) => handleRemoveWorkDetails(e, work.id)}
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
