import { useState } from "react";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import FormSection from "./components/common/FormSection";
import visionIcon from "/src/assets/icons/vision.svg";
import bullseyeIcon from "/src/assets/icons/bullseye.svg";

export default function App() {
  const [sectionId, setSectionId] = useState(1);
  const [sideBarStatus, setSideBarStatusMap] = useState({
    personal: "add",
    education: "add",
    work: "add",
  });
  const [showPreview, setShowPreview] = useState(false);

  function getActiveSectionId(sectionId) {
    setSectionId(sectionId);
  }

  function handleSideBarStatusChange(sectionId = null, newStatus) {
    setSideBarStatusMap((prev) => ({
      ...prev,
      [sectionId]: newStatus,
    }));
  }

  function handlePreview() {
    setShowPreview((prev) => !prev);
  }

  const currentSideBarStatus = sideBarStatus[sectionId] || "add";

  return (
    <div className="app">
      <header className="header__container">
        <Header />
      </header>

      <div className="main__content container">
        <nav className="side__nav--container">
          <Sidebar
            getActiveSectionId={getActiveSectionId}
            sectionId={sectionId}
          />
          <div className="preview__nav--container">
            <button
              type="button"
              onClick={handlePreview}
            >
              <img
                src={showPreview ? bullseyeIcon : visionIcon}
                alt=""
              />
            </button>
          </div>
        </nav>

        <main className="cv__content--container">
          {/* Form Sections and Preview Section*/}
          <FormSection
            sectionId={sectionId}
            status={currentSideBarStatus}
            setStatus={(newStatus) =>
              handleSideBarStatusChange(sectionId, newStatus)
            }
          />
        </main>
      </div>
    </div>
  );
}
