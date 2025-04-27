import personalIcon from "../../assets/icons/personal_details_icon.png";
import technicalIcon from "../../assets/icons/technical_details_icon.png";
import educationIcon from "../../assets/icons/education_details_icon.png";
import workIcon from "../../assets/icons/work_details_icon.png";

export default function Sidebar() {
  const sections = [
    { id: 1, name: "Personal Details", icon: personalIcon },
    { id: 2, name: "Technical Skills", icon: technicalIcon },
    { id: 3, name: "Education", icon: educationIcon },
    { id: 4, name: "Work Experience", icon: workIcon },
  ];
  
  return (
    <div className="side__bar--contents">
      {sections.map((section) => (
        <div key={section.id}>
          <img
            src={section.icon}
            alt={`${section.name} icon image`}
          />
        </div>
      ))}
    </div>
  );
}
