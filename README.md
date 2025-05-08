
# NextCV

A user-friendly CV and résumé builder that allows users to input personal details, education, work experience, and more—all in an intuitive interface. Built with React.js, SCSS, and Firebase, the application provides a seamless experience for creating and managing professional CVs in real time.

This application allows user to:

* Enables users to enter comprehensive personal information, including technical skills, education background, and professional work experience.
* Provides the option to download the completed CV or résumé as a high-quality PDF file for easy sharing or printing.
* As users input their information, a real-time preview of the CV/resumé is displayed, allowing them to instantly see how their changes will appear in the final document.



## Features

* __Comprehensive Form Input__: Users can fill in personal details, technical skills, educational background, and work experience through a clean and intuitive interface.

* __Live CV Preview__: A real-time preview updates instantly as users input their information, allowing for immediate visual feedback on the final layout.

* __PDF Export__: Users can download their finished CV or résumé as a professionally formatted PDF, ready for printing or sharing digitally.

* __Build with Modern Tools__: Developed using React.js, SCSS, and Firebase for fast performance, and real-time data management.
## Learnings

* __ReactJS__: Gained hands-on experience building with React, including the creation of reusable components, passing data through props, and managing state across components.
* __React Hooks (useState & useEffect)__: Learned how to use essential hooks to manage component state and side effects, which enabled dynamic and responsive behavior in the application.
* __Firebase__: Improved my understanding of Firebase, particularly in leveraging Firestore for real-time data storage and retrieval.
* __React-PDF__: Learned how to generate downloadable PDFs by rendering React components into printable formats using the React-PDF library.
* __HTML2Canvas & JSPDF__: Explored how to capture a snapshot of a DOM element using HTML2Canvas and export it as a PDF file with jsPDF, useful for creating visual exports of the CV layout.
## Challenges Faced

* __Learning to Build with Safety Nets__: One major lesson was the importance of having safeguards in my code—such as using fallback values and defensive checks—to avoid unexpected behavior. Without them, simple mistakes often led to frustrating bugs that were difficult to track down. This experience taught me to build more resilient and error-tolerant features.
* __Understanding useEffect__: While I grasped the basic concept of the useEffect hook, applying it correctly was tricky. At times, unexpected behaviors or re-renders caused confusing issues. Through trial and error, I eventually learned how to control side effects more predictably and troubleshoot common mistakes.
* __Lack of Reusability Planning__: Initially, I didn’t plan for component reusability, which led to repetitive code and frequent refactoring. This made the codebase cluttered and time-consuming to maintain. I’ve since learned the importance of thinking ahead—identifying reusable patterns early and organizing logic more efficiently to reduce future technical debt.


## Future Planning

* __Improve Live Preview Rendering__: Fix the issue where updates are not immediately reflected in the live preview and PDF view after clicking the save button.
* __Implement Drag-and-Drop Layout__: Add draggable sections to let users rearrange the résumé layout based on their preferences.

* __Add Sidebar Tooltips__: Display tooltips on sidebar icons for better user guidance and intuitive navigation.

* __Add Input Validation__: Enforce input limits and validation rules to maintain data consistency and prevent user errors.

* __Fix Firebase Document Handling__: Ensure that each user gets a unique Firestore document to avoid data overwriting across users.

* __Expand Résumé Sections__: Add more customizable sections such as projects, certifications, or interests to enhance résumé flexibility.

* __Add Example Data Option__: Provide a button that auto-fills the form with sample content to demonstrate how the résumé works.

* __Add Reset Functionality__: Include an option to reset all inputs and database entries so users can start from scratch.

* __Enhance Responsiveness__: Optimize the UI to provide a seamless experience across various screen sizes, including mobile, tablet, and desktop.

* __Refactor Redundant Code__: Clean and simplify repetitive code to improve readability, maintainability, and overall structure.

## Preview
![image](https://github.com/user-attachments/assets/c826c65c-844d-4715-ac60-fb75961577b0)
![image](https://github.com/user-attachments/assets/67aedd2d-add6-4154-ae1c-ce899f57c60a)
![image](https://github.com/user-attachments/assets/de007905-2c97-4d82-af1d-629e67e1c13c)
![image](https://github.com/user-attachments/assets/4385f5b6-1396-4351-ba22-2fe859584ea3)



