import gmailIcon from "/src/assets/icons/gmail_icon.svg";
import mapIcon from "/src/assets/icons/map_icon.svg";
import phoneIcon from "/src/assets/icons/phone_icon.svg";

function ContainerWithDetails({ alt, imgIcon, detail }) {
  return (
    <div className="details__container">
      <img
        src={imgIcon}
        alt={alt}
      />
      <p>{detail}</p>
    </div>
  );
}

export default function PersonalDetailsSection({ data }) {
  console.log("personal data: ", data);
  return (
    <div className="personal__details--section">
      <div className="personal__info">
        <h1>{data.full_name}</h1>
        <p>{data.job_title}</p>
      </div>
      <div className="personal__others--container">
        <ContainerWithDetails
          alt={"gmail icon svg"}
          imgIcon={gmailIcon}
          detail={data.email}
        />
        <ContainerWithDetails
          alt={"address icon svg"}
          imgIcon={mapIcon}
          detail={data.address}
        />
        <ContainerWithDetails
          alt={"phone icon svg"}
          imgIcon={phoneIcon}
          detail={data.phone}
        />
      </div>
    </div>
  );
}
