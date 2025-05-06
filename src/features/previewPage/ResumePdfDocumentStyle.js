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

export const pageStyles = StyleSheet.create({
  page: {
    padding: "32px",
    backgroundColor: "#fffffd",
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
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});
