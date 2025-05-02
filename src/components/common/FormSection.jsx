import PersonalDetailsMode from "../../features/personalDetails/PersonalDetailsMode";
import TechnicalSkillsMode from "../../features/technicalSkillsDetails/TechnicalSkillsMode";
import EducationDetailsMode from "../../features/educationDetails/EducationDetailsMode";
import WorkExperienceMode from "../../features/workExpDetails/WorkExperienceMode";

export default function FormSection({ sectionId }) {
  const renderFormContent = () => {
    switch (sectionId) {
      case 1:
        return <PersonalDetailsMode />;
      case 2:
        return <TechnicalSkillsMode />;
      case 3:
        return <EducationDetailsMode />;
      case 4:
        return <WorkExperienceMode />;
      default:
        return; //Return something if the section ID is not yet passed
    }
  };

  return <>{renderFormContent()}</>;
}
