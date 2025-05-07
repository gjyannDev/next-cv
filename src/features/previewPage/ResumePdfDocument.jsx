import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";
import {
  personalStyle,
  pageStyles,
  educationStyle,
  workStyles,
  technicalStyles,
} from "./ResumePdfDocumentStyle";
import gmailIcon from "/src/assets/icons/gmail_icon.png";
import mapIcon from "/src/assets/icons/map_icon.png";
import phoneIcon from "/src/assets/icons/phone_icon.png";
import { getYearDate } from "../../services/cv/utils";

export default function ResumePdfDocument({
  personalData,
  educationData,
  workData,
  technicalSkillsData,
}) {
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
        {/*Personal Details*/}
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
        {/*Education Details*/}
        <View
          style={[educationStyle.educationDetailsSection, pageStyles.section]}
        >
          <Text style={pageStyles.subHeaderText}>Education</Text>
          <View style={pageStyles.horizontalLine} />
          <View style={educationStyle.educationCardsContainer}>
            {educationData.map((educ, index) => (
              <View key={index}>
                <View style={educationStyle.cardContent}>
                  <Text style={pageStyles.subHeaderTextTwo}>{educ.school}</Text>
                  <Text style={pageStyles.subHeaderTextTwo}>
                    {getYearDate(educ.start_date, educ.end_date)}
                  </Text>
                </View>
                <View style={educationStyle.cardContent}>
                  <Text style={educationStyle.degreeText}>{educ.degree}</Text>
                  <Text
                    style={educationStyle.addressText}
                  >{`${educ.city}, ${educ.country}`}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        {/*Work Experience Details*/}
        <View style={[workStyles.workDetailsSection, pageStyles.section]}>
          <Text style={pageStyles.subHeaderText}>Work Experience</Text>
          <View style={pageStyles.horizontalLine} />
          <View style={workStyles.workCardContainer}>
            {workData.map((work, index) => (
              <View key={index}>
                <View style={workStyles.cardContent}>
                  <Text style={pageStyles.subHeaderTextTwo}>
                    {work.company_name}
                  </Text>
                  <Text style={pageStyles.subHeaderTextTwo}>
                    {getYearDate(work.start_date, work.end_date)}
                  </Text>
                </View>
                <View style={workStyles.cardContent}>
                  <Text style={workStyles.jobTitle}>{work.job_title}</Text>
                </View>
                <View style={workStyles.cardContentBullet}>
                  {work.description.map((des, index) => (
                    <View
                      key={index}
                      style={pageStyles.listItem}
                    >
                      <View style={pageStyles.bullet} />
                      <Text style={workStyles.bulletListText}>{des}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>
        {/*Technical Skills Details*/}
        <View style={[workStyles.workDetailsSection, pageStyles.section]}>
          <Text style={pageStyles.subHeaderText}>Technical Skills</Text>
          <View style={pageStyles.horizontalLine} />
          <View style={technicalStyles.technicalContentContainer}>
            <View style={technicalStyles.skillsContainer}>
              <Text style={technicalStyles.skillsHeaderText}>
                Programming Language:
              </Text>
              <Text style={technicalStyles.skillsParagraphText}>
                {technicalSkillsData.language.join(", ")}
              </Text>
            </View>
            <View style={technicalStyles.skillsContainer}>
              <Text style={technicalStyles.skillsHeaderText}>
                Frameworks and Databases: 
              </Text>
              <Text style={technicalStyles.skillsParagraphText}>
                {technicalSkillsData.frameWorks.join(", ")}
              </Text>
            </View>
            <View style={technicalStyles.skillsContainer}>
              <Text style={technicalStyles.skillsHeaderText}>
                Other Tools and Technologies: 
              </Text>
              <Text style={technicalStyles.skillsParagraphText}>
                {technicalSkillsData.tools.join(", ")}
              </Text>
            </View>
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
