import PersonalDetailsMode from "../../features/personalDetails/PersonalDetailsMode";
import TechnicalSkillsMode from "../../features/technicalSkillsDetails/TechnicalSkillsMode";

export default function FormSection({ sectionId }) {
  const renderFormContent = () => {
    switch (sectionId) {
      case 1:
        return <PersonalDetailsMode />;
      case 2:
        return <TechnicalSkillsMode />;
      case 3:
        return console.log("Education Details");
      case 4:
        return console.log("Work Experience Details");
      default:
        return; //Return something if the section ID is not yet passed
    }
  };

  return <>{renderFormContent()}</>;
}
