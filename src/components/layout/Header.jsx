// import downloadIcon from "/src/assets/icons/download_icon.svg";

export default function Header() {
  return (
    <div className="header__contents container">
      <h1>
        <a href="">
          Nex<span>tC</span>V
        </a>
      </h1>
      {/* <div className="download__pdf--container">
        <button
          type="button"
          className="btn--primary download__pdf--btn"
          disabled={!showPreview}
        >
          <p>Download</p>
          <img
            src={downloadIcon}
            alt="download icon"
          />
        </button>
      </div> */}
    </div>
  );
}
