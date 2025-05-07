import { StyleSheet, Font } from "@react-pdf/renderer";

Font.register({
  family: "Open Sans",
  src: "/src/assets/fonts/OpenSans_Condensed-Regular.ttf",
  fontWeight: "normal",
});

Font.register({
  family: "Open Sans",
  src: "/src/assets/fonts/OpenSans_Condensed-Medium.ttf",
  fontWeight: "medium",
});

Font.register({
  family: "Open Sans",
  src: "/src/assets/fonts/OpenSans_Condensed-SemiBold.ttf",
  fontWeight: "600",
});

Font.register({
  family: "Open Sans",
  src: "/src/assets/fonts/OpenSans_SemiCondensed-Bold.ttf",
  fontWeight: "bold",
});

Font.register({
  family: "Merriweather",
  src: "/src/assets/fonts/Merriweather_24pt-Regular.ttf",
  fontWeight: "normal",
});

Font.register({
  family: "Merriweather",
  src: "/src/assets/fonts/Merriweather_24pt-Medium.ttf",
  fontWeight: "medium",
});

Font.register({
  family: "Merriweather",
  src: "/src/assets/fonts/Merriweather_24pt-SemiBold.ttf",
  fontWeight: "600",
});

Font.register({
  family: "Merriweather",
  src: "/src/assets/fonts/Merriweather_24pt-Bold.ttf",
  fontWeight: "bold",
});

Font.register({
  family: "Merriweather",
  src: "/src/assets/fonts/Merriweather_24pt-ExtraBold.ttf",
  fontWeight: "800",
});

Font.register({
  family: "Merriweather",
  src: "/src/assets/fonts/Merriweather_24pt-Italic.ttf",
  fontWeight: "normal",
  fontStyle: "italic",
});

export const pageStyles = StyleSheet.create({
  page: {
    padding: "32px",
    backgroundColor: "#fffffd",
  },

  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    width: "100%",
  },

  subHeaderText: {
    fontSize: "24px",
    fontFamily: "Merriweather",
    fontWeight: "bold",
  },

  subHeaderTextTwo: {
    fontSize: "14px",
    fontFamily: "Merriweather",
    fontWeight: "600",
  },

  section: {
    marginTop: "24px",
  },

  bullet: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: "#000",
    marginRight: 10,
  },

  listItem: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 5,
    alignItems: "center",
  },
});

export const personalStyle = StyleSheet.create({
  personalDetailsSection: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  personalInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
  },

  nameText: {
    fontFamily: "Merriweather",
    fontSize: "32px",
    fontWeight: "bold",
  },

  jobTitleText: {
    fontFamily: "Open Sans",
    fontSize: "20px",
    fontWeight: "medium",
  },

  previewOthersContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "8px",
  },

  detailsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "4px",
  },

  infoText: {
    fontSize: "12px",
    lineHeight: "1.2",
  },
});

export const educationStyle = StyleSheet.create({
  educationDetailsSection: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  educationCardsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },

  cardContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "4px",
  },

  degreeText: {
    fontFamily: "Merriweather",
    fontWeight: "normal",
    fontStyle: "italic",
    fontSize: "14px",
  },

  addressText: {
    fontFamily: "Open Sans",
    fontWeight: "medium",
    fontSize: "14px",
  },
});

export const workStyles = StyleSheet.create({
  workDetailsSection: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  workCardContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },

  cardContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "4px",
  },

  cardContentBullet: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: "8px",
  },

  jobTitle: {
    fontSize: "14px",
    fontFamily: "Merriweather",
    fontWeight: "normal",
  },

  bulletListText: {
    fontSize: "14px",
    fontFamily: "Open Sans",
    fontWeight: "normal",
  },
});

export const technicalStyles = StyleSheet.create({
  technicalDetailsSection: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  technicalContentContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  skillsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "8px",
  },
  
  skillsHeaderText: {
    fontSize: "14px",
    flexShrink: 0,
    width: 178.6,
  },

  skillsParagraphText: {
    fontSize: 12.6,
    flexGrow: 1,
    wordBreak: "break-word",
    margin: 0,
  },
});
