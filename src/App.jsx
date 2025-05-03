import { useState } from "react";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import FormSection from "./components/common/FormSection";

export default function App() {
  const [sectionId, setSectionId] = useState(null);
  const [sideBarStatus, setSideBarStatusMap] = useState({
    personal: "add",
    education: "add",
    work: "add",
  });

  function getActiveSectionId(sectionId) {
    setSectionId(sectionId);
  }

  function handleSideBarStatusChange(sectionId = null, newStatus) {
    setSideBarStatusMap((prev) => ({
      ...prev,
      [sectionId]: newStatus,
    }));
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
