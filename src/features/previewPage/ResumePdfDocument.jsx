import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";
import { personalStyle, pageStyles } from "./ResumePdfDocumentStyle";
import gmailIcon from "/src/assets/icons/gmail_icon.png";
import mapIcon from "/src/assets/icons/map_icon.png";
import phoneIcon from "/src/assets/icons/phone_icon.png";

export default function ResumePdfDocument({ personalData }) {
  const personal_info = [
    { iconImg: gmailIcon, infoText: personalData.email },
    { iconImg: mapIcon, infoText: personalData.address },
    { iconImg: phoneIcon, infoText: personalData.phone },
  ];
  const resumePDF = () => (
    <Document>
      <Page
        size="A4"
        style={pageStyles.page}
      >
        <View style={personalStyle.personalDetailsSection}>
          <View style={personalStyle.personalInfo}>
            <Text style={personalStyle.nameText}>{personalData.full_name}</Text>
            <Text style={personalStyle.jobTitleText}>
              {personalData.job_title}
            </Text>
          </View>
          <View style={personalStyle.previewOthersContainer}>
            {personal_info.map((info, index) => (
              <View
                key={index}
                style={personalStyle.detailsContainer}
              >
                <Image
                  src={info.iconImg}
                  style={{ width: 18, height: 18 }}
                ></Image>
                <Text style={personalStyle.infoText}>{info.infoText}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
  return (
    <div>
      <div className="pdf__viewer--container">
        <PDFViewer
          width="100%"
          height="100%"
        >
          {resumePDF()}
        </PDFViewer>
      </div>
    </div>
  );
}
