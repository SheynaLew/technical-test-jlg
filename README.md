# Career Path Test

## Implementation

- Pull the repo
- cd into the repo
- Run npm i
- Run npm run dev to run the dev environment locally.
- Add a user name to the url (e.g "http://localhost:5173/?user="jen")
- Adding a user name for a user who has already completed the test will display the completion card
- To display the test, replace this with a new user name.

## With More Time

- I did not have time for the back-scroll to view previous answers, but with more time I would add this, or consider using navigation arrows to allow the user to revisit answers during the test.
- I would make the app more responsive
  ** The Info Cards would either change size (including font) or layout, or would not be visible on mobile screens.
  ** The entire app would be responsive to a mobile screen (font size would be decreased, and widths of containers would be reduced. I'd also change the OpinionBar so that the radio-buttons are smaller, preventing them from becoming squashed together).
- I would have a styling variables file so that things like color are easily set and changed without the need to find every instance of the colour in the app.
- I would consider accessibilty
  ** The colour of the questions number is not accessible at the moment and could cause issues
  ** I'd look into the colour of the button and text on the button and determine how accessible that is. Depending on branding requirements, I would consider changing this.
  ** I'd reduce my use of divs and use semantic html more where possible.
  ** I'd use ARIA labelling where necessary
  \*\* I'd include alt text
- I would set font size in the index.css, rather than individually across multiple css files.
- I would include unit tests for each component, and end to end tests to ensure a smooth user experience and catch potential bugs before deployment.
- Ideally I would work using Storybook and Chromatic to build components
  ** This would allow me to keep a record of each component and other engineers would be able to reference this and re-use components easily.
  ** It would also enable testing of data between components.

## Component Structure and Planning

- See component-structure.png

## Additional Tech Used

- My OpinionsBar and ProgressBar were built using radixUI components.
- For anything more complex I would consider building a component from scratch, but these fit the purpose and saved time.

# Challenges and Considerations

- I chose to separate the app out into 3 files:
  ** pages - this contains only the page shown in the design, but with the idea that it would contain further pages as the app develops
  ** templates - this contains larger components, such as cards and headers, and could also include forms. The components in here are re-useable within pages.
  \*\* sharedComponents - this contains smaller components which can be re-used across pages and components and perform only smaller functions. Currently this only contains the BasicButton, but could contain other components. One thing I would change here is to move the OpinionBar and ProgressBar into this folder as currently the folder structure implies that they are only for use within the questionsCard.
- CareerPathTest component
  ** This is a page component.
  ** It is designed to do the majority of the heavily lifting when it comes to functionality. For example, it makes the calls to the api.js functions and loads the question and submission data prior to page load.
  ** I chose to create loading states on this page whilst waiting for the data to be returned as this creates a better experience for the user. I would consider adding an animated icon to these to help them visualise progress being made.
  ** With more time I would look into tidying the code up a little in this component (just layout of code).
  ** I would also improve the error states to give a clear message to the user if something has gone wrong.
  ** Data is passed from this component to the various components in the templates folder and to the BasicButton.
- CompletionCard component
  ** This component takes the date and viewResults props from the CareerPathTest component
  ** It's purpose is to display the date the test was completed and to allow the user to click a button to view their results
  \*\* The text for the button is determined by the component, whilst the call back function associated with the button is made in the CareerPathTest component (again, keeping functionality relating to the page in the page's component).
- Header component
  ** This component is designed to be useable in multiple page components
  ** The page passes it most of it's content, and the styling is taken care of by the component itself.
- InfoCard component
  \*\* The page passes it most of it's content, and the styling is taken care of by the component itself.
- QuestionCard component
  ** This component is designed to show each individual question, which is the questions data from the api.js, passed from the CareerPathTest component.
  ** Whilst this is likely only going to be used in the CareerPathTest component, I chose to separate it out to prevent the CareerPathTest component becoming too code heavy and less legible. It also makes it easier and neater to test components.
  \*\* The component incluedes the OpinionBar, which takes the questionsId and via the QuestionCard passes the radio button functionality back to the CareerPathTest component.
- OpinionBar component
  ** This consists of the RadioGroup component from the radixUI library.
  ** Again, this could be placed directly into the QuestionCard but I chose to separate it out for tidier code, and re-usability.
  ** Answers states are managed in useEffect - the idea being that the answer is blank initially, but when revisiting the question, the answer is maintained. I did not have time to finish this part.
  ** I used a timeout to allow the user to visualise their answer being accepted, before the next question and OpinionBar are shown. Without this, the next question is displayed immediately which could lead to a confusing user experience.
- ProgressBar component
  ** This consists of the Progress component from the radixUI library.
  ** I chose to separate this out to allow for consistency of styling across the (future) platform.
  \*\* The progress is passed to the component and translated into a percentage value with a pleasing user experience in the visualisation of the progress changing upon each question being completed.
- BasicButton
  ** The text, function and width of this button are passed as params, but colour and background color are set in the CSS to allow for consistency.
  ** I added width as a prop as some button text can be longer and would have become squashed in the standard button width set in the CSS.
