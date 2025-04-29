import PersonalIcon from "../../assets/icons/user_icon.svg";
import TechnicalIcon from "../../assets/icons/brain_icon.svg";
import EducationIcon from "../../assets/icons/hat_icon.svg";
import WorkIcon from "../../assets/icons/briefcase_icon.svg";

export default function Sidebar({getActiveSectionId, sectionId}) {
  const sections = [
    { id: 1, name: "Personal Details", icon: PersonalIcon },
    { id: 2, name: "Technical Skills", icon: TechnicalIcon },
    { id: 3, name: "Education", icon: EducationIcon },
    { id: 4, name: "Work Experience", icon: WorkIcon },
  ];

  return (
    <div className="side__bar--contents">
      {sections.map((section) => (
        <div key={section.id}>
          <button onClick={() => getActiveSectionId(section.id)}>
            <img
              src={section.icon}
              alt={`${section.name} Icon Image`}
              className={`side__bar--icon ${sectionId === section.id ? "active" : ""}`}
            />
          </button>
        </div>
      ))}
      {/*TODO: ADD NEXT AND PREV IN HERE */}
    </div>
  );
}
