import PersonalDetailsMode from "../../features/personalDetails/PersonalDetailsMode";
import TechnicalSkillsMode from "../../features/technicalSkillsDetails/TechnicalSkillsMode";
import EducationDetailsMode from "../../features/educationDetails/EducationDetailsMode";
import WorkExperienceMode from "../../features/workExpDetails/WorkExperienceMode";

export default function FormSection({ sectionId, status, setStatus }) {
  const renderFormContent = () => {
    switch (sectionId) {
      case 1:
        return (
          <PersonalDetailsMode
            status={status}
            setStatus={setStatus}
          />
        );
      case 2:
        return <TechnicalSkillsMode />;
      case 3:
        return (
          <EducationDetailsMode
            status={status}
            setStatus={setStatus}
          />
        );
      case 4:
        return (
          <WorkExperienceMode
            status={status}
            setStatus={setStatus}
          />
        );
      default:
        return; //Return something if the section ID is not yet passed
    }
  };

  return <>{renderFormContent()}</>;
}
